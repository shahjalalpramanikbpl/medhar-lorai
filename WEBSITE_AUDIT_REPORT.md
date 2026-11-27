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
- [ ] Primary full SJP Technologies logo copied into the deployable website artifact and visually checked. The original Library file has been materialized locally, but this GitHub file workflow cannot directly upload binary image bytes; no substitute/recreated logo has been used.
- [x] Separate public website landing page and GitHub Pages workflow added under `website/`; existing offline prototype `index.html` preserved.
- [x] Separate Firebase UID-gated admin sign-in/dashboard added. It is read-only for now: usage records and leaderboard are displayed; no Firestore data/rules mutations are exposed.
- [ ] Website browser QA and GitHub Pages deployment confirmation pending. Pages settings cannot be enabled/verified through the available GitHub actions here.
- [ ] Firebase Console/Auth owner and live deployed rules independently verified.
- [ ] Free hosting configured and live.

## Website implementation checkpoint (2026-11-27)
- Public site: `website/index.html`; the app icon is loaded from the original repository root asset via raw GitHub URL.
- Admin portal: `website/admin.html`; Firebase email/password login is accepted only for the owner UID already referenced in repository Firestore Rules. The page uses sessionStorage for its short-lived token session and does not persist the password.
- Firebase web client identifiers: copied to `website/firebase-config.js`; these are public client identifiers, not service-account secrets.
- Deployment workflow: `.github/workflows/deploy-website.yml` uploads the `website/` directory to GitHub Pages.
- No Firestore rules, user data, question-bank documents, Android source, or APK release were changed.
- Outstanding: add the exact full SJP Technologies logo asset (with globe), configure/verify Pages in repository Settings, test live sign-in and Firestore reads, then implement question CRUD only after confirming live Auth owner UID and deployed rules.


## 2026-11-27 — Admin dashboard subject-count checkpoint
- Updated `website/admin.html` to read the published central question-bank chunks using the existing public-read path.
- Added a subject-wise count table using the question schema's `c` field (the same schema used by the Android app's `validateCloudQuestionBank`).
- Added consistency validation: loaded question count must match the published metadata count before displaying the breakdown.
- No Firestore writes, rule changes, or Android app changes were made.
- Inline admin JavaScript syntax check: PASS.
- Commit: `33f26cd6cef46da27cb15e737c23aabf3b1c40f1`.
- Live Firebase data and the deployed Pages site remain unverified; subject counts will only appear after a valid central bank is available and the admin's live read permissions work.


## 2026-11-27 — Deployment readiness re-check
- Confirmed the existing GitHub Actions workflow already has `workflow_dispatch` and deploys only the `website/` directory.
- Repository permissions report admin access for the connected GitHub integration, but the available GitHub actions do not expose Pages configuration or workflow-dispatch operations.
- Latest website source and admin source are committed. No workflow run is currently confirmed for the latest website/admin changes.
- Original primary SJP globe logo file is now present in the working container at `/mnt/data/website_brand_assets/SJP_Technologies_Main_Logo.png` (1070×860 PNG, 894,843 bytes). Uploading binary assets through the currently available GitHub actions remains unsupported; therefore it has not been committed to `website/assets/` and the site is not launch-ready.
- Pages enablement and live Firebase validation remain outstanding. No live deployment, Firebase write, or Firestore Rules change was performed.
