---
title: Optimize a static nuxtjs site
description: Lets see how much we can optimize a nuxt.js setup
published: false
publishDate: 2020-10-04
layout: '../../layouts/BlogPost.astro'
category: Code
tags: 
  - optimize
  - nuxtjs
---

Lets see how much we can optimize a nuxt.js setup.


- Disable unused features.

https://github.com/nuxt/nuxt.js/pull/6468/commits/174c13d56c3a1a227950a59e5c93d1826fa10af1#diff-b79f9948571848990127074d0e85abf88aa99ced4085a08db56f072af0e398c7R8-R23

- NeverHydrate component

- Purge css with tailwind