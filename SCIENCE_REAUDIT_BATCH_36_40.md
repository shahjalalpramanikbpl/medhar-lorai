# সাধারণ বিজ্ঞান — প্রকৃত পুনঃযাচাই: Expansion Batch 36–40

তারিখ: ২৬ নভেম্বর ২০২৬  
অবস্থা: **সম্পন্ন — পরবর্তী ধাপ Batch 41–45**  
LOCK: **নয়** — baseline-এর ১৩০টি প্রশ্নের প্রকৃত factual re-audit এখনো বাকি।

## পরিধি ও গণনা

| ব্যাচ | বর্তমান source-এ বিজ্ঞান প্রশ্ন | নোট |
|---|---:|---|
| 36 | 0 | বিজ্ঞান প্রশ্ন নেই |
| 37 | 6 | ৬টি retained |
| 38 | 3 | ৩টি retained |
| 39 | 0 | পূর্বে অপসারিত ২টি duplicate ledger-এ আছে |
| 40 | 2 | ২টি retained |
| **মোট** | **11** | **১৩টি ঐতিহাসিক candidate-এর মধ্যে ২টি duplicate copy আগেই বাদ** |

- ঐতিহাসিক candidate: **১৩টি**।
- আগেই বাদ দেওয়া exact duplicate: **২টি** — `extra_1345 → suite_33`, `extra_1346 → suite_45`। দুটিই Batch 39-এর source থেকে আগে অপসারিত; master duplicate ledger-এ রাখা হয়েছে।
- এই checkpoint-এ প্রশ্নভিত্তিক পুনঃযাচাইকৃত retained: **১১টি**।
- নতুন correction: **০**।
- Batch 36–40-এর ১১টি retained প্রশ্নের সঙ্গে baseline ও consolidated Batch 1–35 set-এর canonical exact-signature duplicate: **০**।
- Batch 1–40 পর্যন্ত expansion substantive re-audit: **৭৪টি retained প্রশ্ন** (আগের ৬৩ + এই ধাপের ১১)।
- baseline-এর ১৩০টি প্রশ্নের প্রকৃত factual re-audit এখনো বাকি; তাই LOCK দেওয়া হয়নি।

## প্রশ্নভিত্তিক যাচাই

প্রতিটি retained প্রশ্নের প্রশ্নবাক্য, চারটি বিকল্প, নির্ধারিত উত্তর এবং ব্যাখ্যা পরীক্ষা করা হয়েছে।

| ID | যাচাইকৃত তথ্য / সঠিক উত্তর | সিদ্ধান্ত |
|---|---|---|
| extra_1277 | ইউরিয়া প্রধানত যকৃতে তৈরি হয়; কিডনি পরে প্রস্রাবে নির্গত করে | সঠিক |
| extra_1278 | ২৫°C-এ pH ৭-এর বেশি হলে ক্ষারধর্মী; ১০ সঠিক বিকল্প | সঠিক |
| extra_1279 | DNA = Deoxyribonucleic Acid | সঠিক |
| extra_1280 | থাইরক্সিন (T4) থাইরয়েড গ্রন্থি থেকে নিঃসৃত | সঠিক |
| extra_1281 | পারদ ২০°C-এ তরল ধাতু | সঠিক |
| extra_1282 | জাইলেম মূল থেকে পানি ও খনিজ উপাদান পরিবহন করে | সঠিক |
| extra_1315 | শব্দ যান্ত্রিক তরঙ্গ; শূন্যস্থানে চলতে পারে না | সঠিক |
| extra_1316 | লোহিত রক্তকণিকার প্রধান কাজ অক্সিজেন পরিবহন | সঠিক |
| extra_1317 | নিউটনের তৃতীয় সূত্রে বলজোড়া সমান মানের, বিপরীতমুখী এবং ভিন্ন বস্তুর ওপর ক্রিয়া করে | সঠিক |
| extra_1375 | সালোকসংশ্লেষণ প্রধানত ক্লোরোপ্লাস্টে ঘটে | সঠিক |
| extra_1376 | স্বাভাবিক বায়ুচাপ (প্রায় ১ atm)-এ বিশুদ্ধ পানির স্ফুটনাঙ্ক ১০০°C | সঠিক |

## Exact duplicate বনাম বিষয়গত overlap

নীতিমতে exact duplicate বাদ দিতে category, normalized question, সম্পূর্ণ option set এবং keyed answer—সব এক হতে হবে। শুধু একই জ্ঞান/প্রশ্নবাক্য থাকলেই বাদ দেওয়া হয়নি।

নিচেরগুলো বিষয়গত/প্রশ্নবাক্যের overlap; option set ভিন্ন হওয়ায় exact duplicate নয়:
- extra_1279 বনাম suite_8/extra_097 — DNA-এর পূর্ণরূপ।
- extra_1281 বনাম extra_1470 — কক্ষ তাপমাত্রায় তরল ধাতু।
- extra_1315 বনাম suite_5 — শূন্যস্থানে শব্দ চলাচল করে না; একটি distractor ভিন্ন।
- extra_1316 বনাম extra_1406/extra_1648 — লোহিত রক্তকণিকার প্রধান কাজ।
- extra_1375 বনাম extra_237 — সালোকসংশ্লেষণের অঙ্গাণু।

## উৎস

- Urea cycle / liver: https://www.ncbi.nlm.nih.gov/sites/books/NBK513323/
- pH scale: https://www.usgs.gov/water-science-school/science/ph-and-water
- DNA: https://www.genome.gov/genetics-glossary/Deoxyribonucleic-Acid
- Thyroxine (T4): https://medlineplus.gov/lab-tests/thyroxine-t4-test/
- Mercury: https://periodic-table.rsc.org/element/80/Mercury
- Xylem and phloem: https://openstax.org/books/biology-2e/pages/30-1-the-plant-body
- Sound: https://openstax.org/books/university-physics-volume-1/pages/17-2-speed-of-sound
- Red blood cells: https://www.ncbi.nlm.nih.gov/books/NBK279392/
- Newton's third law: https://openstax.org/books/university-physics-volume-1/pages/5-5-newtons-third-law
- Photosynthesis / chloroplast: https://www.ncbi.nlm.nih.gov/books/NBK26819/
- Water boiling point: https://www.usgs.gov/water-science-school/science/facts-about-water

## পরবর্তী ধাপ

Expansion Batch **41–45**-এর source ও master পুনরায় পড়ে, 1–40-এর consolidated set-এর সঙ্গে একই নিয়মে তুলনা করে এগোতে হবে। baseline ১৩০টি প্রশ্নের পৃথক substantive factual re-audit সম্পন্ন না হওয়া পর্যন্ত সাধারণ বিজ্ঞান **REVALIDATION_IN_PROGRESS_NOT_LOCKED** থাকবে।
