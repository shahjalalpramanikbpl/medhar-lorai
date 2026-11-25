# গণিত — চূড়ান্ত সংহতকরণ পর্যালোচনা (প্রথম ধাপ)

তারিখ: ২৬ নভেম্বর ২০২৬  
অবস্থা: **FINAL CONSOLIDATION IN PROGRESS — NOT LOCKED**  
পরিধি: আগের ৩০০ প্রশ্নের consolidated master, ১৩১টি reversible candidate এবং runtime generator.

## GitHub consistency check
- আগের master blob: `44e8e58b9f38acf321efc7567d27b934a386e96b`
- আগের runtime source blob: `4f3bdb7fd98ad72dcf727c554d0fa74514a1714d`
- source-এ ৩০টি level × ১০টি প্রশ্ন = ৩০০টি runtime প্রশ্ন নিশ্চিত।
- source-এর syntax compile check: PASS.

## Candidate review summary
- আগের reversible candidates: ১৩১।
- Level 1–10: ১১; Level 11–20: ৩৭; Level 21–30: ৮৩।
- Topic distribution: ঐকিক নিয়ম ১৮, শতকরা ১৮, গড় ১৪, বয়স ১০, পরিমিতি ১০, ল.সা.গু/গ.সা.গু ৯, ছাড় ৯, সময়-দূরত্ব ৮, ধারা ৮, লাভ-ক্ষতি ৭, জ্যামিতি ৭, মিশ্রণ ৬, বীজগণিত ৫, সরল/চক্রবৃদ্ধি সুদ ২।
- Candidate মানে স্থায়ীভাবে বাদ নয়; প্রতিস্থাপন/পুনর্লিখনের আগে reversible status বজায় থাকবে।

## এই ধাপে ১২টি replacement draft
### কঠিন স্বতন্ত্র চারটি গাণিতিক ক্রিয়া
- `math_L27_Q1` — বহু সংখ্যার যোগ: সঠিক ফল ১,৩৫,০৯৬।
- `math_L28_Q2` — ধারাবাহিক বিয়োগ: অবশিষ্ট ১,৩৪,২৭৫।
- `math_L29_Q1` — বহু-অঙ্কের গুণ: ১,২৫৬ × ২৪৮ = ৩,১১,৪৮৮।
- `math_L30_Q1` — ধাপে ধাপে ভাগ: ৯,৭২,০০০ ÷ ২৪ ÷ ১৫ = ২,৭০০।

### অবাস্তব বয়সের চারটি stem সংশোধন
- `math_L21_Q4`, `math_L22_Q3`, `math_L23_Q2`, `math_L24_Q1` — ৩৬৪–৪০৬ বছরের অযৌক্তিক মোট বয়স বাদ দিয়ে বাস্তবসম্মত বর্তমান/ভবিষ্যৎ বয়সের সমীকরণ বসানো হয়েছে।

### ১০০%-এর বেশি concentration-এর মিশ্রণ প্রশ্ন সংশোধন
- `math_L24_Q6`, `math_L25_Q5`, `math_L26_Q4`, `math_L27_Q3` — ১০২%–১১১% concentration বাদ দিয়ে বৈধ weighted-average mixture problem বসানো হয়েছে।
- `math_L28_Q2`, `math_L29_Q1` — ওই দুই slot-এ যথাক্রমে কঠিন বিয়োগ ও গুণের প্রশ্ন বসানো হয়েছে।

## Replacement checks
- ১২/১২ replacement-এর keyed answer ও expected value independently checked: PASS.
- ১২/১২-এ চারটি স্বতন্ত্র option ও valid answer index: PASS.
- Runtime bank: ৩০০ প্রশ্ন, ৩০ level: PASS.
- Runtime JavaScript syntax compile: PASS.
- Current runtime strict signature check (normalized category + stem + sorted full options + keyed answer): duplicate groups = 0.
- এটি পূর্ণ independent content QA বা CI নয়; distractor quality, explanation peer review, এবং সব replacement-সহ master cross-bank re-audit এখনও বাকি।

## Difficulty metadata correction
- Level 16–20-এর band আগে “কঠিন” হলেও runtime difficulty ছিল “মাঝারি”। Band এখন “উচ্চ-মাঝারি প্রতিযোগিতামূলক” করা হয়েছে, যাতে metadata পরস্পরবিরোধী না হয়।
- Level 21–30 hard হিসেবে থাকবে; তবে ১১৯টি অবশিষ্ট candidate-এ প্রকৃত hard-level suitability যাচাই ও পুনর্লিখন বাকি।

## Current consolidated counts
- আগের ৩০০টি প্রশ্ন পর্যালোচনা: ৩০০।
- আগের provisional retain: ১৬৯।
- replacement draft: ১২।
- এখনও reversible exclusion/rewrite candidate: ১১৯।
- Permanent deletion: ০।
- LOCKED: **না**।

## Next required work
1. অবশিষ্ট ১১৯ candidate-কে বিষয় ও level ধরে পুনর্লিখন/প্রতিস্থাপন।
2. সব ৩০০ প্রশ্নের distractor-কে সাধারণ পরীক্ষার্থী-ভুলভিত্তিক করা; mechanical ±১০/±২০ শতাংশ offset বাদ।
3. নতুন ১২টি এবং পরবর্তী replacement-গুলোর strict duplicate check consolidated master-এর বিরুদ্ধে পুনরায় চালানো।
4. সব level-এর difficulty progression, formula, solution ও option correctness পরীক্ষা।
5. App integration, validator/test/CI যাচাই; ফল না দেখে কোনো pass দাবি নয়।
6. সব checks শেষ হলে তবেই Math LOCK.
