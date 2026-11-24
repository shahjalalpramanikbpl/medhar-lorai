# মেধার লড়াই — Play Store release checklist

এই ফাইলটি v2.8 (versionCode 19) একক release-এর প্রস্তুতি ট্র্যাক করে। মাঝপথের APK বিতরণ করা হবে না।

## Automated release gates
- [x] প্রতিটি non-math চাকরি-প্রস্তুতি বিষয়ে অন্তত 150টি স্বতন্ত্র প্রশ্ন (v2.8 release gate; 300টি দীর্ঘমেয়াদি লক্ষ্য)
- [x] গণিতে ঠিক 300টি প্রশ্ন; 30টি লেভেল × 10টি প্রশ্ন
- [x] প্রশ্নের ID, প্রশ্ন, অপশন, উত্তর ও ব্যাখ্যার duplicate/structure checks
- [x] পাঁচটি model test-এর question distribution, timing ও marking checks
- [x] legacy local data, Firebase rules ও feature regression checks
- [x] Splash/home UI, career-preparation entry, app scripts ও launcher icon static smoke checks (10/10)
- [x] Signed Release APK build (GitHub Actions run 45348295701)
- [x] Signed Play Store AAB build (GitHub Actions run 45348295701)

## Google Play Console preparation
- [x] App title, short description, full description drafted in `docs/PLAY_STORE_LISTING_BN_DRAFT.md` (owner review pending)
- [ ] 512×512 high-resolution app icon
- [ ] 1024×500 feature graphic
- [ ] Phone screenshots showing real app screens and core features
- [ ] Privacy Policy URL publicly accessible
- [ ] Data safety form: Firebase Authentication/Firestore, identifiers, user-generated profile data, collection, purpose, retention and deletion disclosures verified against actual implementation
- [ ] Ads declaration and ad SDK/consent implementation verified before enabling ads
- [ ] App access instructions for reviewer/admin-gated features, if required
- [ ] Content rating questionnaire
- [ ] Target audience and Families policy declarations, as applicable
- [ ] App category, contact email and support details
- [x] v2.7 → v2.8 signing-certificate fingerprint match verified: SHA-256 `34:25:10:30:BD:9C:1E:64:4E:AF:7E:F2:66:3A:9B:8B:C7:55:28:24:B2:DA:DA:AA:4D:F7:9F:77:1D:DC:B3:B3`
- [ ] On-device v2.7 → v2.8 install/update test and local-data retention check
- [ ] Internal testing track: install/update test using existing signing identity
- [ ] Closed testing requirements and tester feedback reviewed
- [ ] Final Play Console pre-launch report and policy status reviewed
- [ ] Production rollout approval

## Important
- Do not publish until all automated gates pass and the Play Console declarations match the actual app behavior.
- Do not describe mini model tests as official full-length examination papers.
- Existing signing secrets must remain in GitHub Actions; never commit keystore files or passwords.
- Firebase presence rules must be published to the correct Firebase project before live admin presence analytics can work.
- Confirm the final privacy policy and data safety disclosures with the exact SDKs and data flows included in the release.
