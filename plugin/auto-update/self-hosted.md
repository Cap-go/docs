# Self-hosted

This documentation will explain how to run your own auto-update server.

## Before start

If you use this work on your own, I couldn't suggest you more to support my work thought [this](https://github.com/sponsors/riderx).

I made a big bet to open source all the precious code I built here.

I could have kept it for myself and put a high ticket price.

I want to focus on Capgo tooling, and make it an open and transparent business.

I do think it would make our world a better place by opening instead of fighting and hiding.

But to make it possible, it is necessary for all of us to do our part, including you 🥹.

Capgo offer can't suit you, then put your own price and back a bootstrapped Maker [HERE](https://github.com/sponsors/riderx) on your own terms.

### Configuration

You have to configure the plugin to use your own URL like that:

```json
{
	"plugins": {
		"CapacitorUpdater": {
                        "autoUpdate": true,
			"autoUpdateUrl": "https://YOURURL",
                        "statsUrl": "https://YOURURLFORSTATS",
		}
	}
}
```

### Server API

The plugin will call the API each time the app is open your URL with these headers:

```json
{
            "cap_platform": "ios" | "android",
            "cap_device_id": "UNIQUE_DEVICE_ID",
            "cap_app_id": "APPID_FROM_CAPACITOR_CONFIG",
            "cap_version_build": "VERSION_NUMBER_FROM_STORE",
            "cap_plugin_version":"PLUGIN_VERSION,
            "cap_version_name": "LAST_DOWNLOADER_VERSION" || "builtin"
}
```

The server API should respond, in JSON, to the capacitor-updater plugin. with this data if update is necessary:

```json
{
"version": "1.2.3",
"url": "https://path_to_the_zip_file_of_the_code.com"
}
```

In Auto-update the server should do the work of compares the version and return the right one, if returned the plugin, start the download process.

If you add "message" key, the version will not be set and the message will be display in logs instead.

The zip should have `index.html` a file at the root, or only one folder at the root with `index.html` inside

### Statistics

Starting from version 1.3.0 the update system send stats!

By default, all stats are sent to our server, to understand usage.

> 💡 No private data are sent for stats, only random UUID, version update, version native app, platform, action, and app ID.

If you want to send data to your server instead, change the config below:

```tsx
// capacitor.config.json
{
	"appId": "**.***.**",
	"appName": "Name",
	"plugins": {
		"CapacitorUpdater": {
			"statsUrl": "YOUR_URL"
		}
	}
}
```

What your server will receive is :

```tsx
{
	"app_id": "**.***.**", // app identifier in the store
	"device_id": "*******", // unique id per app install
	"platform": "ios", // or android
	"action": "set", // can be set, delete, set_fail, reset, revert
        "version_name": "1.2.3", // version of the web build
        "version_build": "1.2.0", // version of the native build
        "version_code": "120", // build number of the native build
	"version_os": "16", // OS version of the device
        "plugin_version": "4.0.0"// to make your api behave differently with different plugins
}
```

You can also totally disable it, with empty string. Keep in mind, statistic are made private friendly and help me to understand how people use the plugin, to resolve issue and improve it.
