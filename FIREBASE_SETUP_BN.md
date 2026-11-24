# Firebase সংযোগ — মেধার লড়াই

## এই রিপোজিটরিতে প্রস্তুত করা হয়েছে
- Firebase Email/Password Authentication-এর জন্য অ্যাকাউন্ট তৈরি ও লগইন UI
- Firebase Firestore REST API দিয়ে স্কোর/লেভেল সিঙ্ক
- অনলাইন লিডারবোর্ড (সর্বোচ্চ ৫০ জন)
- Android INTERNET permission
- প্রাথমিক Firestore Security Rules: leaderboard সবার জন্য read-only, নিজের UID-এর row-তে write; users collection private

## Firebase Console-এ একবারের সেটআপ
১. https://console.firebase.google.com/ এ নতুন project তৈরি করুন (নাম: medhar-lorai)।
২. Authentication → Sign-in method থেকে Email/Password এবং Anonymous—দুই provider-ই চালু করুন। Anonymous provider চালু না থাকলে লগইন ছাড়াই ইনস্টল গণনা হবে না।
৩. Project settings → Your apps → Web app নিবন্ধন করে Web API Key এবং Project ID নিন।
৪. `app/src/main/assets/firebase-config.js` ফাইলে `apiKey` ও `projectId` বসান। API key অ্যাপের public config; Service Account key কখনো APK বা GitHub-এ দেবেন না।
৫. Firestore Database তৈরি করুন; Rules পেজে সর্বশেষ `firestore.rules`-এর নিয়ম প্রকাশ করুন। নতুন নিয়মে `appInstalls`, `registeredUsers` ও `appPresence` collection-এর নিরাপদ পাঠ/লেখার অনুমতি রয়েছে।
৬. Anonymous sign-in চালু হলে প্রথমবার অ্যাপ চালুর ডিভাইস গণনা হবে। এটি Play Store download count নয়; অ্যাপের ডেটা মুছে পুনরায় ইনস্টল করলে নতুন install হিসেবে ধরা পড়তে পারে।
৭. নিবন্ধিত অ্যাকাউন্টের সংখ্যা নতুন সংস্করণে অন্তত একবার লগইন করা অ্যাকাউন্ট ধরে; পুরোনো ব্যবহারকারী পরেরবার লগইন করলে গণনায় যুক্ত হবে।
৮. GitHub-এ commit হলে CI validation/build workflow চলবে; ব্যবহারকারীর নির্দেশ অনুযায়ী এখনই APK build/release করা হবে না।

## গুরুত্বপূর্ণ সীমাবদ্ধতা
বর্তমান লিডারবোর্ডে স্কোর অ্যাপ থেকে লেখা হয়; তাই এটি beta leaderboard, প্রতারণা-প্রতিরোধী/পুরস্কার প্রদানের উপযোগী নয়। Production-এ পয়েন্ট যাচাই Cloud Functions/বিশ্বস্ত সার্ভারে সরিয়ে নিতে হবে। Firebase project config না বসানো পর্যন্ত অনলাইন ফিচার চালু হবে না। Firebase Console-এর সেটআপ ব্যবহারকারীর নিজস্ব অনুমোদন ও project access প্রয়োজন।
