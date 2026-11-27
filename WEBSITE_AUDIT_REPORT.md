# Website & Firebase Audit — 2026-11-27

Repository: `shahjalalpramanikbpl/medhar-lorai`
Default branch: `main`
Visibility: public
Repository access: admin/push available to connected GitHub account.

## Verified repository findings

1. The root `index.html` is an existing offline quiz prototype, not the planned public official website. It contains localStorage-based questions/points, an offline admin form, and an explicit notice that online accounts/database/leaderboard are not connected. It must NOT be overwritten or repurposed as the official website.
2. `firestore.rules` currently contains collections/rules for:
   - `leaderboard/{uid}`
   - `publicQuestionBank/{documentId}`
   - `appPresence/{uid}`
   - `appInstalls/{uid}`
   - `registeredUsers/{uid}`
   - `users/{uid}/questionBank/{documentId}`
3. The rules hard-code owner UID `TIEU9BdlVFcj2LzwoGKI2BOd2tR2` for publicQuestionBank writes and appPresence reads. This is sensitive authorization logic and must be verified against the actual Firebase Auth owner before any rules change. No rules have been changed.
4. Leaderboard rules explicitly state that client-submitted scores are not cheat-proof. Do not advertise score integrity or introduce admin score mutation without a secure design.
5. The project plan and brand-asset register exist:
   - `WEBSITE_PROJECT_PLAN.md`
   - `BRAND_ASSETS_LOCK.md`
6. The brand register identifies two distinct original Library assets:
   - App logo: `app_icon.png`, Library ID `file_00000000109c8208b5b7558b0e2f7e8b`
   - Full SJP logo: `SJP_Technologies_Main_Logo.png`, Library ID `file_0000000089f88208be2ab8f10622f98d`
   The SJP globe is mandatory. These source files have not yet been copied into the website repository.
7. Firebase web configuration is present at `app/src/main/assets/firebase-config.js` for project `medhar-lorai` (public web API key/projectId/appId identifiers). It is included by the Android WebView quiz page. The Android app uses Firestore REST calls from JavaScript; the native wrapper loads `file:///android_asset/index.html`.
8. The app assets page references `publicQuestionBank`, `leaderboard`, `appPresence`, `appInstalls`, and `registeredUsers`. Admin usage statistics read `appInstalls`, `registeredUsers`, and `appPresence`; current Firestore Rules only allow the configured owner UID to read these collections.
9. GitHub code search indexing returned no results, but direct repository file inspection found Firebase config and Firebase REST integration. No Firebase Hosting config was verified. GitHub Pages deployment is being prepared separately.

## Risks / blockers before Firebase-connected admin work

- The current owner UID must be confirmed in Firebase Authentication.
- Firebase project ID/configuration and actual enabled Auth providers must be inspected from the project/app configuration or Firebase Console.
- Android app source must be located and its Firestore collection/document schema checked before designing compatible web writes.
- Firebase Console state, deployed rules, billing plan, and current data cannot be confirmed from repository files alone.
- No service-account key or private credential may be added to browser code or this public repository.

## Safe next steps

1. Preserve root `index.html` and all Android app/release files.
2. Create a separate `website/` public site, initially static and read-only.
3. Copy the two exact original logo assets from Library into `website/assets/`; visually verify both before publication.
4. Inspect Android source and Firebase configuration; then design a least-privilege admin model. Do not change deployed Firestore rules until backup, owner UID verification, and rollback plan exist.
5. Test the public site and APK URL before enabling GitHub Pages.

## Status

- [x] Repository metadata and key existing files inspected.
- [x] Existing offline prototype identified and protected from overwrite.
- [x] Firestore rules reviewed; no changes made.
- [x] Brand register reviewed; original asset IDs identified.
- [x] Android WebView Firebase config and REST collection usage inspected from repository source.
- [ ] Firebase Console/Auth owner and live deployed rules independently verified.
- [ ] Original logo files copied and visually checked in website assets.
- [ ] Separate public website built and tested.
- [ ] Admin panel security model implemented and tested.
- [ ] Free hosting configured and live.
