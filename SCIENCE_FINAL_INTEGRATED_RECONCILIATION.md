# সাধারণ বিজ্ঞান — Final integrated reconciliation (source-aware revision)

তারিখ: ২৬ নভেম্বর ২০২৬  
অবস্থা: **CONTENT_REAUDIT_COMPLETE_PENDING_FINAL_DEVICE_RUNTIME_SMOKE_TEST_NOT_LOCKED**

## Scope
আগের master-এর ২৩১টি record-এর সঙ্গে baseline source asset পুনর্মিলিয়ে ১৭টি অতিরিক্ত active baseline source variant পাওয়া যায়। এগুলো যাচাই করে master-এ যোগ করা হয়েছে। বর্তমান master: Baseline ১৪৭ + Expansion ১০১ = **২৪৮টি** record।

## Structural results
| পরীক্ষা | ফল |
|---|---:|
| Master record | 248 |
| Baseline records | 147 |
| Expansion retained records | 101 |
| Exact duplicate signature | 0 |
| Malformed records | 0 |
| Missing/invalid HTTP(S) source URL | 0 |
| Invalid answer index | 0 |

## Baseline source reconciliation
- `app/src/main/assets/job-prep-suite.js`-এ ১৫০টি সাধারণ বিজ্ঞান Q() entry শনাক্ত।
- ১৩৩টি entry-এর পূর্ণ exact signature আগের master-এর record-এ আগে থেকেই ছিল।
- ১৭টি active entry আগের master-এ ছিল না: ১৪টি নতুন stem এবং ৩টি same-stem/different-option variants। ১৭টিই fact-check করে `suite_131`–`suite_147` হিসেবে master-এ যোগ করা হয়েছে।
- ১৭টির মধ্যে exact duplicate ০; all four options, keyed answer ও explanation checked।
- Baseline source-এর ৬টি conceptual/stem overlap expansion records-এর সঙ্গে পৃথকভাবে বিবেচিত; strict signature policy বজায় রাখা হয়েছে।

## Expansion source reconciliation
- Batch ১–৫৫ source assets-এ ১০২টি science candidate পাওয়া যায়।
- ১০১টি retained science record master-এ আছে; একটি পূর্ববর্তী exact duplicate copy duplicate ledger-এ নথিভুক্ত।
- সাতটি explanation source/master mismatch পাওয়া গিয়েছিল; audited master explanation অনুযায়ী সংশ্লিষ্ট source asset-এ synchronize করা হয়েছে।
- Source update করা batch files: ২৭, ৩০, ৩২, ৪০, ৪৬, ৪৭।
- Baseline ও expansion-এর master records-এ full-set exact duplicate signature শূন্য।

## App/runtime review
- `index.html`-এ content-bank, career-prep, math-levels, job-prep-suite, expansion batch ১–৫৬ এবং Firebase config script order দেখা হয়েছে।
- Batch ১–৩২ আগে `JOB_PREP_BANK`-এ append করে; batch ৩৩+ `EXTRA_JOB_QUESTIONS`-এ append করে; inline merge step `JOB_PREP_QUESTION_KEY` ব্যবহার করে full signature ও ID দিয়ে duplicate এড়ায়।
- `job-prep-suite.js`-এ `JOB_PREP_QUESTION_KEY` normalized category, question, sorted complete options ও keyed answer দিয়ে তৈরি।
- Android workflow-এ `validate-content.js`, `validate-regression-safety.js`, `validate-release-ui.js` চলে। সর্বশেষ source synchronization commit-এর CI run success হয়েছে।
- বাস্তব Android device/emulator-এ হাতে চালিয়ে UI/quiz round smoke test করা হয়নি।

## Final decision
Content fact-check, duplicate reconciliation, source asset sync, structural checks এবং automated CI validation সম্পন্ন। তবে বাস্তব device runtime smoke test বাকি। তাই status **NOT LOCKED** থাকবে; smoke test ছাড়া LOCK দেওয়া হবে না।

বিস্তারিত source reconciliation: `SCIENCE_BASELINE_SOURCE_RECONCILIATION_131_147.md`।
