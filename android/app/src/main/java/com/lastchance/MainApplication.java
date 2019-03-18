package com.lastchance;

import android.app.Application;
import android.widget.Toast;

import com.facebook.react.ReactApplication;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import org.reactnative.camera.RNCameraPackage;
import com.onesignal.OSNotificationOpenResult;
import com.onesignal.OneSignal;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import org.json.JSONObject;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication, OneSignal.NotificationOpenedHandler {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativePushNotificationPackage(),
            new RNCameraPackage(),
            new RNGestureHandlerPackage(),
            new ReactNativeOneSignalPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  @Override
  public void notificationOpened(OSNotificationOpenResult result) {
    JSONObject res = result.notification.payload.additionalData;
    String name = res.optString("name");
    Toast.makeText(getApplicationContext(),name,Toast.LENGTH_LONG).show();
  }
}
