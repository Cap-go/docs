# Home

## Join Discord Community

[Join the Capacitor-updater Discord Server!](https://discord.gg/VnYRvBfgA6)

## Choose between Auto and Manual

In auto mode, part of logic is handled by the Native code, updates are decided server side, this is more secure and allow fine grain update Partial deploy to one device or group and more.

In manual mode, all the logic is handled by the JS, that some good and some bad in both scenario.

{% hint style="info" %}
In V4 you can use Capgo cloud and manual more simply
{% endhint %}

### Auto

<details>

<summary>Good ✅</summary>

* No logic to handle, all is done for you
* Auto-revert is handle for you
* Statistics of updates available
* Possibility to revert user
* Channels to share version to your team
* Define advanced strategies like AB test or partial deploy

</details>

<details>

<summary>Bad 🥲</summary>

* Need to use SemVer
* Can be problematic to use Capgo cloud for big corporate
* Long to handle if you need on-premise server

</details>

### Manual

<details>

<summary>Good ✅</summary>

* Full control of the update logic
* No need of version server

</details>

<details>

<summary>Bad 🥲</summary>

* If your update fails, you will not be able to revert
* Long to handle all scenario yourself

</details>

## Auto-update

Let the plugin handle all for you

### Tutorial

[update your capacitor apps seamlessly using capacitor updater](https://capgo.app/blog/update-your-capacitor-apps-seamlessly-using-capacitor-updater)

Setup all in 5 mins

[automatic build and release with GitHub action](https://capgo.app/blog/automatic-build-and-release-with-github-actions)s

Auto-push your version after each commit with GitHub action

### Register

Before using the CLI, you should register [here](https://web.capgo.app/register)&#x20;

### Documentation

[CLI](tooling/cli.md)

[Auto-update](https://github.com/Cap-go/capacitor-updater/wiki/Auto-update)

[Capgo Sandbox App](https://github.com/Cap-go/capacitor-updater/wiki/Capgo-Sandbox-App)

[Auto-update self-hosted](plugin/auto-update/self-hosted.md)

[Upgrade](broken-reference)

[API](https://github.com/Cap-go/capacitor-updater/wiki/Capgo-API)

## Manual update

Build your own logic in JavaScript

### Documentation

[Plugin](broken-reference)

[Manual update](./#manual-update)

## Roadmap

[Roadmap](https://github.com/orgs/Cap-go/projects/1)

### Our demo app

[GitHub - Cap-go/demo-app: demo app with manual and auto mode](https://github.com/Cap-go/demo-app)

## Open source

The plugin and the back-end are open source and under the LGPL-3.0 License for the plugin and AGPL-3.0 License for the back-end.

> 💡 LGPL-3.0 mean if someone modify the code of the project, it’s mandatory to publish it, in open-source with same licensing. If you use the code without modification, that doesn’t concern you. See issue below for more details : https://github.com/Cap-go/capacitor-updater/issues/7

## Know incompatibility

* when you develop, if you use the Ionic live reload feature from the CLI, it will override the plugin, so you will never see your update.
* same issue with quasar live reload

## Last words

If you use this work for free, I couldn't suggest you more to support my work [here](https://github.com/sponsors/riderx).

I made a big bet to open source all the precious code I built here.

I could have kept it for myself and put a high ticket price.

Furthermore, I want to focus on Capgo tooling, and make it an open and transparent business.

Likewise, I do think it would make our world a better place by opening instead of fighting and hiding.

But to make it possible, it is necessary for all of us to do our part, including you 🥹.

If Capgo cloud offer can't suit you, then put your own price and back a bootstrapped Maker [HERE](https://github.com/sponsors/riderx) on your own terms.
