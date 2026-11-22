মেধার লড়াই (Battle of Brains) — Android APK Build Project

এই ফোল্ডারটি Android অ্যাপের সোর্স প্রজেক্ট; এটি APK ফাইল নয়। APK তৈরি হবে GitHub Actions দিয়ে। Codemagic প্রয়োজন নেই।

অ্যাপের বৈশিষ্ট্য
- বাংলা ও English ভাষা
- প্রতি লেভেলে ১০টি প্রশ্ন
- সঠিক উত্তরে +১, ভুল উত্তরে −০.২৫, উত্তর না দিলে ০
- ১০টি প্রশ্ন শেষ হলে পরের লেভেল আনলক
- পয়েন্ট, লেভেল ও প্রশ্ন ডিভাইসের Local Storage-এ সংরক্ষণ
- অ্যাডমিন প্যানেল থেকে প্রশ্ন যোগ, সম্পাদনা ও মুছে ফেলা
- JSON প্রশ্ন ব্যাকআপ ডাউনলোড ও পুনরুদ্ধার
- অতিরিক্ত চ্যালেঞ্জ, জ্ঞানভান্ডার, দৈনিক চ্যালেঞ্জ, অর্জন/ব্যাজ, অগ্রগতি এবং শব্দ/স্মৃতি মিনি-গেমের ইন্টারফেস

GitHub Actions build
- .github/workflows/android-apk.yml রয়েছে।
- ZIP extract করে ভেতরের সব ফাইল ও ফোল্ডার একই কাঠামো রেখে GitHub repository-র root-এ আপলোড করতে হবে। ZIP-টিকে সরাসরি আপলোড করা যাবে না।
- main/master branch-এ push করলে অথবা GitHub-এর Actions ট্যাব থেকে “Build Android APK” workflow চালালে APK build হবে।
- সফল হলে run-এর Artifacts থেকে “medhar-lorai-debug-apk” ডাউনলোড করা যাবে।

যাচাই ও সীমাবদ্ধতা
- MainActivity-তে WebView দিয়ে Android assets-এর index.html লোড করা হয়।
- JavaScript syntax check সফল হয়েছে।
- এই পরিবেশে Android SDK/build tools না থাকায় APK compile বা install test করা হয়নি। GitHub Actions build সফল না হওয়া পর্যন্ত APK-কে প্রস্তুত বলা যাবে না।
- এটি অফলাইন প্রোটোটাইপ; কেন্দ্রীয় সার্ভার/অ্যাকাউন্ট/অনলাইন লিডারবোর্ড নেই।
- বিজ্ঞাপন ও পেইড ফিচার যুক্ত হয়নি।
- প্রশ্নের ডেটা ডিভাইসেই থাকে; একাধিক ডিভাইসে স্বয়ংক্রিয়ভাবে সিঙ্ক হয় না।
