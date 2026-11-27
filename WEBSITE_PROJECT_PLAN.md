# Battle of Brains Official Website — Project Plan

Date: 2026-11-27

## User-approved scope
Create a free official website for the Android app “মেধার লড়াই (Battle of Brains)”, branded “Powered By SJP Technologies”.

## Public website
- Responsive Bengali-first landing page for mobile and desktop.
- App overview, key features, and the ten Job Preparation subjects.
- Prominent APK download button pointing to the verified v3.3.1 release:
  https://github.com/shahjalalpramanikbpl/medhar-lorai/releases/download/app-v3.3.1/medhar-lorai-3.3.1.apk
- Usage/rules, announcements, and contact section.
- Use the actual user-provided app home-screen and promotional poster assets when available; do not invent app screenshots or redraw the SJP Technologies logo.

## Admin area
- Separate authenticated admin sign-in.
- Manage question bank: add, edit, delete, and review subject-wise counts.
- Review users, online activity, and leaderboard.
- Publish announcements and app update information.
- Admin-only operations must be protected by Firebase Authentication and Firestore Security Rules / trusted backend checks. Never expose admin credentials or privileged service keys in browser code.

## Free-first implementation constraints
- No paid AI credits, paid hosting, paid domain, or paid promotion.
- Prefer GitHub Pages for static public hosting and Firebase Spark/free-tier services where suitable.
- Explain any free-tier quota, availability, or required user action honestly. Do not silently enable paid billing.
- If a requested control cannot be safely or reliably implemented on the free tier, explain the limitation before claiming it is complete.

## Integration and safety
- Preserve the existing Android app, Firebase project, authentication, Firestore collections/rules, question banks, and current release.
- Inspect existing repository and Firebase integration before changing anything.
- Build the public website separately from the Android app source where practical.
- Do not change Android app version or create a new APK unless explicitly requested.
- Keep the user's Facebook promotion on hold until the website is complete, tested, and published.

## Work sequence
1. Audit repository structure, current Firebase configuration/authentication, Firestore collections and security rules, and GitHub Pages availability.
2. Create responsive public website with verified APK link and brand assets.
3. Create separate admin login and protected dashboard.
4. Connect only to existing Firebase services after verifying the current schema and permissions.
5. Test public pages, download link, authentication, role enforcement, and admin actions.
6. Publish the website using free hosting and provide the public URL.
7. Only after successful publication, prepare Facebook promotion.

## Working style requested by user
- Work in clear, sequential checkpoints.
- Be fast and result-oriented; avoid unnecessary detours and repeated questions.
- Report exactly what is complete, what remains, and any genuine blocker.
- Never claim deployment, integration, or testing succeeded until verified.
