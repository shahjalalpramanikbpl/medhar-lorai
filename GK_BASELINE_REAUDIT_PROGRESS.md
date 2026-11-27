# সাধারণ জ্ঞান — মূল ব্যাংক পুনঃযাচাই অগ্রগতি

তারিখ: ২৭ নভেম্বর ২০২৬

## পরিধি
- মূল runtime ফাইল: `app/src/main/assets/job-prep-suite.js`; সর্বশেষ blob SHA: `aeccb1acd3a0e62c193a17a8f4bbb172951b7242`।
- আগের সম্প্রসারণ মাস্টার `GK_AUDIT_MASTER_01_56.json`: ১১০টি প্রশ্ন, অপরিবর্তিত ও LOCKED; blob SHA: `b76c8c49ca81675d371ff61dcc06973f86669fe8`।
- মূল ব্যাংকে ১২৬টি প্রশ্ন (আগের ধাপে ছয়টি exact duplicate copy বাদ দেওয়া হয়েছে)।

## এই ধাপে তথ্যসূত্র দিয়ে যাচাই ও সংশোধন
1. জাতীয় সংগীতের প্রথম ১০ চরণকে সংবিধানের ৪(১) অনুচ্ছেদে নির্ধারণ করা হয়েছে। তাই “কোন তফসিল” প্রশ্নটি ভুল/পুরোনো; সংশোধন করে Article 4(1) করা হয়েছে।
2. জাতীয় সংগীতের প্রথম দশ চরণ কোন “গ্রন্থ” থেকে—এই প্রশ্নের ভাষা অস্পষ্ট/ভুল ছিল; “কোন গানের প্রথম দশটি চরণ” করা হয়েছে।
3. “বৃহত্তম গ্যাসক্ষেত্র” প্রশ্নটি reserve/production গুলিয়ে ফেলতে পারে। এটিকে “বর্তমানে সর্বাধিক গ্যাস উৎপাদনকারী গ্যাসক্ষেত্র” করা হয়েছে এবং উত্তর Bibiyana; Chevron ও Petrobangla-র প্রকাশিত তথ্য দিয়ে যাচাই।
4. “প্রথম বেসরকারি বাণিজ্যিক ব্যাংক” প্রশ্নের উত্তর National Bank ভুল ছিল। Bangladesh Bank-এর তালিকা এবং AB Bank-এর নিজস্ব ইতিহাস অনুযায়ী AB Bank ১২ এপ্রিল ১৯৮২ কার্যক্রম শুরু করে; প্রশ্ন/অপশন/উত্তর সংশোধন করা হয়েছে।

## কাঠামোগত যাচাই ও duplicate cleanup
- আগের ১৩২টি মূল প্রশ্ন থেকে সম্প্রসারণ মাস্টারে থাকা ছয়টি exact duplicate copy বাদ; canonical ১১০টি expansion প্রশ্ন অক্ষত।
- cleanup-এর পর ১২৬টি মূল GK প্রশ্ন; আগের পুনরায়-fetch scan-এ ১২৬/১২৬ parse, ৪টি option, valid answer index ও explanation; structural error ০; internal exact duplicate ০।
- এই ধাপের তিনটি বিষয়গত সংশোধন সর্বশেষ runtime ফাইলে commit করে পুনরায় fetch করে মিলিয়ে দেখা হয়েছে।

## ব্যবহৃত প্রাথমিক/বিশ্বস্ত তথ্যসূত্র
- Bangladesh Laws: Constitution, Article 4(1): https://bdlaws.minlaw.gov.bd/act-367/section-24551.html?lang=en
- Bangladesh Laws: National Anthem, Flag and Emblem Order, 1972: https://bdlaws.minlaw.gov.bd/act-418/section-18411.html?lang=en
- Bangladesh Bank annual report appendix (private commercial banks and operation dates): https://www.bb.org.bd/pub/annual/anreport/ar1819/app03.pdf
- AB Bank official history: https://abbl.com/background/
- Chevron official Bibiyana field page: https://bangladesh.chevron.com/our-businesses/bibiyana
- Petrobangla Annual Report 2022–23: https://petrobangla.org.bd/sites/default/files/files/petrobangla.portal.gov.bd/annual_reports/22137eda_60d5_4f48_be2d_8ae973e87ffc/2024-12-04-11-04-31d5f6a0fc3eb6d8f0ab8c17c71e3060.pdf

## অবস্থা
**IN PROGRESS — NOT LOCKED.** ১২৬টি মূল প্রশ্নের সব তথ্য, তারিখ, উত্তর ও ব্যাখ্যা এখনও একে একে authoritative source দিয়ে যাচাই হয়নি। এই রিপোর্টে কেবল উপরে তালিকাভুক্ত সংশোধনগুলো fact-checked বলা হচ্ছে। ১১০টি expansion master আগের মতো LOCKED।

## GitHub পরিবর্তন
- Duplicate cleanup commit: `820e3812fd1d71af3ae0b5da7485451eda446664`।
- Fact corrections commit: `2543cd6fed720e9450b7af8590a9b1db2710fba2`।
