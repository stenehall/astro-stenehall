---
title: My first Blog Post
description: Learning how to use @nuxt/content to create a blog
alt: my first blog post
published: false
publishDate: 2018-06-23
layout: '../../layouts/BlogPost.astro'
category: Foo bar
tags: 
  - one
  - two
---

## This is a heading

This is some more info

### This is a sub heading

This is some more info

### This is another sub heading

This is some more info

## This is another heading

This is some more info

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```
