---
title: Heroku uses a very old version of node.js
image: /wp-content/uploads/2013/02/coffee-table.jpeg
published: true
publishDate: 2013-02-14
layout: '../../layouts/BlogPost.astro'
category: tip
tags:
  - english
  - gist
  - heroku
  - node.js
  - tip
---

## But there's a solution

I spent a while wondering why my code that ran so good localy wouldn't run on heroku. I couldn't figure it out when I suddenly noticed that the node.js version wasn't 0.8 but instead 0.4!

[Node.js versions on heroku][1] tells you to just add the following to your `packages.json` file and it'll work. And it does!

```json
"engines": {
  "node": "0.8.x",
  "npm":  "1.1.x"
}
```

[1]: https://devcenter.heroku.com/articles/nodejs-versions
