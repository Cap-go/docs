# Manual mode

If you want to use manual mode without Capgo cloud, please refer to the self-hosted section

{% content-ref url="../self-hosted/manual.md" %}
[manual.md](../self-hosted/manual.md)
{% endcontent-ref %}

## Quick installs

```
npm install @capgo/capacitor-updater
npx cap sync
```

#### Config

Add this to your config, to disable auto-update:

```tsx
// capacitor.config.json
{
	"appId": "**.***.**",
	"appName": "Name",
	"plugins": {
		"CapacitorUpdater": {
			"autoUpdate": false
		}
	}
}
```

Then add to your app

```typescript
import { CapacitorUpdater } from '@capgo/capacitor-updater'
import type { BundleInfo } from '@capgo/capacitor-updater'
import { SplashScreen } from '@capacitor/splash-screen'
import { App } from '@capacitor/app'
CapacitorUpdater.notifyAppReady()
let data: BundleInfo | null = null
App.addListener('appStateChange', async (state: any) => {
  console.log('appStateChange', state)
  if (state.isActive) {
    console.log('getLatest')
    // Do the download during user active app time to prevent failed download
    const latest = await CapacitorUpdater.getLatest()
    console.log('latest', latest)
    if (latest.url) {
      data = await CapacitorUpdater.download({
        url: latest.url,
        version: latest.version,
      })
      console.log('download', data)
    }
  }
  if (!state.isActive && data) {
    console.log('set')
    // Do the switch when user leave app or when you want
    SplashScreen.show()
    try {
      await CapacitorUpdater.set({ id: data.id })
    }
    catch (err) {
      console.log(err)
      SplashScreen.hide() // in case the set fail, otherwise the new app will have to hide it
    }
  }
})
```
