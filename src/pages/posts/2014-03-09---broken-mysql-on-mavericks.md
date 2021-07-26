---
title: Broken MySQL on Mavericks
description: '(errno: 13 - Permission denied)'
image: /wp-content/uploads/2014/03/macbook-table.jpeg
published: true
publishDate: 2014-03-09
layout: '../../layouts/BlogPost.astro'
category: tip
tags:
  - english
  - gist
  - mysql
  - tip
---

## Can't find file: './mysql/plugin.frm' (errno: 13 - Permission denied)

The reason this happens seems to be that some upgrade process either in brew or in os x changes the permissions for mysql. The solution is simple:

```bash
sudo chown -R _mysql /usr/local/var/mysql
sudo chmod -R o+rwx /usr/local/var/mysql
```

This solves the problem for me on Mavericks using mysql installed from brew.
