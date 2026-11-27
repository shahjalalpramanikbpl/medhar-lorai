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
