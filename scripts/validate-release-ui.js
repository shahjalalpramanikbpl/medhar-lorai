const fs = require('node:fs');
const path = require('node:path');
const root = process.cwd();
const read = p => fs.readFileSync(path.join(root,p),'utf8');
const html = read('app/src/main/assets/index.html');
const suite = read('app/src/main/assets/job-prep-suite.js');
const manifest = read('app/src/main/AndroidManifest.xml');
const gradle = read('app/build.gradle.kts');
const checks = [
  ['launch splash title', html.includes('মেধার লড়াই') && html.includes('খেলুন-শিখুন-এগিয়ে যান')],
  ['quiz primary action', /<button[^>]*id="startBtn"[^>]*class="[^"]*start-3d/.test(html) && html.includes('কুইজ খেলা শুরু করুন')],
  ['unified home branding and tagline', html.includes('জ্ঞানচর্চা ও চাকরির প্রস্তুতি—একই প্ল্যাটফর্মে') && html.includes('start-brand-mark')],
  ['three compact home shortcuts', html.includes('home-primary-actions') && ['rulesBtn','leaderBtn','progressBtn'].every(id => html.includes('id="'+id+'"'))],
  ['career-preparation mount point', html.includes('id="homeFeatured"')],
  ['career-preparation button wiring', suite.includes("btn.id='jobPrepBtn'") && suite.includes('window.openJobPrep')],
  ['all app scripts loaded', ['content-bank.js','career-prep.js','math-levels.js','job-prep-suite.js','firebase-config.js'].every(x => html.includes('src="'+x+'"'))],
  ['existing home feature controls retained', ['rulesBtn','leaderBtn','progressBtn','profileBtn','accountBtn','dailyBtn','iqBtn','vaultBtn','badgeBtn','wordBtn'].every(id => html.includes('id="'+id+'"'))],
  ['first-launch install analytics', html.includes('async function trackAppInstall') && html.includes('accounts:signUp?key=') && html.includes("appInstalls/")],
  ['registered account analytics', html.includes('async function trackRegisteredAccount') && html.includes("registeredUsers/") && html.includes('await trackRegisteredAccount()')],
  ['three separate admin usage metrics', html.includes('প্রথমবার চালু হওয়া ইনস্টল') && html.includes('নিবন্ধিত Firebase অ্যাকাউন্ট') && html.includes('বর্তমানে অনলাইন')],
  ['admin usage reads secured analytics collections', html.includes("readAllPrivateDocuments('appInstalls')") && html.includes("readAllPrivateDocuments('registeredUsers')") && html.includes("readAllPrivateDocuments('appPresence')")],
  ['launcher icon resource', fs.existsSync('app/src/main/res/mipmap-anydpi/ic_launcher.xml')],
  ['manifest launcher icon mapping', manifest.includes('android:icon="@mipmap/ic_launcher"') && manifest.includes('android:roundIcon="@mipmap/ic_launcher"')],
  ['package id unchanged', gradle.includes('applicationId = "com.medhar.lorai"')],
  ['release version defined', /versionCode\s*=\s*19/.test(gradle) && /versionName\s*=\s*"2\.8"/.test(gradle)]
];
let failed = false;
for (const [name,ok] of checks) { console.log((ok?'PASS':'FAIL')+' '+name); if(!ok) failed=true; }
if (failed) process.exit(1);
console.log('Release UI smoke checks: '+checks.length+'/'+checks.length+' passed.');
