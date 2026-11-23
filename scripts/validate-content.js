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
vm.runInNewContext(fs.readFileSync("app/src/main/assets/job-prep-suite.js", "utf8"), sandbox);
const math = sandbox.window.ML_MATH_BANK || [];
const levels = sandbox.window.ML_MATH_LEVELS || [];
const subjectBank = sandbox.window.JOB_PREP_BANK || [];
const exams = sandbox.window.JOB_PREP_EXAMS || [];
const mathUnique = new Set(math.map(x => normalize(x.q)));
const subjectNames = new Set(subjectBank.map(x => x.c));
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
if (subjectBank.length !== 110 || subjectNames.size !== 9) errors.push("Subject bank must contain 110 questions across 9 non-math sections, including English Literature.");
for (const name of subjectNames) if (subjectBank.filter(x => x.c === name).length < 10) errors.push("Subject " + name + " has fewer than 10 practice questions.");
for (let i = 0; i < subjectBank.length; i++) {
  const x = subjectBank[i];
  if (!x.q || !Array.isArray(x.o) || x.o.length !== 4 || !Number.isInteger(x.a) || x.a < 0 || x.a > 3 || !x.e) errors.push("Subject question #" + (i+1) + ": invalid structure or explanation.");
}
if (exams.length !== 5 || new Set(exams.map(x => x.id)).size !== 5) errors.push("Exactly five distinct job model tests are required.");
for (const x of exams) {
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
console.log("Math questions:", math.length, "| Levels:", levels.length, "| Subject questions:", subjectBank.length, "| Model tests:", exams.length);

if (errors.length) { console.error(errors.slice(0, 50).join("\n")); process.exit(1); }
