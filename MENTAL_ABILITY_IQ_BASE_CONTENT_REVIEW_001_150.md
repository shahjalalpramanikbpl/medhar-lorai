# Mental Ability & IQ — Base Content Review and Subject Classification

তারিখ: ২৭ নভেম্বর ২০২৬  
অবস্থা: **IN_PROGRESS — NOT LOCKED**

## ১. Base bank content review
- `job-prep-suite.js`-এর Mental Ability & IQ category-র **১৫০টি base record** item-by-item review করা হয়েছে; ১৫টি ধারাবাহিক checkpoint-এ প্রশ্ন, চারটি option, keyed answer ও explanation-এর সামঞ্জস্য পরীক্ষা করা হয়েছে।
- নিশ্চিত answer-key error: **১টি** — `base_024`। প্রশ্নের ধারার নিয়ম ×২, ×৩, ×৪, ×৫, ×৬; সঠিক উত্তর ২১৬০। আগের key ১৮০০ ছিল। Runtime key index ২ থেকে ৩ করা হয়েছে; source re-fetch-এ সঠিক key ও explanation নিশ্চিত।
- অন্য base record-এ এই review-এ নিশ্চিত ভুল key পাওয়া যায়নি।
- Expansion 01–10-এর ৪৪টি record-এর content/answer/explanation review আগেই সম্পন্ন হয়েছিল; final exact-duplicate reconciliation-এ নিচের ২টি কপি বাদ গেছে।

## ২. Final exact-duplicate reconciliation
- `extra_026` হলো `base_051`-এর exact duplicate; `app/src/main/assets/job-prep-expansion.js` থেকে বাদ।
- `extra_345` হলো `base_055`-এর exact duplicate; `app/src/main/assets/job-prep-expansion-09.js` থেকে বাদ।
- উভয় expansion file re-fetch করে ID অনুপস্থিত নিশ্চিত।
- বর্তমান inventory: **১৫০ base + ৪২ expansion = ১৯২ unique records**।
- Full signature (normalized category + normalized stem + sorted options + answer): duplicate group **০**; malformed/missing-field/invalid option-index record **০**।

## ৩. বিষয়ভিত্তিক শ্রেণিবিন্যাস
### গণিত / Quantitative Aptitude-এ স্থানান্তরের প্রস্তাব
- Base: 83টি — base_010, base_016, base_022, base_026, base_029, base_033, base_036, base_038, base_039, base_042, base_043, base_044, base_045, base_046, base_048, base_052, base_053, base_057, base_058, base_059, base_062, base_063, base_064, base_067, base_073, base_075, base_076, base_077, base_080, base_081, base_082, base_083, base_084, base_086, base_087, base_088, base_089, base_090, base_091, base_092, base_093, base_094, base_095, base_098, base_100, base_101, base_102, base_104, base_105, base_106, base_108, base_109, base_110, base_116, base_121, base_122, base_124, base_125, base_126, base_127, base_128, base_129, base_130, base_131, base_132, base_133, base_134, base_135, base_136, base_137, base_138, base_139, base_140, base_141, base_142, base_143, base_144, base_145, base_146, base_147, base_148, base_149, base_150.
- Expansion: 15টি — extra_030, extra_066, extra_069, extra_106, extra_108, extra_109, extra_110, extra_146, extra_147, extra_149, extra_150, extra_264, extra_303, extra_304, extra_388.
- মোট: **৯৮টি**। বিষয়: percentage/discount/profit-loss, average/median, ratio/fraction, age/work-rate, speed-distance, probability, number system/LCM-HCF, elementary algebra, geometry/mensuration এবং সরাসরি numerical calculation।
- এই ৯৮টির question + options + answer signature locked `MATH_AUDIT_MASTER_BASELINE_300.json`-এর ৩০০ প্রশ্নের সঙ্গে category বাদ দিয়ে তুলনা করা হয়েছে; exact collision **০**।

### Mental Ability & IQ-তে রাখার প্রস্তাব
- বাকি **৯৪টি**: ৬৭ base + ২৭ expansion। এর মধ্যে series/pattern, coding-decoding, syllogism, ranking/order, calendar/clock reasoning, spatial/lateral puzzles, handshake/pigeonhole এবং logical inference-ধর্মী প্রশ্ন আছে।
- `extra_265`-এর remainder transformation-কে modular reasoning হিসেবে IQ-তে রাখা হয়েছে; এটি সরাসরি percentage/profit/area formula calculation নয়।

## ৪. Runtime migration blocker — এখনো কোনো category সরানো হয়নি
- Math-এর ৩০০ প্রশ্নের master LOCKED। তার recorded source SHA `4404ff9bd1c0b03ee9b4c8370ab0e83400746158`, কিন্তু বর্তমান `math-levels.js` fetch SHA `e0479f57543b803f32a69f10b1a96b1f5345333e` — source/master SHA mismatch দেখা যাচ্ছে।
- উপরন্তু Math runtime একটি ৩০-level generated bank; IQ-এর static Q()/JSON record সরাসরি সেখানে category বদলে দিলেই সেগুলো ব্যবহারযোগ্য হবে না। তাই ৯৮টি record এখনই Math runtime-এ ঢোকানো হয়নি; আগে Math source/master drift ও integration path reconcile করতে হবে।
- কোনো প্রশ্ন বাদ দেওয়া হয়নি শুধু subject-fit-এর কারণে। এই migration/integration সম্পন্ন ও revalidated না হওয়া পর্যন্ত IQ final master LOCK করা হবে না।

## ৫. Source changes
- `base_024` answer-key correction commit: `834386bf6632f79b20d448165e4f8d5efc6f46c8`.
- `extra_026` duplicate removal commit: `8c88578c61810548b30b85e31d1b091b775f6804`.
- `extra_345` duplicate removal commit: `a0805b98c93c7c9507c645582c0e972850787901`.
