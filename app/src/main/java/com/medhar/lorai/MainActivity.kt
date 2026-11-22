package com.medhar.lorai

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Base64
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import org.json.JSONObject

class MainActivity : Activity() {

    private lateinit var webView: WebView
    private var backupBytes: ByteArray? = null

    companion object {
        private const val REQUEST_SAVE_BACKUP = 4101
        private const val REQUEST_OPEN_BACKUP = 4102
    }

    @Suppress("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        webView = WebView(this)

        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.settings.allowFileAccess = true
        webView.settings.allowContentAccess = true

        webView.addJavascriptInterface(
            BackupBridge(),
            "AndroidBridge"
        )

        webView.webViewClient = WebViewClient()
        webView.webChromeClient = WebChromeClient()

        setContentView(webView)

        if (savedInstanceState == null) {
            webView.loadUrl("file:///android_asset/index.html")
        } else {
            webView.restoreState(savedInstanceState)
        }
    }

    private inner class BackupBridge {

        @JavascriptInterface
        fun saveBackup(base64Data: String, fileName: String) {
            try {
                backupBytes = Base64.decode(
                    base64Data,
                    Base64.DEFAULT
                )

                runOnUiThread {
                    val intent = Intent(
                        Intent.ACTION_CREATE_DOCUMENT
                    ).apply {
                        addCategory(Intent.CATEGORY_OPENABLE)
                        type = "application/json"
                        putExtra(
                            Intent.EXTRA_TITLE,
                            fileName.ifBlank {
                                "medhar-lorai-backup.json"
                            }
                        )
                    }

                    startActivityForResult(
                        intent,
                        REQUEST_SAVE_BACKUP
                    )
                }

            } catch (e: Exception) {
                runOnUiThread {
                    Toast.makeText(
                        this@MainActivity,
                        "ব্যাকআপ তৈরি করা যায়নি",
                        Toast.LENGTH_SHORT
                    ).show()
                }
            }
        }

        @JavascriptInterface
        fun pickBackup() {
            runOnUiThread {
                val intent = Intent(
                    Intent.ACTION_OPEN_DOCUMENT
                ).apply {
                    addCategory(Intent.CATEGORY_OPENABLE)
                    type = "application/json"
                    addFlags(
                        Intent.FLAG_GRANT_READ_URI_PERMISSION
                    )
                }

                startActivityForResult(
                    intent,
                    REQUEST_OPEN_BACKUP
                )
            }
        }
    }

    @Deprecated("Deprecated in Android")
    override fun onActivityResult(
        requestCode: Int,
        resultCode: Int,
        data: Intent?
    ) {
        super.onActivityResult(
            requestCode,
            resultCode,
            data
        )

        if (resultCode != RESULT_OK || data?.data == null) {
            return
        }

        val uri: Uri = data.data!!

        when (requestCode) {

            REQUEST_SAVE_BACKUP -> {
                try {
                    val bytes = backupBytes ?: return

                    contentResolver
                        .openOutputStream(uri)
                        ?.use {
                            it.write(bytes)
                        }

                    Toast.makeText(
                        this,
                        "ব্যাকআপ সফলভাবে সংরক্ষিত হয়েছে",
                        Toast.LENGTH_SHORT
                    ).show()

                } catch (e: Exception) {
                    Toast.makeText(
                        this,
                        "ব্যাকআপ সংরক্ষণ করা যায়নি",
                        Toast.LENGTH_LONG
                    ).show()

                } finally {
                    backupBytes = null
                }
            }

            REQUEST_OPEN_BACKUP -> {
                try {
                    val json = contentResolver
                        .openInputStream(uri)
                        ?.bufferedReader(Charsets.UTF_8)
                        ?.use { it.readText() }
                        ?: throw IllegalStateException(
                            "ফাইল পড়া যায়নি"
                        )

                    val quotedJson = JSONObject.quote(json)

                    webView.evaluateJavascript(
                        "window.importBackupJson($quotedJson);",
                        null
                    )

                } catch (e: Exception) {
                    Toast.makeText(
                        this,
                        "ব্যাকআপ ফাইলটি পড়া যায়নি",
                        Toast.LENGTH_LONG
                    ).show()
                }
            }
        }
    }

    override fun onSaveInstanceState(outState: Bundle) {
        webView.saveState(outState)
        super.onSaveInstanceState(outState)
    }

    @Deprecated("Deprecated in Android")
    override fun onBackPressed() {
        if (
            ::webView.isInitialized &&
            webView.canGoBack()
        ) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
