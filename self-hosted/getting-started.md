# Getting started

This documentation will explain how to run your own auto-update server.

## Before start

If you use this work on your own, I couldn't suggest you more to support my work thought [Github support](https://github.com/sponsors/riderx).

I made a big bet to open source all the precious code I built here.

I could have kept it for myself and put a high ticket price.

Furthermore, I want to focus on Capgo tooling, and make it an open and transparent business.

Likewise, I do think it would make our world a better place by opening instead of fighting and hiding.

But to make it possible, it is necessary for all of us to do our part, including you 🥹.

Capgo offer can't suit you, then put your own price and back a bootstrapped Maker [HERE](https://github.com/sponsors/riderx) on your own terms.

## Features parity

If you choose to go with your own server, you lose the 5-min setup flow.\
You  need to implement yourself all features.\
\
Here is the list:

| Features                 | Capgo | Self hosted |
| ------------------------ | ----- | ----------- |
| Updates                  | ✅     | 🚧          |
| Auto revert              | ✅     | 🚧          |
| Email alert on fail      | ✅     | 🚧          |
| Channel                  | ✅     | 🚧          |
| Channel Override         | ✅     | 🚧          |
| Device Override          | ✅     | 🚧          |
| Channel settings         | ✅     | 🚧          |
| Device settings          | ✅     | 🚧          |
| Custom ID                | ✅     | 🚧          |
| Auto set channel         | ✅     | 🚧          |
| API Channels             | ✅     | 🚧          |
| Updates Statistics       | ✅     | 🚧          |
| Fail Download Statistics | ✅     | 🚧          |
| App Usage Statistics     | ✅     | 🚧          |
| Update encryption        | ✅     | 🚧          |

## Choose between Auto and Manual

{% hint style="warning" %}
⚠️ Update OTA(Over the Air) only works on HTML, CSS, JS changes.\
When you update native code (capacitor plugin), you must resubmit to the app store.
{% endhint %}

In auto mode, part of logic is handled by the Native code, updates are decided server side, this is more secure and allow fine grain update, partial deploy to one device or group and more.

In manual mode, all the logic is handled by the JS, that some good and some bad in both scenario.



### Prepare your bundle

To send updates to your app, you need to zip it.\
\
The best way to be sure your zip is good is to use the Capgo CLI for zipping.

`npx @capgo/cli/latest bundle zip` will create your zip ready to be uploaded in your backend.



{% content-ref url="auto-update/" %}
[auto-update](auto-update/)
{% endcontent-ref %}

{% content-ref url="manual.md" %}
[manual.md](manual.md)
{% endcontent-ref %}
