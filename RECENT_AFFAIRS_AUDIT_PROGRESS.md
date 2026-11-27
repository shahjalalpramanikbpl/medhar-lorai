# সাম্প্রতিক ঘটনা — অডিট অগ্রগতি (২৭ নভেম্বর ২০২৬)

## Source inventory
- Runtime source: `app/src/main/assets/job-prep-suite.js`
- Source blob SHA: `d8ce4584068188bb6e3f79e67631d6e778d4b731`
- বর্তমান ক্যাটাগরি: `সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান`
- Q() source record: **১৫০টি**।
- প্রতিটি record-এ URL আছে: **১৫০/১৫০**।
- প্রতিটি record-এ তারিখের pattern আছে: **১৫০/১৫০**।
- প্রতিটি record-এ explanation field আছে: **১৫০/১৫০**।
- প্রতিটি record-এ ৪টি option ও ০–৩ answer index-এর structural scan: malformed **০**।
- exact question-text duplicate scan: **০** match। এটি question-text-only scan; normalized question+option-set master comparison এখনো হয়নি।

## গুরুত্বপূর্ণ সতর্কতা
- পূর্বের ১২৫ সংখ্যাটি ভুল; বর্তমান source scan-এ ১৫০টি record।
- ১৫০টি URL/date/structure থাকা মানেই ১৫০টি তথ্যগতভাবে স্বাধীন ও নির্ভুলভাবে fact-check হয়েছে—এমন নয়।
- একই সরকারি গেজেট/একই ঘটনার ভিন্নভাবে জিজ্ঞাসা করা প্রশ্ন আছে; exact-copy নীতি অনুযায়ী শুধু কাছাকাছি বিষয় দেখে বাদ দেওয়া যাবে না।
- কিছু source attribution field-এর নাম/প্রকাশক কাঠামোগত pattern দিয়ে স্বয়ংক্রিয়ভাবে শ্রেণিবদ্ধ করা যায়নি; তাই সেগুলোকে missing source বলা হচ্ছে না, item-wise source identity validation বাকি।
- এখনো কোনো প্রশ্ন সংশোধন/মুছে ফেলা হয়নি; master তৈরি হয়নি; বিষয় **IN_PROGRESS / NOT LOCKED**।

## পরবর্তী যাচাই
1. ১০-ব্যাচ checkpoint হিসেবে প্রকৃত source order অনুযায়ী records ভাগ করা; এগুলো processing checkpoints, মূল source batch দাবি নয়।
2. প্রতি checkpoint-এ আগের consolidated master-এর সঙ্গে exact question + option-set comparison।
3. প্রত্যেক record-এর answer, explanation, event date, publication date ও cited source মিলিয়ে দেখা।
4. মেয়াদোত্তীর্ণ/অপ্রাসঙ্গিক current-affairs item আলাদা flag করা; ব্যবহারকারীর অনুমতি ছাড়া নীরবে বাদ নয়।
5. সংশোধন/duplicate removal শেষে master ও runtime count reconcile করে final LOCK।

**এই প্রতিবেদন শুধু structural inventory checkpoint; factual audit বা LOCK-এর দাবি নয়।**

## Checkpoint 01–10 — item-wise factual check (২৭ নভেম্বর ২০২৬)
প্রথম ১০টি source-order প্রশ্নের তথ্য, উত্তরসূচি ও ব্যাখ্যা সরকারি গেজেট/BSS-এর সঙ্গে মিলিয়ে দেখা হয়েছে:
- ১: আনোয়ার ইব্রাহিমের সফর ৭–৮ ডিসেম্বর ২০২৬ — সরকারি গেজেটে নিশ্চিত।
- ২–৫: ২০২৬ সনের ১১১–১১৪ নম্বর আইন ও নাম — ২২ নভেম্বরের সরকারি গেজেটের তালিকার সঙ্গে নিশ্চিত।
- ৬–৯: মাধ্যমিক/কারিগরি শিক্ষাপ্রতিষ্ঠানের শিক্ষক শূন্যপদ, পূরণকৃত পদ — ১৮ নভেম্বরের সংসদীয় তথ্য ও BSS প্রতিবেদনের সঙ্গে নিশ্চিত।
- ১০: ৫০তম BCS-এর মৌখিক পরীক্ষা সম্পন্ন — BSS প্রতিবেদনে নিশ্চিত।
- এই ১০টি প্রশ্নে ভুল answer index শনাক্ত হয়নি। একই গেজেট বা সংসদীয় প্রতিবেদনের একাধিক পৃথক পরিসংখ্যান/আইন নিয়ে প্রশ্ন আছে; প্রশ্ন ও option set হুবহু এক নয় বলে exact-copy নীতিতে রাখা হয়েছে।
- Checkpoint 01–10 factual check: **10/10 verified**. পরবর্তী ১১–২০ checkpoint বাকি; তাই subject এখনো **IN_PROGRESS / NOT LOCKED**।

Sources: Bangladesh Government Press extraordinary gazette (22-Nov-2026), BSS JS Session report (18-Nov-2026).


## Checkpoint 11–20 — item-wise factual check (২৭ নভেম্বর ২০২৬)
source-order অনুযায়ী ১১–২০ নম্বর ১০টি প্রশ্নের উত্তর, অপশন, ব্যাখ্যা, তারিখ ও উৎস মিলিয়ে দেখা হয়েছে:
- ১১–১৪: ২০২৭ সালের সরকারি ছুটির গেজেট (১৩ নভেম্বর ২০২৬) অনুযায়ী সাধারণ ছুটি ১৫ দিন; ঈদুল ফিতরের নির্বাহী আদেশের ছুটি ৪ দিন এবং ঈদুল আজহার নির্বাহী আদেশের ছুটি ৫ দিন—প্রশ্নের নির্দিষ্ট শ্রেণিবিভাগ অনুযায়ী উত্তর সঠিক।
- ১৫: এসেনশিয়াল ড্রাগস কোম্পানি লিমিটেডের পুনর্গঠিত বোর্ডে স্বাস্থ্য ও পরিবার কল্যাণমন্ত্রী সরদার মোঃ সাখাওয়াত হোসেন চেয়ারম্যান—গেজেটের সঙ্গে সঠিক।
- ১৬: ICT startup grant policy 2026-এর গেজেট ১২ নভেম্বর প্রকাশিত; মন্ত্রণালয়ের নাম ও উত্তর সঠিক।
- ১৭: ত্রয়োদশ জাতীয় সংসদের চতুর্থ অধিবেশন ১৮ নভেম্বরের বৈঠকের পর সমাপ্ত—সংসদীয় তথ্য/গেজেটের সঙ্গে সঠিক।
- ১৮–২০: বাংলাদেশ ব্যাংকের তথ্যভিত্তিক ১–২২ নভেম্বর রেমিট্যান্স ২.৩৫৭ বিলিয়ন ডলার, বছরওয়ারি বৃদ্ধি ১০.৪%, এবং ১ জুলাই–২২ নভেম্বর FY2026–27 মোট ১৩.৮২২ বিলিয়ন ডলার—BSS/UNB প্রতিবেদনের সঙ্গে সঠিক।
- ভুল answer index বা তথ্যগত ভুল: **০টি শনাক্ত**।
- একই ছুটির গেজেট বা একই রেমিট্যান্স প্রতিবেদনের ভিন্ন পরিসংখ্যানভিত্তিক প্রশ্নগুলো প্রশ্ন+option-set হুবহু এক নয়; duplicate নীতিতে রাখা হয়েছে।
- Checkpoint 11–20: **10/10 verified**। মোট item-wise verified: **20/150 (আগের inventory অনুযায়ী)**।

### Inventory discrepancy — যাচাই চলমান
বর্তমান runtime ফাইলে category-র exact string `সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান` দিয়ে Q() call গুনলে **১২৫টি** পাওয়া যাচ্ছে; আগের structural report-এ **১৫০টি** বলা হয়েছিল। তাই ১৫০-কে আপাতত নিশ্চিত চূড়ান্ত source count ধরা হচ্ছে না। পরবর্তী ধাপে category alias/অন্য data structure-সহ পূর্ণ inventory পুনর্মিলন করা হবে। এই discrepancy-র কারণে subject **IN_PROGRESS / NOT LOCKED** থাকবে।

Sources: Bangladesh Government Press Gazette 13-Nov-2026; 16-Nov-2026; 12-Nov-2026; Bangladesh Parliament; BSS 23-Nov-2026; UNB 23-Nov-2026.


## Checkpoint 21–30 — item-wise factual check (২৭ নভেম্বর ২০২৬)
source-order records ২১–৩০ যাচাই:
- ২১: ১৬৪ কিশোরগঞ্জ-৩ আসন শূন্য ঘোষণার গেজেট—সঠিক।
- ২২: সিটি কর্পোরেশন এলাকায় ই-রিকশা চলাচল বিধিমালা ২০২৬ স্থানীয় সরকার বিভাগের অধীনে—সঠিক।
- ২৩–২৪: SDG-এর ২০৩০ সময়সীমা ও বিশ্ব জনসংখ্যা দিবস ১১ জুলাই—উত্তর সঠিক, কিন্তু এগুলো evergreen সাধারণ জ্ঞান; সাম্প্রতিক ঘটনা নয়। উভয়ের date field-এ ২০২৬-১১-২৪ বসানোও event date নয়। **দুটি item reclassify/replace করার জন্য flag করা হলো; এখনো runtime থেকে বাদ/পরিবর্তন করা হয়নি।**
- ২৫: ২০২৫ UN Ocean Conference—নিস, ফ্রান্স; সঠিক।
- ২৬: COP30—ব্রাজিলের বেলেম; সঠিক।
- ২৭: World Expo 2025—ওসাকা; সঠিক।
- ২৮: ৮০তম UNGA High-Level Week—২৩–২৯ সেপ্টেম্বর ২০২৫; সঠিক।
- ২৯: ২০২৫ International Year of Glaciers’ Preservation; সঠিক।
- ৩০: ২০২৫ Nobel Peace Prize—Maria Corina Machado; সঠিক।
- ভুল উত্তরসূচি: **০টি শনাক্ত**; ২৩–২৪-এর শ্রেণিবিন্যাস/তারিখ metadata issue আলাদা করে flag।
- Checkpoint 21–30: ১০টি যাচাই; ৮টি current affairs হিসেবে গ্রহণযোগ্য, ২টি evergreen reclassify/replace flag। মোট item-wise review: **৩০টি**।

### Source inventory reconciliation
- সম্পূর্ণ runtime file পুনরায় scan: exact category string `সাম্প্রতিক ঘটনা ও সমসাময়িক জ্ঞান`-এর Q() call **১২৫টি**। “সাম্প্রতিক” শব্দযুক্ত অন্য category string নেই।
- আগের ১৫০ সংখ্যাটি এই source-এ সমর্থিত নয়; আগের inventory report-এর ১৫০-কে **ভুল গণনা** হিসেবে সংশোধন করা হলো। এখনকার যাচাইকৃত raw count ১২৫ (duplicate/eligibility review শেষে final retained count নয়)।
- source blob SHA অপরিবর্তিত: `d8ce4584068188bb6e3f79e67631d6e778d4b731`।
- ১২৫টির পূর্ণ normalized question+option-set duplicate master comparison এবং remaining ৯৫টি item-এর factual review বাকি; তাই **IN_PROGRESS / NOT LOCKED**।

Sources: Bangladesh Gazette 17-Nov-2026; BSS 17-Nov-2026; Bangladesh Gazette 02-Nov-2026; UN SDGs; UNFPA; UNEP; UNFCCC; United Nations 2025 calendar; Nobel Peace Prize official announcement.


## Checkpoint 31–40 — item-wise factual check (২৭ নভেম্বর ২০২৬)
source-order records ৩১–৪০ যাচাই:
- ৩১: ২০২৫ সালের সাহিত্যে নোবেল—László Krasznahorkai; NobelPrize.org-এ নিশ্চিত।
- ৩২: ১৭তম BRICS Summit—রিও ডি জেনেইরো, ৬–৭ জুলাই ২০২৫; BRICS-এর নিজস্ব ঘোষণায় নিশ্চিত।
- ৩৩: জাতিসংঘের ৮১তম সাধারণ পরিষদের অধিবেশন শুরু ৮ সেপ্টেম্বর ২০২৬; UN-এর সূচিতে নিশ্চিত।
- ৩৪: ৮১তম অধিবেশনের সাধারণ বিতর্ক শুরু ২২ সেপ্টেম্বর ২০২৬; UN-এর সূচিতে নিশ্চিত।
- ৩৫–৩৮: COP31 তুরস্কের আন্তালিয়ায় অনুষ্ঠিত; সম্মেলন ৯ নভেম্বর শুরু হয়ে ২২ নভেম্বর সমাপ্ত; Antalya Pact/সামগ্রিক cover decision-এ ঐকমত্য হয়নি। ৩৫–৩৮-এর উত্তর সঠিক। ৩৫-এর ব্যাখ্যায় নির্ধারিত ৯–২০ নভেম্বর সময়সীমা লেখা আছে, কিন্তু বাস্তবে সম্মেলন ২২ নভেম্বর পর্যন্ত গড়ায়—ব্যাখ্যায় এই অতিরিক্ত তথ্য যোগ করে সংশোধন প্রয়োজন।
- ৩৯: World Economic Forum Annual Meeting ২০২৬, দাভোস-ক্লোস্টার্স, ১৯–২৩ জানুয়ারি; WEF-এর নিজস্ব পৃষ্ঠায় নিশ্চিত।
- ৪০: World Environment Day ৫ জুন—তথ্য সঠিক, কিন্তু এটি বার্ষিক স্থায়ী দিবসের তথ্য; সাম্প্রতিক ঘটনা নয়। **সাধারণ জ্ঞানে reclassify/replace flag** করা হলো।
- ভুল answer index: **০টি শনাক্ত**। ৩৫-এর explanation update এবং ৪০-এর category suitability flag করা হয়েছে; runtime এখনো সম্পাদিত হয়নি।
- ৩১–৪০-এর মধ্যে এবং আগের ১–৩০ master-এর সঙ্গে দৃশ্যমান exact question+option-set copy পাওয়া যায়নি; COP31/UNGA-র একাধিক প্রশ্ন ভিন্ন তথ্য/option set জিজ্ঞাসা করে, তাই duplicate নয়।
- Checkpoint 31–40: **১০টি item reviewed**; ৩৫ explanation correction, ৪০ reclassify/replace flag। মোট source-order item reviewed: **৪০/১২৫**।

Sources: NobelPrize.org; BRICS Brazil official Rio Declaration; UN General Assembly 81st session schedule; UNFCCC/United Nations COP31 outcomes; World Economic Forum Annual Meeting 2026.


## Checkpoint 41–50 — item-wise factual check (২৭ নভেম্বর ২০২৬)
source-order records ৪১–৫০-এর প্রশ্ন, তারিখ, উত্তরসূচি, ব্যাখ্যা ও উৎস যাচাই:
- ৪১: World Oceans Day — ৮ জুন; ২০২৬ UN calendar-এ নিশ্চিত।
- ৪২: World Population Day — ১১ জুলাই; UN calendar-এ নিশ্চিত।
- ৪৩: World Teachers’ Day — ৫ অক্টোবর; UN calendar-এ নিশ্চিত।
- ৪৪: World Food Day — ১৬ অক্টোবর; UN calendar-এ নিশ্চিত।
- ৪৫: World Science Day for Peace and Development — ১০ নভেম্বর; UN calendar-এ নিশ্চিত।
- ৪৬: World Wildlife Day — ৩ মার্চ; UN calendar-এ নিশ্চিত।
- ৪৭: International Day of Forests — ২১ মার্চ; UN calendar-এ নিশ্চিত।
- ৪৮: World Water Day — ২২ মার্চ; UN calendar-এ নিশ্চিত।
- ৪৯: World Meteorological Day — ২৩ মার্চ; UN calendar-এ নিশ্চিত।
- ৫০: International Day of Zero Waste — ৩০ মার্চ; UN calendar-এ নিশ্চিত।
- ১০টির উত্তরসূচি/তারিখে ভুল পাওয়া যায়নি; ব্যাখ্যাগুলোও ঘোষিত দিবসের তারিখের সঙ্গে সামঞ্জস্যপূর্ণ। একই ২০২৬ UN calendar URL ব্যবহার করা হয়েছে এবং পৃষ্ঠায় এই দশটি দিবসের তারিখ পাওয়া যায়।
- **বিষয়-উপযোগিতা:** এগুলো সবই প্রতি বছর নির্দিষ্ট দিনে পালিত স্থায়ী আন্তর্জাতিক দিবস; ২০২৬ সালের নতুন ঘটনা/এককালীন সাম্প্রতিক ঘটনা নয়। তাই ১০টিই “সাম্প্রতিক ঘটনা” থেকে reclassify/replace করার জন্য flag করা হলো। এগুলোকে সাধারণ জ্ঞান/গুরুত্বপূর্ণ দিবস বিভাগে রাখা যেতে পারে; ব্যবহারকারীর অনুমতি ছাড়া runtime থেকে সরানো হয়নি।
- এই checkpoint-এ দৃশ্যমান হুবহু প্রশ্ন+option-set duplicate পাওয়া যায়নি। তবে পূর্ণ normalized master comparison এখনো তৈরি হয়নি; তাই global duplicate-free দাবি করা হচ্ছে না।
- Checkpoint 41–50: **১০টি item reviewed**। মোট source-order item-wise review: **৫০/১২৫**। Subject **IN_PROGRESS / NOT LOCKED**।

Source: United Nations, *2026 Calendar of Selected United Nations Events* — https://www.un.org/en/node/238917


## Checkpoint 51–60 — item-wise factual check (২৭ নভেম্বর ২০২৬)
source-order records ৫১–৬০-এর প্রশ্ন, option, answer index, ব্যাখ্যা, date ও cited source যাচাই:
- ৫১: World Refugee Day ২০ জুন—তারিখ সঠিক; তবে এটি প্রতি বছরের স্থায়ী আন্তর্জাতিক দিবস, সাম্প্রতিক ঘটনা নয়। **Reclassify/replace flag**।
- ৫২: FY2026–27 জাতীয় বাজেটের আকার ৯.৩৮ লাখ কোটি টাকা—সঠিক।
- ৫৩: বাজেট পাস ৩০ জুন ২০২৬—সঠিক।
- ৫৪: অর্থমন্ত্রী আমির খসরু মাহমুদ চৌধুরী ১১ জুন বাজেট প্রস্তাব উপস্থাপন করেন—সঠিক।
- ৫৫: GDP প্রবৃদ্ধির লক্ষ্য ৬.৫%—সঠিক।
- ৫৬: মূল্যস্ফীতি কমানোর লক্ষ্য ৭.৫%—সঠিক।
- ৫৭: রাজস্ব আয়ের লক্ষ্যমাত্রা ৬.৯৫ লাখ কোটি টাকা—সঠিক; ৩০ জুনের চূড়ান্ত বাজেট প্রতিবেদন দিয়ে যাচাই।
- ৫৮: ADP ৩ লাখ কোটি টাকা—সঠিক।
- ৫৯: ব্যক্তিগত করদাতার করমুক্ত আয়সীমা ৪ লাখ টাকা—Finance Bill-এর সংশোধনীসহ চূড়ান্ত অনুমোদনের পর সঠিক; প্রাথমিক বাজেট প্রস্তাবে ৩.৭৫ লাখ ছিল।
- ৬০: UNGA High-Level Week-এর প্রশ্নে উত্তর ২১–২৮ সেপ্টেম্বর দেওয়া হয়েছে; UN-এর ২০২৬ ক্যালেন্ডার অনুযায়ী সময়সীমা **২২–২৮ সেপ্টেম্বর**। তাই প্রশ্নের option-এ তারিখ ভুল; সঠিক option **২২–২৮ সেপ্টেম্বর** দিয়ে প্রতিস্থাপন এবং ব্যাখ্যা সংশোধন প্রয়োজন। বর্তমান answer index-কে সঠিক বলা যাবে না যতক্ষণ option সংশোধিত না হয়।
- ৫২–৫৯-এর আটটি বাজেট-প্রশ্নে তথ্য ও উত্তর সঠিক; একই বাজেট উৎস ব্যবহৃত হলেও প্রশ্ন/option set আলাদা, তাই exact-copy duplicate নয়।
- Checkpoint 51–60: ১০টি item reviewed; ৫১ reclassify/replace flag, ৬০ factual option/date correction। মোট source-order item-wise review: **৬০/১২৫**।
- Source inventory-তে এখনও ১২৫টি record রয়েছে; অতএব ৫১–৬০-কে শেষ batch বলা যাবে না। ৬১–১২৫-এর ৬৫টি record এখনও item-wise audit বাকি। পূর্ণ normalized question+option-set master comparison-ও pending। Subject **IN_PROGRESS / NOT LOCKED**।

Sources: BSS FY27 budget highlights; bdnews24.com final budget approval report (30-Jun-2026); The Business Standard final budget details (30-Jun-2026); Bangladesh NBR FY2026–27 budget speech; United Nations 2026 calendar and 81st UNGA schedule.
