---
title: Bluetooth problems in Yosemite
description: A simple reset will solve the problem.
image: /wp-content/uploads/2015/07/coffee-table2.jpeg
published: true
publishDate: 2015-07-08
layout: '../../layouts/BlogPost.astro'
category: tip
tags:
  - english
  - gist
  - tip
---

I recently ran into some very weird problems with my bluetooth trackpad and keyboard in OS X. Google told me to reboot, resetting SMC or replacing batteries but nothing worked.

After even more googling I found a suggestion about removing your bluetooth settings files. This actually worked for me!

The commands below will reset your bluetooth settings but once you've rebooted you should be able to reconnect to your keyboard or trackpad.

```bash
$ cd ~/Desktop $ sudo mv /Library/Preferences/com.apple.Bluetooth.plist .
$ sudo mv ~/Library/Preferences/com.apple.Bluetooth.plist .
$ sudo mv ~/Library/Preferences/ByHost/com.apple.Bluetooth.* .
```
