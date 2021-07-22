---
title: Animated toggle checkbox without javascript
description: A simple animated togglable checkbox in pure html/css with no javascript.
image: /wp-content/uploads/2014/10/coffee-hand.jpeg
published: true
layout: '../../layouts/BlogPost.astro'
category: code
tags:
  - code
  - css
  - html
  - sass
---

## `:before` and `-moz-appearance: none`

This all thing could have been so much cleaner. Sadly Firefox stoped this (and very possibly also older IE). Firstly Mozilla doesn't actually hide the checkbox when you add `-moz-apperance: none` instead it simply just removes all styling. This might have been ok, we could solve this by offsetting the checkbox and using `overflow: hidden`. But sadly Mozilla also doesn't support `:before` or `:after` on checkboxes.

As a result of Firefox's bad support we need to add an extra element. I went for a `span`. This is far from an ideal solution but I've yet to figure out a better way of doing this.

The end solution uses the `<label>` to toggle the checkbox even if it's not visible, a gradient background for the background color change and a transition to animate it all.

## Browser support

- Firefox
- Chrome
- Safari
- IE10+ (I think)

<p data-height="268" data-theme-id="9641" data-slug-hash="ezKgc" data-default-tab="result" data-user="stenehall" class="codepen">See the Pen <a href="http://codepen.io/stenehall/pen/ezKgc/">Styled checkbox</a> by Johan Stenehall (<a href="http://codepen.io/stenehall">@stenehall</a>) on <a href="http://codepen.io">CodePen</a>.</p>

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
