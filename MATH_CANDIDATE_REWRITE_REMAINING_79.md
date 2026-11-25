# গণিত — অবশিষ্ট ৭৯টি Candidate Rewrite সম্পন্ন (২৬ নভেম্বর ২০২৬)

## কাজের সারাংশ
- পূর্ববর্তী master-এর ৭৯টি reversible exclusion candidate-ই পুনর্লিখন করা হয়েছে; কোনো প্রশ্ন স্থায়ীভাবে মুছে ফেলা হয়নি।
- মোট ৮টি ধারাবাহিক গ্রুপে কাজ: 41_50 (10), 51_60 (10), 61_70 (10), 71_80 (10), 81_90 (10), 91_100 (10), 101_110 (10), 111_119 (9)। শেষ গ্রুপে ৯টি প্রশ্ন।
- প্রতিটি গ্রুপে ৫ প্রশ্নের অস্থায়ী checkpoint এবং গ্রুপ শেষে checkpoint নথিভুক্ত।
- Runtime helper `replaceQuestion` দিয়ে আসল `app/src/main/assets/math-levels.js`-এ পরিবর্তন; Master-এ runtime-এর একই প্রশ্ন, অপশন, answer, expected, formula ও explanation sync।

## যাচাই
- Runtime compile: PASS.
- মোট ৩০০ প্রশ্ন; ৩০ লেভেল; প্রতি লেভেলে ১০টি প্রশ্ন: PASS.
- চারটি স্বতন্ত্র option ও valid answer index: ৩০০/৩০০ PASS.
- keyed option numeric value বনাম expected: ৩০০/৩০০ PASS.
- strict exact duplicate signature (normalized category + stem + sorted complete options + keyed answer): duplicate groups ০.
- ৭৯টি নতুন replacement draft-এর calculation/key mismatch: ০; invalid option set: ০; permanent deletion: ০.
- গড় ও গড় বেগের ব্যাখ্যায় precision/ভুল-নম্বর সংশোধনসহ correction pass করা হয়েছে।

## বর্তমান গণনা
- Provisional retain: ১৬৯
- Replacement draft: 131
- Remaining reversible candidates: ০
- Permanent deletions: ০

## অবশিষ্ট কাজ ও LOCK অবস্থা
সব ১৩১টি candidate-ই replacement draft হয়েছে, কিন্তু **গণিত এখনো LOCKED নয়**। Subject-level final factual/pedagogical QA, distractor মান, difficulty progression, invalid premise audit, app integration ও release validation বাকি। এই রিপোর্ট কোনো external CI বা Android device test পাসের দাবি করে না।

## Runtime source blob SHA
`cc9bff5b984b6a60085a4d148a6283d7df08953e`
