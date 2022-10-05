# Cloud

It allows developers to use capacitor-updater with auto-update mode link to Capgo channel or equivalent.

### Prerequisite

The only, thing you need to do before using Capgo auto-update is using [https://semver.org/](https://semver.org/) for your app versioning.

This is the convention it used to manage version. This convention should be use in 3 files in your project:

* `package.json` in **version**
* `android/app/build.gradle` in **versionName**
* `ios/App/App.xcodeproj/project.pbxproj` in **CURRENT\_PROJECT\_VERSION**

### Tutorial

Setup your app in 5 mins

[Update your capacitor apps seamlessly using capacitor updater](https://capgo.app/blog/update-your-capacitor-apps-seamlessly-using-capacitor-updater)

Setup your CI in 5 mins

[Automatic build and release with GitHub actions](https://capgo.app/blog/automatic-build-and-release-with-github-actions)



### Install

```bash
npm install @capgo/capacitor-updater
npx cap sync
```

### Intro

Click on [register](https://capgo.app) to create your account if you don't have one.

The server allows you to manage channel and version and much more.

`autoUpdate` will use data from \`capacitor.config\` to identify into the Capgo server

> ℹ️ You can use Capgo Cloud without sending your code to our server. If that not allowed by your company

#### Validate version

When auto-update is setup you have to send signal from JS that your app is alive

This can be done by calling within your app `notifyAppReady`.

Do it as soon as possible.

```ts
import { CapacitorUpdater } from '@capgo/capacitor-updater'

CapacitorUpdater.notifyAppReady()
```

#### User flow

* When User open app, it calls server to check for update, if found it download in background.
* When user leave the app, new version is set as active
* When user open again, he sees new app
  * If `notifyAppReady()` is call, when user leave, past version is delete.
  * If not call, when user leave, version is reset to past one and marked as invalid.
* User Continue normal flow until next update process

#### Dev flow

When you develop, be sure to remove `autoUpdate` from your config or set it to false. Otherwise, you will not see your change after app grounding. If you forget to do so, remove it and remove the app before building. Otherwise, you will stay stuck on the downloaded code.

To upload version at each commit setup CI/CD with this guide

[Automatic build and release with GitHub actions](https://capgo.app/blog/automatic-build-and-release-with-github-actions)

#### Major Available event

When `disableAutoUpdateBreaking` is true, you can listen to event to know when app refuse to do major braking update.

```jsx
import { CapacitorUpdater } from '@capgo/capacitor-updater';

CapacitorUpdater.addListener('majorAvailable', (info: any) => {
  console.log('majorAvailable was fired', info.version);
});
```

### Advanced settings

To have more control over auto-update system, I added 1 settings to allow you:

* `resetWhenUpdate` : When store update happen, disable force reset to native version

You have also other config available only on the [web app](https://web.capgo.app/login)

To configure the plugin, use these settings:

```tsx
// capacitor.config.json
{
	"appId": "**.***.**",
	"appName": "Name",
	"plugins": {
		"CapacitorUpdater": {
			"autoUpdate": true,
			"resetWhenUpdate": false
		}
	}
}
```
