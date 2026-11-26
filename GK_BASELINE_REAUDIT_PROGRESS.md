# সাধারণ জ্ঞান — মূল ব্যাংক পুনঃযাচাই অগ্রগতি

তারিখ: ২৭ নভেম্বর ২০২৬

## পরিধি
- মূল runtime ফাইল: `app/src/main/assets/job-prep-suite.js`; সংশোধনের পর blob SHA: `b75056e6e03bc7e18f98625791c7b1c82e569b9f`।
- আগের সম্প্রসারণ মাস্টার `GK_AUDIT_MASTER_01_56.json`: ১১০টি প্রশ্ন, অপরিবর্তিত ও LOCKED; blob SHA: `b76c8c49ca81675d371ff61dcc06973f86669fe8`।

## সম্পন্ন কাজ
1. মূল runtime-এ থাকা ১৩২টি GK call ও ১১০টি expansion master তুলনা করা হয়েছে।
2. একই প্রশ্ন, একই option set এবং একই সঠিক উত্তর মিলে যাওয়া ৬টি অতিরিক্ত কপি পাওয়া গেছে। সেগুলো মূল runtime থেকে বাদ দেওয়া হয়েছে; canonical expansion master-এর কপিগুলো অক্ষত।
3. বাদ দেওয়া প্রশ্নের পর মূল runtime-এ ১২৬টি GK প্রশ্ন রয়েছে।
4. সংশোধিত ফাইল পুনরায় GitHub থেকে fetch করে যাচাই: ১২৬/১২৬ parse হয়েছে; ৪টি করে option, বৈধ answer index ও explanation উপস্থিত; structural error ০; মূল ব্যাংকের ভেতরে exact duplicate ০।
5. ৬টি বাদ দেওয়া কপি: SAARC সদর দপ্তর, জাতীয় স্মৃতিসৌধের স্থপতি, WHO সদর দপ্তর, EU মুদ্রা, ICJ অবস্থান, বাংলাদেশের প্রথম নারী স্পিকার।

## সীমাবদ্ধতা ও পরবর্তী যাচাই
- এই ধাপটি structure ও exact-duplicate cleanup; ১২৬টি প্রশ্নের সব তথ্য, তারিখ, উত্তর ও ব্যাখ্যার পূর্ণ fact-check এখনো শেষ হয়নি।
- কোনো প্রশ্নকে factual audit-এ PASS বলা হয়নি কেবল structural validation-এর ভিত্তিতে।
- সম্প্রসারণ মাস্টারের ১১০টি প্রশ্নে ৪১টির direct sourceUrl ফাঁকা; এই source documentation ঘাটতি আলাদা করে পূরণ করতে হবে।

## অবস্থা
**IN PROGRESS — NOT LOCKED.** ১১০টি expansion master আগের মতো LOCKED; মূল runtime-এর ১২৬টি GK প্রশ্নের factual audit বাকি।

## GitHub পরিবর্তন
- Runtime cleanup commit: `820e3812fd1d71af3ae0b5da7485451eda446664`।
- এই progress report সর্বশেষ fetch করা runtime ফলাফলের সঙ্গে মিলিয়ে হালনাগাদ।
