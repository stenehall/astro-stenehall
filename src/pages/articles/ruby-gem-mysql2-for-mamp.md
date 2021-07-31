---
title: Ruby gem mysql2 for MAMP
description: Quick fix to install the mysql2 gem
published: true
publishDate: 2012-06-10
layout: '../../layouts/BlogPost.astro'
category: code
tags:
  - code
  - english
  - gist
  - ruby
---

```bash[.bash_profile]
env ARCHFLAGS="-arch x86_64" gem install --no-rdoc --no-ri mysql2 --
--with-mysql-config=/Applications/MAMP/Library/bin/mysql_config
```
