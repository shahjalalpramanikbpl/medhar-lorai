plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.medhar.lorai"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.medhar.lorai"
        minSdk = 23
        targetSdk = 35
        versionCode = 24
        versionName = "3.3"
    }

    signingConfigs {
        create("release") {
            storeFile = file("release-key.jks")
            storePassword = System.getenv("ANDROID_KEYSTORE_PASSWORD")
            keyAlias = System.getenv("ANDROID_KEY_ALIAS")
            keyPassword = System.getenv("ANDROID_KEY_PASSWORD")
        }
    }

    buildTypes {
        getByName("release") {
            signingConfig = signingConfigs.getByName("release")
            isMinifyEnabled = false
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }
}
 
// Generate the in-app version label from the same Gradle version used by Android.
val generatedAppVersionAssets = layout.buildDirectory.dir("generated/app-version/assets")
android.sourceSets.getByName("main").assets.srcDir(generatedAppVersionAssets)
val generateAppVersionAsset by tasks.registering {
    val releaseName = android.defaultConfig.versionName ?: "0.0"
    val outputFile = generatedAppVersionAssets.map { it.file("app-version.js") }
    inputs.property("versionName", releaseName)
    outputs.file(outputFile)
    doLast {
        val target = outputFile.get().asFile
        target.parentFile.mkdirs()
        target.writeText("window.ML_APP_VERSION = '${releaseName}';\n")
    }
}
tasks.named("preBuild").configure {
    dependsOn(generateAppVersionAsset)
}
