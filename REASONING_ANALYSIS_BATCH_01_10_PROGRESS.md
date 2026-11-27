# যুক্তি ও বিশ্লেষণ — ব্যাচ ০১–১০ অডিট অগ্রগতি

তারিখ: ২৭ নভেম্বর ২০২৬  
অবস্থা: **BATCH 01–10 REVIEWED — বিষয়টি এখনো LOCKED নয়।**

## যাচাইয়ের পরিধি
- মূল প্রশ্নব্যাংক: ১৫১টি প্রশ্ন সম্পূর্ণ একবার পর্যালোচনা।
- সম্প্রসারণ ব্যাচ ০১–১০: ৪৪টি candidate প্রশ্ন পর্যালোচনা।
- মোট candidate: ১৯৫।
- Exact duplicate copy বাদ: ১৩টি।
- Consolidated unique master: **১৮২টি**।

## চূড়ান্ত শ্রেণিবিন্যাস
| বিভাগ | প্রশ্ন |
|---|---:|
| যুক্তি ও বিশ্লেষণ | **১৫২** |
| পরিমাণগত দক্ষতা অনুশীলন | **৩০** |
| মোট unique | **১৮২** |

Quantitative practice-এ ৩০টি প্রশ্ন আলাদা চিহ্নিত; মূল ৩০০-প্রশ্নের গণিত ব্যাংকে মেশানো হয়নি।

## সংশোধন
1. `base_067`: B, E, I, N, T ধারার সঠিক পরের অক্ষর A; answer index ২→৩ এবং ব্যাখ্যা সংশোধন।
2. `base_079`: সম্পর্কটি নির্দিষ্টভাবে “চাচা”; option ও ব্যাখ্যা স্পষ্ট করা।
3. `base_129`: C, F, I, L ধারার পরের অক্ষর O; answer index ১→২।
4. `extra_230`: ২x+৫=২১ হলে x=৮; answer index ১→২।

## Exact duplicate অপসারণ
- মূল প্রশ্নব্যাংক থেকে ৯টি duplicate, যেগুলো locked IQ/Math bank-এ আগে থেকেই ছিল।
- Expansion ০১–১০ থেকে ৪টি duplicate, যেগুলো locked IQ/quantitative bank-এ আগে থেকেই ছিল।
- মোট ১৩টি exact duplicate বাদ; একই বিষয়/ধারণা হলেও ভিন্ন প্রশ্ন বা ভিন্ন option set রাখা হয়েছে।
- Final master-এর ভেতরে exact duplicate: ০।
- Locked IQ ও Math master-এর সঙ্গে remaining exact collision: ০।

## GitHub master
`REASONING_ANALYSIS_MASTER_BATCH_01_10.json`

## পরবর্তী ধাপ
ব্যাচ ১১–২০-কে consolidated ০১–১০ master-এর সঙ্গে তুলনা করে একই ১০-ব্যাচ নিয়মে অডিট চলবে। Reasoning subject এখনো **NOT LOCKED**।

## চূড়ান্ত master reconciliation — ২৭ নভেম্বর ২০২৬
আগের এই checkpoint রিপোর্টের ১৮২ unique/NOT LOCKED অবস্থা interim এবং পুরোনো। সর্বশেষ কর্তৃত্বপূর্ণ consolidated master `REASONING_ANALYSIS_MASTER_BATCH_01_10.json` পুনরায় fetch করে দেখা হয়েছে; এতে পরবর্তী সব checkpoint ১১–২০, ২১–৩০, ৩১–৪০, ৪১–৫০ এবং বিদ্যমান source ৫১–৫৬-এর ফলও একীভূত।

- **চূড়ান্ত বিষয়: LOCKED — ২৯৬টি unique record।**
- ১৪২ base unique + expansion ০১–১০-এর ৪০ unique + পরবর্তী checkpoint-এর ১১৪ unique = ২৯৬।
- চূড়ান্ত শ্রেণিবিন্যাস: **যুক্তি ও বিশ্লেষণ ২৫২টি** + **পরিমাণগত দক্ষতা ৪৪টি** = ২৯৬।
- Exact duplicate copy অপসারণ: **১৬টি**; final master-এর ভেতরে exact duplicate অবশিষ্ট: ০।
- ১১–২০: ৪৩/৪৩ reviewed; ২১–৩০: ২৩ candidate, ১টি IQ master duplicate বাদ; ৩১–৪০: ২৭ candidate, ২টি IQ duplicate বাদ; ৪১–৫০: ১৯/১৯ reviewed, ১টি quantitative হিসেবে পুনঃশ্রেণিবদ্ধ; বিদ্যমান source ৫১–৫৩: ৫টি reviewed। ৫৪–৫৬-এ reasoning candidate ছিল না।
- মূল source inventory batch ৫৬-এ শেষ; ৫৭ বা তার পরের কোনো original reasoning batch নেই। ৫১–৬০ কেবল checkpoint range label; ৫৪–৬০-এ অতিরিক্ত source batch ধরে নেওয়া হয়নি।
- **Content audit LOCKED.** এটি Android release/build sign-off নয়; আলাদা release validation প্রয়োজন হতে পারে।

চূড়ান্ত master-এর `status=LOCKED`, `inventory.lastNote` এবং `laterBatchAudits`-এ উপরোক্ত হিসাব সংরক্ষিত। আগের interim সংখ্যাগুলোকে বর্তমান status হিসেবে ব্যবহার করা যাবে না।
