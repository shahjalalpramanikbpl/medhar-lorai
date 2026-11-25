# গণিত — চূড়ান্ত নির্বাচন, QA ও LOCK (২৬ নভেম্বর ২০২৬)

## চূড়ান্ত সিদ্ধান্ত
**গণিত প্রশ্নব্যাংক: ৩০০টি প্রশ্ন — LOCKED।**
- ৩০টি লেভেল × প্রতি লেভেলে ১০টি প্রশ্ন।
- পূর্বের ৩০০ প্রশ্নের audit: ১৬৯টি উপযুক্ত প্রশ্ন রাখা হয়েছে; ১৩১টি দুর্বল/অবাস্তব candidate slot-এ নতুন প্রশ্ন বসানো হয়েছে।
- স্থায়ীভাবে বাদ: ০। অবশিষ্ট reversible candidate: ০।
- Master-এ ৩০০/৩০০ প্রশ্নের status `FINAL_APPROVED`।

## চূড়ান্ত QA
- Runtime/master প্রশ্নসংখ্যা: ৩০০; ৩০ level; প্রতি level ১০ — PASS.
- চারটি স্বতন্ত্র option এবং valid answer index — ৩০০/৩০০ PASS.
- keyed option বনাম expected numeric answer — ৩০০/৩০০ PASS.
- সমাধান/ব্যাখ্যার হিসাব keyed answer-এর সঙ্গে সামঞ্জস্য — PASS.
- নির্ধারিত canonical signature (normalized category + normalized stem + sorted complete options + keyed answer; option order ignored) — exact duplicate group ০।
- Master-এর source blob SHA runtime source-এর SHA-এর সঙ্গে মিলে।
- শেষ proofreading-এ ছয়টি percentage punctuation এবং একটি floating-point display artifact সংশোধন করা হয়েছে।

## বিষয়বস্তু সংশোধন ও বাছাই
- ১৩১টি candidate slot-ই নতুন প্রশ্ন দিয়ে পূরণ ও final approved করা হয়েছে।
- অবাস্তব পিতা-সন্তানের বয়সের চারটি stem বাস্তবসম্মত বহু-ধাপের বয়সের প্রশ্নে বদলানো হয়েছে।
- ১০০%-এর বেশি concentration-যুক্ত ছয়টি অবৈধ mixture premise বৈধ concentration বা arithmetic-skill প্রশ্নে প্রতিস্থাপন করা হয়েছে।
- কঠিন স্তরে স্বতন্ত্র যোগ, বিয়োগ, গুণ ও ভাগের প্রয়োগভিত্তিক প্রশ্ন অন্তর্ভুক্ত।
- Level 16–20-এর band label medium difficulty-এর সঙ্গে সামঞ্জস্যপূর্ণ করা হয়েছে।
- Conceptual similarity-কে exact duplicate ধরে প্রশ্ন বাদ দেওয়া হয়নি।

## Difficulty policy
- Level 1–10: সহজ
- Level 11–20: মাঝারি
- Level 21–30: কঠিন
এটি চাকরির পরীক্ষার প্রস্তুতির জন্য qualitative progression; psychometric item calibration নয়। উচ্চ স্তরের কিছু প্রশ্নে বড় সংখ্যার arithmetic practice রয়েছে—ভবিষ্যৎ নতুন batch audit-এ locked master-এর সঙ্গে তুলনা করতে হবে।

## LOCK-এর পরিধি ও আলাদা release অবস্থা
এই LOCK গণিতের ৩০০ প্রশ্নের content selection, stem/premise, calculation/key, explanation, four-option structure, exact-duplicate এবং level progression audit-এর জন্য।
এটি পুরো Android app-এর release sign-off নয়। Repository-wide validator-এর legacy `ML_CONTENT.questions` ও `ML_CONTENT.facts` threshold আলাদা release blocker; সেগুলো এই Math lock-এর অংশ নয়। এই ধাপে physical Android device test বা Play Store build পাসের দাবি করা হচ্ছে না।

## পরবর্তী পরিবর্তনের নিয়ম
গণিতে নতুন প্রশ্ন/সংশোধন আনতে হলে এই LOCKED master-এর সঙ্গে আগের সব প্রশ্ন তুলনা করে পূর্ণ canonical signature অনুযায়ী duplicate audit করতে হবে। শুধু কাছাকাছি বিষয় বা একই template হলেই প্রশ্ন বাদ দেওয়া যাবে না।

## GitHub artefacts
- Master: `MATH_AUDIT_MASTER_BASELINE_300.json`
- Runtime: `app/src/main/assets/math-levels.js`
- Overall status: `QUESTION_BANK_AUDIT_STATUS.md`
