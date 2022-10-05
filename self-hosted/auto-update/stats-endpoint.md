# Stats endpoint

Here is an example of code in JavaScript to save stats of the plugin

```typescript
interface AppInfos {
  version_name: string
  version_build: string
  version_os: string
  plugin_version: string
  platform: string
  app_id: string
  device_id: string
}

export const handler: Handler = async (event) => {
  const body = JSON.parse(event.body || '{}') as AppInfos
  const {
    platform,
    app_id,
    version_os,
    device_id,
    version_name,
    version_build,
    plugin_version,
  } = body
  console.log('update asked', platform,
    app_id,
    version_os,
    device_id,
    version_name,
    version_build,
    plugin_version)
  // save it in your database
  return {}
}
```
