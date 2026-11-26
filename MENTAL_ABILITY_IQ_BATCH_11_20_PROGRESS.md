# মানসিক দক্ষতা ও IQ — ব্যাচ ১১–২০ অডিট চেকপয়েন্ট

তারিখ: ২৭ নভেম্বর ২০২৬  
অবস্থা: CHECKPOINT REVIEWED — বিষয়টি এখনো LOCKED নয়।

## যাচাইয়ের ফল
- ব্যাচ ১১–২০-এ IQ ক্যাটাগরির ৪৭টি প্রশ্ন শনাক্ত ও একবার পূর্ণাঙ্গভাবে পর্যালোচনা করা হয়েছে।
- প্রতিটি প্রশ্নের উত্তরসূচক, অপশন ও ব্যাখ্যা মিলিয়ে দেখা হয়েছে।
- ব্যাচ ০১–১০-এর consolidated master-এর সঙ্গে exact duplicate: ১টি — `extra_680`; এটি পূর্বের quantitative practice bank-এর “৮০-এর ১৫% কত?” প্রশ্নের একই প্রশ্ন ও একই option set (শুধু option order আলাদা) হওয়ায় বাদ দেওয়া হয়েছে।
- এই চেকপয়েন্টের ভেতর অতিরিক্ত exact duplicate: ০।
- ২৫টি unique প্রশ্ন সরাসরি quantitative aptitude (শতকরা, ছাড়/লাভ, গড়, কাজ-সময়, বেগ, সম্ভাবনা, ক্ষেত্রফল, অনুপাত/একক পদ্ধতি) হিসেবে চিহ্নিত; ২১টি IQ/যুক্তি হিসেবে রাখা হয়েছে।
- এটি classification checkpoint; quantitative প্রশ্নের runtime স্থানান্তর final master reconciliation-এর আগে করা হবে না।

## সংশোধন
- `extra_680`-এর answer index ২ থেকে ১ সংশোধন করে সঠিক উত্তর ১২ নিশ্চিত করা হয়েছিল; final exact-duplicate scan-এ এটি পূর্বের quantitative bank-এর একই প্রশ্ন ও একই option set হিসেবে মেলে। তাই duplicate policy অনুযায়ী `job-prep-expansion-18.js` থেকে কপিটি বাদ দেওয়া হয়েছে।
- Duplicate removal commit: `06a082061963888511130e8d91e4112d60c49357`

## সিদ্ধান্ত
ব্যাচ ১১–২০-এর ৪৭টি candidate review সম্পন্ন; ১টি exact duplicate বাদ দিয়ে ৪৬টি unique record রাখা হয়েছে। IQ বিষয়টি **LOCK করা হয়নি**; পরবর্তী ধাপ ব্যাচ ২১–৩০-কে পূর্ববর্তী consolidated master-এর সঙ্গে মিলিয়ে একই পদ্ধতিতে যাচাই।
