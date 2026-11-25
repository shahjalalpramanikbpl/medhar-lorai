# সাধারণ বিজ্ঞান — ব্যাচ ২৬–৩০ অডিট রিপোর্ট

- ব্যাচ ২৬–৩০-এর মোট উৎস রেকর্ড: ১৫৪টি (২২ + ২২ + ৪৩ + ৪২ + ২৫)।
- সাধারণ বিজ্ঞানের প্রার্থী প্রশ্ন: ৬টি।
- হুবহু duplicate copy বাদ: ৩টি; নতুন স্বতন্ত্র প্রশ্ন রাখা হয়েছে: ৩টি।
- master ১–৩০: 185টি (১৩০টি মূল baseline + ৫৫টি যাচাইকৃত expansion)।
- malformed retained entry: 0।

## হুবহু duplicate অপসারণ
- `extra_986` (batch 28) → `suite_5`: “শব্দ কোন মাধ্যমে চলতে পারে না?” একই পূর্ণ option set ও সঠিক উত্তর।
- `extra_1077` (batch 30) → `extra_560` (batch 15): একই insulin প্রশ্ন, একই অপশনসেট ও উত্তর; বাংলা বানানের ভিন্নতা normalize করা হয়েছে।
- `extra_1079` (batch 30) → `extra_890` (batch 25): pH<7 প্রশ্নের একই wording, পূর্ণ option set ও সঠিক উত্তর।

## রাখা ও যাচাইকৃত প্রশ্ন
- `extra_921` (batch 26): বিদ্যুৎ প্রবাহের SI একক — অ্যাম্পিয়ার।
- `extra_949` (batch 27): রক্ত জমাট বাঁধতে প্রয়োজনীয় ভিটামিন — K।
- `extra_1078` (batch 30): প্রদত্ত বায়ু, পানি, ইস্পাত ও শূন্যস্থানের মধ্যে শব্দের সর্বোচ্চ বেগ — ইস্পাত।

## তথ্যগত যাচাই
- বৈদ্যুতিক প্রবাহের SI একক অ্যাম্পিয়ার।
- Vitamin K রক্ত জমাট বাঁধায় প্রয়োজনীয় clotting protein সক্রিয়করণে সহায়তা করে।
- প্রদত্ত বিকল্পগুলোর মধ্যে ইস্পাতে শব্দের বেগ পানির ও বায়ুর চেয়ে বেশি; শূন্যস্থানে শব্দ চলতে পারে না।

## উৎস
প্রতিটি retained প্রশ্নের source URL master JSON-এ যুক্ত; NIST, NIH Office of Dietary Supplements এবং OpenStax ব্যবহৃত হয়েছে।

## সীমা
মূল suite-এর ১৩০টি baseline প্রশ্নের পূর্ণ factual audit এখনো বাকি। এই রিপোর্ট কেবল expansion batch ২৬–৩০-এর তিনটি নতুন প্রশ্নের যাচাই নিশ্চিত করে।

## নীতি
Normalized category + normalized question + sorted complete option set + normalized correct answer একই হলেই exact duplicate copy বাদ; ভিন্ন wording/option set রাখা হয়।
