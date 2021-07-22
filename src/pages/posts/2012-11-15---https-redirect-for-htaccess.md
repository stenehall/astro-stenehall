---
title: Https redirect for htaccess
description: Sometimes you don't have access to the server and have to do a redirect in a .htaccess file.
published: true
layout: '../../layouts/BlogPost.astro'
category: code
tags:
  - code
  - english
  - gist
  - htaccess
---

## Simplest way to redirect directly in htaccess

Sometimes you don't have access to the server and have to do a redirect in a `.htaccess` file.

```nginx
RewriteEngine on
RewriteCond %{HTTPS} !^on$
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]
```
