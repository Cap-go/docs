# Know issues

## Ionic live reload

When you develop, if you use the Ionic live reload feature from the CLI, it will override the plugin, so you will never see your update.

## Quasar live reload

it use the same system as ionic under the hood, so you will not see your updates.

## Update fail

* Big app update (> 20mb) will have a big percentage of user who doesn't get the last version.  In the past Users need to keep the app open until download is done, now we use background download, but it's still limited to few seconds.

## Android don't build

if you have issue with usesCleartextTraffic, it's because the plugin follow the good practice recommended by sonar cloud, in 90 % of the case it will work, but with some plugin that cause issue.\
To fix it add in `android/app/src/main/AndroidManifest.xml` in the `<application>` key :

```xml
tools:replace="android:usesCleartextTraffic"
xmlns:tools="http://schemas.android.com/tools"
```
