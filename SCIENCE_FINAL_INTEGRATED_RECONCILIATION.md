# সাধারণ বিজ্ঞান — Final integrated reconciliation (প্রাথমিক কাঠামোগত পরীক্ষা)

তারিখ: ২৬ নভেম্বর ২০২৬  
অবস্থা: **REVALIDATION_COMPLETE_PENDING_SOURCE_AND_RUNTIME_INTEGRATION_CHECK_NOT_LOCKED**

## Scope
সম্পূর্ণ সাধারণ বিজ্ঞান master-এর ২৩১টি retained প্রশ্ন (Baseline ১৩০ + Expansion ১০১) একসঙ্গে পরীক্ষা করা হয়েছে। Exact duplicate signature: normalized category + normalized question stem + sorted complete four-option set + keyed answer।

## প্রথম ধাপের ফল
| পরীক্ষা | ফল |
|---|---:|
| Master record | 231 |
| Baseline | 0 |
| Expansion | 101 |
| Exact duplicate signature | 0 |
| Malformed record (ID/category/question/4 options/explanation অনুপস্থিত বা invalid) | 0 |
| Missing/invalid HTTP(S) source URL | 0 |
| Invalid answer index (0–3-এর বাইরে বা integer নয়) | 0 |

## ফলাফলের ব্যাখ্যা
- বর্তমান master-এ ২৩১টি প্রশ্নের মধ্যে exact duplicate signature পাওয়া যায়নি।
- প্রশ্নের ID, category, stem, চারটি option, explanation-এর গঠনগত উপস্থিতি এবং answer index-এর প্রথম ধাপের পরীক্ষা পাস করেছে।
- সব প্রশ্নে source URL field বৈধ HTTP(S) URL হিসেবে উপস্থিত।
- এই ফলাফল **শুধু master-এর structural scan**; source asset-এর সঙ্গে byte/content-level consistency এবং Android app/runtime loading এখনো পরীক্ষা করা হয়নি।
- Baseline-এর ১৩০টি substantive re-audit সম্পন্ন; Expansion-এর ১০১টি substantive re-audit checkpoint পূর্ববর্তী পৃথক প্রতিবেদনে সংরক্ষিত।

## এখনো বাকি — LOCK-এর আগে বাধ্যতামূলক
1. Baseline source asset `app/src/main/assets/job-prep-suite.js`-এর প্রশ্নসমূহ master-এর suite IDs, option sets, answers ও explanations-এর সঙ্গে মিলিয়ে দেখা।
2. Expansion source asset files (Batch ১–৫৫) থেকে retained science entries-এর সঙ্গে master reconciliation; আগেই বাদ দেওয়া duplicate ledger-ও সম্মিলিতভাবে যাচাই।
3. App code-এ assets load, JSON/JS parsing, category filtering, answer indexing, question selection ও quiz scoring path পর্যালোচনা।
4. প্রাসঙ্গিক automated tests/CI চালানো এবং ফলাফল বাস্তবে পরীক্ষা করা; CI না চললে স্পষ্টভাবে pending বলা।
5. কোনো mismatch, missing entry বা runtime error পাওয়া গেলে সংশোধন, report ও master/status update; এরপর পুনরায় যাচাই।

## সিদ্ধান্ত
**এখনই LOCK নয়।** প্রথম structural pass-এ duplicate/malformed/missing URL/invalid answer index শূন্য পাওয়া গেছে; কিন্তু source consistency এবং app/runtime integration না হওয়া পর্যন্ত চূড়ান্ত LOCK দেওয়া যাবে না।
