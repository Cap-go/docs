# Getting started

This documentation will explain how to run your own auto-update server.

## Before start

If you use this work on your own, I couldn't suggest you more to support my work thought [Github support](https://github.com/sponsors/riderx).

I made a big bet to open source all the precious code I built here.

I could have kept it for myself and put a high ticket price.

Furthermore, I want to focus on Capgo tooling, and make it an open and transparent business.

Likewise, I do think it would make our world a better place by opening instead of fighting and hiding.

But to make it possible, it is necessary for all of us to do our part, including you 🥹.

Capgo offer can't suit you, then put your price and back a bootstrapped Maker [HERE](https://github.com/sponsors/riderx) on your terms.

## Choose between Auto and Manual

{% hint style="warning" %}
⚠️ Update OTA(Over the Air) only works on HTML, CSS, JS changes.\
When you update native code (capacitor plugin), you must resubmit to the app store.
{% endhint %}

In auto mode, part of the logic is handled by the Native code, updates are decided server side, this is more secure and allows fine grain update, partial deploy to one device or group and more.

In manual mode, all the logic is handled by the JS, that some good and some bad in both scenarios.

{% content-ref url="auto-update/" %}
[auto-update](auto-update/)
{% endcontent-ref %}

{% content-ref url="manual.md" %}
[manual.md](manual.md)
{% endcontent-ref %}
