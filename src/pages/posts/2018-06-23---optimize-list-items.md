---
title: Optimize , list items
published: true
publishDate: 2016-03-06
layout: '../../layouts/BlogPost.astro'
category: til
tags:
  - css
  - optimize
---

A common solution for adding a , between a list of things in html/css is the following css.

<!-- end -->

```css
li:after {
  content: ', ';
}

li:last-child:after {
  content: '';
}
```

The first selector adds a comma after each item in a list. The second makes sure the last item isn't followed by a comma.

A much shorter way of writing this, that should work in most cases, is to append a comma to all but the first item. That would look like this instead.

```css
li:nth-child(n + 2):before {
  content: ', ';
}
```