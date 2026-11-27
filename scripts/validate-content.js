// Validate the bundled Bengali question and knowledge banks before every APK build.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const source = fs.readFileSync("app/src/main/assets/content-bank.js", "utf8");
const window = {};
vm.runInNewContext(source, { window });
const bank = window.ML_CONTENT;
if (!bank || !Array.isArray(bank.questions) || !Array.isArray(bank.facts)) throw new Error("ML_CONTENT export or arrays are missing.");
const normalize = (v) => String(v ?? "").normalize("NFC").replace(/\s+/g, " ").trim().toLocaleLowerCase("bn");
const questionSignature = (x) => normalize(x.c) + "|" + normalize(x.q) + "|" + (x.o || []).map(normalize).sort().join("|") + "|" + normalize((x.o || [])[x.a]);
const errors = [];
const qKeys = new Set(), ids = new Set(), factKeys = new Set();
const difficulty = { "সহজ": 0, "মাঝারি": 0, "কঠিন": 0 };
const subjects = {};
for (let i = 0; i < bank.questions.length; i++) {
  const x = bank.questions[i];
  if (!x || !x.c || !x.q || !Array.isArray(x.o) || x.o.length !== 4 || !Number.isInteger(x.a) || x.a < 0 || x.a > 3 || !Object.prototype.hasOwnProperty.call(difficulty, x.d)) { errors.push("Question #" + (i+1) + ": invalid structure/difficulty/answer index"); continue; }
  const key = questionSignature(x);
  if (qKeys.has(key)) errors.push("Question #" + (i+1) + ": duplicate question text");
  qKeys.add(key);
  if (!x.id || ids.has(x.id)) errors.push("Question #" + (i+1) + ": missing or duplicate ID");
  ids.add(x.id);
  const opts = x.o.map(normalize);
  if (opts.some(v => !v) || new Set(opts).size !== 4) errors.push("Question #" + (i+1) + ": options are empty or repeated");
  difficulty[x.d]++; subjects[x.c] = (subjects[x.c] || 0) + 1;
}
for (let i = 0; i < bank.facts.length; i++) {
  const x = bank.facts[i];
  if (!Array.isArray(x) || x.length < 2 || !normalize(x[0]) || !normalize(x[1])) { errors.push("Fact #" + (i+1) + ": invalid/empty"); continue; }
  const key = normalize(x[0]) + "|" + normalize(x[1]);
  if (factKeys.has(key)) errors.push("Fact #" + (i+1) + ": duplicate fact");
  factKeys.add(key);
}
if (bank.questions.length < 1000) errors.push("Question bank has fewer than 1,000 questions.");
if (bank.facts.length < 1000) errors.push("Knowledge bank has fewer than 1,000 entries.");
console.log("Questions:", bank.questions.length, "| Facts:", bank.facts.length);
console.log("Difficulty:", JSON.stringify(difficulty));
console.log("Subjects:", JSON.stringify(subjects));
console.log("Validation:", errors.length ? "FAILED" : "PASSED");

const sandbox = {
  window: {},
  document: { readyState: "loading", addEventListener() {}, querySelector() { return null; }, getElementById() { return null; } },
  setTimeout() {},
  console,
  localStorage: { getItem() { return null; }, setItem() {} }
};
vm.runInNewContext(fs.readFileSync("app/src/main/assets/content-bank.js", "utf8"), sandbox);
vm.runInNewContext(fs.readFileSync("app/src/main/assets/math-levels.js", "utf8"), sandbox);
const jobSource = fs.readFileSync("app/src/main/assets/job-prep-suite.js", "utf8").replace("window.openJobPrep=()=>", "window.__pickJobPrepQuestions=pickQuestions;window.openJobPrep=()=>");
vm.runInNewContext(jobSource, sandbox);
// Load every job-preparation expansion in the same order as index.html so validation
// audits the actual release bank rather than only the base suite.
const assetDir = "app/src/main/assets";
const expansionFiles = fs.readdirSync(assetDir)
  .filter(name => /^job-prep-expansion(?:-\d{2})?\.js$/.test(name))
  .sort((a, b) => {
    const batch = name => name === "job-prep-expansion.js" ? 1 : Number(name.match(/-(\d{2})\.js$/)?.[1] || 0);
    return batch(a) - batch(b);
  });
for (const file of expansionFiles) {
  vm.runInNewContext(fs.readFileSync(path.join(assetDir, file), "utf8"), sandbox, { filename: file });
}
vm.runInNewContext(fs.readFileSync(path.join(assetDir, "job-prep-locked-masters.js"), "utf8"), sandbox, { filename: "job-prep-locked-masters.js" });
const math = sandbox.window.ML_MATH_BANK || [];
const mathAuditMaster = JSON.parse(fs.readFileSync("MATH_AUDIT_MASTER_BASELINE_300.json", "utf8"));
const mathReplacementIds = new Set(mathAuditMaster.replacementReview?.replacements || []);
const mathMasterById = new Map((mathAuditMaster.questions || []).map(q => [q.id, q]));
if (mathAuditMaster.status !== "LOCKED" || mathAuditMaster.questions?.length !== 300 || mathAuditMaster.questions.some(q => q.reviewStatus !== "FINAL_APPROVED")) errors.push("Math audit master is not fully locked/approved.");
if (mathReplacementIds.size !== 131 || mathAuditMaster.replacementReview?.remainingReversibleCandidates !== 0) errors.push("Math replacement ledger is incomplete.");
const levels = sandbox.window.ML_MATH_LEVELS || [];
const subjectBank = sandbox.window.JOB_PREP_BANK || [];
const exams = sandbox.window.JOB_PREP_EXAMS || [];
const mathUnique = new Set(math.map(x => normalize(x.q)));
const subjectNames = new Set(subjectBank.map(x => x.c).filter(name => name !== "গণিত" && name !== "Math"));
const englishGrammar = subjectBank.filter(x => x.c === "English");
const bengaliSubjectQuestions = subjectBank.filter(x => x.c === "বাংলা ভাষা ও সাহিত্য");
const bengaliExactKeys = new Set(bengaliSubjectQuestions.map(questionSignature));
const bengaliMalformed = bengaliSubjectQuestions.filter(x => !x.q || !Array.isArray(x.o) || x.o.length !== 4 || !Number.isInteger(x.a) || x.a < 0 || x.a > 3 || new Set(x.o.map(normalize)).size !== 4);
if (bengaliMalformed.length) errors.push("Bengali subject bank contains malformed questions: " + bengaliMalformed.length);
if (bengaliExactKeys.size !== bengaliSubjectQuestions.length) errors.push("Bengali subject bank contains exact duplicate questions.");
// Locked audited banks: do not alter the 406 Bengali or 463 English questions without an explicit new audit.
if (bengaliSubjectQuestions.length !== 406) errors.push("Locked Bengali subject bank must remain exactly 406 questions.");
if (englishGrammar.length !== 463) errors.push("Locked English grammar/vocabulary bank must remain exactly 463 questions.");
if (englishGrammar.length < 50) errors.push("English grammar/vocabulary bank must contain at least 50 questions.");
if (new Set(englishGrammar.map(questionSignature)).size !== englishGrammar.length) errors.push("English grammar/vocabulary bank contains exact duplicate questions.");
if (new Set(subjectBank.map(questionSignature)).size !== subjectBank.length) errors.push("Subject bank contains exact duplicate questions.");
if (subjectBank.length < 480 || subjectNames.size < 9) errors.push("Subject bank must contain at least 480 questions across 9 non-math sections.");
// All audited non-math sections must retain at least 125 questions; exact LOCKED counts are checked after quantitative classification.
for (const name of subjectNames) { const count = subjectBank.filter(x => x.c === name).length; if (count < 125) errors.push("Audited subject " + name + " has fewer than 125 questions: " + count + "."); }
if (math.length !== 300) errors.push("Release target: math must contain exactly 300 questions.");
console.log("Job-preparation questions:", subjectBank.length, "| English grammar/vocabulary:", englishGrammar.length);
const mathUiSource = fs.readFileSync("app/src/main/assets/math-levels.js", "utf8");
if (!mathUiSource.includes("const getNextLevel=") || !mathUiSource.includes("পরবর্তী লেভেল শুরু করুন")) errors.push("Math levels must use sequential progression instead of a level-button grid.");
const homeUiSource = fs.readFileSync("app/src/main/assets/index.html", "utf8");
if (!homeUiSource.includes("homeFeatured") || !homeUiSource.includes("job-prep-hero")) errors.push("Highlighted career-preparation home entry is missing.");
if (!homeUiSource.includes("enFresh") || !homeUiSource.includes("Math.min(3,10-selected.length)") || !homeUiSource.includes("q.c!=='গণিত'")) errors.push("Main quiz must reserve English questions and cap math share.");

if (math.length !== 300) errors.push("Math bank must contain exactly 300 questions.");
if (levels.length !== 30 || levels.some((x, i) => x.level !== i + 1 || x.questions.length !== 10)) errors.push("Math bank must contain 30 levels with exactly 10 questions each.");
if (mathUnique.size !== 300) errors.push("Math questions must be unique.");
if (new Set(math.map(x => x.topic)).size < 15) errors.push("Math bank must cover at least 15 topic families.");
for (let i = 0; i < math.length; i++) {
  const x = math[i];
  if (!x.id || !x.q || !Array.isArray(x.o) || x.o.length !== 4 || !Number.isInteger(x.a) || x.a < 0 || x.a > 3 || !x.e || !x.formula || !x.shortcut || !x.topic || !x.level) errors.push("Math question #" + (i+1) + ": missing answer, solution, formula, shortcut, topic or level.");
  if (x.o && x.o.length === 4 && new Set(x.o.map(normalize)).size !== 4) errors.push("Math question #" + (i+1) + ": repeated answer options.");
  if (x.expected !== undefined) { const answerNumber = Number(String(x.o[x.a]).replace(/[০-৯]/g, d => String("০১২৩৪৫৬৭৮৯".indexOf(d))).replace(/[^0-9.\-]/g, "")); if (answerNumber !== Number(x.expected)) errors.push("Math question #" + (i+1) + ": answer key does not match expected numeric answer."); } else errors.push("Math question #" + (i+1) + ": expected numeric answer is missing.");
}
// Independently recompute every generated math answer from its question wording.
const toAscii = s => String(s).replace(/[০-৯]/g, d => String("০১২৩৪৫৬৭৮৯".indexOf(d)));
const getNums = s => (toAscii(s).match(/\d+(?:\.\d+)?/g) || []).map(Number);
const gcdAudit = (a,b) => b ? gcdAudit(b,a%b) : a;
const isPrimeAudit = n => { if (n < 2) return false; for (let d=2; d*d<=n; d++) if (n%d===0) return false; return true; };
for (const x of math) {
  const lockedReplacement = mathReplacementIds.has(x.id) ? mathMasterById.get(x.id) : null;
  if (lockedReplacement) {
    const matchesMaster = x.q === lockedReplacement.q && JSON.stringify(x.o) === JSON.stringify(lockedReplacement.o) && x.a === lockedReplacement.a && Number(x.expected) === Number(lockedReplacement.expected) && x.e === lockedReplacement.e;
    if (!matchesMaster) errors.push("Math " + x.id + ": runtime differs from the individually audited locked master.");
    if (lockedReplacement.reviewStatus !== "FINAL_APPROVED" || lockedReplacement.finalApproval?.calculationAndKey?.startsWith("PASS") !== true) errors.push("Math " + x.id + ": replacement lacks final approval evidence.");
    continue;
  }
  const s=x.q, n=getNums(s); let expected=null;
  switch (x.topic) {
    case "শতকরা": if(n.length>=2) expected=n[0]*n[1]/100; break;
    case "লাভ-ক্ষতি ও ছাড়": if(n.length>=2) expected=n[0]*(s.includes("লাভে")?100+n[1]:100-n[1])/100; break;
    case "অনুপাত-সমানুপাত": { const m=toAscii(s).match(/অনুপাত (\d+):(\d+) এবং যোগফল (\d+)/); if(m) expected=+m[3]*+m[2]/(+m[1]+ +m[2]); break; }
    case "গড়": if(n.length>=2) expected=n[0]*n[1]; break;
    case "সরল ও চক্রবৃদ্ধি সুদ": if(n.length>=3) expected=s.includes("চক্রবৃদ্ধি")?n[0]*Math.pow(1+n[1]/100,n[2])-n[0]:n[0]*n[1]*n[2]/100; break;
    case "ঐকিক নিয়ম": if(n.length>=2) expected=n[0]*n[1]; break;
    case "সময় ও কাজ": if(n.length>=2) expected=n.length>=3 && s.includes("যথাক্রমে")?1/(1/n[0]+1/n[1]+1/n[2]):n[0]*n[1]/(n[0]+n[1]); break;
    case "সময়-দূরত্ব": if(s.includes("ট্রেন")) expected=(n[0]+n[1])/n[2]; else if(s.includes("উজানে")) expected=(n[0]-n[1])*n[2]; else expected=n[0]*n[1]; break;
    case "বয়স": if(n.length>=2) expected=n[0]/(n[1]+1); break;
    case "বীজগণিত": if(n.length>=3) expected=(n[2]-n[1])/n[0]; break;
    case "ল.সা.গু ও গ.সা.গু":
      if(s.includes("পরের ক্ষুদ্রতম মৌলিক")) { const start=n[0]; let p=start+1; while(!isPrimeAudit(p)) p++; expected=p; }
      else if(n.length>=2) expected=s.includes("ল.সা.গু")?n[0]*n[1]/gcdAudit(n[0],n[1]):gcdAudit(n[0],n[1]);
      break;
    case "জ্যামিতি ও ক্ষেত্রফল": if(s.includes("ঘনকের")) expected=n[0]**3; else if(s.includes("ত্রিভুজের")) expected=n[0]*n[1]/2; else if(s.includes("আয়তক্ষেত্রের")) expected=n[0]*n[1]; break;
    case "ধারা": if(n.length>=3) expected=n[0]+(n[2]-1)*n[1]; break;
    case "মিশ্রণ": if(n.length>=4) expected=(n[0]*n[1]+n[2]*n[3])/(n[0]+n[2]); break;
    case "পরিমিতি": { const m=toAscii(s).match(/ব্যাসার্ধ (\d+)/); if(m) expected=2*22/7*(+m[1]); break; }
    case "ছাড় ও মূল্য নির্ণয়": if(n.length>=2) expected=n[0]*(100-n[1])/100; break;
  }
  if(expected===null || !Number.isFinite(expected)) errors.push("Math "+x.id+": could not independently verify question wording.");
  else if(Math.abs(expected-Number(x.expected))>0.011) errors.push("Math "+x.id+": independently calculated answer "+expected+" differs from expected "+x.expected+".");
}

const literature = subjectBank.filter(x => x.c === "English Literature");
if (literature.length < 150) errors.push("English Literature must contain at least 150 dedicated questions for Version 2.8.");
for (const name of subjectNames) if (subjectBank.filter(x => x.c === name).length < 10) errors.push("Subject " + name + " has fewer than 10 practice questions.");
for (let i = 0; i < subjectBank.length; i++) {
  const x = subjectBank[i];
  if (!x.q || !Array.isArray(x.o) || x.o.length !== 4 || !Number.isInteger(x.a) || x.a < 0 || x.a > 3 || !x.e) errors.push("Subject question #" + (i+1) + ": invalid structure or explanation.");
}
if (exams.length !== 5 || new Set(exams.map(x => x.id)).size !== 5) errors.push("Exactly five distinct job model tests are required.");
for (const x of exams) {
  try {
    const picked = sandbox.window.__pickJobPrepQuestions(x);
    if (picked.length !== 20 || new Set(picked.map(questionSignature)).size !== 20) errors.push("Model test " + x.id + ": runtime selection did not produce 20 unique questions.");
  } catch (e) { errors.push("Model test " + x.id + ": runtime selection failed: " + e.message); }
  const count = Object.values(x.dist || {}).reduce((a, b) => a + b, 0);
  if (count !== 20 || !x.minutes || x.minutes < 1 || x.negative < 0) errors.push("Model test " + x.id + ": invalid question count, time limit or marking scheme.");
  for (const [category, required] of Object.entries(x.dist || {})) {
    const available = category === "গণিত" ? math.length : subjectBank.filter(q => q.c === category).length;
    if (available < required) errors.push("Model test " + x.id + ": category " + category + " needs " + required + " questions but only " + available + " exist.");
  }
}
const current = subjectBank.filter(x => x.c === "সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান" && /২০২৬/.test(x.q || ""));
const currentMissing = current.filter(x => {
  const sourceDate = x.sourceDate || (/^20\d{2}-\d{2}-\d{2}$/.test(x.d || "") ? x.d : "") || (/^20\d{2}-\d{2}-\d{2}$/.test(x.difficulty || "") ? x.difficulty : "");
  return !x.source || !x.sourceUrl || !/^20\d{2}-\d{2}-\d{2}$/.test(sourceDate);
});
if (current.length < 5 || currentMissing.length) { console.error("Current affairs missing metadata:", JSON.stringify(currentMissing.map(x => ({ id: x.id, q: x.q, source: x.source, sourceUrl: x.sourceUrl, sourceDate: x.sourceDate || x.d || x.difficulty })))); errors.push("2026 current-affairs questions need a source URL and valid source date."); }
if (sandbox.window.JOB_PREP_CURRENT_AFFAIRS_UPDATED !== "2026-11-27") errors.push("Current affairs update date is missing or stale.");
// Semantic regression checks for previously reported math-content errors.
const averageExample = math.find(x => x.level === 1 && x.q.includes("৭টি সংখ্যার গড় ১২"));
if (!averageExample || Number(averageExample.expected) !== 84 || Number(String(averageExample.o[averageExample.a]).replace(/[০-৯]/g, d => String("০১২৩৪৫৬৭৮৯".indexOf(d)))) !== 84) errors.push("Math level 1: average of 7 numbers with mean 12 must equal 84 and be present as the keyed option.");
if (math.some(x => x.q.includes("ক একজন"))) errors.push("Math bank: malformed wording 'ক একজন' must be corrected.");
console.log("Math questions:", math.length, "| Levels:", levels.length, "| Subject questions:", subjectBank.length, "| Model tests:", exams.length);
console.log("Bengali subject questions:", bengaliSubjectQuestions.length, "| Bengali malformed:", bengaliMalformed.length, "| Bengali exact duplicates:", bengaliSubjectQuestions.length - bengaliExactKeys.size);


const homeButtonCheck = fs.readFileSync("app/src/main/assets/index.html", "utf8");
if (!homeButtonCheck.includes("কুইজ খেলা শুরু করুন")) errors.push("Main quiz start button must use the requested Bengali label.");
if (!homeButtonCheck.includes("appPresence") || !homeButtonCheck.includes("showUsageStats") || !homeButtonCheck.includes("presenceTimer")) errors.push("Authenticated live-presence tracking and admin usage analytics are missing.");
const rulesCheck = fs.readFileSync("firestore.rules", "utf8");
if (!rulesCheck.includes("match /appPresence/{uid}") || !rulesCheck.includes("request.auth.uid == 'TIEU9BdlVFcj2LzwoGKI2BOd2tR2'")) errors.push("Firestore presence rules must restrict cross-user reads to the app owner.");

// Verify the IQ-to-quantitative runtime classification after every expansion has loaded.
if (typeof sandbox.window.JOB_PREP_APPLY_QUANTITATIVE !== "function" || !Array.isArray(sandbox.window.JOB_PREP_QUANTITATIVE_RECORDS)) errors.push("Quantitative classification data/hook is missing.");
else {
  // Apply the same exact question + normalized option-set matching as the app,
  // without invoking a VM-created closure from the outer Node context.
  const quantitativeKey = x => normalize(x.q) + "|" + (x.o || []).map(normalize).sort().join("|") + "|" + normalize((x.o || [])[x.a]);
  const quantitativeKeys = new Set(sandbox.window.JOB_PREP_QUANTITATIVE_RECORDS.map(quantitativeKey));
  for (const x of subjectBank) if (x.c === "মানসিক দক্ষতা ও IQ" && quantitativeKeys.has(quantitativeKey(x))) x.c = "পরিমাণগত দক্ষতা অনুশীলন";
  const movedQuantitative = subjectBank.filter(x => x.c === "পরিমাণগত দক্ষতা অনুশীলন").length;
  const retainedIq = subjectBank.filter(x => x.c === "মানসিক দক্ষতা ও IQ").length;
  if (movedQuantitative !== 188) errors.push("Quantitative practice must contain exactly 188 reviewed questions (144 IQ + 44 reasoning); found " + movedQuantitative + ".");
  if (retainedIq !== 157) errors.push("Mental Ability & IQ must retain exactly 157 reviewed IQ questions; found " + retainedIq + ".");
  if (math.length !== 300 || levels.length !== 30) errors.push("Quantitative migration must not alter the locked 300-question/30-level Math core.");
  console.log("Quantitative practice:", movedQuantitative, "| IQ retained:", retainedIq, "(final classified master: 188 quantitative + 157 IQ) | Math core:", math.length, "/", levels.length);
  console.log("Final subject breakdown:", JSON.stringify(Object.fromEntries([...new Set(subjectBank.map(x => x.c))].sort().map(name => [name, subjectBank.filter(x => x.c === name).length]))));
  const lockedCounts = {
    "বাংলা ভাষা ও সাহিত্য": 406,
    "English": 463,
    "বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান": 236,
    "সাধারণ বিজ্ঞান": 248,
    "কম্পিউটার ও ICT": 189,
    "মানসিক দক্ষতা ও IQ": 157,
    "English Literature": 285,
    "যুক্তি ও বিশ্লেষণ": 252,
    "সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান": 125,
    "পরিমাণগত দক্ষতা অনুশীলন": 188
  };
  for (const [name, expected] of Object.entries(lockedCounts)) {
    const actual = subjectBank.filter(x => x.c === name).length;
    if (actual !== expected) errors.push("LOCKED subject " + name + " must contain " + expected + " questions; found " + actual + ".");
  }
  if (subjectBank.length !== 2549) errors.push("Audited non-math runtime bank must contain exactly 2,549 records; found " + subjectBank.length + ".");
  console.log("Locked non-math master total:", subjectBank.length, "| Math levels:", math.length, "| Combined content:", subjectBank.length + math.length);
}
if (errors.length) { console.error(errors.slice(0, 50).join("\n")); process.exit(1); }
