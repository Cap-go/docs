# API

## The best way for the most up-to-date

{% embed url="https://github.com/Cap-go/capacitor-updater#api" %}

## Settings

After install capacitor-updater to your project, you can configure some behavior:

* `resetWhenUpdate` set it false to disable the reset version when update
* `autoUpdateUrl` the target URL to get updates
* `autoUpdate` true or false depend on if you want manual or auto
* `statsUrl` the target URL for stats set it to "" to disable stats
* `channelUrl` the target URL for letting device self assign to a channel (min 4.8.0)
* `allowEmulatorProd` if you have CI/CD and too many devices are registers in Capgo, set it to false. (min 4.6.0)

```
{
	"appId": "**.***.**",
	"appName": "Name",
	"plugins": {
		"CapacitorUpdater": {
			"resetWhenUpdate": false
		}
	}
}
```

#### Listen to download events

```javascript
  import { CapacitorUpdater } from '@capgo/capacitor-updater';

CapacitorUpdater.addListener('download', (info: any) => {
  console.log('download was fired', info.percent);
});
```

On iOS, Apple don't allow you to show a message when the app is updated, so you can't show a progress bar.

## API

<docgen-api>
	
#### notifyAppReady()

```typescript
notifyAppReady() => Promise<BundleInfo>
```

Notify Capacitor Updater that the current bundle is working (a rollback will occur of this method is not called on every app launch)

**Returns:** `Promise<BundleInfo>`

***

#### download(...)

```typescript
download(options: { url: string; version: string; }) => Promise<BundleInfo>
```

Download a new bundle from the provided URL, it should be a zip file, with files inside or with a unique id inside with all your files

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | `{ url: string; version: string; }` |

**Returns:** `Promise<BundleInfo>`

***

#### next(...)

```typescript
next(options: { id: string; }) => Promise<BundleInfo>
```

Set the next bundle to be used when the app is reloaded.

| Param         | Type              |
| ------------- | ----------------- |
| **`options`** | `{ id: string; }` |

**Returns:** `Promise<BundleInfo>`

***

#### set(...)

```typescript
set(options: { id: string; }) => Promise<void>
```

Set the current bundle and immediately reloads the app.

| Param         | Type              |
| ------------- | ----------------- |
| **`options`** | `{ id: string; }` |

***

#### delete(...)

```typescript
delete(options: { id: string; }) => Promise<void>
```

Delete bundle in storage

| Param         | Type              |
| ------------- | ----------------- |
| **`options`** | `{ id: string; }` |

***

#### list()

```typescript
list() => Promise<{ bundles: BundleInfo[]; }>
```

Get all available bundles

**Returns:** `Promise<{ bundles: BundleInfo[]; }>`

***

#### reset(...)

```typescript
reset(options?: { toLastSuccessful?: boolean | undefined; } | undefined) => Promise<void>
```

Set the `builtin` bundle (the one sent to Apple store / Google play store ) as current bundle

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | `{ toLastSuccessful?: boolean; }` |

***

#### current()

```typescript
current() => Promise<{ bundle: BundleInfo; native: string; }>
```

Get the current bundle, if none are set it returns `builtin`, currentNative is the original bundle installed on the device

**Returns:** `Promise<{ bundle: BundleInfo; native: string; }>`

***

#### reload()

```typescript
reload() => Promise<void>
```

Reload the view

***

#### setMultiDelay(...)

```typescript
setMultiDelay(options: { delayConditions: DelayCondition[]; }) => Promise<void>
```

Set DelayCondition, skip updates until one of the conditions is met

| Param         | Type                                     | Description                                |
| ------------- | ---------------------------------------- | ------------------------------------------ |
| **`options`** | `{ delayConditions: DelayCondition[]; }` | are the {@link DelayCondition} list to set |

**Since:** 4.3.0

***

#### setDelay(...)

```typescript
setDelay(options: DelayCondition) => Promise<void>
```

Set DelayCondition, skip updates until the condition is met

| Param         | Type             | Description                          |
| ------------- | ---------------- | ------------------------------------ |
| **`options`** | `DelayCondition` | is the {@link DelayCondition} to set |

**Since:** 4.0.0

***

#### cancelDelay()

```typescript
cancelDelay() => Promise<void>
```

Cancel delay to updates as usual

**Since:** 4.0.0

***

#### getLatest()

```typescript
getLatest() => Promise<latestVersion>
```

Get Latest bundle available from update Url

**Returns:** `Promise<latestVersion>`

**Since:** 4.0.0

***

#### setChannel(...)

```typescript
setChannel(options: SetChannelOptions) => Promise<channelRes>
```

Set Channel for this device

| Param         | Type                | Description                                     |
| ------------- | ------------------- | ----------------------------------------------- |
| **`options`** | `SetChannelOptions` | is the {@link SetChannelOptions} channel to set |

**Returns:** `Promise<channelRes>`

**Since:** 4.7.0

***

#### getChannel()

```typescript
getChannel() => Promise<getChannelRes>
```

get Channel for this device

**Returns:** `Promise<getChannelRes>`

**Since:** 4.8.0

***

#### setCustomId(...)

```typescript
setCustomId(options: SetCustomIdOptions) => Promise<void>
```

Set Channel for this device

| Param         | Type                 | Description                                       |
| ------------- | -------------------- | ------------------------------------------------- |
| **`options`** | `SetCustomIdOptions` | is the {@link SetCustomIdOptions} customId to set |

**Since:** 4.9.0

***

#### addListener('download', ...)

```typescript
addListener(eventName: 'download', listenerFunc: DownloadChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for download event in the App, let you know when the download is started, loading and finished

| Param              | Type                     |
| ------------------ | ------------------------ |
| **`eventName`**    | `'download'`             |
| **`listenerFunc`** | `DownloadChangeListener` |

**Returns:** `Promise<PluginListenerHandle> & PluginListenerHandle`

**Since:** 2.0.11

***

#### addListener('noNeedUpdate', ...)

```typescript
addListener(eventName: 'noNeedUpdate', listenerFunc: NoNeedListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for no need to update event, usefull when you want force check every time the app is launched

| Param              | Type             |
| ------------------ | ---------------- |
| **`eventName`**    | `'noNeedUpdate'` |
| **`listenerFunc`** | `NoNeedListener` |

**Returns:** `Promise<PluginListenerHandle> & PluginListenerHandle`

**Since:** 4.0.0

***

#### addListener('updateAvailable', ...)

```typescript
addListener(eventName: 'updateAvailable', listenerFunc: UpdateAvailabledListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for availbale update event, usefull when you want to force check every time the app is launched

| Param              | Type                       |
| ------------------ | -------------------------- |
| **`eventName`**    | `'updateAvailable'`        |
| **`listenerFunc`** | `UpdateAvailabledListener` |

**Returns:** `Promise<PluginListenerHandle> & PluginListenerHandle`

**Since:** 4.0.0

***

#### addListener('downloadComplete', ...)

```typescript
addListener(eventName: 'downloadComplete', listenerFunc: DownloadCompleteListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for download event in the App, let you know when the download is started, loading and finished

| Param              | Type                       |
| ------------------ | -------------------------- |
| **`eventName`**    | `'downloadComplete'`       |
| **`listenerFunc`** | `DownloadCompleteListener` |

**Returns:** `Promise<PluginListenerHandle> & PluginListenerHandle`

**Since:** 4.0.0

***

#### addListener('majorAvailable', ...)

```typescript
addListener(eventName: 'majorAvailable', listenerFunc: MajorAvailableListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for Major update event in the App, let you know when major update is blocked by setting disableAutoUpdateBreaking

| Param              | Type                     |
| ------------------ | ------------------------ |
| **`eventName`**    | `'majorAvailable'`       |
| **`listenerFunc`** | `MajorAvailableListener` |

**Returns:** `Promise<PluginListenerHandle> & PluginListenerHandle`

**Since:** 2.3.0

***

#### addListener('updateFailed', ...)

```typescript
addListener(eventName: 'updateFailed', listenerFunc: UpdateFailedListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for update fail event in the App, let you know when update has fail to install at next app start

| Param              | Type                   |
| ------------------ | ---------------------- |
| **`eventName`**    | `'updateFailed'`       |
| **`listenerFunc`** | `UpdateFailedListener` |

**Returns:** `Promise<PluginListenerHandle> & PluginListenerHandle`

**Since:** 2.3.0

***

#### addListener('downloadFailed', ...)

```typescript
addListener(eventName: 'downloadFailed', listenerFunc: DownloadFailedListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for download fail event in the App, let you know when download has fail finished

| Param              | Type                     |
| ------------------ | ------------------------ |
| **`eventName`**    | `'downloadFailed'`       |
| **`listenerFunc`** | `DownloadFailedListener` |

**Returns:** `Promise<PluginListenerHandle> & PluginListenerHandle`

**Since:** 4.0.0

***

#### addListener('appReloaded', ...)

```typescript
addListener(eventName: 'appReloaded', listenerFunc: AppReloadedListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for download fail event in the App, let you know when download has fail finished

| Param              | Type                  |
| ------------------ | --------------------- |
| **`eventName`**    | `'appReloaded'`       |
| **`listenerFunc`** | `AppReloadedListener` |

**Returns:** `Promise<PluginListenerHandle> & PluginListenerHandle`

**Since:** 4.3.0

***

#### getDeviceId()

```typescript
getDeviceId() => Promise<{ deviceId: string; }>
```

Get unique ID used to identify device (sent to auto update server)

**Returns:** `Promise<{ deviceId: string; }>`

***

#### getPluginVersion()

```typescript
getPluginVersion() => Promise<{ version: string; }>
```

Get the native Capacitor Updater plugin version (sent to auto update server)

**Returns:** `Promise<{ version: string; }>`

***

#### isAutoUpdateEnabled()

```typescript
isAutoUpdateEnabled() => Promise<{ enabled: boolean; }>
```

Get the state of auto update config. This will return `false` in manual mode.

**Returns:** `Promise<{ enabled: boolean; }>`

***

#### Interfaces

**BundleInfo**

| Prop             | Type           |
| ---------------- | -------------- |
| **`id`**         | `string`       |
| **`version`**    | `string`       |
| **`downloaded`** | `string`       |
| **`checksum`**   | `string`       |
| **`status`**     | `BundleStatus` |

**DelayCondition**

| Prop        | Type             | Description                              |
| ----------- | ---------------- | ---------------------------------------- |
| **`kind`**  | `DelayUntilNext` | Set up delay conditions in setMultiDelay |
| **`value`** | `string`         |                                          |

**latestVersion**

| Prop          | Type      | Description             | Since |
| ------------- | --------- | ----------------------- | ----- |
| **`version`** | `string`  | Res of getLatest method | 4.0.0 |
| **`major`**   | `boolean` |                         |       |
| **`message`** | `string`  |                         |       |
| **`old`**     | `string`  |                         |       |
| **`url`**     | `string`  |                         |       |

**channelRes**

| Prop         | Type     | Description                   | Since |
| ------------ | -------- | ----------------------------- | ----- |
| **`status`** | `string` | Current status of set channel | 4.7.0 |
| **`error`**  | `any`    |                               |       |

**SetChannelOptions**

| Prop          | Type     |
| ------------- | -------- |
| **`channel`** | `string` |

**getChannelRes**

| Prop           | Type      | Description                   | Since |
| -------------- | --------- | ----------------------------- | ----- |
| **`channel`**  | `string`  | Current status of get channel | 4.8.0 |
| **`error`**    | `any`     |                               |       |
| **`status`**   | `string`  |                               |       |
| **`allowSet`** | `boolean` |                               |       |

**SetCustomIdOptions**

| Prop           | Type     |
| -------------- | -------- |
| **`customId`** | `string` |

**PluginListenerHandle**

| Prop         | Type                  |
| ------------ | --------------------- |
| **`remove`** | `() => Promise<void>` |

**DownloadEvent**

| Prop          | Type         | Description                                    | Since |
| ------------- | ------------ | ---------------------------------------------- | ----- |
| **`percent`** | `number`     | Current status of download, between 0 and 100. | 4.0.0 |
| **`bundle`**  | `BundleInfo` |                                                |       |

**noNeedEvent**

| Prop         | Type         | Description                                    | Since |
| ------------ | ------------ | ---------------------------------------------- | ----- |
| **`bundle`** | `BundleInfo` | Current status of download, between 0 and 100. | 4.0.0 |

**updateAvailableEvent**

| Prop         | Type         | Description                                    | Since |
| ------------ | ------------ | ---------------------------------------------- | ----- |
| **`bundle`** | `BundleInfo` | Current status of download, between 0 and 100. | 4.0.0 |

**DownloadCompleteEvent**

| Prop         | Type         | Description                          | Since |
| ------------ | ------------ | ------------------------------------ | ----- |
| **`bundle`** | `BundleInfo` | Emit when a new update is available. | 4.0.0 |

**MajorAvailableEvent**

| Prop          | Type     | Description                                | Since |
| ------------- | -------- | ------------------------------------------ | ----- |
| **`version`** | `string` | Emit when a new major bundle is available. | 4.0.0 |

**UpdateFailedEvent**

| Prop         | Type         | Description                           | Since |
| ------------ | ------------ | ------------------------------------- | ----- |
| **`bundle`** | `BundleInfo` | Emit when a update failed to install. | 4.0.0 |

**DownloadFailedEvent**

| Prop          | Type     | Description                | Since |
| ------------- | -------- | -------------------------- | ----- |
| **`version`** | `string` | Emit when a download fail. | 4.0.0 |

#### Type Aliases

**BundleStatus**

`'success' | 'error' | 'pending' | 'downloading'`

**DelayUntilNext**

`'background' | 'kill' | 'nativeVersion' | 'date'`

**DownloadChangeListener**

`(state: DownloadEvent): void`

**NoNeedListener**

`(state: noNeedEvent): void`

**UpdateAvailabledListener**

`(state: updateAvailableEvent): void`

**DownloadCompleteListener**

`(state: DownloadCompleteEvent): void`

**MajorAvailableListener**

`(state: MajorAvailableEvent): void`

**UpdateFailedListener**

`(state: UpdateFailedEvent): void`

**DownloadFailedListener**

`(state: DownloadFailedEvent): void`

**AppReloadedListener**

`(state: void): void`

</docgen-api>
