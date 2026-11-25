# GK audit batches 41–45

## Scope and counts
- Checked files: `job-prep-expansion-41.js` through `job-prep-expansion-45.js`.
- Total source records after cleanup: 119 (22 + 30 + 25 + 20 + 22).
- GK candidates before cleanup: 15.
- Exact duplicate copies removed: 1.
- Retained new questions: 14.
- Consolidated master 1–45: 89 unique expansion questions.
- Malformed retained entries (question/options/answer/explanation/source): 0.

## Duplicate decision
- `extra_1496` (batch 44) removed as an exact duplicate of `extra_332` in the earlier master: same question wording, same four-option set and same correct answer.
- Similar facts with different question wording or different option sets were retained.

## Retained questions
- `extra_1432`: জাতীয় সংসদ ভবনের স্থপতি — লুই আই কান
- `extra_1433`: বাংলাদেশ সময় অনুযায়ী বঙ্গবন্ধু-১ উপগ্রহ উৎক্ষেপণের তারিখ — ১২ মে ২০১৮
- `extra_1434`: কাপ্তাই জলবিদ্যুৎ কেন্দ্রের সঙ্গে যুক্ত নদী — কর্ণফুলী
- `extra_1435`: বিশ্বব্যাংকের সদর দপ্তর — ওয়াশিংটন, ডি.সি.
- `extra_1436`: OIC সদর দপ্তর — জেদ্দা
- `extra_1437`: জাতীয় স্মৃতিসৌধের স্থপতি — সৈয়দ মাইনুল হোসেন
- `extra_1463`: অস্থায়ী সরকারের শপথগ্রহণের স্থান — মুজিবনগর
- `extra_1464`: বাংলাদেশের বৃহত্তম ম্যানগ্রোভ বন — সুন্দরবন
- `extra_1465`: প্যারিস চুক্তির বিষয় — জলবায়ু পরিবর্তন
- `extra_1466`: ICJ-এর আসন — দ্য হেগ
- `extra_1493`: সংবিধান গণপরিষদে গৃহীত — ৪ নভেম্বর ১৯৭২
- `extra_1525`: জাতিসংঘের সদর দপ্তর — নিউইয়র্ক
- `extra_1526`: বিশ্বব্যাংকের সদর দপ্তর — ওয়াশিংটন, ডি.সি.
- `extra_1527`: অস্থায়ী সরকারের শপথগ্রহণের স্থান — মুজিবনগর

## Corrections and verification
- `extra_1433` corrected: 11 May 2018 was the US local launch date; Bangladesh local time was 12 May 2018. Question and options now explicitly use Bangladesh time.
- Kaptai dam/hydropower is associated with the Karnaphuli River.
- Official Bangladesh Parliament history confirms Louis I. Kahn as National Parliament Building architect.
- Bangladesh Tourism Board identifies the National Martyrs' Memorial at Savar; its architect is Syed Mainul Hossain.
- World Bank headquarters: Washington, D.C.; OIC headquarters: Jeddah; ICJ seat: The Hague; UN headquarters: New York.
- Banglapedia records the Mujibnagar Government oath at Baidyanathtala on 17 April 1971; the place was later named Mujibnagar.
- UNESCO identifies the Sundarbans as the world's largest contiguous mangrove forest.
- UNFCCC describes the Paris Agreement as an international treaty on climate change.
- Bangladesh Constitution's official text records adoption on 4 November 1972.

## Sources
Source URLs are stored in `GK_AUDIT_MASTER_01_45.json` for every retained question. The corrected satellite date uses Bangladesh Ministry of Foreign Affairs source material.

## Commit
- Master commit: `2067157c941fb7d29c966c6cc47af3beaf515c5c`.
- Batch 44 duplicate removal commit: `d5dfa3d532ff37042de53a74e42b1c477221e7f1`.
- Satellite date correction commit: `4c2d56f16be2a75deeb246ede40bfbe54be9a51e`.

## Policy
Only exact copies with identical normalized category, question wording, complete option set and correct answer are removed. Different wording or option sets are retained.
