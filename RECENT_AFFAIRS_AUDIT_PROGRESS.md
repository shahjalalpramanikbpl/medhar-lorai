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
