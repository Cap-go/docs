# Getting started

## Join Discord Community

[Join the Capacitor-updater Discord Server!](https://discord.gg/VnYRvBfgA6)

## Choose between Auto and Manual

{% hint style="danger" %}
⛔ The Live Update feature only works on HTML, CSS, JS changes, if you update native code, you must resubmit to the app store.
{% endhint %}

In auto mode, part of logic is handled by the Native code, updates are decided server side, this is more secure and allow fine grain update Partial deploy to one device or group and more.

In manual mode, all the logic is handled by the JS, that some good and some bad in both scenario.

{% hint style="info" %}
In V4 you can use Capgo cloud with manual&#x20;
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

{% content-ref url="plugin/auto-update/cloud.md" %}
[cloud.md](plugin/auto-update/cloud.md)
{% endcontent-ref %}

### Manual

<details>

<summary>Good ✅</summary>

* Full control of the update logic
* No need of version server

</details>

<details>

<summary>Bad 🥲</summary>

* Long to handle all scenario yourself

</details>

{% content-ref url="plugin/manual-mode.md" %}
[manual-mode.md](plugin/manual-mode.md)
{% endcontent-ref %}

## Roadmap

The roadmap is handle in GitHub&#x20;

[Roadmap](https://github.com/orgs/Cap-go/projects/1)

## Open source

The plugin and the back-end are open source and under the LGPL-3.0 License for the plugin and AGPL-3.0 License for the back-end.

> 💡 LGPL-3.0 mean if someone modify the code of the project, it’s mandatory to publish it, in open-source with same licensing. If you use the code without modification, that doesn’t concern you. See issue below for more details : https://github.com/Cap-go/capacitor-updater/issues/7

## Know issues

* When you develop, if you use the Ionic live reload feature from the CLI, it will override the plugin, so you will never see your update.
* Same issue with Quasar live reload
* Big app update (> 20mb) will have a big percentage of user who doesn't get the last version, since users are on the go and need to keep the app open to download happen.

## Last words

If you use this tool for free, take time to support my work with [GitHub sponsor](https://github.com/sponsors/riderx).

I made a bet to open source all the code I built here.

I could have kept it for myself and put a high ticket price.

Instead, I want to make it an open and transparent business.

I do think it would make our world a better place by opening instead of fighting and hiding.

To make it possible, it is necessary for all of us to do our part, including you 🥹.

If Capgo cloud offer can't suit you, back a bootstrapped Maker [HERE](https://github.com/sponsors/riderx) on your own terms.
