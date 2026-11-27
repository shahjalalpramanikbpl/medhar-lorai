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
