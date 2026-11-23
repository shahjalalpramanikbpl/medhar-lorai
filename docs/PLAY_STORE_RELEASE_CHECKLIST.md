# মেধার লড়াই — Play Store release checklist

এই ফাইলটি v2.8 (versionCode 19) একক release-এর প্রস্তুতি ট্র্যাক করে। মাঝপথের APK বিতরণ করা হবে না।

## Automated release gates
- [ ] প্রতিটি non-math চাকরি-প্রস্তুতি বিষয়ে অন্তত 300টি প্রশ্ন
- [ ] গণিতে ঠিক 300টি প্রশ্ন; 30টি লেভেল × 10টি প্রশ্ন
- [ ] প্রশ্নের ID, প্রশ্ন, অপশন, উত্তর ও ব্যাখ্যার duplicate/structure checks
- [ ] পাঁচটি model test-এর question distribution, timing ও marking checks
- [ ] legacy local data, Firebase rules ও feature regression checks
- [ ] Signed Release APK build
- [ ] Signed Play Store AAB build

## Google Play Console preparation
- [ ] App title, short description, full description (Bangla)
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
