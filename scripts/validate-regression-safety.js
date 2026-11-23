#!/usr/bin/env node
'use strict';
// Static regression guard: protects legacy app storage/features and Firebase authorization.
const fs = require('node:fs');
const cp = require('node:child_process');
const path = require('node:path');
const read = p => fs.readFileSync(path.join(process.cwd(), p), 'utf8');
const fail = [];
const check = (ok, message) => { if (!ok) fail.push(message); };
const indexPath = 'app/src/main/assets/index.html';
const contentPath = 'app/src/main/assets/content-bank.js';
const rulesPath = 'firestore.rules';
const index = read(indexPath);
const content = read(contentPath);
const math = read('app/src/main/assets/math-levels.js');
const job = read('app/src/main/assets/job-prep-suite.js');
const rules = read(rulesPath);

// Legacy app state must remain present and untouched by the new learning modules.
const legacyKeys = ['ml_points','ml_lang','ml_level','ml_questions','ml_seen_questions','ml_progress','ml_profile','ml_badges','ml_iq_seen'];
for (const key of legacyKeys) check(index.includes(key), 'Legacy storage key missing from original app: ' + key);
for (const key of legacyKeys) {
  check(!math.includes(key), 'Math module must not write legacy key: ' + key);
  check(!job.includes(key), 'Job-prep module must not write legacy key: ' + key);
}
check(math.includes("const PROGRESS_KEY='ml_math_level_progress'"), 'Math progress must use its isolated storage key.');
check(job.includes("const HISTORY_KEY='ml_job_exam_history'"), 'Job exam history must use its isolated storage key.');

// Protect core legacy flows from accidental removal.
for (const marker of ['function start()', 'function persist()', 'function updateHome()', 'function openDaily()', 'function openVault()', 'function openIq()', 'function openWord()', 'certificateHomeBack', 'publishCentralQuestionBank', 'showCloudLeaderboard']) {
  check(index.includes(marker), 'Legacy app feature/hook missing: ' + marker);
}
check(index.includes("read('ml_questions',defaults)"), 'Legacy question-bank loading path changed.');
check(index.includes("localStorage.getItem('ml_points')"), 'Legacy score loading path changed.');
check(content.includes('window.ML_CONTENT={questions,daily,iq,words,facts}'), 'Original content bank export missing.');

// Firebase rules must remain byte-identical to main unless separately reviewed.
try {
  const baseRules = cp.execFileSync('git', ['show', 'origin/main:' + rulesPath], {encoding:'utf8'});
  check(baseRules === rules, 'firestore.rules differs from origin/main; require a separate security review.');
} catch (e) {
  fail.push('Could not compare Firestore rules with origin/main: ' + e.message);
}

// Security invariants: no public writes; users can only touch their own private data.
check(/allow read:\\s*if true;[\\s\\S]*?allow create:[\\s\\S]*?request\\.auth\\.uid == uid/.test(rules), 'Leaderboard owner-only create rule missing.');
check(/allow delete:\\s*if false;/.test(rules), 'Leaderboard delete must remain denied.');
check(/allow create, update, delete:[\\s\\S]*?request\\.auth\\.uid == 'TIEU9BdlVFcj2LzwoGKI2BOd2tR2'/.test(rules), 'Public question-bank publisher UID restriction missing.');
check(/match \/users\\/{uid}[\\s\\S]*?allow read, write:\\s*if request\\.auth != null && request\\.auth\\.uid == uid/.test(rules), 'Private user documents must remain owner-only.');
check(/match \/questionBank\\/{documentId}[\\s\\S]*?allow read, write:\\s*if request\\.auth != null && request\\.auth\\.uid == uid/.test(rules), 'Private question-bank backups must remain owner-only.');

if (fail.length) {
  console.error('Regression safety checks FAILED:');
  for (const item of fail) console.error(' - ' + item);
  process.exit(1);
}
console.log('Regression safety checks passed: legacy storage/features present, new storage isolated, content bank retained, Firestore rules unchanged and owner-restricted.');
