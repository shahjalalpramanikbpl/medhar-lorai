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
if (errors.length) { console.error(errors.slice(0, 50).join("\n")); process.exit(1); }
