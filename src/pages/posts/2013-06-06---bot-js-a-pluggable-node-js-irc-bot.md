---
title: Bot.js a pluggable node.js irc bot
heroImage: /2013/06/coffee-hand.jpeg
description: I'm definitely reinventing the wheel here. There's already lots of great bots, even great node.js bots.
published: true
layout: '../../layouts/BlogPost.astro'
category: code
tags:
  - bot
  - code
  - gist
  - irc
  - node.js
---

## Yet another bot? Yeah that's right!

I'm definitely reinventing the wheel here. There's already lots of great bots, even great node.js bots. But that's not the point. I'm just doing this to learn node.js

## Plugins & Design decisions

I've tried to extract as much functionality as possible to a simple plugin solution. At the same time I tried to make it as easy as possible to create a plugin. The plugins are split up into two categories, core and regular plugins. The core plugins handle the basic IRC commands needed to get the bot up and running. Things like PING-PONG and so on. In its simplest form a plugin looks like this:

```javascript
var Plugin = exports.Plugin = function plugin (bot) {
  this.listeners = {TRIGGER: 'plugin_name'}; // register TRIGGER to call plugin_name
  bot.pluginCore.apply(this, [bot]);
  this.plugin_name = function plugin_name (message) {
  // Do something fun
}.bind(this);
```

## Make it run

At the moment there's no npm module for the bot, even if it's created as one. Instead you'll have to get the code from [Github][1].

[1]: https://github.com/stenehall/bot.js
