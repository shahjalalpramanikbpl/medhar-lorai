# GitHub Pages deployment

- Workflow: `.github/workflows/deploy-website.yml`
- Published directory: `website/`
- Required repository setting: Settings → Pages → Build and deployment → Source → GitHub Actions.
- Automatic deployment runs on changes to `website/**`, the workflow file, or root `app_icon.png`.
- A manual run is also available from Actions → Deploy official website → Run workflow.
- A successful run should expose the public URL in the workflow's deployment environment. Verify that URL and check mobile rendering before announcing launch.

## Launch blockers to clear before promotion

1. Copy the exact original full SJP Technologies logo (including digital globe and tagline) into `website/assets/SJP_Technologies_Main_Logo.png`; do not redraw or substitute it.
2. Verify the deployed home page, APK download, navigation, and mobile layout.
3. Verify Firebase admin sign-in and Firestore read access against the live project before relying on the admin portal.
