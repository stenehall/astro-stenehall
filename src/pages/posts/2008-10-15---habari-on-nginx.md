---
title: Habari on nginx
description: Since this site is running on a vps with a limited amount of ram I felt the need of changing from Apache to something less memory consuming.
published: true
layout: '../../layouts/BlogPost.astro'
category: article
tags:
  - article
  - english
  - gist
  - habari
  - nginx
---

## Doing it habari style

Since this site is running on a vps with a limited amount of ram I felt the need of changing from Apache to something less memory consuming.
<!--more-->

[Slicehost][1] is my new host and they have an excellent section of articles including one explaining how to install [Nginx][2] however [Habari][3] wouldn't play nice with it. Nginx doesn't support Apaches .htaccess files so you need to add your own rewrite rules.

```nginx
if (!-e $request_filename) { rewrite ^/(.*)$ /index.php?$1 last; }
```

Four short lines code solved the problem and now I have a working setup. Habari and Nginx plays very nice together.

[1]: http://www.slicehost.com/
[2]: http://nginx.net/
[3]: http://habariproject.org/en/
