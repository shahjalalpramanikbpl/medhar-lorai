const fs = require('node:fs');
const path = require('node:path');
const root = process.cwd();
const read = p => fs.readFileSync(path.join(root,p),'utf8');
const html = read('app/src/main/assets/index.html');
const suite = read('app/src/main/assets/job-prep-suite.js');
const manifest = read('app/src/main/AndroidManifest.xml');
const gradle = read('app/build.gradle.kts');
const workflow = read('.github/workflows/android-build.yml');
const checks = [
  ['launch splash title', html.includes('মেধার লড়াই') && html.includes('খেলুন-শিখুন-এগিয়ে যান')],
  ['quiz primary action', /<button[^>]*id="startBtn"[^>]*class="[^"]*home-entry-btn/.test(html) && html.includes('Quiz Challenge')],
  ['unified home branding and tagline', html.includes('Battle of Brains') && html.includes('মেধার লড়াই') && html.includes('জ্ঞানচর্চা ও চাকরির প্রস্তুতি—একই প্ল্যাটফর্মে')],
  ['ten colorful home shortcuts', html.includes('home-primary-actions') && ['vaultBtn','iqBtn','wordBtn','dailyBtn','accountBtn','profileBtn','progressBtn','badgeBtn','leaderBtn','rulesBtn'].every(id => html.includes('id="'+id+'"'))],
  ['career-preparation mount point', html.includes('id="homeFeatured"')],
  ['career-preparation button wiring', suite.includes("btn.id='jobPrepBtn'") && suite.includes('window.openJobPrep')],
  ['all app scripts loaded', ['content-bank.js','career-prep.js','math-levels.js','job-prep-suite.js','job-prep-locked-masters.js','firebase-config.js'].every(x => html.includes('src="'+x+'"'))],
  ['existing home feature controls retained', ['rulesBtn','leaderBtn','progressBtn','profileBtn','accountBtn','dailyBtn','iqBtn','vaultBtn','badgeBtn','wordBtn'].every(id => html.includes('id="'+id+'"'))],
  ['first-launch install analytics', html.includes('async function trackAppInstall') && html.includes('accounts:signUp?key=') && html.includes("appInstalls/")],
  ['registered account analytics', html.includes('async function trackRegisteredAccount') && html.includes("registeredUsers/") && html.includes('await trackRegisteredAccount()')],
  ['three separate admin usage metrics', html.includes('প্রথমবার চালু হওয়া ইনস্টল') && html.includes('নিবন্ধিত Firebase অ্যাকাউন্ট') && html.includes('বর্তমানে অনলাইন')],
  ['admin usage reads secured analytics collections', html.includes("readAllPrivateDocuments('appInstalls')") && html.includes("readAllPrivateDocuments('registeredUsers')") && html.includes("readAllPrivateDocuments('appPresence')")],
  ['launcher icon resource', fs.existsSync('app/src/main/res/mipmap-anydpi/ic_launcher.xml')],
  ['manifest launcher icon mapping', manifest.includes('android:icon="@mipmap/ic_launcher"') && manifest.includes('android:roundIcon="@mipmap/ic_launcher"')],
  ['package id unchanged', gradle.includes('applicationId = "com.medhar.lorai"')],
  ['release version defined', /versionCode\s*=\s*25/.test(gradle) && /versionName\s*=\s*"3\.3\.1"/.test(gradle)],
  ['hero live buttons fully cover baked banner labels with opaque backgrounds', html.includes('top:74.8%!important') && html.includes('height:22%!important') && html.includes('width:22.8%!important') && html.includes('background-blend-mode:normal!important') && html.includes('z-index:12!important')],
  ['hero metrics are opaque same-size live controls', html.includes('class="hero-stat-live hero-points-live"') && html.includes('class="hero-stat-live hero-level-live"') && html.includes('class="hero-stat-live hero-questions-live"') && html.includes('hero-stat-label') && html.includes('hero-stat-value')],
  ['hero spark animation uses moving spark elements without orbit rings', html.includes('brainSparkTravelA') && html.includes('brainSparkTravelE') && !html.includes('hero-brain-orbit') && !html.includes('hero-trophy-orbit')],
  ['trophy has its own-axis rotation animation', html.includes('hero-trophy-spin') && html.includes('trophyOwnAxisSpin') && html.includes('rotateY(360deg)')],
  ['quiz screen has working in-app return', html.includes('id="quizBackHome"') && html.includes("$('quizBackHome').onclick=")],
  ['footer version is generated from Gradle metadata', html.includes('src="app-version.js"') && html.includes('id="appVersionLabel"') && gradle.includes('generateAppVersionAsset') && gradle.includes('val releaseName = android.defaultConfig.versionName')],
  ['stale hardcoded footer version removed', !html.includes('সংস্করণ ২.৪')],
  ['approved commit build trigger', workflow.includes("startsWith(github.event.head_commit.message, 'BUILD:')") && workflow.includes(':assembleRelease')]
];
let failed = false;
for (const [name,ok] of checks) { console.log((ok?'PASS':'FAIL')+' '+name); if(!ok) failed=true; }
if (failed) process.exit(1);
console.log('Release UI smoke checks: '+checks.length+'/'+checks.length+' passed.');
