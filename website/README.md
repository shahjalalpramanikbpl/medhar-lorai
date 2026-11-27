# Official Website

This directory contains the public-facing static website for **Battle of Brains — মেধার লড়াই**.

## Preview locally
Open `index.html` in a browser through a local static server.

## Deployment
The repository workflow `.github/workflows/deploy-website.yml` publishes this directory with GitHub Pages when Pages is configured to use GitHub Actions.

## Brand asset rules
- App icon is the original repository root asset: `../app_icon.png`.
- Footer credit must remain exactly **Powered By SJP Technologies**.
- The primary full SJP Technologies raster logo (globe + SJP + TECHNOLOGIES + tagline) still needs to be copied from the Library source asset into `website/assets/` and visually checked before public launch. Do not substitute the secondary icon or a recreated mark.

## Scope
Public information and APK download only. No Firebase admin actions are exposed in this public page. Admin functionality will be built separately after Firebase owner UID and authorization are verified.

## Admin portal status
- `admin.html` provides Firebase email/password sign-in and checks the exact owner UID already hard-coded in the app's Firestore rules.
- It reads usage records and leaderboard only; Firestore Rules remain the actual authorization boundary.
- Question editing/publishing is intentionally not exposed yet. Live Firebase Auth ownership and deployed rules have not been independently verified, and no rules or data were changed.
- The portal stores the short-lived session in sessionStorage and never stores the password.
