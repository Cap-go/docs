# CLI

### Usage

All command should be run in your app folder with capacitor project ignited. See below

[Capacitor: Cross-platform native runtime for web apps](https://capacitorjs.com/docs/getting-started)

### **Login**

`npx @capgo/cli login [apikey]`&#x20;

This method is here to remember the `apikey` for you.&#x20;

{% hint style="info" %}
use `--apikey=********` in any command to override it
{% endhint %}

**Optionnaly you can give:**

`--local` This will store your **apikey** in the local repo and git ignore it.&#x20;

### **Add app**

`npx @capgo/cli add [appId]`&#x20;

> 💡 All option will be guessed in your config if not provided

Optionally, you can give:

* `[appId]` your app ID the format `com.test.app` is explained [**here**](https://capacitorjs.com/docs/cli/commands/init)****
* icon with `--icon /path/to/my/icon` to have a custom icon in the list
* name with `--name test` to have a custom name in the list

Example of capacitor.config.json for appId and AppName, the icon is guess in the resources folder

```
{
  "appId": 'ee.forgr.capacitor_go',
  "appName": 'Capgo',
  "webDir": 'dist',
}
```

### Upload **version**

`npx @capgo/cli upload [appId]`&#x20;

Optionally, you can give:

* `[appId]` is your app ID the format is explained [**here**](https://capacitorjs.com/docs/cli/commands/init)****
* icon with `--path ./www` to send your code to the cloud
* channel with `--channel prod` to link this version to channel by default, it's `dev`
* `bundle` with `--bundle 1.0.0` to choose the `bundle` number, if not provided it use the one in the `` package.json under the key `version` ``
* external zip link with `--external` to use zipped version from external storage, it should be a zip URL in HTTPS

> ⭐️ External option help to unlock 2 cases: `corporate with privacy concern`, don't send the code to a third part and `app bigger than 30 mbs`. With this setting capgo store only the link to the zip and send the link to all app

> 👀 Capgo cloud never look of what is in the link (for externa option), or in the code when stored. This will be write in the privacy policy, i have to ask a lawyer to make it clear in legal point of view.

Example of package.json for version

```
{
 "version": "1.0.2"
}
```

> ⛔ Version should be greater than “0.0.0”

> 💡 Don't forget to update the version number each time you send one, or device will don't see the update

### **List versions**

`npx @capgo/cli list [appId]`&#x20;

Optionally, you can give:

* `[appId]` is your app ID the format is explained [**here**](https://capacitorjs.com/docs/cli/commands/init)****

### **Configure channel**

`npx @capgo/cli set [appId] --channel dev`&#x20;

Optionally, you can give:

* `[appId]` your app ID the format is explained [**here**](https://capacitorjs.com/docs/cli/commands/init)****
* `--bundle` your app `bundle` already sent to the cloud to link to channel
* `--state` set the channel state, can be normal or default. To use in your app, one channel need to be "default".
* `--downgrade` allow the channel to send downgrade version to devices.
* `--no-downgrade` disallow the channel to send downgrade version to devices.
* `--upgrade` allow the channel to send upgrade (major) version to devices.
* `--no-upgrade` disallow the channel to send upgrade (major) version to devices.
* `--ios` allow the channel to send version to iOS devices.
* `--no-ios` disallow the channel to send version to iOS devices.
* `--android` allow the channel to send version to android devices.
* `--no-android` disallow the channel to send version to android devices.
* `--self-assign` allow devices to self assign to this channel.
* `--no-self-assign` disallow devices to self assign to this channel.

### **Delete package or version to Cloud**

`npx @capgo/cli delete [appId]`

Optionally, you can give:&#x20;

* `[appId]` is your app ID the format is explained [**here**](https://capacitorjs.com/docs/cli/commands/init)****

`--bundle` with the version number will only delete this version



### Cleanup older packages in a SemVer range for a major version to Cloud

`npx @capgo/cli cleanup [appId] --bundle=[majorVersion] --keep=[numberToKeep]`

* `[appId]` your app ID present in the Cloud&#x20;
* `[majorVersion]` a version you wish to remove previous packages for, it will keep the last one + numberToKeep&#x20;
* `[numberToKeep]` the number of packages you wish to keep

For example: If you have 10 versions, from 10.0.1 to 10.0.11, and you use `npx @capgo/cli cleanup [appId] --bundle=10.0.0` it will remove 10.0.1 to 10.0.6. 10.0.7 untill 10.0.11 will be kept

This command will show a list of what it will be removing and ask for confirmation

### Ci integration

To automate your work, I recommend you make GitHub action do the job of pushing to our server

[GitHub action tutorial](https://capgo.app/blog/automatic-build-and-release-with-github-actions)

### Our demo app

[GitHub - Cap-go/demo-app](https://github.com/Cap-go/demo-app)

Don’t forget to configure CI env variable with your API key
