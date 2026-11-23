// Validate the bundled Bengali question and knowledge banks before every APK build.
const fs = require("node:fs");
const vm = require("node:vm");
const source = fs.readFileSync("app/src/main/assets/content-bank.js", "utf8");
const window = {};
vm.runInNewContext(source, { window });
const bank = window.ML_CONTENT;
if (!bank || !Array.isArray(bank.questions) || !Array.isArray(bank.facts)) throw new Error("ML_CONTENT export or arrays are missing.");
const normalize = (v) => String(v ?? "").normalize("NFC").replace(/\s+/g, " ").trim().toLocaleLowerCase("bn");
const errors = [];
const qKeys = new Set(), ids = new Set(), factKeys = new Set();
const difficulty = { "সহজ": 0, "মাঝারি": 0, "কঠিন": 0 };
const subjects = {};
for (let i = 0; i < bank.questions.length; i++) {
  const x = bank.questions[i];
  if (!x || !x.c || !x.q || !Array.isArray(x.o) || x.o.length !== 4 || !Number.isInteger(x.a) || x.a < 0 || x.a > 3 || !Object.prototype.hasOwnProperty.call(difficulty, x.d)) { errors.push("Question #" + (i+1) + ": invalid structure/difficulty/answer index"); continue; }
  const key = normalize(x.c) + "|" + normalize(x.q);
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
console.log("Job-preparation questions:", subjectBank.length, "| English grammar/vocabulary:", englishGrammar.length);
console.log("Subjects:", JSON.stringify(subjects));
console.log("Validation:", errors.length ? "FAILED" : "PASSED");

const sandbox = {
  window: {},
  document: { readyState: "loading", addEventListener() {}, querySelector() { return null; }, getElementById() { return null; } },
  setTimeout() {},
  console,
  localStorage: { getItem() { return null; }, setItem() {} }
};
vm.runInNewContext(fs.readFileSync("app/src/main/assets/math-levels.js", "utf8"), sandbox);
const jobSource = fs.readFileSync("app/src/main/assets/job-prep-suite.js", "utf8").replace("window.openJobPrep=()=>", "window.__pickJobPrepQuestions=pickQuestions;window.openJobPrep=()=>");
vm.runInNewContext(jobSource, sandbox);
const math = sandbox.window.ML_MATH_BANK || [];
const levels = sandbox.window.ML_MATH_LEVELS || [];
const subjectBank = sandbox.window.JOB_PREP_BANK || [];
const exams = sandbox.window.JOB_PREP_EXAMS || [];
const mathUnique = new Set(math.map(x => normalize(x.q)));
const subjectNames = new Set(subjectBank.map(x => x.c));
const englishGrammar = subjectBank.filter(x => x.c === "English");
if (englishGrammar.length < 50) errors.push("English grammar/vocabulary bank must contain at least 50 questions.");
if (new Set(englishGrammar.map(x => normalize(x.q))).size !== englishGrammar.length) errors.push("English grammar/vocabulary bank contains duplicate questions.");
const mathUiSource = fs.readFileSync("app/src/main/assets/math-levels.js", "utf8");
if (!mathUiSource.includes("const getNextLevel=") || !mathUiSource.includes("পরবর্তী লেভেল শুরু করুন")) errors.push("Math levels must use sequential progression instead of a level-button grid.");
const homeUiSource = fs.readFileSync("app/src/main/assets/index.html", "utf8");
if (!homeUiSource.includes("homeFeatured") || !homeUiSource.includes("job-prep-hero")) errors.push("Highlighted career-preparation home entry is missing.");
if (!homeUiSource.includes("enFresh") || !homeUiSource.includes("Math")) errors.push("Main quiz must reserve English questions and cap math share.");

if (math.length !== 300) errors.push("Math bank must contain exactly 300 questions.");
if (levels.length !== 30 || levels.some((x, i) => x.level !== i + 1 || x.questions.length !== 10)) errors.push("Math bank must contain 30 levels with exactly 10 questions each.");
if (mathUnique.size !== 300) errors.push("Math questions must be unique.");
if (new Set(math.map(x => x.topic)).size < 15) errors.push("Math bank must cover at least 15 topic families.");
for (let i = 0; i < math.length; i++) {
  const x = math[i];
  if (!x.id || !x.q || !Array.isArray(x.o) || x.o.length !== 4 || !Number.isInteger(x.a) || x.a < 0 || x.a > 3 || !x.e || !x.formula || !x.shortcut || !x.topic || !x.level) errors.push("Math question #" + (i+1) + ": missing answer, solution, formula, shortcut, topic or level.");
  if (x.o && x.o.length === 4 && new Set(x.o.map(normalize)).size !== 4) errors.push("Math question #" + (i+1) + ": repeated answer options.");
  if (x.expected !== undefined) { const answerNumber = Number(String(x.o[x.a]).replace(/[০-৯]/g, d => String("০১২৩৪৫৬৭৮৯".indexOf(d)))); if (answerNumber !== Number(x.expected)) errors.push("Math question #" + (i+1) + ": answer key does not match expected numeric answer."); } else errors.push("Math question #" + (i+1) + ": expected numeric answer is missing.");
}
// Independently recompute every generated math answer from its question wording.
const toAscii = s => String(s).replace(/[০-৯]/g, d => String("০১২৩৪৫৬৭৮৯".indexOf(d)));
const getNums = s => (toAscii(s).match(/\d+(?:\.\d+)?/g) || []).map(Number);
const gcdAudit = (a,b) => b ? gcdAudit(b,a%b) : a;
const isPrimeAudit = n => { if (n < 2) return false; for (let d=2; d*d<=n; d++) if (n%d===0) return false; return true; };
for (const x of math) {
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
if (subjectBank.length !== 110 || subjectNames.size !== 9) errors.push("Subject bank must contain 110 questions across 9 non-math sections, including English Literature.");
const literature = subjectBank.filter(x => x.c === "English Literature");
if (literature.length !== 30) errors.push("English Literature must contain exactly 30 dedicated questions.");
for (const name of subjectNames) if (subjectBank.filter(x => x.c === name).length < 10) errors.push("Subject " + name + " has fewer than 10 practice questions.");
for (let i = 0; i < subjectBank.length; i++) {
  const x = subjectBank[i];
  if (!x.q || !Array.isArray(x.o) || x.o.length !== 4 || !Number.isInteger(x.a) || x.a < 0 || x.a > 3 || !x.e) errors.push("Subject question #" + (i+1) + ": invalid structure or explanation.");
}
if (exams.length !== 5 || new Set(exams.map(x => x.id)).size !== 5) errors.push("Exactly five distinct job model tests are required.");
for (const x of exams) {
  try {
    const picked = sandbox.window.__pickJobPrepQuestions(x);
    if (picked.length !== 20 || new Set(picked.map(q => q.q)).size !== 20) errors.push("Model test " + x.id + ": runtime selection did not produce 20 unique questions.");
  } catch (e) { errors.push("Model test " + x.id + ": runtime selection failed: " + e.message); }
  const count = Object.values(x.dist || {}).reduce((a, b) => a + b, 0);
  if (count !== 20 || !x.minutes || x.minutes < 1 || x.negative < 0) errors.push("Model test " + x.id + ": invalid question count, time limit or marking scheme.");
  for (const [category, required] of Object.entries(x.dist || {})) {
    const available = category === "গণিত" ? math.length : subjectBank.filter(q => q.c === category).length;
    if (available < required) errors.push("Model test " + x.id + ": category " + category + " needs " + required + " questions but only " + available + " exist.");
  }
}
const current = subjectBank.filter(x => x.c === "সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান");
if (current.length !== 10 || current.some(x => !x.source || !x.sourceUrl)) errors.push("Current affairs questions need dated source labels.");
if (sandbox.window.JOB_PREP_CURRENT_AFFAIRS_UPDATED !== "2026-11-23") errors.push("Current affairs update date is missing or stale.");
// Semantic regression checks for previously reported math-content errors.
const averageExample = math.find(x => x.level === 1 && x.q.includes("৭টি সংখ্যার গড় ১২"));
if (!averageExample || Number(averageExample.expected) !== 84 || Number(String(averageExample.o[averageExample.a]).replace(/[০-৯]/g, d => String("০১২৩৪৫৬৭৮৯".indexOf(d)))) !== 84) errors.push("Math level 1: average of 7 numbers with mean 12 must equal 84 and be present as the keyed option.");
if (math.some(x => x.q.includes("ক একজন"))) errors.push("Math bank: malformed wording 'ক একজন' must be corrected.");
console.log("Math questions:", math.length, "| Levels:", levels.length, "| Subject questions:", subjectBank.length, "| Model tests:", exams.length);

if (errors.length) { console.error(errors.slice(0, 50).join("\n")); process.exit(1); }
