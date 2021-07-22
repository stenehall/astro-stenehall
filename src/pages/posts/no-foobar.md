---
title: No Index
description: All it simply does is to warn you if you ever have a `noindex meta robots` tag in your html.
category: code
tags:
  - code
  - english
  - seo
  - wordpress
---


## What does it do?

All it simply does is to warn you if you ever have a `noindex meta robots` tag in your html. If you ever happen to forget to turn the privacy setting off before going live it will keep nagging you about it. The same thing goes if you for some reason happen to use a theme with it added by default.
The plugin will make a simple search in your `<head>` and make sure it doesn’t contain a noindex robot tag.

## The nagging

A clearly visible red “No Index” will show on every page containing the noindex. But it won’t show up when in admin.

[
<img class="alignnone size-full wp-image-157" src="/assets/2012/05/no-index.png" alt="no-index" width="287" height="51" />
][1]

## Download

Since I’m running this site on WordPress 3.4-RC1 I have no idea if this will work on anything earlier than 3.4. But since the new toolbar was introduced in [WordPress 3.3][2] it will not work on anything earlier.

- Download [zip][3]
- Source code [on Github][4]

[1]: https://stenehall.se/wp-content/uploads/2012/05/no-index.png
[2]: http://codex.wordpress.org/Version_3.3
[3]: https://github.com/stenehall/wordpress-plugin-no-index/zipball/master
[4]: https://github.com/stenehall/wordpress-plugin-no-index
