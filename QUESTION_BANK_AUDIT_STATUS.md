# বাংলা ও ইংরেজি প্রশ্নব্যাংক অডিট — স্থায়ী অগ্রগতি

তারিখ: ২৫ নভেম্বর ২০২৬

## ইংরেজি — চূড়ান্ত ফলাফল লক
- মোট উৎস এন্ট্রি: ৪৮৭
- হুবহু পুনরাবৃত্তি: ২৪
- স্বতন্ত্র প্রশ্ন: **৪৬৩**
- চূড়ান্ত সংখ্যা **৪৬৩** — স্থির/লক করা; বাংলা অডিটে এটি পুনরায় গণনা বা পরিবর্তন করা হবে না।
- ইংরেজি প্রশ্নের পূর্ববর্তী সংশোধনসমূহ বহাল। এই পর্যায়ের বাংলা duplicate cleanup-এ ইংরেজি প্রশ্ন মুছে ফেলা হয়নি।
- Android release build এখনো অডিট-পরবর্তী যাচাইসহ সম্পন্ন হয়নি।

## বাংলা ভাষা ও সাহিত্য — চূড়ান্ত ফলাফল LOCKED
- Runtime-এ যাচাইকৃত স্বতন্ত্র প্রশ্ন: **৪০৬টি — LOCKED**।
- ৪০৬টি প্রশ্নের উত্তরসূচি, চারটি বিকল্প ও ব্যাখ্যার বিষয়বস্তু পর্যালোচনা সম্পন্ন; দ্ব্যর্থক `extra_209` প্রশ্নে distractor সংশোধন করা হয়েছে (commit `68c1bca017fa2a0927835c14e263a2338fe39bd2`)।
- Validator-এ নির্দিষ্ট ৪০৬টি প্রশ্নের শর্ত যুক্ত; malformed record **০**, canonical full-signature exact duplicate **০**।
- GitHub Actions run `45633211550`-এ content validation, regression safety এবং release UI smoke checks **১৭/১৭ PASSED**; বাংলা ৪০৬টি এবং English ৪৬৩টি অপরিবর্তিত ও LOCKED হিসেবে পুনরায় যাচাই হয়েছে।
- **LOCK-এর পরিধি:** বাংলা ভাষা ও সাহিত্য প্রশ্নব্যাংকের ৪০৬টি runtime প্রশ্নের content/structure/duplicate audit। পরবর্তী কোনো সম্পাদনা বা নতুন সংযোজন হলে locked master-এর সঙ্গে তুলনা করে আলাদা audit করতে হবে।
- ঐতিহাসিক অডিট নোট ও পূর্ববর্তী অসম্পূর্ণ checkpoint-গুলো নিচে কাজের chronology হিসেবে রাখা হয়েছে; সেগুলো বর্তমান LOCKED অবস্থাকে বাতিল করে না।

## সাম্প্রতিক কোড সংশোধন — exact duplicate policy
- `job-prep-suite.js`-এর canonical question key এখন সব subject-এর জন্য category + normalized question + sorted options + correct answer ব্যবহার করে; আগের মতো কিছু category-তে শুধু question text দিয়ে dedup হয় না।
- expansion batch ৩৩–৫০-এর local duplicate filter-ও canonical full signature ব্যবহার করে; একই stem কিন্তু আলাদা options/answer থাকলে প্রশ্ন আর অকারণে বাদ পড়বে না।
- batch ৫৬-এর final dedup pass এখন শুধু English/বাংলা সাহিত্য নয়, সব subject-এ একই full signature প্রয়োগ করে।
- `scripts/validate-content.js`-এর subject-bank duplicate checks ও model-test uniqueness checks-ও একই full signature নীতি অনুসরণ করে।
- `scripts/validate-content.js` এখন `job-prep-expansion.js` এবং ০২–৫৬ সব expansion file মূল app load-order-এ চালিয়ে পূর্ণ expanded bank যাচাই করবে; script syntax যাচাই PASS, কিন্তু পূর্ণ runtime validation এখনো চালানো হয়নি।
- সংশোধন commits: `4d145e0`, `3dd86af`, `947abeb`, `90cd3ff`, `563dc00`, `234150b`, `54ce283`, `a98c592`, `c59c377`, `3fa1054`, `a0b56b5`, `58ff16e`, `76613b5`, `2fed9aa`, `7ceaece`, `afe1e42`, `175fbac`, `255e624`, `ba88a26`, `8be965d`, `4186388`.

## স্থির অডিট নীতি
- English final result: **৪৬৩টি unique প্রশ্ন** — অপরিবর্তিত ও লক।
- কেবল হুবহু duplicate copy বাদ।
- একই বিষয় যাচাই করা ভিন্ন উদাহরণ, ভিন্ন option set বা ভিন্ন সঠিক উত্তর থাকলে প্রশ্ন রাখা।
- duplicate signature: normalized category + normalized question + sorted options + correct answer; option order উপেক্ষা করা হয়।
- প্রমাণিত ভুল ছাড়া প্রশ্নের উত্তর/বিষয়বস্তু নীরবে পরিবর্তন নয়।
- উভয় বিষয়ের audit ও স্বয়ংক্রিয় content validation সফল হওয়ার পরেই BUILD-trigger commit দিয়ে Android Debug APK, signed Release APK এবং AAB তৈরি হবে।
- Build ফলাফল ও artifact যাচাই না হওয়া পর্যন্ত APK প্রস্তুত বলে দাবি করা যাবে না।

## পরবর্তী কাজ
- বাংলা ভাষা ও সাহিত্য: **৪০৬টি — LOCKED**; এই বিষয় পুনরায় খুলতে হলে নতুন পরিবর্তন/সংযোজনের জন্য পৃথক audit করতে হবে।
- English Grammar & Vocabulary: **৪৬৩টি — LOCKED**।
- পরবর্তী বিষয় নির্বাচনের আগে সর্বশেষ subject-specific audit record ও master যাচাই করতে হবে।
- সামগ্রিক release কাজের জন্য legacy `ML_CONTENT` bank-এর প্রশ্নসংখ্যা/validator gate এবং Android build/artifact verification-এর অবস্থা আলাদাভাবে অনুসরণ করতে হবে।


## পূর্ণ runtime validation — ২৫ নভেম্বর ২০২৬ (সর্বশেষ পরীক্ষা)
- `scripts/validate-content.js`-এ অনুপস্থিত `node:path` import শনাক্ত করে সংশোধন করা হয়েছে; এখন main suite এবং সব expansion file load করে runtime পরীক্ষা চলে।
- validator-এর non-math subject threshold-এ `গণিত` ও `Math` category-কে ভুলভাবে non-math subject হিসেবে গণনা করার ত্রুটি সংশোধন করা হয়েছে।
- runtime-এ চাকরি-প্রস্তুতি subject bank: **৩,১৪৯টি প্রশ্ন**; English grammar/vocabulary: **৪৬৩টি**। ইংরেজির ৪৬৩টি প্রশ্ন অপরিবর্তিত।
- ৫টি model test এবং ৩০০টি math প্রশ্ন/৩০টি level runtime-এ load হয়েছে। structure, option count, answer index, duplicate signature এবং model-test selection checks-এ আলাদা কোনো error পাওয়া যায়নি।
- বর্তমান affairs category-তে **১০৩টি entry**-র dated source metadata অসম্পূর্ণ/ভুল: কিছুতে date ফাঁকা, কিছুতে date-এর জায়গায় difficulty label (`সহজ/মাঝারি`) আছে, আবার কিছু timeless general-knowledge প্রশ্ন current-affairs category-তে আছে। এগুলো যাচাই ও সংশোধন বাকি; কোনো date বা source অনুমান করে বসানো হয়নি।
- legacy `ML_CONTENT` bank-এ ৫৯৭টি প্রশ্ন (release threshold ১,০০০-এর কম) এবং ৯৭৪টি fact (threshold ১,০০০-এর কম); এই দুই ঘাটতির কারণে validator এখনো FAIL।
- তাই full runtime loading সফল হলেও overall release validation **FAIL**; regression checks, release UI checks এবং APK build এই run-এ চালু হয়নি। বাংলা বিষয়বস্তুর factual audit-ও এখনো সম্পন্ন নয়।
- সংশ্লিষ্ট commit: `500e32c` (path import), `6de1e1d` (math category threshold), `d430405` (missing current-affairs metadata diagnostics)।


## ২৫ নভেম্বর ২০২৬ — পরবর্তী অডিট অগ্রগতি
- Current-affairs validator-এর schema mismatch সংশোধন করা হয়েছে: `d` কখনো difficulty, কখনো source date হিসেবে ব্যবহৃত হচ্ছিল; এখন `sourceDate`, ISO-date-যুক্ত `d` বা ISO-date-যুক্ত `difficulty` field থেকে তারিখ শনাক্ত হয়। তারিখ যাচাইয়ে escaped-regex ত্রুটিও ঠিক করা হয়েছে।
- `job-prep-expansion-15.js`-এর বাংলাদেশ FY2026–27 বাজেট, GDP growth target, ২০২৬ জাতীয় নির্বাচন, প্রধানমন্ত্রীর শপথ এবং LDC preparatory-period extension—এই ৫টি প্রশ্নে source date যোগ করা হয়েছে; ৫টির source URL-ও যাচাই/সংশোধন করা হয়েছে। LDC extension-এর তারিখ ২৯ অক্টোবর ২০২৬ এবং নতুন সময়সীমা ২৪ নভেম্বর ২০২৯।
- সংশোধিত validator-এর runtime-এ ২০২৬ current-affairs metadata check আর error দেয়নি। Job-preparation bank **৩,১৪৯টি**, English grammar/vocabulary **৪৬৩টি**, Math **৩০০টি/৩০ লেভেল**, Model Test **৫টি** লোড হয়েছে। Subject-bank duplicate/structure, math checks ও model-test selection-এ কোনো error log হয়নি।
- সামগ্রিক release validation এখনো **FAIL**, তবে বর্তমান ব্যর্থতার কারণ দুটি legacy main-quiz bank-এর release threshold: `ML_CONTENT.questions` = **৫৯৭/১,০০০** এবং `ML_CONTENT.facts` = **৯৭৪/১,০০০**। কোনো প্রশ্ন/তথ্য কৃত্রিমভাবে যোগ করে threshold পূরণ করা হয়নি।
- সর্বশেষ workflow run: `45604597582`; validation ধাপে ওই দুই threshold-এর কারণে ব্যর্থ; regression/UI checks এবং APK build skip হয়েছে।
- সংশোধন commits: `b0ce863` (৫টি ২০২৬ প্রশ্নের sourceDate ও URL), `102809c` (JSON syntax fix), `915619f` এবং `8181fd0` (validator schema support), `0bdfbdb` (date-regex fix)।
- পরবর্তী কাজ: legacy `ML_CONTENT` প্রশ্ন/তথ্য ব্যাংকের ঘাটতি পূরণ বা release target-এর অনুমোদিত পরিবর্তন; এরপর পূর্ণ বাংলা প্রশ্নের factual audit ও final count reconciliation। APK এখনো তৈরি হয়নি।


### Legacy `ML_CONTENT` bank — স্বাধীন structural/duplicate পরীক্ষা
- `content-bank.js` runtime-এ সরাসরি লোড করে পুনরায় পরীক্ষা: **৫৯৭টি প্রশ্ন, ৯৭৪টি fact**।
- প্রশ্নের structural error: **০**; পূর্ণ signature-এ exact duplicate group/copy: **০/০**।
- Facts-এর malformed/empty entry: validator-এ ধরা পড়েনি; exact duplicate group/copy: **০/০**।
- অতএব বর্তমান legacy-bank blocker duplicate বা malformed record নয়; কেবল ঘোষিত release target-এর তুলনায় প্রশ্ন **৪০৩টি** এবং fact **২৬টি** কম।

## ২৫ নভেম্বর ২০২৬ — বাংলা runtime reconciliation (যাচাইকৃত)
- GitHub Actions run `45624336694`-এ main branch-এর সব job-preparation script ও expansion batch load করে runtime count পাওয়া গেছে।
- বাংলা ভাষা ও সাহিত্য: **৪০৩টি প্রশ্ন**।
- বাংলা malformed structure: **০টি** (প্রশ্ন, চারটি option, answer index—validator-এর কাঠামোগত নিয়মে)।
- বাংলা exact duplicate: **০টি** (runtime-এ canonical signature: normalized category + normalized question + sorted options + correct answer)।
- English grammar/vocabulary: **৪৬৩টি** — অপরিবর্তিত।
- Job-preparation মোট: **৩,১৪৯টি** প্রশ্ন।
- এই ফলাফল বাংলা প্রশ্নব্যাংকের **সংখ্যা, কাঠামো ও হুবহু duplicate যাচাই** নিশ্চিত করে; উত্তর/ব্যাখ্যার সত্যতা, ভাষাগত শুদ্ধতা, বানান, দ্ব্যর্থতা ও প্রশ্নের মানের মানবীয় বিষয়বস্তু-অডিট এখনো সম্পন্ন নয়। তাই বাংলা ব্যাংককে এখনো চূড়ান্ত বলা হচ্ছে না।
- একই workflow-তে সামগ্রিক validation ব্যর্থ হয়েছে কেবল legacy `ML_CONTENT` release threshold-এর কারণে: প্রশ্ন ৫৯৭/১,০০০ এবং facts ৯৭৪/১,০০০। এই কারণে regression/UI checks ও Android build skip হয়েছে; APK তৈরি হয়নি।
- Workflow: https://github.com/shahjalalpramanikbpl/medhar-lorai/actions/runs/45624336694

## বাংলা বিষয়বস্তু অডিট — ব্যাচ ১–৭ (প্রাথমিক পর্যালোচনা)
- ব্যাচ ১–৭-এর সব বাংলা রেকর্ড থেকে **৩১টি প্রশ্ন** নিয়ে প্রশ্ন, চারটি বিকল্প, keyed answer এবং explanation মিলিয়ে দেখা হয়েছে।
- এই ৩১টির মধ্যে নিশ্চিত ভুল keyed answer বা ব্যাখ্যা শনাক্ত হয়নি।
- ‘সবার উপরে মানুষ সত্য…’ প্রশ্নটির উত্তর চণ্ডীদাস—প্রচলিত সাহিত্য/নিয়োগ-পরীক্ষার রেফারেন্সে সমর্থিত; ব্যাখ্যায় “চণ্ডীদাসের নামে বহুল পরিচিত” বলা হয়েছে, তাই নির্দিষ্ট চণ্ডীদাসের পরিচয় নিয়ে অতিরিক্ত দাবি করা হয়নি।
- এই ধাপটি ব্যাচ ১–৭-এর ৩১টি প্রশ্নের প্রাথমিক বিষয়বস্তু পর্যালোচনা; পূর্ণ ৪০৩ প্রশ্নের factual/linguistic audit নয়। পরবর্তী ব্যাচগুলোর review বাকি।

### বাংলা বিষয়বস্তু অডিট — ব্যাচ ৮–১৪ (প্রাথমিক পর্যালোচনা)
- ব্যাচ ৮–১৪-এর বাংলা রেকর্ড থেকে **৩৬টি প্রশ্ন**; প্রশ্ন, বিকল্প, সঠিক উত্তর ও ব্যাখ্যা মিলিয়ে পর্যালোচনা করা হয়েছে।
- এই পর্যালোচনায় নিশ্চিত ভুল keyed answer বা ব্যাখ্যা পাওয়া যায়নি।
- একই সাহিত্যকর্ম/বিষয় নিয়ে একাধিক প্রশ্নে option set আলাদা থাকায় সেগুলো exact duplicate নয়; নির্ধারিত নীতি অনুযায়ী রাখা হয়েছে।
- ব্যাচ ১–১৪ মিলিয়ে প্রাথমিকভাবে পর্যালোচিত বাংলা প্রশ্ন: **৬৭টি**। অবশিষ্ট runtime bank-এর পূর্ণ ৪০৩ প্রশ্নের content audit চলমান।

### বাংলা বিষয়বস্তু অডিট — ব্যাচ ১৫–১৯ (প্রাথমিক পর্যালোচনা)
- ব্যাচ ১৫–১৯ থেকে **২৮টি বাংলা প্রশ্ন**; keyed answer, বিকল্প ও ব্যাখ্যা পর্যালোচনা করা হয়েছে।
- এই নমুনায় নিশ্চিত ভুল keyed answer শনাক্ত হয়নি।
- ব্যাচ ২০-এ বাংলা ভাষা ও সাহিত্যের কোনো প্রশ্ন পাওয়া যায়নি।
- ব্যাচ ১–১৯ পর্যন্ত মোট প্রাথমিকভাবে পর্যালোচিত প্রশ্ন: **৯৫টি** (আগের ৬৭ + এই ধাপের ২৮)। পূর্ণ ৪০৩টির অডিট এখনো অসমাপ্ত; যাচাই ছাড়া বাকি প্রশ্নকে নির্ভুল ঘোষণা করা হয়নি।

### বাংলা বিষয়বস্তু অডিট — ব্যাচ ২১–২৬
- ব্যাচ ২১–২৬ থেকে **১১টি বাংলা প্রশ্ন** পর্যালোচনা করা হয়েছে; ব্যাচ ২১-এ বাংলা প্রশ্ন ছিল না।
- ‘বিদ্রোহী’ কবিতার প্রথম প্রকাশ-সংক্রান্ত প্রশ্নে প্রকাশনা-ইতিহাসের মতভেদ ব্যাখ্যায় স্পষ্টভাবে উল্লেখ আছে; একক বিতর্কিত তথ্যকে নিঃশর্ত সত্য হিসেবে উপস্থাপন করা হয়নি।
- এই ১১টির মধ্যে নিশ্চিত ভুল keyed answer শনাক্ত হয়নি।
- ব্যাচ ১–২৬ পর্যন্ত প্রাথমিকভাবে পর্যালোচিত বাংলা প্রশ্নের সংখ্যা: **১০৬টি**। অবশিষ্ট ২৯৭টি প্রশ্নের অডিট চলমান।

### বাংলা বিষয়বস্তু অডিট — ব্যাচ ২৭–৩২
- ব্যাচ ২৭–৩২ থেকে **২৫টি বাংলা প্রশ্ন** পর্যালোচনা করা হয়েছে; ব্যাচ ৩২-এ বাংলা প্রশ্ন ছিল না।
- উত্তরসূচি ও ব্যাখ্যায় নিশ্চিত ভুল শনাক্ত হয়নি। সাহিত্যকর্মের পরিচয়, ব্যাকরণ, প্রকাশকাল ও প্রকাশনা-সংক্রান্ত দাবিগুলোতে প্রশ্নের সীমা ও ব্যাখ্যার সামঞ্জস্যও দেখা হয়েছে।
- ব্যাচ ১–৩২ পর্যন্ত মোট প্রাথমিকভাবে পর্যালোচিত বাংলা প্রশ্ন: **১৩১টি** (পূর্ববর্তী ১০৬ + ২৫)। অবশিষ্ট ২৭২টি প্রশ্নের অডিট চলমান।

### বাংলা বিষয়বস্তু অডিট — ব্যাচ ৩৩–৩৮
- ব্যাচ ৩৩–৩৮ থেকে **২৪টি বাংলা প্রশ্ন** পর্যালোচনা করা হয়েছে; ব্যাচ ৩৫ ও ৩৭-এ বাংলা প্রশ্ন ছিল না।
- এই নমুনায় উত্তরসূচি/ব্যাখ্যার নিশ্চিত ভুল পাওয়া যায়নি। সাহিত্যকর্ম, চরিত্র, লেখক, ভাষা-ব্যাকরণ ও বাগধারার উত্তর মিলিয়ে দেখা হয়েছে।
- ব্যাচ ১–৩৮ পর্যন্ত প্রাথমিকভাবে পর্যালোচিত বাংলা প্রশ্ন: **১৫৫টি**। runtime count ৪০৩-এর মধ্যে অবশিষ্ট **২৪৮টি** প্রশ্নের বিষয়বস্তু-অডিট বাকি।

## লিগ্যাসি কনটেন্ট ব্যাংক — সংযোজনের অগ্রগতি
- ব্যবহারকারীর অনুমোদিত সিদ্ধান্ত: বিদ্যমান ১,০০০ প্রশ্ন/১,০০০ facts ভ্যালিডেশন সীমা বহাল রেখে ঘাটতি পূরণে যাচাইকৃত ও স্বতন্ত্র কনটেন্ট যোগ করা হবে; সীমা কমানো হবে না।
- প্রকৃত ফাইলের অবস্থান শনাক্ত: `app/src/main/assets/content-bank.js`।
- সংযোজন ব্যাচ ০১-এ ৩০টি স্থায়ী সাধারণ জ্ঞান/বিজ্ঞান/ভূগোল/বাংলাদেশ/ইতিহাস/সাহিত্য/প্রযুক্তি/গণিত/পরিবেশভিত্তিক প্রশ্ন এবং ২৬টি স্বতন্ত্র তথ্য যোগ করা হয়েছে।
- নতুন কনটেন্ট source file-এ সংরক্ষিত; runtime dedup filter একই category-র একই প্রশ্ন-শিরোনাম বা একই fact পুনরাবৃত্ত হলে বাদ দেবে।
- এই ব্যাচের পর স্বয়ংক্রিয় CI ফলাফল যাচাই বাকি। CI-তে গণনা নিশ্চিত না হওয়া পর্যন্ত ৩০/৪০৩ বা facts-এর চূড়ান্ত নিট বৃদ্ধি হিসেবে দাবি করা হচ্ছে না।
- পরবর্তী কাজ: CI লগে প্রকৃত প্রশ্ন/fact count ও duplicate/structure error যাচাই; তারপর পরবর্তী ব্যাচে বাকি ঘাটতি পূরণ। একই সঙ্গে বাংলা বিষয়বস্তু অডিটের অবশিষ্ট ২৪৮টি প্রশ্ন পর্যালোচনা চলবে।

- CI run `45626619593`-এ ব্যাচ ০১-এর পর যাচাই: প্রশ্ন ৬১৯, facts ১,০০০; facts-এর লক্ষ্য পূরণ হয়েছে। প্রশ্ন এখনো ৩৮১টি কম। ব্যাচ ০১-এর ৩০টি raw প্রশ্নের মধ্যে runtime dedup-এর পর নিট বৃদ্ধি ২২টি।
- ব্যাচ ০২-এ আরও ৫০টি সাধারণ জ্ঞান/বিজ্ঞান/ভূগোল/বাংলাদেশ/ইতিহাস/সাহিত্য/প্রযুক্তি/গণিত/পরিবেশ প্রশ্ন যোগ করা হয়েছে। CI ফলাফল অপেক্ষমাণ।


## ২৫ নভেম্বর ২০২৬ — বাংলা অডিট পুনর্মিলন (সর্বশেষ CI)
- batch 02 সংযোজনের পর GitHub Actions run `45627729747`-এ runtime Bengali subject count **৪০৬টি**; malformed **০টি**; canonical signature-এ exact duplicate **০টি**।
- English grammar/vocabulary **৪৬৩টি** — অপরিবর্তিত।
- একই run-এ legacy main quiz bank: **৬৫৯টি প্রশ্ন / ১,০০০ facts**। facts threshold পূরণ; প্রশ্নের threshold ১,০০০-এর তুলনায় **৩৪১টি কম**। এ কারণে validation FAIL; regression/UI checks ও APK build skip হয়েছে।
- আগের অডিট নোটে ৪০৩টির মধ্যে ১৫৫টি reviewed এবং ২৪৮টি বাকি বলা হয়েছিল। বর্তমান runtime count ৪০৬ হওয়ায় ওই review denominator-এর সঙ্গে বর্তমান প্রশ্নগুলোর ID-ভিত্তিক পুনর্মিলন এখনো হয়নি। তাই **১৫৫/৪০৬ বা ২৫১ বাকি—কোনোটিকেই আপাতত যাচাইকৃত চূড়ান্ত অডিট-গণনা বলা হচ্ছে না**।
- বাংলা প্রশ্নব্যাংকের চূড়ান্ত বিষয়বস্তু-অডিটের আগে প্রতিটি runtime Bengali question ID-কে review ledger-এর সঙ্গে মেলাতে হবে; অনুপস্থিত/নতুন প্রশ্ন আলাদা করে পর্যালোচনা করতে হবে। কাঠামো ও duplicate check PASS হলেও factual/linguistic audit অসম্পূর্ণ।
- সর্বশেষ validation workflow: https://github.com/shahjalalpramanikbpl/medhar-lorai/actions/runs/45627729747


## ২৫ নভেম্বর ২০২৬ — বাংলা বিষয়বস্তু অডিট সমাপ্তির নোট
- মূল চাকরি-প্রস্তুতি ফাইলের ১২৭টি বাংলা প্রশ্ন এবং expansion/numbered expansion ফাইলের বাংলা রেকর্ডগুলো ব্যাচ ধরে পর্যালোচনা করা হয়েছে। বাংলা প্রশ্ন নেই এমন ব্যাচও আলাদা করে শনাক্ত করা হয়েছে; কেবল আগের review ledger-এর যোগফল ধরে অডিট সম্পন্ন বলা হয়নি।
- সর্বশেষ যাচাইকৃত runtime count **৪০৬টি বাংলা প্রশ্ন**; validator-এ malformed **০**, canonical exact duplicate **০**। ৪০৬টি প্রশ্নের উত্তরসূচি, বিকল্প ও ব্যাখ্যার বিষয়বস্তু পর্যালোচনা করা হয়েছে।
- অডিটে একটি দ্ব্যর্থক এক কথায় প্রকাশের প্রশ্ন শনাক্ত হয়েছে: `extra_209`-এ “ইতিহাসবিদ” ও “ইতিহাসকার”—দুটিই সম্ভাব্য উত্তর হতে পারত। distractor “ইতিহাসবিদ” বদলে “ইতিহাসপাঠক” করা হয়েছে; সঠিক উত্তর “ইতিহাসকার” অপরিবর্তিত। Commit: `68c1bca017fa2a0927835c14e263a2338fe39bd2`।
- “সবার উপরে মানুষ সত্য…” পঙ্‌ক্তির ক্ষেত্রে চণ্ডীদাস-নামটি প্রচলিত attribution হিসেবে রাখা হয়েছে; ব্যাখ্যাতেও “চণ্ডীদাসের নামে বহুল পরিচিত/প্রচলিত” বলা আছে। “বিদ্রোহী” কবিতার প্রথম প্রকাশ-সংক্রান্ত প্রশ্নে প্রকাশনা-ইতিহাসের মতভেদ ব্যাখ্যায় উল্লেখিত। বাংলা ভাষার প্রাচীন উৎসে মাগধী প্রাকৃতের সম্পর্কটিও প্রচলিত ভাষা-ইতিহাসের পাঠ্যবইভিত্তিক ব্যাখ্যা হিসেবে সীমাবদ্ধ রাখা হয়েছে।
- অতএব বাংলা ব্যাংকের **বিষয়বস্তু-পর্যালোচনা সম্পন্ন**। পরবর্তী push-এর CI run `45632197708`-এ পুনরায় নিশ্চিত: বাংলা ৪০৬, malformed ০, exact duplicate ০; মোট job-preparation ৩,১৯১; English ৪৬৩। এই audit status মানে প্রতিটি ঐতিহাসিক/ভাষাতাত্ত্বিক মতভেদের একাডেমিক বিতর্ক নিষ্পত্তি নয়।
- English grammar/vocabulary **৪৬৩টি — অপরিবর্তিত ও locked**; ইংরেজি ব্যাংকে কোনো পরিবর্তন করা হয়নি।
- এই ধাপে নতুন বাংলা তথ্য যোগ করা হয়নি। বাংলা অডিট শেষ হওয়ার পরই পৃথক ধাপে নতুন, যাচাইকৃত ও স্বতন্ত্র তথ্য যোগ করা হবে।

- বাংলা অডিট-সংশোধনের পরের CI run: https://github.com/shahjalalpramanikbpl/medhar-lorai/actions/runs/45632197708 । Validation এখনো FAIL শুধু legacy ML_CONTENT প্রশ্ন ৬৫৯/১,০০০ (ঘাটতি ৩৪১); facts ১,০০০/১,০০০। বাংলা malformed/duplicate বা English ৪৬৩-এ কোনো ব্যর্থতা নেই। APK build আগের মতোই validation gate-এ আটকে আছে।


## ২৫ নভেম্বর ২০২৬ — বাংলা ও ইংরেজি লক; ১,০০০ প্রশ্নের লক্ষ্য পূরণ
- বাংলা ভাষা ও সাহিত্য ব্যাংক: **৪০৬টি — LOCKED**। Validator-এ ঠিক ৪০৬টি থাকার শর্ত যোগ করা হয়েছে; malformed ০ এবং canonical exact duplicate ০।
- English grammar/vocabulary: **৪৬৩টি — LOCKED**। Validator-এ ঠিক ৪৬৩টি থাকার শর্ত যোগ করা হয়েছে। কোনো ইংরেজি প্রশ্ন পরিবর্তন করা হয়নি।
- মূল সাধারণ কুইজ ব্যাংকে নতুন সংযোজন ব্যাচ ০৩ ও পরিপূরক ব্যাচ যোগের পর সর্বশেষ CI-তে **১,০১৭টি স্বতন্ত্র প্রশ্ন** এবং **১,০০০টি facts** পাওয়া গেছে। প্রশ্নের ন্যূনতম ১,০০০ লক্ষ্যমাত্রা ১৭টি বেশি পূরণ হয়েছে।
- সর্বশেষ CI run `45633211550`: content validation PASSED; regression safety PASSED; release UI smoke checks **১৭/১৭ PASSED**। বাংলার ৪০৬ এবং ইংরেজির ৪৬৩—দুটিই অপরিবর্তিত ও locked হিসেবে যাচাই হয়েছে।
- নতুন সাধারণ কুইজ প্রশ্ন সংযোজনের পর মূল কুইজ ব্যাংকের duplicate filter সক্রিয় ছিল; চূড়ান্ত ১,০১৭ গণনা runtime unique question count।
- APK build/upload ধাপ এই run-এ skipped ছিল; তাই CI validation সফল হলেও নতুন APK তৈরি হয়েছে—এমন দাবি করা হচ্ছে না।
- পরবর্তী পরিবর্তন: নতুন সাধারণ জ্ঞান সংযোজন বা বাংলা/ইংরেজি locked ব্যাংকে কোনো পরিবর্তন করার আগে আলাদা অনুমোদন ও পুনঃঅডিট আবশ্যক।


## Android build trigger — ২৫ নভেম্বর ২০২৬
- ব্যবহারকারীর নির্দেশে validation সফল হওয়ার পর Android Debug APK, signed Release APK এবং Play Store AAB তৈরির workflow trigger করা হয়েছে। Build সফল ও artifacts প্রকাশিত না হওয়া পর্যন্ত APK প্রস্তুত বলে গণ্য হবে না।

## বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান — ব্যাচ ১–৫ অডিট (২৫ নভেম্বর ২০২৬)
- নিরীক্ষার পরিধি: expansion batch ১–৫ (job-prep-expansion.js, job-prep-expansion-02.js থেকে -05.js)। এই পাঁচ ফাইলে মোট ১৬৪টি রেকর্ড শনাক্ত; এর মধ্যে বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান বিভাগের ১৭টি প্রশ্ন আলাদা করে পর্যালোচনা করা হয়েছে।
- ১৭টি প্রশ্নের প্রশ্নবাক্য, চারটি বিকল্প, উত্তরসূচি ও ব্যাখ্যা যাচাই করা হয়েছে। প্রাথমিক ব্যাচগুলোর নিজেদের মধ্যে canonical full signature-এ exact duplicate পাওয়া যায়নি।
- মূল job-prep-suite.js-এর সাধারণ জ্ঞান ব্যাংকের সঙ্গে তুলনায় ২টি exact duplicate পাওয়া যায়: extra_094 (WHO সদর দপ্তর) এবং extra_131 (জাতীয় কবি)। দুই অতিরিক্ত কপি সংশ্লিষ্ট expansion ফাইল থেকে বাদ দেওয়া হয়েছে; মূল suite-এর প্রশ্ন অক্ষত আছে।
- অবশিষ্ট ১৫টি স্বতন্ত্র প্রশ্ন রাখা হয়েছে। ভিন্ন option set-সহ একই প্রশ্নবাক্যের ক্ষেত্রে নির্ধারিত নীতি অনুসরণ করে সেগুলো রাখা হয়েছে।
- বিষয়বস্তু সংশোধন/স্পষ্টীকরণ:
  1. extra_012: বঙ্গবন্ধু স্যাটেলাইট-১ প্রশ্নের ভুল সাহিত্য-সংক্রান্ত source label সংশোধন করে পররাষ্ট্র মন্ত্রণালয়ের তথ্যসূত্র যুক্ত।
  2. extra_015: সেন্ট মার্টিনকে সরাসরি “প্রবাল দ্বীপ” বলার ভূতাত্ত্বিক অস্পষ্টতা দূর করে প্রবাল কলোনি পাওয়া যায়—এভাবে প্রশ্ন ও ব্যাখ্যা নির্দিষ্ট করা হয়েছে।
  3. extra_091: বাংলাদেশের বর্তমান মানচিত্রবিহীন পতাকার নকশা চূড়ান্ত করার কৃতিত্ব সম্পর্কে প্রশ্নটি স্পষ্ট করা হয়েছে; ১৯৭১ সালের প্রথম পতাকায় শিবনারায়ণ দাসের ভূমিকার কথাও ব্যাখ্যায় আলাদা করা হয়েছে।
- যাচাই করা গুরুত্বপূর্ণ তথ্যের মধ্যে বঙ্গবন্ধু-১, সংবিধান গৃহীত/কার্যকর হওয়ার তারিখ, WHO সদর দপ্তর, জাতিসংঘ প্রতিষ্ঠা, SAARC প্রতিষ্ঠা, বিশ্বব্যাংকের সদর দপ্তর, জাতীয় স্মৃতিসৌধের স্থপতি এবং খালেদা জিয়ার প্রথম নারী প্রধানমন্ত্রী হওয়া অন্তর্ভুক্ত।
- GitHub-এ সংরক্ষিত commits: b0d5a39, e08ef15, 69b54f6। এই ধাপের অডিট সম্পন্ন; পরবর্তী ধাপে যাওয়ার আগে এই রেকর্ডই ধারাবাহিকতার ভিত্তি।
- এই ফলাফল কেবল বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান বিষয়ের ব্যাচ ১–৫-এর জন্য; ব্যাচ ৬–১০ এখনো শুরু হয়নি।

## বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান — ব্যাচ ৬–১০ অডিট (২৫ নভেম্বর ২০২৬)
- ধারাবাহিকতা যাচাই: এই কাজের আগে আগের ব্যাচ ১–৫ অডিট রেকর্ড পুনরায় পড়া হয়েছে। আগের ধাপের ১৫টি রাখা প্রশ্ন এবং মূল suite-এর প্রশ্নসমূহকে তুলনার ভিত্তি হিসেবে নেওয়া হয়েছে।
- নিরীক্ষার পরিধি: expansion batch ৬–১০। পাঁচটি ফাইলে মোট ১৫২টি রেকর্ড; এর মধ্যে ব্যাচ ৬–৮-এ এই বিষয়ের কোনো প্রশ্ন নেই, ব্যাচ ৯-এ ৪টি এবং ব্যাচ ১০-এ ৫টি—মোট ৯টি প্রশ্ন পাওয়া গেছে।
- ৯টি প্রশ্নের প্রশ্নবাক্য, চারটি বিকল্প, সঠিক উত্তরসূচি ও ব্যাখ্যা পরীক্ষা করা হয়েছে। ৯টির মধ্যে canonical full signature-এ নিজেদের মধ্যে exact duplicate ০; ব্যাচ ১–৫ এবং মূল suite-এর সঙ্গে exact duplicate ০। সব ৯টি প্রশ্ন রাখা হয়েছে।
- তথ্য যাচাইয়ে ব্যবহৃত প্রামাণ্য রেফারেন্স: বাংলাদেশের সংবিধানের প্রস্তাবনা ও ১৫৩ অনুচ্ছেদ (গৃহীত ৪ নভেম্বর ১৯৭২; কার্যকর ১৬ ডিসেম্বর ১৯৭২), বাংলাদেশ জাতীয় সংসদের সরকারি ব্রোশিওর (প্রথম সংসদের প্রথম অধিবেশন ৭ এপ্রিল ১৯৭৩), সুপ্রিম কোর্টের বার্ষিক প্রতিবেদন (প্রথম প্রধান বিচারপতি বিচারপতি আবু সাদাত মোহাম্মদ সায়েম), Banglapedia (মুজিবনগর সরকারের ভারপ্রাপ্ত রাষ্ট্রপতি সৈয়দ নজরুল ইসলাম; জাতীয় স্মৃতিসৌধের স্থপতি সৈয়দ মঈনুল হোসেন), WHO (জেনেভা সদর দপ্তর), FAO (রোম সদর দপ্তর), ICJ (দ্য হেগে আসন)।
- সংশোধন: extra_370-এ জাতীয় স্মৃতিসৌধের স্থপতির নামের বিকল্প ও ব্যাখ্যা অসম্পূর্ণ ছিল; পূর্ণ নাম “সৈয়দ মঈনুল হোসেন” করা হয়েছে। Banglapedia-এর প্রামাণ্য নিবন্ধের সূত্রও যুক্ত করা হয়েছে।
- GitHub commit: 446b784683dedf3040b0c8e62a7131b370cc40f6 (ব্যাচ ১০-এর নাম সংশোধন)। এই অডিট-রেকর্ডের commit এই আপডেটের সঙ্গে যুক্ত।
- এই ফলাফল কেবল বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান বিষয়ের ব্যাচ ৬–১০-এর জন্য। পরবর্তী ধাপ ব্যাচ ১১–১৫; শুরু করার আগে এই রেকর্ড ও বর্তমান ফাইল পুনরায় পরীক্ষা করতে হবে।


## বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান — ব্যাচ ১–১০ মাস্টার একত্রীকরণ এবং ব্যাচ ১১–১৫ অডিট (২৫ নভেম্বর ২০২৬)
- পূর্ববর্তী অডিট রেকর্ড ও ব্যাচ ১–১০-এর ১০টি expansion ফাইল পুনরায় পড়ে প্রশ্নগুলো একত্র করা হয়েছে। ব্যাচ ১–৫ থেকে মূল suite-এর সঙ্গে হুবহু মিলে যাওয়া অতিরিক্ত কপি extra_094 ও extra_131 বাদ; ব্যাচ ৬–১০-এর ৯টি প্রশ্নের কোনো exact duplicate পাওয়া যায়নি। ব্যাচ ১–১০-এর consolidated expansion master-এ ২৪টি স্বতন্ত্র প্রশ্ন রাখা হয়েছে। এই ২৪টির মধ্যে exact duplicate ০।
- ব্যাচ ১১–১৫-এর পাঁচটি ফাইল পরীক্ষা: মোট ১৭৫টি রেকর্ড; ব্যাচ ১১–১৪-এ এই বিষয়ের প্রশ্ন ০, ব্যাচ ১৫-এ ৪টি। চারটির প্রশ্ন, চারটি বিকল্প, উত্তরসূচি ও ব্যাখ্যা যাচাই করা হয়েছে।
- extra_557 (জাতিসংঘের সদর দপ্তর কোথায় অবস্থিত) মূল job-prep-suite.js-এ একই প্রশ্নবাক্য, একই option set এবং একই সঠিক উত্তরসহ আগে থেকেই ছিল; তাই নীতিমতে expansion batch 15 থেকে অতিরিক্ত exact duplicate কপিটি বাদ দেওয়া হয়েছে। extra_556, extra_558, extra_559-এর সঙ্গে ১–১০ master-এর canonical full-signature exact duplicate পাওয়া যায়নি। একই বিষয়/উত্তর হলেও ভিন্ন option set থাকায় প্রশ্নগুলো রাখা হয়েছে।
- যাচাইকৃত উৎস সংযুক্ত: extra_556 — বাংলাদেশ আইন মন্ত্রণালয়ের সরকারি আইনভান্ডার, সংবিধানের ১৫৩ অনুচ্ছেদ (কার্যকর ১৬ ডিসেম্বর ১৯৭২); extra_558 — WHO-এর ইতিহাস (সংবিধান কার্যকর ৭ এপ্রিল ১৯৪৮); extra_559 — বাংলাদেশ জাতীয় সংসদের সরকারি পরিচিতি (৩০০টি সরাসরি নির্বাচিত সাধারণ আসন; সংরক্ষিত নারী আসন পৃথক)।
- ব্যাচ ১১–১৫ থেকে রাখা হয়েছে ৩টি; বাদ ১টি exact duplicate। সম্মিলিত ১–১৫ expansion master: ২৭টি স্বতন্ত্র প্রশ্ন (১–১০: ২৪ + ১১–১৫: ৩)।
- মাস্টার ফাইল: GK_AUDIT_MASTER_01_15.json। ব্যাচ ১৫-এর duplicate অপসারণ ও উৎস সংযোজন commit: 290a7af940f60fa5fe32f18e0ef270ec170cc5c0। মাস্টার ফাইল commit: 3e903828ada701fe8b36edeeb386ec3b06fe54f2।
- পরবর্তী ধাপ: ব্যাচ ১৬–২০। শুরু করার আগে এই master ও audit status পুনরায় পড়তে হবে; এরপর ১৬–২০-কে ১–১৫ master-এর সঙ্গে একই canonical exact-signature নীতিতে তুলনা করতে হবে।


## বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান — ব্যাচ ১৬–২০ অডিট (২৫ নভেম্বর ২০২৬)
- ধারাবাহিকতা: ব্যাচ ১১–১৫-এর audit status এবং GK_AUDIT_MASTER_01_15.json পুনরায় পরীক্ষা করে তারপর ব্যাচ ১৬–২০ খোলা হয়েছে। আগের master-এ ২৭টি স্বতন্ত্র expansion প্রশ্ন ছিল।
- ব্যাচ ১৬–১৯-এ এই বিষয়ের প্রশ্ন ০; ব্যাচ ২০-এ ৯টি। পাঁচটি ফাইলে মোট ১৬০টি রেকর্ড; ৯টি GK প্রশ্নের প্রশ্নবাক্য, চারটি বিকল্প, উত্তরসূচি ও ব্যাখ্যা যাচাই করা হয়েছে।
- extra_735 (ICJ কোথায় অবস্থিত) ১–১৫ master-এর extra_374-এর সঙ্গে একই প্রশ্ন, একই চারটি option set (ক্রম আলাদা) ও একই উত্তর; তাই অতিরিক্ত exact duplicate কপি বাদ। বাকি ৮টির সঙ্গে master ১–১৫-এ canonical full-signature exact duplicate নেই। একই বিষয় বা প্রশ্নের কাছাকাছি শব্দ থাকলেও option set ভিন্ন হলে নির্ধারিত নীতিতে রাখা হয়েছে।
- extra_737-এ জাতীয় স্মৃতিসৌধের স্থপতির নামের বাংলা বানান আগের যাচাইকৃত পূর্ণ বানানের সঙ্গে সামঞ্জস্য করে “সৈয়দ মঈনুল হোসেন” করা হয়েছে।
- ৮টি রাখা প্রশ্নে উৎস যুক্ত: UN Headquarters (জাতিসংঘ), NOAA (প্রশান্ত মহাসাগর), SAARC Secretariat (প্রতিষ্ঠা ১৯৮৫), World Bank (Washington, DC), Ceramic Bangladesh-এর স্থাপত্য-নিবন্ধ (স্থপতি), Britannica (Andes), European Union (euro), Bangladesh Mission (Victory Day)।
- ব্যাচ ১৬–২০: মোট ৯টি GK, ১টি exact duplicate বাদ, ৮টি রাখা। সম্মিলিত ব্যাচ ১–২০ master: ৩৫টি স্বতন্ত্র expansion প্রশ্ন (১–১৫: ২৭ + ১৬–২০: ৮)।
- মাস্টার ফাইল: GK_AUDIT_MASTER_01_20.json। ব্যাচ ২০ সংশোধন/duplicate removal commit: 9e55868f1b0761c099fa5d96a277964828b6e32f। মাস্টার commit: 6fd61d47f324592bccbcf488ec89e68fcd272c88।
- পরবর্তী ধাপ ব্যাচ ২১–২৫। শুরু করার আগে এই master ও audit status পুনরায় পড়ে তারপর একই নিয়মে তুলনা করতে হবে।


## বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান — Expansion Batch ১–৫৬ চূড়ান্ত লক (২৫ নভেম্বর ২০২৬)

- **অডিটের পরিধি:** রিপোজিটরিতে বর্তমানে থাকা Expansion Batch ১–৫৬। Batch ৫৭–৬০ রিপোজিটরিতে নেই; তাই সেগুলো এই লকের আওতাভুক্ত নয়।
- **চূড়ান্ত মাস্টার:** `GK_AUDIT_MASTER_01_56.json` — মোট **১১০টি স্বতন্ত্র Expansion প্রশ্ন**। Batch ৫৬-এ ৭৮টি source record পরীক্ষা করা হয়েছে; তার মধ্যে বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞানের প্রশ্ন ০, তাই নতুন সংযোজন/ডুপ্লিকেট অপসারণ ০।
- **ডুপ্লিকেট হিসাব:** পূর্ববর্তী batch audit ledger অনুযায়ী হুবহু duplicate copy বাদ **৪টি**; রাখা **১১০টি**। একই category + normalized question + sorted option set + correct answer দিয়ে মাস্টার পুনরায় গণনায় duplicate group/copy **০/০**।
- **গঠনগত পুনঃযাচাই:** ১১০টি প্রশ্নের ID স্বতন্ত্র ১১০টি; চারটি option নেই এমন প্রশ্ন **০**; ভুল/সীমার বাইরে answer index **০**; ফাঁকা প্রশ্ন **০**।
- **উৎস-মেটাডেটা স্বচ্ছতা:** ১১০টির প্রতিটিতে source label আছে; তবে **৪১টিতে সরাসরি sourceUrl ফাঁকা**। এগুলোকে URL-সহ যাচাইকৃত বলে দাবি করা হচ্ছে না। এই সীমাবদ্ধতা নথিভুক্ত; নতুন উৎস-লিংক যোগ বা তথ্য পরিবর্তন করতে হলে পৃথক অনুমোদিত update ও পুনঃযাচাই লাগবে।
- **GitHub প্রমাণ:** মাস্টার ফাইল blob SHA `b76c8c49ca81675d371ff61dcc06973f86669fe8`; Batch ৫৬ closure commit `2e299e4b0f9cebcc45db8fb852b1855034b86826`; সংশ্লিষ্ট GitHub Actions run `45651912033` — **completed / success**।
- **সিদ্ধান্ত:** বাংলাদেশ ও আন্তর্জাতিক সাধারণ জ্ঞান বিষয়ের **বর্তমানে উপলব্ধ Expansion Batch ১–৫৬ audit — LOCKED**। বিদ্যমান মাস্টার/প্রশ্ন অপরিবর্তিত থাকবে; কোনো নতুন batch বা সংশোধন এলে এই locked master-এর সঙ্গে তুলনা করে আলাদা audit হবে। এই LOCKED ঘোষণা Expansion master-এর জন্য; এটি মূল `job-prep-suite.js`-এর সব GK প্রশ্নের পূর্ণ runtime factual audit হয়েছে—এমন দাবি নয়।


## সাধারণ বিজ্ঞান — Expansion Batch ১–৫৬ ও baseline সমন্বিত চূড়ান্ত LOCK (২৫ নভেম্বর ২০২৬)
- মূল baseline: ১৩০টি; পাঁচটি audit group-এ ১৩০/১৩০ content-audited।
- Expansion candidate: ১১৯টি; exact duplicate copy বাদ: ১৭টি; স্বতন্ত্র expansion retained: ১০২টি।
- চূড়ান্ত master `SCIENCE_AUDIT_MASTER_01_56.json`: ২৩২টি (১৩০ baseline + ১০২ expansion)। Batch ৫৬-এ সাধারণ বিজ্ঞানের candidate ০; repository-তে batch ৫৭–৬০ নেই।
- সীমিত final correction: batch ৩৯-এর `extra_1346`-কে `suite_45`-এর exact duplicate হিসেবে বাদ দেওয়া হয়েছে। NFKC compatibility normalization-এ `B₁` ও `B1` সমতুল্য; প্রশ্ন, সম্পূর্ণ option set ও keyed answer একই। Source expansion file থেকেও কপিটি সরানো হয়েছে।
- Final reconciliation: missing/empty options ০; malformed option count ০; duplicate option ০; invalid answer index ০; missing explanation ০; missing source URL ০; integrated exact duplicate signature ০।
- বিস্তারিত: `SCIENCE_AUDIT_BATCH_36_40.md`, `SCIENCE_AUDIT_FINAL_RECONCILIATION.md`, `SCIENCE_AUDIT_BATCH_56_CLOSURE.md`।
- সিদ্ধান্ত: সাধারণ বিজ্ঞান বিষয়বস্তুর audit **COMPLETE — LOCKED**। এই correction-এ পুরো ২৩২টি প্রশ্ন নতুন করে audit করা হয়নি; আগের verified master-এ একটি Unicode-normalization duplicate বাদ দিয়ে totals/report সমন্বয় করা হয়েছে।


## সাধারণ বিজ্ঞান — substantive re-audit পুনরায় শুরু (২৫ নভেম্বর ২০২৬)
**গুরুত্বপূর্ণ অবস্থা-সংশোধন:** আগের COMPLETE/LOCKED ঘোষণাকে আপাতত স্থগিত করা হয়েছে। পূর্ববর্তী রিপোর্টে baseline ১৩০টি প্রশ্ন content-audited বলা থাকলেও, প্রতিটি প্রশ্ন-উত্তর-ব্যাখ্যা নতুন করে যাচাইয়ের যথেষ্ট প্রমাণ দেখানো হয়নি। তাই পুরোনো LOCKED status-কে পূর্ণ factual re-audit-এর বিকল্প হিসেবে ধরা হবে না।

- ব্যবহারকারীর নির্ধারিত পদ্ধতি অনুসারে পাঁচ ব্যাচ করে এগোনো হবে: ১–৫; তারপর ৬–১০-কে ১–৫-এর সঙ্গে তুলনা; তারপর ১–১০-এর সঙ্গে ১১–১৫; এভাবে ধারাবাহিকভাবে।
- **Expansion Batch ১–৫ পুনঃযাচাই সম্পন্ন:** ১৭টি candidate; পূর্বে exact duplicate হিসেবে বাদ ৩টি; retained ১৪টি। retained ১৪টির তথ্য, অপশন, সঠিক উত্তর ও ব্যাখ্যা যাচাই করা হয়েছে; নতুন correction ০।
- Batch ১–৫-এর retained ১৪টির সঙ্গে baseline ১৩০টির পূর্ণ exact-signature তুলনায় নতুন exact duplicate ০।
- **Baseline-এর ১৩০টি প্রশ্নের পূর্ণ factual re-audit এখনো বাকি।** তাই সাধারণ বিজ্ঞান এখনো LOCKED নয়।
- বিস্তারিত checkpoint: `SCIENCE_REAUDIT_BATCH_01_05.md`; master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- পরবর্তী কাজ: Expansion Batch ৬–১০ যাচাই করে Batch ১–৫-এর সঙ্গে তুলনা; তারপর ১–১০-এর সমন্বিত সেটের সঙ্গে ১১–১৫ তুলনা।


### সাধারণ বিজ্ঞান — পরবর্তী checkpoint: Expansion Batch ৬–১০ সম্পন্ন
- Batch ৬–১০-এর ১৫টি candidate থেকে পূর্বে exact duplicate হিসেবে বাদ ২টি; retained ১৩টি substantive fact-check, option, answer ও explanation review সম্পন্ন।
- Batch ৬–১০-এর ১৩টি retained প্রশ্নের সঙ্গে Batch ১–৫-এর ১৪টি retained প্রশ্ন এবং baseline ১৩০টির পূর্ণ exact-signature তুলনায় নতুন exact duplicate **০টি**।
- ৫টি বিষয়গত overlap আলাদা করে নথিভুক্ত করা হয়েছে (ampere, pure-water pH, insulin, RBC oxygen transport, speed of light)। ভিন্ন option set/wording হওয়ায় বর্তমান exact-signature policy-তে এগুলো মুছে দেওয়া হয়নি।
- Expansion Batch ১–১০ মিলিয়ে substantive re-audit: **২৭টি retained প্রশ্ন সম্পন্ন**। কোনো তথ্য/উত্তর/ব্যাখ্যা সংশোধন করা হয়নি।
- বিস্তারিত: `SCIENCE_REAUDIT_BATCH_06_10.md`; master-এ প্রশ্নভিত্তিক re-audit marker সংরক্ষিত।
- **পরবর্তী ধাপ:** Batch ১১–১৫ যাচাই করে ১–১০-এর সমন্বিত set-এর সঙ্গে তুলনা।
- Baseline ১৩০টির পূর্ণ factual re-audit বাকি; সাধারণ বিজ্ঞান এখনো **IN PROGRESS — NOT LOCKED**।


### সাধারণ বিজ্ঞান — পুনঃযাচাই checkpoint: Expansion Batch ১১–১৫ সম্পন্ন
- Batch ১১–১৪-এর মূল source file-এ সাধারণ বিজ্ঞানের প্রশ্ন ছিল ০; Batch ১৫-তে ছিল ২টি। দুইটিই master-এ উপস্থিত এবং দুটিই source-সহ পুনঃযাচাই করা হয়েছে।
- retained ২টি প্রশ্নের তথ্য, চারটি অপশন, keyed answer ও ব্যাখ্যা সঠিক; correction ০; group duplicate removal ০।
- Batch ১–১০-এর সমন্বিত set ও baseline ১৩০টির সঙ্গে পূর্ণ exact-signature তুলনায় নতুন exact duplicate **০**।
- extra_560 একই insulin secretion fact নিয়ে extra_016/extra_198/extra_335-এর conceptual repetition; কিন্তু full option set/wording আলাদা, তাই exact duplicate হিসেবে বাদ দেওয়া হয়নি।
- Expansion Batch ১–১৫ মিলিয়ে substantive re-audit: **২৯টি retained প্রশ্ন সম্পন্ন**।
- বিস্তারিত: `SCIENCE_REAUDIT_BATCH_11_15.md`; master-এ দুই প্রশ্নের re-audit marker এবং progress সংরক্ষিত।
- পরবর্তী ধাপ: Batch ১৬–২০ যাচাই করে Batch ১–১৫-এর সমন্বিত set-এর সঙ্গে তুলনা।
- Baseline ১৩০টির পূর্ণ factual re-audit বাকি; সাধারণ বিজ্ঞান এখনো **IN PROGRESS — NOT LOCKED**।


## সাধারণ বিজ্ঞান — প্রকৃত পুনঃযাচাই (২৫ নভেম্বর ২০২৬)
- Expansion Batch ১–৫: ১৪টি retained প্রশ্ন পুনঃযাচাইকৃত।
- Expansion Batch ৬–১০: ১৩টি retained প্রশ্ন পুনঃযাচাইকৃত।
- Expansion Batch ১১–১৫: ২টি retained প্রশ্ন পুনঃযাচাইকৃত।
- Expansion Batch ১৬–২০: ৭টি retained প্রশ্ন পুনঃযাচাইকৃত; এই গ্রুপে আগের set-এর সঙ্গে নতুন exact duplicate ০টি; নতুন correction ০।
- Expansion ১–২০-এ পুনঃযাচাইকৃত retained প্রশ্ন মোট ৩৬টি।
- Master status: REVALIDATION_IN_PROGRESS_NOT_LOCKED; baseline ১৩০টির প্রকৃত substantive re-audit ও পরবর্তী expansion group বাকি।
- বিস্তারিত: SCIENCE_REAUDIT_BATCH_16_20.md


## সাধারণ বিজ্ঞান — প্রকৃত পুনঃযাচাই checkpoint: Expansion Batch ২১–২৫
- Batch ২১–২৫ source candidate ১৬টি; retained ১৩টি।
- Duplicate copy ৩টি: extra_804→suite_70, extra_805→extra_782 (আগের ledger); extra_890→extra_786 (এই checkpoint-এ শনাক্ত ও source/master থেকে অপসারিত)।
- Retained ১৩টির তথ্য, অপশন, keyed answer ও ব্যাখ্যা যাচাই; নতুন factual correction ০।
- Expansion Batch ১–২৫-এ পুনঃযাচাইকৃত retained প্রশ্ন মোট ৪৯টি।
- Baseline ১৩০টির প্রকৃত substantive re-audit বাকি; সাধারণ বিজ্ঞান এখনো REVALIDATION_IN_PROGRESS_NOT_LOCKED।
- বিস্তারিত: SCIENCE_REAUDIT_BATCH_21_25.md


## সাধারণ বিজ্ঞান — প্রকৃত পুনঃযাচাই checkpoint: Expansion Batch ২৬–৩০ (২৬ নভেম্বর ২০২৬)
- Batch ২৬–৩০-এর মোট science candidate ৬টি; পূর্বে exact duplicate হিসেবে বাদ ৩টি: extra_986→suite_5, extra_1077→extra_560, extra_1079→extra_890।
- Retained ৩টি (extra_921, extra_949, extra_1078)-এর তথ্য, চারটি অপশন, keyed answer ও ব্যাখ্যা পুনরায় যাচাই; নতুন correction ০।
- Batch ১–২৫-এর সঙ্গে পূর্ণ exact-signature তুলনায় নতুন duplicate ০। বিষয়গত overlap চিহ্নিত হয়েছে, কিন্তু wording/option set আলাদা হওয়ায় exact duplicate নীতিতে বাদ দেওয়া হয়নি।
- Expansion Batch ১–৩০-এ substantive re-audit সম্পন্ন retained প্রশ্ন মোট **৫২টি**।
- Baseline ১৩০টি প্রশ্নের প্রকৃত factual re-audit এখনো বাকি; সাধারণ বিজ্ঞান **REVALIDATION_IN_PROGRESS_NOT_LOCKED**।
- বিস্তারিত: SCIENCE_REAUDIT_BATCH_26_30.md; master: SCIENCE_AUDIT_MASTER_01_56.json।
- পরবর্তী ধাপ: Expansion Batch ৩১–৩৫।


## সাধারণ বিজ্ঞান — প্রকৃত পুনঃযাচাই checkpoint: Expansion Batch ৩১–৩৫ (২৬ নভেম্বর ২০২৬)
- Candidate ১৩টি; আগে থেকেই exact duplicate হিসেবে বাদ ২টি: extra_1133→suite_104, extra_1221→suite_86; retained ১১টি।
- retained ১১টির তথ্য, চারটি অপশন, keyed answer ও ব্যাখ্যা পুনরায় পরীক্ষা; extra_1223-এর wording নির্ভুল করা হয়েছে, extra_1138-এর ব্যাখ্যা স্পষ্ট করা হয়েছে।
- Batch ১–৩০-এর সঙ্গে তুলনায় নতুন exact duplicate ০; তিনটি conceptual overlap flag master-এ সংরক্ষিত।
- Expansion Batch ১–৩৫-এ substantive re-audit সম্পন্ন retained প্রশ্ন **৬৩টি**; মোট candidate **৭৭টি**।
- Baseline ১৩০টির প্রকৃত substantive re-audit বাকি; অবস্থা **REVALIDATION_IN_PROGRESS_NOT_LOCKED**।
- বিস্তারিত: SCIENCE_REAUDIT_BATCH_31_35.md; master: SCIENCE_AUDIT_MASTER_01_56.json।
- পরবর্তী ধাপ: Expansion Batch ৩৬–৪০।


## সাধারণ বিজ্ঞান — প্রকৃত পুনঃযাচাই checkpoint: Expansion Batch ৩৬–৪০ (২৬ নভেম্বর ২০২৬)
- Batch ৩৬: সাধারণ বিজ্ঞানের প্রশ্ন ০; Batch ৩৭: ৬টি; Batch ৩৮: ৩টি; Batch ৩৯: বর্তমান source-এ ০ (আগে বাদ দেওয়া ২টি duplicate ledger-এ); Batch ৪০: ২টি।
- ঐতিহাসিক candidate ১৩টি; আগে অপসারিত exact duplicate ২টি: extra_1345→suite_33, extra_1346→suite_45; retained ১১টি।
- retained ১১টির প্রশ্ন, চারটি option, keyed answer ও explanation প্রকৃতপক্ষে পুনঃযাচাই; নতুন correction ০।
- Batch ৩৬–৪০-এর retained set-এর সঙ্গে baseline ও consolidated Batch ১–৩৫-এর canonical exact-signature তুলনায় নতুন duplicate ০।
- বিষয়গত overlap আলাদাভাবে নথিভুক্ত: DNA full form, room-temperature liquid metal, sound in vacuum, RBC function, photosynthesis organelle; option set ভিন্ন হওয়ায় exact duplicate হিসেবে বাদ নয়।
- Expansion Batch ১–৪০ পর্যন্ত substantive re-audit সম্পন্ন retained প্রশ্ন **৭৪টি**। baseline-এর ১৩০টি প্রশ্নের প্রকৃত factual re-audit এখনো বাকি।
- Master: `SCIENCE_AUDIT_MASTER_01_56.json`; বিস্তারিত: `SCIENCE_REAUDIT_BATCH_36_40.md`।
- অবস্থা: **REVALIDATION_IN_PROGRESS_NOT_LOCKED**। পরবর্তী ধাপ: Batch ৪১–৪৫।


## সাধারণ বিজ্ঞান — প্রকৃত পুনঃযাচাই checkpoint: Expansion Batch ৪১–৪৫ (২৬ নভেম্বর ২০২৬)
- Batch ৪১: ২টি; Batch ৪২: ৫টি; Batch ৪৩: ২টি; Batch ৪৪: ০টি; Batch ৪৫: বর্তমান source-এ ০টি (আগে অপসারিত ১টি duplicate ledger-এ)।
- ঐতিহাসিক candidate ১০টি; আগে অপসারিত exact duplicate ১টি: extra_1531→extra_786; retained ৯টি।
- retained ৯টির প্রশ্নের তথ্য, চারটি option, keyed answer ও explanation প্রকৃতপক্ষে পুনঃযাচাই; নতুন correction ০।
- Batch ৪১–৪৫-এর retained set-এর সঙ্গে consolidated Batch ১–৪০-এর canonical exact-signature তুলনায় নতুন duplicate ০।
- বিষয়গত overlap আলাদাভাবে নথিভুক্ত: RBC-এর প্রধান কাজ, অগ্ন্যাশয় থেকে ইনসুলিন নিঃসরণ, কক্ষ তাপমাত্রায় তরল ধাতু; option set ভিন্ন হওয়ায় exact duplicate হিসেবে বাদ নয়।
- Expansion Batch ১–৪৫ পর্যন্ত substantive re-audit সম্পন্ন retained প্রশ্ন **৮৩টি**। baseline-এর ১৩০টি প্রশ্নের প্রকৃত factual re-audit এখনো বাকি।
- Master: `SCIENCE_AUDIT_MASTER_01_56.json`; বিস্তারিত: `SCIENCE_REAUDIT_BATCH_41_45.md`।
- অবস্থা: **REVALIDATION_IN_PROGRESS_NOT_LOCKED**। পরবর্তী ধাপ: Batch ৪৬–৫০।


## সাধারণ বিজ্ঞান — প্রকৃত পুনঃযাচাই checkpoint: Expansion Batch ৪৬–৫০ (২৬ নভেম্বর ২০২৬)
- Batch ৪৬–৫০-এ সাধারণ বিজ্ঞানের candidate ১০টি; retained ১০টি।
- প্রতিটি retained প্রশ্নের তথ্য, চারটি option, keyed answer ও explanation প্রকৃতপক্ষে যাচাই করা হয়েছে; নতুন correction ০।
- consolidated Batch ১–৪৫-এর সঙ্গে canonical exact-signature তুলনায় নতুন exact duplicate ০; এই গ্রুপের ভেতরেও exact duplicate ০।
- extra_1649 বনাম extra_1561-সহ বিষয়গত overlap আলাদা করে নথিভুক্ত; stem/option-set পূর্ণভাবে না মেলায় exact duplicate হিসেবে বাদ দেওয়া হয়নি।
- Expansion Batch ১–৫০ পর্যন্ত substantive re-audit সম্পন্ন retained প্রশ্ন **৯৩টি**; science candidate **১১০টি**।
- Baseline ১৩০টির প্রকৃত factual re-audit এখনো বাকি; অবস্থা **REVALIDATION_IN_PROGRESS_NOT_LOCKED**।
- বিস্তারিত: `SCIENCE_REAUDIT_BATCH_46_50.md`; master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- পরবর্তী ধাপ: Expansion Batch ৫১–৫৫।


## সাধারণ বিজ্ঞান — প্রকৃত পুনঃযাচাই checkpoint: Expansion Batch ৫১–৫৫ (২৬ নভেম্বর ২০২৬)
- Batch ৫১: ২টি; Batch ৫২: ৩টি; Batch ৫৩: ৩টি; Batch ৫৪–৫৫: ০টি; মোট science candidate ৮টি।
- retained ৮টির প্রশ্নের তথ্য, চারটি option, keyed answer ও explanation পুনরায় যাচাই; নতুন correction ০।
- consolidated Batch ১–৫০ (baseline-সহ)-এর সঙ্গে canonical exact-signature তুলনায় নতুন exact duplicate ০; গ্রুপের ভেতরেও exact duplicate ০।
- insulin beta-cell, sound speed in iron, blood pH, xylem, kidney filtration ইত্যাদি বিষয়ে conceptual overlap আলাদা করে নথিভুক্ত; ভিন্ন wording/option set থাকায় exact duplicate হিসেবে বাদ নয়।
- Expansion Batch ১–৫৫ পর্যন্ত substantive re-audit সম্পন্ন retained প্রশ্ন **১০১টি**; science candidate **১১৮টি**।
- Baseline ১৩০টির প্রকৃত factual re-audit এখনো বাকি; অবস্থা **REVALIDATION_IN_PROGRESS_NOT_LOCKED**।
- বিস্তারিত: `SCIENCE_REAUDIT_BATCH_51_55.md`; master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- Expansion-এর পরবর্তী ধাপ শেষ; এখন baseline ১৩০টি প্রশ্নকে ২৬টি করে পাঁচ গ্রুপে substantive re-audit করতে হবে: ১–২৬, ২৭–৫২, ৫৩–৭৮, ৭৯–১০৪, ১০৫–১৩০।


## সাধারণ বিজ্ঞান — Baseline substantive re-audit checkpoint: Questions ১–২৬ (২৬ নভেম্বর ২০২৬)
- Baseline master IDs suite_1–suite_26: ২৬টি প্রশ্নের তথ্য, চারটি option, keyed answer ও explanation পুনরায় পরীক্ষা করা হয়েছে।
- retained ২৬টি; factual correction ০; গ্রুপের ভেতরে exact duplicate ০।
- Expansion Batch ১–৫৫ ও baseline-এর বাকি প্রশ্নসহ master-এর অন্য সব প্রশ্নের সঙ্গে canonical exact-signature তুলনায় duplicate ০।
- বিষয়গত overlap (RBC, photosynthesis, boiling point, insulin, kidney, nucleus, vitamin K, blood pH, ozone, thyroxine) আলাদা করে নথিভুক্ত; exact duplicate হিসেবে কোনোটি বাদ নয়।
- Baseline substantive re-audit: **২৬/১৩০**; বাকি **১০৪টি**।
- Expansion substantive re-audit: **১০১টি**; সর্বমোট substantive re-audited **১২৭টি**।
- বিস্তারিত: `SCIENCE_BASELINE_REAUDIT_01_26.md`; master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- অবস্থা: **REVALIDATION_IN_PROGRESS_NOT_LOCKED**। পরবর্তী ধাপ: baseline questions ২৭–৫২।


## সাধারণ বিজ্ঞান — Baseline substantive re-audit checkpoint: Questions ২৭–৫২ (২৬ নভেম্বর ২০২৬)
- Baseline master IDs suite_27–suite_52: ২৬টি প্রশ্নের factual claim, চারটি option, keyed answer, explanation ও exact-duplicate signature পরীক্ষা সম্পন্ন।
- retained ২৬টি; factual correction ০; group-এর ভেতরে exact duplicate ০।
- Baseline ১–২৬ এবং Expansion Batch ১–৫৫-সহ master-এর অন্য সব প্রশ্নের সঙ্গে canonical exact-signature তুলনায় duplicate ০।
- RBC, xylem, insulin, mitochondria, blood pH, chloroplast, largest gland, water formula, boiling point ও vitamin K বিষয়ে conceptual overlap flag করা হয়েছে; ভিন্ন stem/option set থাকায় বাদ নয়।
- Baseline substantive re-audit: **৫২/১৩০**; বাকি **৭৮টি**।
- Expansion substantive re-audit: **১০১টি**; সর্বমোট substantive re-audited **১৫৩টি**।
- বিস্তারিত: `SCIENCE_BASELINE_REAUDIT_27_52.md`; master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- অবস্থা: **IN_PROGRESS_NOT_LOCKED**। পরবর্তী ধাপ: baseline questions ৫৩–৭৮।


## সাধারণ বিজ্ঞান — Baseline substantive re-audit checkpoint: Questions ৫৩–৭৮ (২৬ নভেম্বর ২০২৬)
- Baseline master IDs suite_53–suite_78: ২৬টি প্রশ্নের factual claim, চারটি option, keyed answer, explanation ও exact-duplicate signature পরীক্ষা সম্পন্ন।
- retained ২৬টি; factual correction ০; গ্রুপের ভেতরে exact duplicate ০।
- Baseline ১–৫২ এবং Expansion Batch ১–৫৫-সহ master-এর অন্য সব প্রশ্নের সঙ্গে canonical exact-signature তুলনায় duplicate ০।
- RBC উৎপাদন, stomata, সৌরশক্তি, litmus, kidney, xylem, insulin, bile, mercury, sound level, ozone depletion, Newton's third law ও chlorophyll বিষয়ে conceptual overlap flag করা হয়েছে; ভিন্ন stem/option set থাকায় বাদ নয়।
- সূক্ষ্ম নোট: ৪°C পানির সর্বাধিক ঘনত্বের আনুমানিক মান; sound level ডেসিবেলে, physical intensity W/m²-এও প্রকাশ করা যায়; CFC গুরুত্বপূর্ণ কিন্তু একমাত্র ozone-depleting substance নয়।
- Baseline substantive re-audit: **৭৮/১৩০**; বাকি **৫২টি**।
- Expansion substantive re-audit: **১০১টি**; সর্বমোট substantive re-audited **১৭৯টি**।
- বিস্তারিত: `SCIENCE_BASELINE_REAUDIT_53_78.md`; master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- অবস্থা: **IN_PROGRESS_NOT_LOCKED**। পরবর্তী ধাপ: baseline questions ৭৯–১০৪।


## সাধারণ বিজ্ঞান — Baseline substantive re-audit checkpoint: Questions ৭৯–১০৪ (২৬ নভেম্বর ২০২৬)
- Baseline master IDs suite_79–suite_104: ২৬টি প্রশ্নের factual claim, চারটি option, keyed answer, explanation ও exact-duplicate signature পরীক্ষা সম্পন্ন।
- retained ২৬টি; correction ০; group-এর ভেতরে exact duplicate ০; master-এর অন্য প্রশ্নের সঙ্গে exact duplicate ০।
- suite_88 ও suite_103 ফ্লোয়েমে খাদ্য পরিবহন নিয়ে কাছাকাছি/near-duplicate; stem আলাদা হওয়ায় strict exact-duplicate policy-তে দুটিই retained, conceptual overlap flag করা হয়েছে।
- অন্যান্য conceptual overlap: nitrogen, insulin, vitamin K, mitochondria, xylem, RBC/hemoglobin, blood pH এবং O-negative red-cell donor।
- Baseline substantive re-audit: **১০৪/১৩০**; বাকি **২৬টি**। Expansion substantive re-audit: **১০১টি**; সর্বমোট substantive re-audited **২০৫টি**।
- বিস্তারিত: `SCIENCE_BASELINE_REAUDIT_79_104.md`; master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- অবস্থা: **IN_PROGRESS_NOT_LOCKED**। পরবর্তী ধাপ: baseline questions ১০৫–১৩০; তুলনা baseline ১–১০৪ এবং expansion Batch ১–৫৫-এর সঙ্গে।


## সাধারণ বিজ্ঞান — Baseline substantive re-audit checkpoint: Questions ১০৫–১৩০ (২৬ নভেম্বর ২০২৬)
- Baseline master IDs suite_105–suite_130: ২৬টি প্রশ্নের তথ্য, চারটি option, keyed answer, explanation ও exact-duplicate signature যাচাই সম্পন্ন।
- retained ২৬টি; correction ০; group-এর ভেতরে exact duplicate ০; master-এর অন্য প্রশ্নের সঙ্গে exact duplicate ০।
- Vitamin C/scurvy, iron deficiency, mercury, chlorophyll, digestion/bile, atmospheric gases, Venus, fusion, silver conductivity, dry ice, acidic pH, RBC marrow, insulin/glucagon, platelets, stapes, thyroxine ও cellulose বিষয়ে overlap/সূক্ষ্ম নোট প্রতিবেদনে আছে।
- Baseline substantive re-audit: **১৩০/১৩০ সম্পন্ন**। Expansion substantive re-audit: **১০১টি**। সর্বমোট **২৩১টি** substantive fact-check সম্পন্ন; baseline pending ০।
- বিস্তারিত: `SCIENCE_BASELINE_REAUDIT_105_130.md`; master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- **পরবর্তী ধাপ:** সব ২৩১টি প্রশ্নের final integrated reconciliation—full-set exact duplicate, malformed records, missing source URLs, invalid answer indices, source consistency এবং app/runtime integration। এ পর্যায় সফলভাবে যাচাই না হওয়া পর্যন্ত LOCK নয়।
- বর্তমান অবস্থা: **REVALIDATION_COMPLETE_PENDING_FINAL_INTEGRATED_RECONCILIATION_NOT_LOCKED**।


## সাধারণ বিজ্ঞান — Final integrated reconciliation: প্রথম structural pass (২৬ নভেম্বর ২০২৬)
- Master-এ Baseline ১৩০ + Expansion ১০১ = **২৩১টি** retained science question একত্রে scan করা হয়েছে।
- Canonical exact duplicate signature: **০**; malformed records: **০**; missing/invalid HTTP(S) source URL: **০**; invalid answer index: **০**।
- এটি master-এর structural scan মাত্র। Baseline/Expansion source asset-এর সঙ্গে content consistency এবং app/runtime loading/tests এখনো pending; তাই **LOCK নয়**।
- পরবর্তী ধাপ: source assets ↔ master reconciliation, app/runtime code review, available tests/CI run এবং বাস্তব ফল যাচাই।
- বিস্তারিত: `SCIENCE_FINAL_INTEGRATED_RECONCILIATION.md`; master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- অবস্থা: **REVALIDATION_COMPLETE_PENDING_SOURCE_AND_RUNTIME_INTEGRATION_CHECK_NOT_LOCKED**।


## সাধারণ বিজ্ঞান — Baseline source reconciliation ও পূর্ণ সমন্বিত ফল (২৬ নভেম্বর ২০২৬)
- `job-prep-suite.js`-এ ১৫০টি সাধারণ বিজ্ঞান Q() entry পাওয়া গেছে। আগের master-এর সঙ্গে পূর্ণ exact signature মিলে ১৩৩টি entry আগেই represented ছিল।
- অতিরিক্ত ১৭টি active entry (১৪টি নতুন stem + ৩টি same-stem/different-option variant) fact-check করে suite_131–suite_147 হিসেবে master-এ যোগ করা হয়েছে। ১৭টি retained; exact duplicate ০।
- Expansion Batch ১–৫৫-এ ১০২টি science candidate; ১০১টি retained master record এবং একটি documented historical duplicate copy।
- Expansion source explanation-এর ৭টি mismatch সংশোধন করে master-এর audited explanation-এর সঙ্গে source asset মিলানো হয়েছে (batch ২৭, ৩০, ৩২, ৪০, ৪৬, ৪৭)।
- নতুন controlling total: Baseline **১৪৭** + Expansion **১০১** = **২৪৮**; full-set exact duplicate **০**, malformed **০**, missing/invalid source URL **০**, invalid answer index **০**।
- `index.html`-এর script load order এবং batch ৩৩+ merge path পরীক্ষা করা হয়েছে; full-signature `JOB_PREP_QUESTION_KEY` ও ID-based deduplication আছে।
- Android CI-তে content validation, regression safety এবং release UI smoke-check workflow success হয়েছে। তবে বাস্তব Android device/emulator-এ হাতে smoke test এখনো হয়নি।
- বিস্তারিত: `SCIENCE_BASELINE_SOURCE_RECONCILIATION_131_147.md`, `SCIENCE_FINAL_INTEGRATED_RECONCILIATION.md`, master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- **বর্তমান সিদ্ধান্ত: CONTENT REAUDIT COMPLETE — NOT LOCKED.** বাস্তব device/emulator smoke test সফলভাবে সম্পন্ন না হওয়া পর্যন্ত LOCK নয়।


## সাধারণ বিজ্ঞান — চূড়ান্ত source-to-master যাচাই (২৬ নভেম্বর ২০২৬)
- Baseline source `job-prep-suite.js`: ১৫০/১৫০ science Q() entry-এর category, stem, চারটি option, keyed answer ও explanation master-এর সঙ্গে মিলে গেছে। ১১টি baseline explanation source-এ master অনুযায়ী sync করা হয়েছে।
- Expansion batch ১–৫৫: ১০১/১০১ retained science record source/master core fields ও explanation-এ মিলে গেছে; সাতটি explanation source sync করা হয়েছে। একটি পূর্ববর্তী exact duplicate copy ledger-এ নথিভুক্ত।
- নতুন controlling total: Baseline **১৪৭** + Expansion **১০১** = **২৪৮**। Exact duplicate **০**, malformed **০**, missing/invalid source URL **০**, invalid answer index **০**।
- `index.html`-এর load order ও batch ৩৩+ full-signature merge path review করা হয়েছে।
- সর্বশেষ Android CI run: question/model-test validation, legacy/Firebase regression safety, release UI/launcher smoke checks—সব **SUCCESS**।
- বাস্তব Android device/emulator-এ হাতে smoke test এখনো করা হয়নি।
- বিস্তারিত: `SCIENCE_BASELINE_SOURCE_RECONCILIATION_131_147.md`, `SCIENCE_FINAL_INTEGRATED_RECONCILIATION.md`, master: `SCIENCE_AUDIT_MASTER_01_56.json`।
- **সিদ্ধান্ত: CONTENT REAUDIT COMPLETE — NOT LOCKED.** Physical device/emulator smoke test সফল না হওয়া পর্যন্ত LOCK নয়।


## সাধারণ বিজ্ঞান — চূড়ান্ত LOCK checkpoint (২৬ নভেম্বর ২০২৬)
- **LOCKED:** সাধারণ বিজ্ঞান content audit সম্পন্ন — ২৪৮টি record (Baseline ১৪৭ + Expansion ১০১)।
- Full-set exact duplicate **০**; malformed **০**; missing/invalid source URL **০**; invalid answer index **০**।
- Baseline source ১৫০/১৫০ core fields ও explanation master-এর সঙ্গে মিলেছে; ১৭টি active variant নতুন করে audit/master-এ যোগ; ১১টি baseline explanation source-এ sync।
- Expansion retained ১০১/১০১ source/master match; ৭টি explanation sync; একটি historical duplicate copy ledger-এ documented।
- Runtime review: WebView index.html load, JavaScript/DOM storage, script order, NFKC full-signature dedup, category filtering, difficulty ordering, ১৫×১০ level, answer index এবং +১/−০.২৫ scoring যাচাই।
- Latest CI run **45680201874 SUCCESS**: content validation, regression safety এবং release UI/launcher smoke checks সব পাস।
- **সীমাবদ্ধতা:** বাস্তব Android device/emulator-এ হাতে smoke test হয়নি। এই LOCK content audit ও automated/static integration-এর জন্য; এটি Play Store release sign-off নয়।
- পরবর্তী content edit হলে audit পুনরায় খুলতে হবে।
- বিস্তারিত: `SCIENCE_FINAL_INTEGRATED_RECONCILIATION.md`, `SCIENCE_BASELINE_SOURCE_RECONCILIATION_131_147.md`, master: `SCIENCE_AUDIT_MASTER_01_56.json`।


## গণিত — প্রাথমিক ইনভেন্টরি (২৬ নভেম্বর ২০২৬)
- গণিতের পূর্ববর্তী subject-specific substantive audit report/master পাওয়া যায়নি; status file-এ কেবল ৩০০ প্রশ্ন/৩০ লেভেলের runtime structural check নথিভুক্ত ছিল।
- উৎস `app/src/main/assets/math-levels.js`; baseline source blob `e00b1e6544e4255a9073e3e802d803b6d9dcf706`।
- `MATH_AUDIT_MASTER_BASELINE_300.json`-এ ৩০০টি প্রশ্নের snapshot সংরক্ষিত; ৩০ লেভেল × ১০ প্রশ্ন। structural scan: malformed ০, canonical exact duplicate ০, keyed answer/expected mismatch ০। এটি factual/content audit নয়।
- `MATH_AUDIT_INVENTORY.md`-এ প্রাথমিক screening findings ও audit policy নথিভুক্ত। Generator-এ ১৬ topic family আছে; যোগ/বিয়োগ/গুণ/ভাগের স্বতন্ত্র কঠিন প্রশ্ন নেই; level-band ও difficulty metadata alignment পর্যালোচনা বাকি।
- **অবস্থা: BASELINE SNAPSHOT VERIFIED — SUBSTANTIVE AUDIT NOT STARTED / NOT LOCKED.**


## গণিত — ব্যাচ ১–১০ অডিট (২৬ নভেম্বর ২০২৬)
- প্রথম ১০০টি প্রশ্ন (১০ ব্যাচ × ১০) প্রশ্ন, অপশন, উত্তর, সূত্র, সমাধান ও difficulty suitability ধরে পর্যালোচনা করা হয়েছে।
- হিসাব/উত্তর/ব্যাখ্যার অমিল ০; কাঠামোগত অপশন ত্রুটি ০; exact duplicate ০।
- ৮৯টি provisional retain; ১১টি অত্যন্ত প্রাথমিক একধাপের হিসাবকে reversible exclusion candidate হিসেবে ledger-এ রাখা হয়েছে; স্থায়ীভাবে বাদ ০।
- অপশন তৈরির পদ্ধতিতে সঠিক উত্তরের আশেপাশে ±১০%/±২০% distractor বসানোর systemic দুর্বলতা পাওয়া গেছে; চূড়ান্ত LOCK-এর আগে উন্নত distractor প্রয়োজন।
- ব্যাচ ১–৫ (৫০ প্রশ্ন) ও ব্যাচ ৬–১০ (১০০ প্রশ্ন) শেষে অস্থায়ী checkpoint নথিভুক্ত।
- বিস্তারিত: `MATH_AUDIT_BATCHES_01_10.md`; master: `MATH_AUDIT_MASTER_BASELINE_300.json`।
- **অবস্থা: BATCHES 01–10 REVIEWED — PENDING GROUP COMPARISON — NOT LOCKED.**


## গণিত — ব্যাচ ১১–২০ অডিট (২৬ নভেম্বর ২০২৬)
- প্রশ্ন ১০১–২০০ (লেভেল ১১–২০), ১০ ব্যাচ × ১০: ১০০/১০০ প্রশ্নের stem, চার option, keyed answer, formula/calculation, explanation ও difficulty suitability পরীক্ষা।
- হিসাব/উত্তর/ব্যাখ্যার অমিল ০; malformed/invalid option set ০; batches 1–10-এর সঙ্গে strict exact duplicate 0; batches 11–20-এর ভেতরে exact duplicate 0।
- 63টি provisional retain; 37টি reversible exclusion candidate; স্থায়ী deletion ০। ১১–২০ গ্রুপে বয়স-প্রশ্নের ২০০–৩০০ বছরের অবাস্তব মোট বয়স, একধাপের শতকরা/গড়/ঐকিক/বেগ ও template repetition flag করা হয়েছে।
- Distractor generation এখনও সঠিক উত্তরের আশেপাশে percentage-offset নির্ভর; পরীক্ষার্থীর সাধারণ ভুলভিত্তিক option design প্রয়োজন। Level 16–20 band/difficulty metadata-তেও mismatch আছে।
- Temporary checkpoint: batch ১১–১৫ শেষে মোট ১৫০ reviewed; batch ১৬–২০ শেষে মোট ২০০ reviewed।
- বিস্তারিত: `MATH_AUDIT_BATCHES_11_20.md`; master: `MATH_AUDIT_MASTER_BASELINE_300.json`।
- **অবস্থা: BATCHES 01–20 REVIEWED — PENDING GROUP COMPARISON — NOT LOCKED.**


## গণিত — ব্যাচ ২১–৩০ ও সম্মিলিত তুলনা (২৬ নভেম্বর ২০২৬)
- ১–১০ বনাম ১১–২০ final comparison: strict exact duplicate ০; ২০০ প্রশ্নে ১৫২ provisional retain, ৪৮ reversible exclusion candidate; স্থায়ী deletion ০।
- ২১–৩০ (প্রশ্ন ২০১–৩০০) ১০০/১০০ প্রশ্ন যাচাই: stored expected বনাম keyed answer mismatch ০; four distinct options/valid index structural error ০; আগের ১–২০-এর সঙ্গে strict exact duplicate 0; নতুন গ্রুপের ভেতরে 0।
- ২১–৩০-এ 17 provisional retain; 83 reversible exclusion candidate; স্থায়ী deletion ০।
- অবাস্তব মিশ্রণ: ১০০%-এর বেশি concentration 6টি; অবাস্তব পিতা-সন্তানের বয়সের যোগফল 4টি। বিস্তারিত ID: `math_L24_Q6, math_L25_Q5, math_L26_Q4, math_L27_Q3, math_L28_Q2, math_L29_Q1`; `math_L21_Q4, math_L22_Q3, math_L23_Q2, math_L24_Q1`।
- ৩০০ প্রশ্নে মোট provisional retain ১৬৯; reversible exclusion candidate 131; স্থায়ী deletion ০। Hard level-এ অতিরিক্ত সরল template, mechanical distractor এবং কঠিন যোগ/বিয়োগ/গুণ/ভাগ প্রশ্নের অনুপস্থিতি চিহ্নিত।
- অস্থায়ী checkpoint: batch ২১–২৫ শেষে ২৫০ reviewed; batch ২৬–৩০ শেষে ৩০০ reviewed।
- বিস্তারিত: `MATH_AUDIT_BATCHES_21_30.md`; master: `MATH_AUDIT_MASTER_BASELINE_300.json`।
- **অবস্থা: BATCHES 01–30 REVIEWED — PENDING FINAL CONSOLIDATION — NOT LOCKED.**


## গণিত — Final consolidation checkpoint (২৬ নভেম্বর ২০২৬)
- Source `app/src/main/assets/math-levels.js` আপডেট: ১২টি replacement draft যোগ; source syntax compile ও runtime ৩০০ প্রশ্ন/৩০ level structural check PASS.
- ৪টি কঠিন standalone যোগ, বিয়োগ, গুণ ও ভাগ প্রশ্ন যুক্ত; ৪টি অবাস্তব বয়সের stem বাস্তবসম্মত করা হয়েছে; >১০০% concentration-এর ৬টি invalid mixture stem-এর সবগুলো সরানো হয়েছে (৪টি weighted-average replacement + ২টি arithmetic replacement)।
- Level 16–20 band label “কঠিন” থেকে “উচ্চ-মাঝারি প্রতিযোগিতামূলক” করা হয়েছে; runtime difficulty “মাঝারি”-র সঙ্গে সামঞ্জস্য।
- Replacement draft: ১২; আগের ১৩১ candidate থেকে অবশিষ্ট reversible candidate: ১১৯; permanent deletion: ০.
- Replacement keyed answer/expected ও চারটি স্বতন্ত্র option check PASS; strict runtime signature check duplicate groups: 0.
- **অবস্থা: FINAL CONSOLIDATION IN PROGRESS — NOT LOCKED.** Distractor redesign, ১১৯ candidate পুনর্লিখন, পূর্ণ content re-audit ও app integration/CI এখনও বাকি।
- বিস্তারিত: `MATH_FINAL_CONSOLIDATION_REVIEW_2026-11-26.md`; master: `MATH_AUDIT_MASTER_BASELINE_300.json`.


## গণিত — Candidate Rewrite Group 01–10 (২৬ নভেম্বর ২০২৬)
- প্রথম ১০টি reversible candidate পুনর্লিখন; ৫টি শেষে temporary checkpoint, ১০টি শেষে group checkpoint।
- Runtime source commit: `f20171d62793738d7963337f3e161c123292e159`; source blob: `fe02f562fd1853da1f575cfc14d6c5d7278866eb`.
- ১০/১০ calculation/key/expected PASS; ১০/১০ চারটি distinct option ও valid answer index PASS; runtime compile PASS; ৩০০ প্রশ্ন/৩০ level বজায়; strict signature duplicate groups ০.
- মোট replacement draft: ২২; অবশিষ্ট reversible candidate: ১০৯; permanent deletion: ০.
- **Math status: FINAL CONSOLIDATION IN PROGRESS — NOT LOCKED.**
- বিস্তারিত রিপোর্ট: `MATH_CANDIDATE_REWRITE_GROUP_01_10.md`; master: `MATH_AUDIT_MASTER_BASELINE_300.json`.


## গণিত — Candidate Rewrite Group 11–20 (২৬ নভেম্বর ২০২৬)
- পরবর্তী ১০টি candidate পুনর্লিখন; ৫/১০ checkpoint নথিভুক্ত।
- Runtime source blob: `1b8d0b9c783db85e609dcc3d451e5aa83b45882d`.
- ১০/১০ calculation/key/expected PASS; ১০/১০ distinct options/valid answer PASS; runtime ৩০০ প্রশ্ন/৩০ level; strict signature duplicate groups ০.
- Replacement draft মোট ৩২; অবশিষ্ট reversible candidate ৯৯; permanent deletion ০.
- **Math LOCKED নয়।** পূর্ণ QA, distractor redesign এবং app integration validation বাকি।
- রিপোর্ট: `MATH_CANDIDATE_REWRITE_GROUP_11_20.md`.


## গণিত — Candidate Rewrite Group 21–30 (২৬ নভেম্বর ২০২৬)
- পরবর্তী ১০টি candidate পুনর্লিখন; ৫/১০ checkpoint নথিভুক্ত।
- Runtime source blob: `b2f51181c645a19b9489ae9d12459ad09987c689`.
- ১০/১০ calculation/key/expected PASS; ১০/১০ distinct options/valid answer PASS; runtime ৩০০ প্রশ্ন/৩০ level; strict signature duplicate groups ০.
- Replacement draft মোট ৪২; অবশিষ্ট reversible candidate ৮৯; permanent deletion ০.
- **Math LOCKED নয়।** Final cross-bank QA, distractor review, invalid stem replacements ও integration validation বাকি।
- রিপোর্ট: `MATH_CANDIDATE_REWRITE_GROUP_21_30.md`.


## গণিত — Candidate Rewrite Group 31–40 (২৬ নভেম্বর ২০২৬)
- পরবর্তী ১০টি reversible candidate পুনর্লিখন: math_L16_Q6, math_L16_Q9, math_L17_Q3, math_L17_Q5, math_L17_Q7, math_L17_Q8, math_L17_Q10, math_L18_Q2, math_L18_Q4, math_L18_Q7।
- ৫/১০ temporary checkpoint এবং ১০/১০ completed group checkpoint নথিভুক্ত।
- Runtime source blob: `63e477294446260dc0e16a06c5f3eac45af1c46e`; ১০/১০ calculation/key/expected PASS; ১০/১০ distinct options/valid answer PASS।
- Runtime compile PASS; ৩০০ প্রশ্ন/৩০ level/প্রতি level ১০টি; invalid option/key mismatch ০; strict exact duplicate groups ০।
- Replacement draft মোট ৫২; অবশিষ্ট reversible candidate 131; permanent deletion ০।
- **Math LOCKED নয়**; পূর্ণ QA, distractor redesign ও app integration validation বাকি।
- রিপোর্ট: `MATH_CANDIDATE_REWRITE_GROUP_31_40.md`।


## গণিত — Group 31–40 ledger reconciliation (২৬ নভেম্বর ২০২৬)
- পূর্ববর্তী group update-এ exclusion ledger count পুরোনো অবস্থায় রয়ে গিয়েছিল; question-level status থেকে ledger পুনর্গঠন করে সংশোধন করা হয়েছে।
- Verified question statuses: provisional retain **১৬৯**, replacement draft **৫২**, remaining reversible exclusion candidate **৭৯**; permanent deletion **০**।
- Exclusion ledger এখন ৭৯টি candidate ID-এর সঙ্গে question-level status-এর হুবহু মিল রয়েছে। Replacement registry-তে ৫২টি draft ID রয়েছে।
- Master source SHA: `63e477294446260dc0e16a06c5f3eac45af1c46e`; runtime source SHA-এর সঙ্গে মিলেছে। গণিত এখনো **NOT LOCKED**।


## গণিত — অবশিষ্ট ৭৯টি Candidate Rewrite সম্পন্ন (২৬ নভেম্বর ২০২৬)
- পূর্ববর্তী ৭৯টি reversible candidate-এর সবগুলো পুনর্লিখিত; ৮টি ধারাবাহিক group checkpoint নথিভুক্ত (প্রতি গ্রুপে ৫-প্রশ্ন temporary checkpoint এবং group-end checkpoint)।
- Runtime compile PASS; ৩০০ প্রশ্ন/৩০ level/প্রতি level ১০টি অক্ষুণ্ণ; keyed numeric value mismatch ০; invalid option set ০; strict exact duplicate groups ০।
- Question-level status ও ledger পুনর্গণনায়: provisional retain ১৬৯, replacement draft 131, remaining candidate ০, permanent deletion ০।
- Master ও runtime source একই SHA-র content নির্দেশ করে: `cc9bff5b984b6a60085a4d148a6283d7df08953e`।
- **গণিত এখনো NOT LOCKED**; final pedagogical/content QA, distractor ও difficulty review, integration এবং release validation বাকি। External CI/device test এই কাজে চালানো হয়নি।
- রিপোর্ট: `MATH_CANDIDATE_REWRITE_REMAINING_79.md`।

## গণিত — চূড়ান্ত নির্বাচন ও LOCK (২৬ নভেম্বর ২০২৬) — সর্বশেষ কর্তৃত্বপূর্ণ অবস্থা
- **গণিত: ৩০০টি প্রশ্ন / ৩০টি লেভেল — LOCKED।**
- ১৬৯টি পূর্ববর্তী প্রশ্ন রাখা হয়েছে; ১৩১টি candidate slot-এ নতুন প্রশ্ন বসিয়ে final approved করা হয়েছে।
- অবশিষ্ট candidate ০; স্থায়ী deletion ০; master-এ FINAL_APPROVED ৩০০/৩০০।
- চারটি স্বতন্ত্র option, valid answer index এবং keyed answer/expected numeric value: ৩০০/৩০০ PASS।
- Explanation/calculation consistency: PASS; canonical exact duplicate groups: ০।
- Runtime source SHA: `4404ff9bd1c0b03ee9b4c8370ab0e83400746158`; master-এর source SHA একই।
- Level 1–10 সহজ, 11–20 মাঝারি, 21–30 কঠিন হিসেবে qualitative progression নথিভুক্ত; এটি psychometric calibration নয়।
- চূড়ান্ত রিপোর্ট: `MATH_FINAL_LOCK_REPORT_2026-11-26.md`; master: `MATH_AUDIT_MASTER_BASELINE_300.json`।
- **এই নতুন LOCK entry-ই Math-এর সর্বশেষ অবস্থা; উপরের পুরোনো NOT LOCKED checkpoint-গুলো chronology মাত্র, বর্তমান status নয়।**
- এই subject-content lock overall Android release sign-off নয়। Legacy `ML_CONTENT` threshold, full release validation, APK/AAB build এবং physical device test আলাদা release কাজ।

- Post-lock final CI formula check-এ ধরা ৬টি AP nth-term answer-key ত্রুটি সংশোধন করা হয়েছে: `math_L21_Q5=৪৩`, `math_L23_Q4=১০৮`, `math_L24_Q10=৫৩`, `math_L26_Q6=১১১`, `math_L28_Q4=১০৬`, `math_L30_Q3=৫০`; runtime/master/report পুনরায় sync করা হয়েছে। নতুন runtime SHA: `4404ff9bd1c0b03ee9b4c8370ab0e83400746158`।

- Final validation workflow `45695978106`: **SUCCESS** — question/model-test bank validation, legacy data/Firebase safety regression এবং release UI/launcher smoke checks তিনটিই PASS। Android Gradle build/APK/AAB এই workflow run-এ চালানো হয়নি।


## হোমপেজ হিরো কার্ড — অ্যানিমেশন গতি LOCK (২৬ নভেম্বর ২০২৬)
- বর্তমান অ্যাপের হোমপেজ হিরো কার্ডে মস্তিষ্কের চারপাশের চারটি আলোক-স্ফুলিঙ্গের অরবিটাল অ্যানিমেশন ধীর করা হয়েছে: ১৮s, ২৪s, ২১s ও ২৭s।
- ট্রফির ধীর 3D ঘূর্ণন/দোলন চক্র: ৩২s; কোনো আগুনের ফুলকি বা বিস্ফোরণ ইফেক্ট যোগ করা হয়নি।
- Reduced-motion accessibility preference সম্মান করে অ্যানিমেশন বন্ধ রাখার নিয়ম যোগ হয়েছে।
- পরিবর্তিত ফাইল: `app/src/main/assets/index.html`; commit: `2a7be827b8493c07452ef14aec624bac159384ba`।
- **LOCK scope:** বর্তমান অ্যাপের হিরো কার্ডে অ্যানিমেশনের গতি ও আচরণ LOCK। ব্যবহারকারীর আপলোড করা পূর্ণ ব্যানার-ইমেজটি অ্যাপে প্রতিস্থাপন/এম্বেড করা হয়নি; তাই সেই নির্দিষ্ট আর্টওয়ার্ক-প্রতিস্থাপনকে সম্পন্ন বা LOCKED বলা হচ্ছে না।
- CI ও বাস্তব ডিভাইস ভিজ্যুয়াল টেস্ট এই পরিবর্তনের জন্য এখনো চালানো হয়নি।


## English Literature — সম্প্রসারণ ব্যাচ ১–১০ (২৭ নভেম্বর ২০২৬)
- GitHub-এর expansion batch ১–১০ থেকে English Literature-এর **৩৬টি প্রশ্ন** শনাক্ত করে প্রশ্ন, অপশন, keyed answer ও explanation পর্যালোচনা সম্পন্ন।
- ফল: ৩৬/৩৬ সঠিক; malformed/অবৈধ answer index ০; নিশ্চিত ভুল ০।
- canonical full-signature exact duplicate ০; একই সাহিত্যকর্ম/লেখক নিয়ে ৭টি near-repeat pair আছে, কিন্তু প্রশ্নের wording/option structure আলাদা—নির্ধারিত নীতি অনুযায়ী রাখা হয়েছে।
- কোনো প্রশ্ন সংশোধন বা duplicate অপসারণ করা হয়নি।
- বিস্তারিত রিপোর্ট: `ENGLISH_LITERATURE_AUDIT_BATCH_01_10.md` (commit `b1f988598ae732668dcce755ad12971391d297fd`)।
- **অবস্থা: batch ১–১০ content review complete; consolidated ১–১০ master এখনো তৈরি/LOCK হয়নি।** পরবর্তী ১১–২০ ব্যাচের আগে এই রিপোর্ট ও source snapshot পুনরায় যাচাই করতে হবে।


## ২৭ নভেম্বর ২০২৬ — English Literature expansion master ০১–১০
- `ENGLISH_LITERATURE_MASTER_BATCH_01_10.md` তৈরি ও commit: `dd8b8849735c03c4a54f14643757af1799629f65`।
- Expansion batch ০১–১০ থেকে English Literature-এর **৩৬টি** রেকর্ড consolidated master-এ একীভূত।
- ৩৬টির first-pass content review: নিশ্চিত ভুল ০, malformed ০, invalid answer index ০, exact duplicate ০; ৭টি near-repeat pair আলাদা full signature হওয়ায় রাখা হয়েছে।
- **Scope limitation:** মূল `job-prep-suite.js`-এ আরও **১৩৩টি** pre-existing English Literature Q()-record আছে। এগুলো এই ৩৬-record expansion master-এ অন্তর্ভুক্ত বা বিষয়বস্তু-অডিট করা হয়নি। তাই সম্পূর্ণ English Literature subject LOCK দাবি করা হচ্ছে না।
- পরবর্তী ধাপ: base bank-এর ১৩৩টি প্রশ্নের সঙ্গে cross-duplicate ও বিষয়বস্তু-পর্যালোচনা; তারপর expansion batch ১১–২০-কে ০১–১০ master-এর সঙ্গে canonical full signature অনুযায়ী তুলনা।


## English Literature — Base Bank + Expansion 01–10 Cross-Deduplication (২৭ নভেম্বর ২০২৬)
- মূল base bank-এর ১৩৩টি English Literature record এবং expansion ০১–১০-এর ৩৬টি record মিলিয়ে মোট ১৬৯টি source record পরীক্ষা।
- Canonical full signature-এ ৮টি exact duplicate record শনাক্ত ও runtime source থেকে বাদ: expansion IDs `extra_039`, `extra_076`, `extra_156`, `extra_158`, `extra_159`, `extra_274`; base-bank-এর পরের পুনরাবৃত্ত record দুটি (Great Expectations, The Importance of Being Earnest)।
- Cleanup-এর পর ১৬১টি unique record: base bank ১৩১ + expansion ০১–১০ থেকে ৩০। পুনরায় exact-signature scan-এ duplicate group ০।
- Master: `ENGLISH_LITERATURE_MASTER_BASELINE_01_10.json` (commit `4c9aa0c67743bed7070d26cff8c1361599e8368f`)।
- বিস্তারিত cross-audit: `ENGLISH_LITERATURE_BASE_CROSS_AUDIT_01_10.md` (commit `4d40cdf3e026204ce66268e43254b42ff82633c7`)।
- **এখনো NOT LOCKED:** base bank-এর প্রতিটি প্রশ্নের পূর্ণ তথ্যসূত্রভিত্তিক fact-check এবং expansion ১১–২০-এর সঙ্গে তুলনা বাকি।


## English Literature — Expansion Batch 11–20 Cross-Audit (২৭ নভেম্বর ২০২৬)
- Batch ১১–১৯-এ English Literature ৫০টি; batch ২০-এ ০টি। ০১–১০ consolidated master-এর ১৬১টি record-এর সঙ্গে exact full-signature তুলনায় duplicate ০।
- ১১–২০ গ্রুপের অভ্যন্তরে ৭টি exact duplicate copy অপসারণ: `extra_580`, `extra_654`, `extra_656`, `extra_688`, `extra_689`, `extra_721`, `extra_724`।
- cleanup-এর পর ৪৩টি unique record; পুনরায় scan-এ exact duplicate ০। একই wording কিন্তু ভিন্ন option set-এর প্রশ্ন রাখা হয়েছে।
- Master: `ENGLISH_LITERATURE_AUDIT_MASTER_BATCH_11_20.json` (commit `520ec166a64e23aabac30c64193a5fced4320d7c`)।
- রিপোর্ট: `ENGLISH_LITERATURE_AUDIT_BATCH_11_20.md` (commit `1d7e320f5f2ec780e3660ae0fa0f4ea1ec382cf4`)।
- **NOT LOCKED:** ১১–২০-এর ৪৩টি প্রশ্নের পূর্ণ তথ্যসূত্রভিত্তিক fact-check এবং ০১–২০ consolidated master তৈরি বাকি।


## English Literature — Consolidated Master 01–20 (২৭ নভেম্বর ২০২৬)
- ০১–১০: 161 unique + ১১–২০: 43 unique = **204 unique records**।
- Consolidated full-signature scan: duplicate ০; invalid option/answer structure ০; duplicate ID ০।
- ১১–২০-এর meta/editorial explanation `extra_544`, `extra_723` সংশোধিত।
- Master: `ENGLISH_LITERATURE_MASTER_BATCH_01_20.json` (commit `83eee170e0e407115273e38740ee5ca06d464495`)।
- রিপোর্ট: `ENGLISH_LITERATURE_AUDIT_CONSOLIDATED_01_20.md` (commit `dcafd7a879b105b10aea0af661810e8ef21f9e5c`)।
- **PROVISIONAL_MASTER_NOT_LOCKED:** পূর্ণ ২০৪ প্রশ্নের প্রতিটি তথ্য/ব্যাখ্যার উৎসভিত্তিক যাচাই এখনো শেষ হয়নি। ২১–৩০-এর আগে fact-check ও পরবর্তী গ্রুপের তুলনা বাকি।


## English Literature — batches 21–30 checkpoint (2026-11-27)
- ২১–২২ ব্যাচে English Literature প্রশ্ন নেই। ২৩–৩০ ব্যাচে মোট ২৯টি প্রার্থী এন্ট্রি পাওয়া গেছে।
- ২০৪-প্রশ্নের ০১–২০ Master-এর সঙ্গে full-signature তুলনায় ৬টি exact duplicate বাদ: `extra_906`, `extra_964`, `extra_966`, `extra_1019`, `extra_1020`, `extra_1065`।
- ২১–৩০ গ্রুপের ভেতরে exact duplicate: ০। কাঠামোগতভাবে চারটি অপশন ও বৈধ answer index: সব ২৯টি এন্ট্রিতে ঠিক।
- নতুন স্বতন্ত্র প্রশ্ন: ২৩টি। ০১–৩০ provisional consolidated master: **২২৭টি**।
- Runtime cleanup commits: `70decbf60cdaa12ecb17a7eb943ecf66193c0e15`, `450cdcafa3c2e57009e6bb7aa275f5236792f5a9`, `fdf62917d27e0ca43d0e0fe48aa1aa7efaf4c52c`, `7611809ef1049393f54606c8e57b43fbb17b3e8c`।
- রিপোর্ট: `ENGLISH_LITERATURE_AUDIT_BATCH_21_30.md`; মাস্টার: `ENGLISH_LITERATURE_MASTER_BATCH_01_30.json`।
- অবস্থা: **PROVISIONAL / NOT LOCKED** — সব ২২৭টি প্রশ্নের তথ্য, সঠিক উত্তর ও ব্যাখ্যার পূর্ণ উৎসভিত্তিক যাচাই এখনো বাকি।


## English Literature — batches 31–40 checkpoint (2026-11-27)
- ৩১–৪০ ব্যাচে English Literature-এর ৩৬টি প্রার্থী প্রশ্ন পাওয়া গেছে। ৩২, ৩৫ ও ৩৭ ব্যাচে এই বিষয়ের প্রশ্ন ছিল না।
- ০১–৩০ Master-এর সঙ্গে পূর্ণ signature তুলনায় ১০টি হুবহু ডুপ্লিকেট বাদ: `extra_1110`, `extra_1175`, `extra_1177`, `extra_1197`, `extra_1200`, `extra_1201`, `extra_1203`, `extra_1267`, `extra_1362`, `extra_1390`।
- নতুন স্বতন্ত্র প্রশ্ন: ২৬টি; গ্রুপের ভেতরে ডুপ্লিকেট: ০; অপশন/answer-index কাঠামোগত ভুল: ০।
- ০১–৪০ provisional consolidated Master: **২৫৩টি**।
- Runtime cleanup commits: `a5d2bd08320a176621a0a59005e043fd955095ba`, `fa675c8b30e4e67fc60f8096fe8bafe716f7eb7f`, `6f0a889d914c1d7a770a7ba206adedf35cb6d66a`, `4e784f80d7786793d53678205c9d0b2a074a58a7`, `23d991625ac25975f968dfeee41ee028685986f2`, `98e093502e7608daab197847cd02e90f3a5d39de`।
- রিপোর্ট: `ENGLISH_LITERATURE_AUDIT_BATCH_31_40.md`; Master: `ENGLISH_LITERATURE_MASTER_BATCH_01_40.json`।
- অবস্থা: **PROVISIONAL / NOT LOCKED** — ২৫৩টি প্রশ্নের তথ্য, সঠিক উত্তর ও ব্যাখ্যার পূর্ণ উৎসভিত্তিক যাচাই বাকি।


## English Literature — batches 41–50 checkpoint (2026-11-27)
- Compared batches 41–50 against the 253-record consolidated 01–40 master.
- English Literature candidates: **37**; exact duplicate copies removed: **9**; new unique records retained: **28**.
- Exact duplicates remaining after cleanup: **0**; malformed four-option/answer-index records: **0**.
- Consolidated 01–50 master: **281 unique records**.
- Duplicate records removed: `extra_1420`, `extra_1483`, `extra_1484`, `extra_1512`, `extra_1514`, `extra_1544`, `extra_1632`, `extra_1634`, `extra_1694`.
- Runtime expansion files 41, 43, 44, 45, 48 and 50 were updated; all ten files were re-fetched and re-parsed after cleanup.
- **Status: PROVISIONAL / NOT LOCKED.** Full item-by-item factual, answer-key and explanation verification remains pending; this checkpoint certifies only full-signature deduplication and structure.
- Report: `ENGLISH_LITERATURE_AUDIT_BATCH_41_50.md`; master: `ENGLISH_LITERATURE_MASTER_BATCH_01_50.json`.
- Next: compare batches 51–60 against the 281-record master; do not restart earlier groups.


## English Literature — batches 51–56 checkpoint (2026-11-27)
- Repository expansion files currently end at batch 56; batch 57–60 files were not found. This checkpoint therefore covers available batches 51–56 only, not a claimed 51–60 group.
- English Literature candidates: **12**; exact duplicates removed against the 01–50 master: **3**; new unique records retained: **9**.
- Intra-group duplicates: **0**; remaining exact duplicates after cleanup: **0**; malformed four-option/answer-index records: **0**.
- Consolidated English Literature master: **290 unique records** (281 + 9).
- Removed copies: `extra_1722`, `extra_1724`, `extra_1752`.
- Runtime source changes: batch 51 and 52; batches 53–56 unchanged for English Literature. All six files were re-fetched and parsed after cleanup.
- **Status: PROVISIONAL / NOT LOCKED.** Full item-by-item factual, keyed-answer and explanation verification remains pending.
- Report: `ENGLISH_LITERATURE_AUDIT_BATCH_51_56.md`; master: `ENGLISH_LITERATURE_MASTER_BATCH_01_56.json`.
- Next: complete source-based content verification of all 290 consolidated records; do not assume batches 57–60 exist.


## English Literature — source-based content review, batches 51–56 (2026-11-27)
- ৫১–৫৩ ব্যাচের retained English Literature প্রশ্ন **৯টি** authoritative literary/academic/library/publisher/author-society sources দিয়ে content-check করা হয়েছে।
- নিশ্চিত factual error: **০**; ভুল answer key: **০**; explanation correction: **০**।
- *Wuthering Heights* narrator প্রশ্নে Lockwood-কে outer/frame narrator হিসেবে সঠিক ধরা হয়েছে; explanation-এ Nelly Dean-এর প্রধান storyteller ভূমিকা স্পষ্ট আছে।
- ৫৪–৫৬ ব্যাচে English Literature প্রশ্ন ছিল না।
- এই ৯টি record-এর content review সম্পন্ন; তবে পূর্ণ ২৯০ প্রশ্নের English Literature master এখনো **PROVISIONAL / NOT LOCKED**। বাকি records-এর item-by-item verification চলবে।
- বিস্তারিত: `ENGLISH_LITERATURE_CONTENT_REVIEW_BATCH_51_56.md`; master metadata update করা হয়েছে।


## English Literature — source-based content review, batches 01–10 (2026-11-27)
- Expansion batches 01–10-এর retained প্রশ্ন **৩০টি**—প্রশ্ন, সঠিক উত্তর ও ব্যাখ্যা প্রামাণ্য সাহিত্য/লাইব্রেরি/বিশ্ববিদ্যালয়/প্রকাশনা সূত্রে যাচাই করা হয়েছে।
- নিশ্চিত ভুল: **০**; ভুল answer key: **০**; explanation correction: **০**।
- এই ৩০টি expansion record-এর content review সম্পন্ন; কোনো প্রশ্ন/উত্তর পরিবর্তন প্রয়োজন হয়নি।
- **সীমা:** মূল base bank-এর ১৩১টি প্রশ্ন এই checkpoint-এ অন্তর্ভুক্ত নয়। তাই পুরো ২৯০ প্রশ্নের মাস্টার এখনো **PROVISIONAL / NOT LOCKED**।
- বিস্তারিত রিপোর্ট: `ENGLISH_LITERATURE_CONTENT_REVIEW_BATCH_01_10.md`; master metadata আপডেট করা হয়েছে।


## English Literature — source-based content review, batches 11–20 (2026-11-27)
- Expansion batches ১১–২০-এর retained English Literature প্রশ্ন **৪৩টি**—প্রশ্ন, সঠিক উত্তর ও ব্যাখ্যা উৎসভিত্তিকভাবে যাচাই করা হয়েছে।
- নিশ্চিত factual error: **০**; ভুল answer key: **০**; runtime question/explanation correction: **০**।
- `extra_544`-এর runtime explanation আগেই সংশোধিত ছিল; consolidated master-এ পুরোনো meta/editorial text থেকে যাওয়ায় master snapshot-এ সঠিক বিষয়ভিত্তিক ব্যাখ্যা sync করা হয়েছে।
- আগের deduplication checkpoint-এ ৫০টি candidate থেকে ৭টি exact duplicate বাদ দিয়ে ৪৩টি retained record রাখা হয়েছিল।
- এই checkpoint-এর ৪৩টি expansion record content review সম্পন্ন। মূল base bank অন্তর্ভুক্ত নয়।
- Cumulative source-based review: ০১–১০-এর ৩০ + ১১–২০-এর ৪৩ + ৫১–৫৬-এর ৯ = **৮২/২৯০**; বাকি **২০৮**।
- রিপোর্ট: `ENGLISH_LITERATURE_CONTENT_REVIEW_BATCH_11_20.md`; master metadata updated.
- **English Literature overall: PROVISIONAL / NOT LOCKED** — সব ২৯০টি প্রশ্নের পূর্ণ যাচাই শেষ হয়নি।


## English Literature — source-based content review, batches 21–30 (2026-11-27)
- Expansion batches ২১–৩০-এর retained English Literature প্রশ্ন **২৩টি**—প্রশ্ন, সঠিক উত্তর, ব্যাখ্যা ও answer-index মিলিয়ে যাচাই করা হয়েছে। ২১–২২ ব্যাচে এই বিষয়ের প্রশ্ন ছিল না।
- নিশ্চিত factual error: **০**; ভুল answer key: **০**; explanation correction: **০**; option/answer-index mismatch: **০**।
- *Things Fall Apart* বিষয়ে ২৯ ও ৩০ ব্যাচের দুটি প্রশ্নই রাখা হয়েছে; wording ও option set ভিন্ন, তাই ব্যবহারকারীর duplicate নীতি অনুযায়ী এগুলো duplicate নয়।
- এই checkpoint-এর ২৩টি expansion record content review সম্পন্ন; runtime প্রশ্নে কোনো সংশোধন দরকার হয়নি।
- Cumulative source-based review: ০১–১০-এর ৩০ + ১১–২০-এর ৪৩ + ২১–৩০-এর ২৩ + ৫১–৫৬-এর ৯ = **১০৫/২৯০**; বাকি **১৮৫** (মূল base bank-সহ)।
- রিপোর্ট: `ENGLISH_LITERATURE_CONTENT_REVIEW_BATCH_21_30.md`; consolidated master metadata updated.
- **English Literature overall: PROVISIONAL / NOT LOCKED** — পুরো ২৯০ প্রশ্নের যাচাই এখনো শেষ হয়নি।
