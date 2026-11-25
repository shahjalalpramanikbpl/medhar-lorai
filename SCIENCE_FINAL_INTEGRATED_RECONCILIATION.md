# সাধারণ বিজ্ঞান — Final integrated reconciliation (source-aware revision)

তারিখ: ২৬ নভেম্বর ২০২৬  
অবস্থা: **CONTENT_REAUDIT_COMPLETE_PENDING_PHYSICAL_DEVICE_RUNTIME_SMOKE_TEST_NOT_LOCKED**

## Scope
Baseline ও expansion source assets পুনর্মিলিয়ে ১৭টি অতিরিক্ত active baseline source variant পাওয়া যায়। এগুলো যাচাই করে master-এ যোগ করা হয়েছে। বর্তমান master: Baseline ১৪৭ + Expansion ১০১ = **২৪৮টি** record।

## Structural results
| পরীক্ষা | ফল |
|---|---:|
| Master record | 248 |
| Baseline master records | 147 |
| Expansion retained records | 101 |
| Exact duplicate signature | 0 |
| Malformed records | 0 |
| Missing/invalid HTTP(S) source URL | 0 |
| Invalid answer index | 0 |

## Baseline source reconciliation
- `app/src/main/assets/job-prep-suite.js`-এ ১৫০টি সাধারণ বিজ্ঞান Q() entry শনাক্ত।
- ১৫০/১৫০ entry-এর category, question stem, চারটি option, keyed answer ও explanation এখন master-এর সঙ্গে মেলে।
- প্রথম তুলনায় ১৩৩টি entry পূর্ণ exact signature-এ আগের master-এ ছিল; বাকি ১৭টি active variant (১৪টি নতুন stem + ৩টি same-stem/different-option) fact-check করে `suite_131`–`suite_147` হিসেবে master-এ যোগ করা হয়েছে।
- Source-to-master reconciliation-এ ১১টি baseline explanation mismatch পাওয়া গিয়েছিল; audited master-এর ব্যাখ্যা অনুযায়ী source-এ synchronize করা হয়েছে।
- Baseline Q() source-এর সব record-এ sourceUrl field নেই; authoritative source URL audit master-এ সংরক্ষিত। এটি runtime quiz field নয়।

## Expansion source reconciliation
- Batch ১–৫৫ source assets-এ ১০২টি science candidate পাওয়া যায়।
- ১০১টি retained science record master-এ আছে; একটি পূর্ববর্তী exact duplicate copy duplicate ledger-এ নথিভুক্ত।
- সাতটি explanation source/master mismatch পাওয়া গিয়েছিল; audited master explanation অনুযায়ী সংশ্লিষ্ট source asset-এ synchronize করা হয়েছে।
- Source update করা expansion batch files: ২৭, ৩০, ৩২, ৪০, ৪৬, ৪৭।
- ১০১/১০১ retained expansion records-এর category, stem, options, answer ও explanation source/master match যাচাই করা হয়েছে।

## App/runtime review
- `index.html`-এ content-bank, career-prep, math-levels, job-prep-suite, expansion batch ১–৫৬ এবং Firebase config script order দেখা হয়েছে।
- Batch ১–৩২ আগে `JOB_PREP_BANK`-এ append করে; batch ৩৩+ `EXTRA_JOB_QUESTIONS`-এ append করে; inline merge step `JOB_PREP_QUESTION_KEY` ব্যবহার করে full signature ও ID দিয়ে duplicate এড়ায়।
- `job-prep-suite.js`-এ `JOB_PREP_QUESTION_KEY` normalized category, question, sorted complete options ও keyed answer দিয়ে তৈরি।
- সর্বশেষ Android CI run success: question/model-test bank validation, legacy/Firebase regression safety এবং release UI/launcher smoke checks—সবগুলো success।
- বাস্তব Android device/emulator-এ হাতে চালিয়ে UI ও quiz round smoke test করা হয়নি।

## Final decision
Content fact-check, source reconciliation, duplicate reconciliation, structural checks এবং automated CI validation সম্পন্ন। Physical device/emulator runtime smoke test বাকি। তাই status **NOT LOCKED** থাকবে; smoke test ছাড়া LOCK দেওয়া হবে না।

বিস্তারিত source reconciliation: `SCIENCE_BASELINE_SOURCE_RECONCILIATION_131_147.md`।
