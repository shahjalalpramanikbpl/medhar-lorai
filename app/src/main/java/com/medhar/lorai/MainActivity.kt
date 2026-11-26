package com.medhar.lorai

import android.app.Activity
import android.content.Intent
import android.graphics.Color
import android.net.Uri
import android.os.Bundle
import android.util.Base64
import android.view.Gravity
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Button
import android.widget.FrameLayout
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import com.google.android.gms.ads.AdListener
import com.google.android.gms.ads.AdLoader
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.AdSize
import com.google.android.gms.ads.AdView
import com.google.android.gms.ads.LoadAdError
import com.google.android.gms.ads.MobileAds
import com.google.android.gms.ads.nativead.NativeAd
import com.google.android.gms.ads.nativead.NativeAdView
import com.google.android.gms.ads.interstitial.InterstitialAd
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback
import org.json.JSONObject

class MainActivity : Activity() {

    private lateinit var webView: WebView
    private lateinit var rootLayout: LinearLayout
    private lateinit var adContainer: FrameLayout
    private var bannerAdView: AdView? = null
    private var nativeAdView: NativeAdView? = null
    private var nativeAd: NativeAd? = null
    private var interstitialAd: InterstitialAd? = null
    private var backupBytes: ByteArray? = null

    companion object {
        private const val REQUEST_SAVE_BACKUP = 4101
        private const val REQUEST_OPEN_BACKUP = 4102

        // Google demo ad units are intentionally used until the test build is verified.
        private const val USE_TEST_AD_UNITS = true
        private const val TEST_BANNER_ID = "ca-app-pub-3940256099942544/9214589741"
        private const val TEST_INTERSTITIAL_ID = "ca-app-pub-3940256099942544/1033173712"
        private const val TEST_NATIVE_ID = "ca-app-pub-3940256099942544/2247696110"

        // Production IDs supplied by the app owner; do not enable before approval and QA.
        @Suppress("unused")
        private const val LIVE_BANNER_HOME = "ca-app-pub-1476862328082201/9898257389"
        @Suppress("unused")
        private const val LIVE_BANNER_RESULT = "ca-app-pub-1476862328082201/7273248993"
        @Suppress("unused")
        private const val LIVE_INTERSTITIAL = "ca-app-pub-1476862328082201/7085546732"
        @Suppress("unused")
        private const val LIVE_NATIVE = "ca-app-pub-1476862328082201/1298033437"
    }

    @Suppress("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        rootLayout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setBackgroundColor(Color.rgb(10, 20, 36))
        }
        webView = WebView(this)
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.settings.allowFileAccess = true
        webView.settings.allowContentAccess = true
        webView.addJavascriptInterface(BackupBridge(), "AndroidBridge")
        webView.addJavascriptInterface(AdMobBridge(), "AdMobBridge")
        webView.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                showBanner("home")
            }
        }
        webView.webChromeClient = WebChromeClient()

        rootLayout.addView(
            webView,
            LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, 0, 1f
            )
        )
        adContainer = FrameLayout(this).apply {
            visibility = View.GONE
            setBackgroundColor(Color.rgb(10, 20, 36))
        }
        rootLayout.addView(
            adContainer,
            LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            )
        )
        setContentView(rootLayout)

        MobileAds.initialize(this) {
            runOnUiThread { loadInterstitial() }
        }

        if (savedInstanceState == null) {
            webView.loadUrl("file:///android_asset/index.html")
        } else {
            webView.restoreState(savedInstanceState)
        }
    }

    private fun bannerUnitId(screen: String): String =
        if (USE_TEST_AD_UNITS) TEST_BANNER_ID
        else if (screen == "result") LIVE_BANNER_RESULT else LIVE_BANNER_HOME

    private fun showBanner(screen: String) {
        runOnUiThread {
            destroyAdViews()
            if (screen != "home" && screen != "result") return@runOnUiThread

            val adView = AdView(this).apply {
                adUnitId = bannerUnitId(screen)
                setAdSize(AdSize.BANNER)
                adListener = object : AdListener() {
                    override fun onAdLoaded() {
                        adContainer.visibility = View.VISIBLE
                    }
                    override fun onAdFailedToLoad(error: LoadAdError) {
                        adContainer.visibility = View.GONE
                    }
                }
            }
            bannerAdView = adView
            adContainer.addView(
                adView,
                FrameLayout.LayoutParams(
                    FrameLayout.LayoutParams.MATCH_PARENT,
                    FrameLayout.LayoutParams.WRAP_CONTENT,
                    Gravity.CENTER
                )
            )
            adContainer.visibility = View.VISIBLE
            adView.loadAd(AdRequest.Builder().build())
        }
    }

    private fun hideAds() {
        runOnUiThread {
            destroyAdViews()
            adContainer.visibility = View.GONE
        }
    }

    private fun destroyAdViews() {
        bannerAdView?.destroy()
        bannerAdView = null
        nativeAdView?.destroy()
        nativeAdView = null
        nativeAd?.destroy()
        nativeAd = null
        adContainer.removeAllViews()
        adContainer.visibility = View.GONE
    }

    private fun loadInterstitial() {
        val unitId = if (USE_TEST_AD_UNITS) TEST_INTERSTITIAL_ID else LIVE_INTERSTITIAL
        InterstitialAd.load(
            this,
            unitId,
            AdRequest.Builder().build(),
            object : InterstitialAdLoadCallback() {
                override fun onAdLoaded(ad: InterstitialAd) {
                    interstitialAd = ad
                }
                override fun onAdFailedToLoad(error: LoadAdError) {
                    interstitialAd = null
                }
            }
        )
    }

    // Count every answered question across all quiz modules. Show one interstitial
    // after each 10 answered questions; never display an ad while a question is active.
    private fun onQuestionAnswered() {
        val prefs = getSharedPreferences("admob_frequency", MODE_PRIVATE)
        val answered = prefs.getInt("answered_questions", 0) + 1
        prefs.edit().putInt("answered_questions", answered).apply()
        if (answered % 10 != 0) return

        val ad = interstitialAd ?: run {
            loadInterstitial()
            return
        }
        interstitialAd = null
        ad.fullScreenContentCallback = object :
            com.google.android.gms.ads.FullScreenContentCallback() {
            override fun onAdDismissedFullScreenContent() {
                loadInterstitial()
            }
            override fun onAdFailedToShowFullScreenContent(error: com.google.android.gms.ads.AdError) {
                loadInterstitial()
            }
        }
        ad.show(this)
    }

    private fun showNativeAd() {
        runOnUiThread {
            destroyAdViews()
            val unitId = if (USE_TEST_AD_UNITS) TEST_NATIVE_ID else LIVE_NATIVE
            AdLoader.Builder(this, unitId)
                .forNativeAd { ad ->
                    nativeAd?.destroy()
                    nativeAd = ad
                    val adView = NativeAdView(this)
                    val card = LinearLayout(this).apply {
                        orientation = LinearLayout.VERTICAL
                        setPadding(18, 12, 18, 12)
                        setBackgroundColor(Color.rgb(25, 41, 67))
                    }
                    val label = TextView(this).apply {
                        text = "বিজ্ঞাপন"
                        textSize = 10f
                        setTextColor(Color.LTGRAY)
                    }
                    val headline = TextView(this).apply {
                        textSize = 16f
                        setTextColor(Color.WHITE)
                        setPadding(0, 4, 0, 4)
                    }
                    val body = TextView(this).apply {
                        textSize = 13f
                        setTextColor(Color.LTGRAY)
                    }
                    val cta = Button(this).apply {
                        isAllCaps = false
                    }
                    card.addView(label)
                    card.addView(headline)
                    card.addView(body)
                    card.addView(cta)
                    adView.addView(card)
                    adView.headlineView = headline
                    adView.bodyView = body
                    adView.callToActionView = cta
                    headline.text = ad.headline
                    body.text = ad.body ?: ""
                    body.visibility = if (ad.body.isNullOrBlank()) View.GONE else View.VISIBLE
                    cta.text = ad.callToAction ?: "আরও জানুন"
                    adView.setNativeAd(ad)
                    nativeAdView = adView
                    adContainer.addView(
                        adView,
                        FrameLayout.LayoutParams(
                            FrameLayout.LayoutParams.MATCH_PARENT,
                            FrameLayout.LayoutParams.WRAP_CONTENT
                        )
                    )
                    adContainer.visibility = View.VISIBLE
                }
                .withAdListener(object : AdListener() {
                    override fun onAdFailedToLoad(error: LoadAdError) {
                        adContainer.visibility = View.GONE
                    }
                })
                .build()
                .loadAd(AdRequest.Builder().build())
        }
    }

    private inner class AdMobBridge {
        @JavascriptInterface
        fun onScreenChanged(screen: String) {
            when (screen) {
                "home", "result" -> showBanner(screen)
                else -> hideAds()
            }
        }

        @JavascriptInterface
        fun showNativeAd() {
            this@MainActivity.showNativeAd()
        }

        @JavascriptInterface
        fun onQuestionAnswered() {
            this@MainActivity.onQuestionAnswered()
        }
    }

    private inner class BackupBridge {
        @JavascriptInterface
        fun saveBackup(base64Data: String, fileName: String) {
            try {
                backupBytes = Base64.decode(base64Data, Base64.DEFAULT)
                runOnUiThread {
                    val intent = Intent(Intent.ACTION_CREATE_DOCUMENT).apply {
                        addCategory(Intent.CATEGORY_OPENABLE)
                        type = "application/json"
                        putExtra(Intent.EXTRA_TITLE, fileName.ifBlank { "medhar-lorai-backup.json" })
                    }
                    startActivityForResult(intent, REQUEST_SAVE_BACKUP)
                }
            } catch (e: Exception) {
                runOnUiThread {
                    Toast.makeText(this@MainActivity, "ব্যাকআপ তৈরি করা যায়নি", Toast.LENGTH_SHORT).show()
                }
            }
        }

        @JavascriptInterface
        fun pickBackup() {
            runOnUiThread {
                val intent = Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
                    addCategory(Intent.CATEGORY_OPENABLE)
                    type = "application/json"
                    addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                }
                startActivityForResult(intent, REQUEST_OPEN_BACKUP)
            }
        }
    }

    @Deprecated("Deprecated in Android")
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (resultCode != RESULT_OK || data?.data == null) return
        val uri: Uri = data.data!!
        when (requestCode) {
            REQUEST_SAVE_BACKUP -> {
                try {
                    val bytes = backupBytes ?: return
                    contentResolver.openOutputStream(uri)?.use { it.write(bytes) }
                    Toast.makeText(this, "ব্যাকআপ সফলভাবে সংরক্ষিত হয়েছে", Toast.LENGTH_SHORT).show()
                } catch (e: Exception) {
                    Toast.makeText(this, "ব্যাকআপ সংরক্ষণ করা যায়নি", Toast.LENGTH_LONG).show()
                } finally {
                    backupBytes = null
                }
            }
            REQUEST_OPEN_BACKUP -> {
                try {
                    val json = contentResolver.openInputStream(uri)?.bufferedReader(Charsets.UTF_8)?.use { it.readText() }
                        ?: throw IllegalStateException("ফাইল পড়া যায়নি")
                    val quotedJson = JSONObject.quote(json)
                    webView.evaluateJavascript("window.importBackupJson($quotedJson);", null)
                } catch (e: Exception) {
                    Toast.makeText(this, "ব্যাকআপ ফাইলটি পড়া যায়নি", Toast.LENGTH_LONG).show()
                }
            }
        }
    }

    override fun onSaveInstanceState(outState: Bundle) {
        webView.saveState(outState)
        super.onSaveInstanceState(outState)
    }

    override fun onDestroy() {
        bannerAdView?.destroy()
        nativeAdView?.destroy()
        nativeAd?.destroy()
        webView.destroy()
        super.onDestroy()
    }

    @Deprecated("Deprecated in Android")
    override fun onBackPressed() {
        if (::webView.isInitialized && webView.canGoBack()) webView.goBack()
        else super.onBackPressed()
    }
}
