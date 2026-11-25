# সাধারণ বিজ্ঞান — Final integrated reconciliation (source-aware revision)

তারিখ: ২৬ নভেম্বর ২০২৬  
অবস্থা: **LOCKED_CONTENT_AUDIT_SOURCE_RECONCILED_CI_VALIDATED_DEVICE_SMOKE_PENDING**

## Scope
Baseline ও expansion source assets পুনর্মিলিয়ে ১৭টি অতিরিক্ত active baseline source variant যাচাই করে master-এ যোগ করা হয়েছে। বর্তমান master: Baseline ১৪৭ + Expansion ১০১ = **২৪৮টি** record।

## Structural results
| পরীক্ষা | ফল |
|---|---:|
| Master record | 248 |
| Baseline master records | 147 |
| Expansion retained records | 101 |
| Full-set exact duplicate signature | 0 |
| Malformed records | 0 |
| Missing/invalid HTTP(S) source URL | 0 |
| Invalid answer index | 0 |

## Source reconciliation
- Baseline source `job-prep-suite.js`-এ ১৫০টি science Q() entry শনাক্ত; ১৫০/১৫০ category, stem, চারটি option, keyed answer ও explanation master-এ মেলে।
- ১৩৩টি entry আগের master-এ পূর্ণ exact signature-এ ছিল; ১৭টি additional active variant (১৪টি নতুন stem + ৩টি same-stem/different-option) fact-check করে `suite_131`–`suite_147` হিসেবে যোগ করা হয়েছে।
- Baseline source-এর ১১টি explanation mismatch audited master অনুযায়ী synchronize করা হয়েছে।
- Expansion batch ১–৫৫-এ ১০২টি science candidate; ১০১টি retained record master-এ আছে; একটি historical exact duplicate copy duplicate ledger-এ নথিভুক্ত।
- Expansion source-এর ৭টি explanation mismatch audited master অনুযায়ী synchronize করা হয়েছে (batch ২৭, ৩০, ৩২, ৪০, ৪৬, ৪৭)।
- ১০১/১০১ retained expansion record-এর category, stem, options, answer ও explanation source/master match যাচাই করা হয়েছে।
- Baseline legacy Q() source-এ sourceUrl সব entry-তে নেই; audit source URLs master metadata-তে সংরক্ষিত।

## App/runtime review
- Android `MainActivity.kt` WebView-এ JavaScript ও DOM storage enable করে এবং `file:///android_asset/index.html` লোড করে।
- `index.html` content-bank, career-prep, math-levels, job-prep-suite এবং expansion batch ১–৫৬ সঠিক ক্রমে লোড করে।
- Batch ১–৩২ `JOB_PREP_BANK`-এ append করে; batch ৩৩+ `EXTRA_JOB_QUESTIONS`-এ append করে; inline merge full-signature key ও ID দিয়ে duplicate এড়ায়।
- `JOB_PREP_QUESTION_KEY`-এর normalization NFKC করা হয়েছে, যা audit signature policy-র সঙ্গে সামঞ্জস্যপূর্ণ; index fallback-এর whitespace normalization-ও সংশোধিত।
- Practice path category filter, difficulty order, ১৫ লেভেল × ১০ প্রশ্ন, keyed answer index এবং +১/−০.২৫ scoring যাচাই করা হয়েছে।
- Latest Android CI run **45680201874: SUCCESS** — question/model-test validation, legacy/Firebase regression safety, release UI/launcher smoke checks সব পাস।

## Lock decision
**সাধারণ বিজ্ঞান content audit: LOCKED.** ২৪৮টি record-এর content fact-check, duplicate reconciliation, source consistency, runtime code review এবং automated CI validation সম্পন্ন।

**সীমাবদ্ধতা:** বাস্তব Android device/emulator-এ হাতে smoke test করা হয়নি। এই LOCK content audit ও automated/static integration-এর জন্য; Play Store release-এর পূর্ণ sign-off নয়। ভবিষ্যতে source/content পরিবর্তন হলে audit পুনরায় খুলতে হবে।

বিস্তারিত source reconciliation: `SCIENCE_BASELINE_SOURCE_RECONCILIATION_131_147.md`।
