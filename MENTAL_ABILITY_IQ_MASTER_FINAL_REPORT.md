# মানসিক দক্ষতা ও IQ — চূড়ান্ত অডিট রিপোর্ট

তারিখ: ২৭ নভেম্বর ২০২৬  
চূড়ান্ত অবস্থা: **LOCKED — ৩০১টি unique record**

## অডিট পরিধি
- মূল ব্যাংক: ১৫০টি প্রশ্ন।
- সম্প্রসারণ ব্যাচ ০১–১০: ৪৪টি candidate; ২টি exact duplicate বাদ দিয়ে ৪২টি unique।
- সম্প্রসারণ ব্যাচ ১১–৫৬: ১১০টি candidate; ১টি exact duplicate বাদ দিয়ে ১০৯টি unique।
- মোট source candidate: ৩০৪; exact duplicate কপি বাদ: ৩; final unique: **৩০১**।

## চূড়ান্ত শ্রেণিবিন্যাস
| বিভাগ | প্রশ্ন |
|---|---:|
| মানসিক দক্ষতা ও IQ | **১৫৭** |
| পরিমাণগত দক্ষতা অনুশীলন | **১৪৪** |
| মোট unique | **৩০১** |

প্রথম master থেকে ৯৮টি quantitative প্রশ্ন আলাদা করা হয়েছিল। পরবর্তী expansion থেকে আরও ৪৬টি unique quantitative প্রশ্ন একই supplemental practice-এ যুক্ত হয়েছে। ৬৩টি পরবর্তী expansion প্রশ্ন IQ/যুক্তি বিভাগে রাখা হয়েছে।

## Duplicate অপসারণ
1. `extra_026` — `base_051`-এর exact duplicate।
2. `extra_345` — `base_055`-এর exact duplicate।
3. `extra_680` — পূর্বের quantitative practice bank-এর “৮০-এর ১৫% কত?” প্রশ্নের একই option set; option order আলাদা হলেও প্রশ্ন ও option set একই, তাই বাদ।

Final consolidated signature scan-এ অবশিষ্ট exact duplicate: **০**। Locked Math master-এর ৩০০ প্রশ্নের সঙ্গে নতুন quantitative candidates-এর exact collision: **০**।

## সংশোধন
- `base_024`: সংখ্যাধারার সঠিক উত্তর ২১৬০; answer index সংশোধন।
- `extra_070`: ৬:৩০-এ ঘড়ির কাঁটার ক্ষুদ্র কোণ ১৫°; ব্যাখ্যা পরিষ্কার।
- `extra_680`: উত্তরসূচক ১২-তে সংশোধন করে পরে exact duplicate হিসেবে বাদ।

## Runtime ও মূল গণিত
- `quantitativePracticeRecords` এখন ১৪৪টি।
- runtime signature matcher সক্রিয়; প্রশ্ন + option set + সঠিক উত্তর মিলিয়ে quantitative category নির্ধারণ করে।
- মূল গণিত ব্যাংক অপরিবর্তিত: **৩০০ প্রশ্ন / ৩০ লেভেল**।
- অ্যাপের versionName **3.3** অপরিবর্তিত।

## Validation সীমা
Static source checks: PASS — ১৪৪ quantitative records, ১৫৭ IQ target, duplicate `extra_680` অনুপস্থিত, runtime matcher সক্রিয়।
Full CI/content validator এখনো চালানো হয়নি; ব্যবহারকারীর নির্দেশ অনুযায়ী Android Build চালানো হয়নি। তাই CI validation pending থাকলেও content audit/master **LOCKED**।

## পরবর্তী বিষয়
পরবর্তী অডিট: **যুক্তি ও বিশ্লেষণ** — একই ১০-ব্যাচ checkpoint পদ্ধতি ও exact-duplicate নীতি অনুসরণ করে।
