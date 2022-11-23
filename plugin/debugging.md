# Debugging

## Understanding cloud logs:

### Send from the backend

* **InvalidIp** => the user is located in Google data center and the update is less than 4 hours old, this have been made to prevent Google bots device to count as device in your account
* **needPlanUpgrade** (previously **needUpgrade**) => Mean you have reach the limit of your plan, and device will not receive update until you upgrade or next month.
* **noNew** => The device has the latest version available
* **disablePlatformIos** => The device is on ios platform but that disable in channel settings
* **disablePlatformAndroid** => The device is on android platform but that disable in channel settings
* **disableAutoUpdateToMajor** => The device has a version (**1**.2.3) and the channel has major update (**2**.0.0) to send but that disable in channel settings
* **disableAutoUpdateUnderNative** =>The device has a version (1.2.**3**) and the channel has  update (1.2.**2**) under the device version to send but that disable in channel settings
* **disableDevBuild** => The device has a dev build but that disable in channel settings
* **disableEmulator** => The device is an emulator but that disable in channel settings

### Send from the device

* **get** => Info for download new version has been send to device
* **delete** => one bundle has been delete in the device
* **set** => bundle has been set on the device
* **set\_fail** => bundle failed to set&#x20;
* **reset** => device reset ton **builtin** bundle
* **download\_XX** => new bundle has been downloat from xx % ( every 10%)
* **download\_complete** => new bundle finish download
* **download\_fail** => new bundle fail download
* **update\_fail** => new bundle has been installed but failed to call notifyAppReady
* **checksum\_fail** => new bundle fail to validate checksum

## Understanding device logs:

* `Failed to download from` **=>** same as **download\_fail**
* `notifyAppReady was not called, roll back current bundle` => as as **update\_fail**

## Finding the downloaded bundle in your devide

### iOS

To debug on iOS, you need to dump the app on your computer, you can do it like that :

Xcode has a built-in feature for inspecting the file system of developer installed apps on an iOS device.

To achieve this, connect your device to your Mac and select Window > Devices in the Xcode menubar. Then select your device in the left pane under the Devices section. This will show a list of developer installed apps for that device. Select the app you want to inspect and then the select the gear icon near the bottom of the screen. Here you can view the current file system by selecting Show Container or download a snapshot of it. Selecting Download Container... will download and export a snapshot of the file system as a .xcappdata file that you can browse through. Right-click on this file and select Show Package Contents to open the folder. Open the App Data folder, and you should now see a few folders like Documents, Library, tmp, etc.

![image](https://user-images.githubusercontent.com/4084527/166708589-8d500351-e140-41c3-bea2-a037fe35243e.png)

Then you will find version in 2 folders:

`library/NoCloud/ionic_built_snapshots` who is necessary after app reboot

and `documents/versions` for hot reload

### Android

To debug on Android, you just need to access the device from Android Studio:

Click View > Tool Windows > Device File Explorer or click the Device File Explorer button in the tool window bar to open the Device File Explorer. Select a device from the drop down list. Interact with the device content in the file explorer window. Right-click on a file or directory to create a new file or directory, save the selected file or directory to your machine, upload, delete, or synchronize. Double-click a file to open it in Android Studio.

Android Studio saves files you open this way in a temporary directory outside your project. If you make modifications to a file you opened using the Device File Explorer, and would like to save your changes back to the device, you must manually upload the modified version of the file to the device.

![image](https://user-images.githubusercontent.com/4084527/166708728-8f96fc73-5d90-426f-8d27-301697347a5f.png)

When exploring a device's files, the following directories are particularly useful:

data/data/app\_name/

Then Find the `versions` folder to see all the folder versions

on android only one folder is enough
