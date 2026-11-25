# GK audit batches 36–40

## Scope and counts
- Checked source files: `job-prep-expansion-36.js` through `job-prep-expansion-40.js`.
- Total source records: 128 (batch 36: 26; batch 37: 26; batch 38: 24; batch 39: 25 after duplicate removal; batch 40: 27).
- Bangladesh & International GK candidates before cleanup: 12.
- Exact duplicate copies removed: 1.
- Retained new questions: 11.
- Consolidated master 1–40: 75 unique expansion questions.
- Malformed retained entries (question/options/answer/explanation/source): 0.

## Duplicate decision
- `extra_1342` (batch 39) removed as an exact duplicate of `extra_051` in the earlier master: identical question wording, four-option set and correct answer.
- `extra_1258` retained: its option set differs from the earlier 300-seat question.
- `extra_1312` retained: question wording differs from the earlier Constitution-adoption item.
- Other similar facts with different question wording or option sets were retained under the exact-copy-only policy.

## Retained questions
- `extra_1258` (batch 36): বাংলাদেশের জাতীয় সংসদের সাধারণ আসন সংখ্যা কত? — **৩০০**
- `extra_1259` (batch 36): বাংলাদেশের জাতীয় স্মৃতিসৌধ কোথায় অবস্থিত? — **সাভার**
- `extra_1260` (batch 36): বিশ্ব স্বাস্থ্য সংস্থা (WHO) প্রতিষ্ঠিত হয় কত সালে? — **১৯৪৮**
- `extra_1261` (batch 36): জাতিসংঘের নিরাপত্তা পরিষদের স্থায়ী সদস্য কয়টি দেশ? — **৫টি**
- `extra_1312` (batch 38): বাংলাদেশের সংবিধান গণপরিষদে গৃহীত হয় কবে? — **৪ নভেম্বর ১৯৭২**
- `extra_1313` (batch 38): জাতিসংঘের সদর দপ্তর কোথায় অবস্থিত? — **নিউইয়র্ক**
- `extra_1343` (batch 39): বিশ্ব স্বাস্থ্য সংস্থার (WHO) সদর দপ্তর কোথায়? — **জেনেভা**
- `extra_1344` (batch 39): বাংলাদেশের মুক্তিযুদ্ধের সময় দেশকে কয়টি সেক্টরে ভাগ করা হয়েছিল? — **১১টি**
- `extra_1372` (batch 40): বাংলাদেশের বর্তমান জাতীয় পতাকার চূড়ান্ত নকশা কে প্রণয়ন করেন? — **কামরুল হাসান**
- `extra_1373` (batch 40): সার্ক (SAARC) প্রতিষ্ঠিত হয় কোন সালে? — **১৯৮৫**
- `extra_1374` (batch 40): ২০১৮ সালে বাংলাদেশের প্রথম কৃত্রিম উপগ্রহটি কোন নামে উৎক্ষেপণ করা হয়েছিল? — **বঙ্গবন্ধু-১**

## Fact checks
- Bangladesh Parliament brochure confirms 300 directly elected general seats; reserved seats are separate.
- Bangladesh Tourism Board identifies the National Martyrs' Memorial at Savar.
- WHO official history confirms its Constitution came into force on 7 April 1948; WHO official contact page confirms Geneva headquarters.
- UN Charter Article 23 confirms five permanent Security Council members; UN official material confirms its headquarters in New York.
- Bangladesh Constitution's official text records adoption on 4 November 1972.
- Banglapedia records eleven sectors in the Liberation War.
- SAARC's official site records establishment on 8 December 1985.
- Bangladesh MFA's satellite history confirms the first satellite was launched in 2018 as Bangabandhu Satellite-1; wording specifies the launch-time name.
- Contemporary reporting distinguishes Quamrul Hassan's 1972 redesign from the original 1971 map-bearing flag.

## Source-file commits
- Batch 36 source links: `9b88dc6ddeb833b7c0bc2488e1531eccf4e57e40`.
- Batch 39 exact duplicate removal: `41446d486ee1fda539352f4445739ec77e0ae2ac`.
- Batch 39 source links: `d39b8e203799561f61ab2ea18605f8b8195d4bac`.
- Batch 38 source links: `dcfbef3542fbb372143a4c116e28fc1d98deef5c`.
- Batch 40 wording/source correction: `5944d962de9d7316967d9fbe50638a7d44927fe0`.
- Consolidated master commit: `d7e56cb46f4deab3361dba5d7417cdbb11b696f3`.

## Policy
Only exact copies with identical normalized category, question wording, complete option set and correct answer are removed. Different wording or option sets are retained.
