# API

## API

### notifyAppReady()

```typescript
notifyAppReady() => Promise<BundleInfo>
```

Notify Capacitor Updater that the current bundle is working (a rollback will occur of this method is not called on every app launch)

**Returns:** `Promise<BundleInfo>`

***

### download(...)

```typescript
download(options: { url: string; version?: string; }) => Promise<BundleInfo>
```

Download a new version from the provided URL, it should be a zip file, with files inside or with a unique id inside with all your files

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | `{ url: string; version?: string; }` |

**Returns:** `Promise<BundleInfo>`

***

### next(...)

```typescript
next(options: { id: string; }) => Promise<BundleInfo>
```

Set the next bundle to be used when the app is reloaded.

| Param         | Type              |
| ------------- | ----------------- |
| **`options`** | `{ id: string; }` |

**Returns:** `Promise<BundleInfo>`

***

### set(...)

```typescript
set(options: { id: string; }) => Promise<void>
```

Set the current bundle and immediately reloads the app.

| Param         | Type              |
| ------------- | ----------------- |
| **`options`** | `{ id: string; }` |

***

### delete(...)

```typescript
delete(options: { id: string; }) => Promise<void>
```

Delete bundle in storage

| Param         | Type              |
| ------------- | ----------------- |
| **`options`** | `{ id: string; }` |

***

### list()

```typescript
list() => Promise<{ bundles: BundleInfo[]; }>
```

Get all available versions

**Returns:** `Promise<{ bundles: BundleInfo[]; }>`

***

### reset(...)

```typescript
reset(options?: { toLastSuccessful?: boolean | undefined; } | undefined) => Promise<void>
```

Set the `builtin` version (the one sent to Apple store / Google play store ) as current version

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | `{ toLastSuccessful?: boolean; }` |

***

### current()

```typescript
current() => Promise<{ bundle: BundleInfo; native: string; }>
```

Get the current bundle, if none are set it returns `builtin`, currentNative is the original bundle installed on the device

**Returns:** `Promise<{ bundle: BundleInfo; native: string; }>`

***

### reload()

```typescript
reload() => Promise<void>
```

Reload the view

***

### setDelay(...)

```typescript
setDelay(options: { delay: boolean; }) => Promise<void>
```

Set delay to skip updates in the next time the app goes into the background

| Param         | Type                  |
| ------------- | --------------------- |
| **`options`** | `{ delay: boolean; }` |

***

### addListener('download', ...)

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

### addListener('downloadComplete', ...)

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

### addListener('majorAvailable', ...)

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

### addListener('updateFailed', ...)

```typescript
addListener(eventName: 'updateFailed', listenerFunc: UpdateFailedListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for update event in the App, let you know when update is ready to install at next app start

| Param              | Type                   |
| ------------------ | ---------------------- |
| **`eventName`**    | `'updateFailed'`       |
| **`listenerFunc`** | `UpdateFailedListener` |

**Returns:** `Promise<PluginListenerHandle> & PluginListenerHandle`

**Since:** 2.3.0

***

### getId()

```typescript
getId() => Promise<{ id: string; }>
```

Get unique ID used to identify device (sent to auto update server)

**Returns:** `Promise<{ id: string; }>`

***

### getPluginVersion()

```typescript
getPluginVersion() => Promise<{ version: string; }>
```

Get the native Capacitor Updater plugin version (sent to auto update server)

**Returns:** `Promise<{ version: string; }>`

***

### isAutoUpdateEnabled()

```typescript
isAutoUpdateEnabled() => Promise<{ enabled: boolean; }>
```

Get the state of auto update config. This will return `false` in manual mode.

**Returns:** `Promise<{ enabled: boolean; }>`

***

### addListener(string, ...)

```typescript
addListener(eventName: string, listenerFunc: (...args: any[]) => any) => Promise<PluginListenerHandle>
```

| Param              | Type                      |
| ------------------ | ------------------------- |
| **`eventName`**    | `string`                  |
| **`listenerFunc`** | `(...args: any[]) => any` |

**Returns:** `Promise<PluginListenerHandle>`

***

### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

***

## Interfaces

### **BundleInfo**

| Prop             | Type           |
| ---------------- | -------------- |
| **`id`**         | `string`       |
| **`version`**    | `string`       |
| **`downloaded`** | `string`       |
| **`status`**     | `BundleStatus` |

### **PluginListenerHandle**

| Prop         | Type                  |
| ------------ | --------------------- |
| **`remove`** | `() => Promise<void>` |

### **DownloadEvent**

| Prop          | Type         | Description                                    | Since |
| ------------- | ------------ | ---------------------------------------------- | ----- |
| **`percent`** | `number`     | Current status of download, between 0 and 100. | 4.0.0 |
| **`bundle`**  | `BundleInfo` |                                                |       |

### **DownloadCompleteEvent**

| Prop         | Type         | Description                          | Since |
| ------------ | ------------ | ------------------------------------ | ----- |
| **`bundle`** | `BundleInfo` | Emit when a new update is available. | 4.0.0 |

### **MajorAvailableEvent**

| Prop          | Type     | Description                                 | Since |
| ------------- | -------- | ------------------------------------------- | ----- |
| **`version`** | `string` | Emit when a new major version is available. | 4.0.0 |

### **UpdateFailedEvent**

| Prop         | Type         | Description                           | Since |
| ------------ | ------------ | ------------------------------------- | ----- |
| **`bundle`** | `BundleInfo` | Emit when a update failed to install. | 4.0.0 |

## Type Aliases

### **BundleStatus**

`'success' | 'error' | 'pending' | 'downloading'`

### **DownloadChangeListener**

`(state: DownloadEvent): void`

### **DownloadCompleteListener**

`(state: DownloadCompleteEvent): void`

### **MajorAvailableListener**

`(state: MajorAvailableEvent): void`

### **UpdateFailedListener**

`(state: UpdateFailedEvent): void`

#### Listen to download events

```javascript
  import { CapacitorUpdater } from '@capgo/capacitor-updater';

CapacitorUpdater.addListener('download', (info: any) => {
  console.log('download was fired', info.percent);
});
```

On iOS, Apple don't allow you to show a message when the app is updated, so you can't show a progress bar.



## Settings

After install capacitor-updater to your project, you can configure some behavior:

* `resetWhenUpdate` set it false to disable the reset version when update
* `autoUpdateUrl` the target URL to get updates
* `autoUpdate` true or false depend on if you want manual or auto
* `statsUrl` the target URL for stats set it to "" to disable stats



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

###
