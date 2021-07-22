---
title: Newspaper layout on the web
date: 2015-11-08T19:04:02+00:00
template: post
description: A four column css only layout with a 3 column image
image: /wp-content/uploads/2015/11/22404962079_ea6809edb5_o-e1446986337512.jpg
published: true
category: code
tags:
  - code
  - codepen
  - css
  - english
  - html
---

While the web have come a long way since [spacer gifs][1] creating more advanced layouts is still tricky at times.

I found an [interesting layout question][2] on [Stack Overflow][3] some time ago. The author wanted a four column layout with an image spaning 3 columns. A simple layout it would seem, but for html/css it's actually rather tricky to get it done in a good way. If you're ok with dropping support for older browsers you can use [<code>column</code>][4] with some added browser prefixs and get about [95% browser coverage][5].

A four column layout is very simple to achieve and will look something like this (note that I'm using scss and an autoprefixer).

<div class="codepen">
<p class="codepen" data-height="300" data-theme-id="9641" data-slug-hash="epPWmo" data-default-tab="result" data-user="stenehall">See the Pen <a href="http://codepen.io/stenehall/pen/MaPrer/">4 column layout with image in pure css</a> by Johan Stenehall (<a href="http://codepen.io/stenehall">@stenehall</a>) on <a href="http://codepen.io">CodePen</a>.</p>

</div>
But when adding an image above it you can either add it outside the article and there by bypass the columns entirely or give it a [`column-span`][6] and expand the image to all four columns. The end result will be something like this:
<div class="codepen">
<p class="codepen" data-height="560" data-theme-id="9641" data-slug-hash="pjxPam" data-default-tab="result" data-user="stenehall">See the Pen <a href="http://codepen.io/stenehall/pen/pjxPam/">4 column layout with image in pure css</a> by Johan Stenehall (<a href="http://codepen.io/stenehall">@stenehall</a>) on <a href="http://codepen.io">CodePen</a>.</p>

</div>
But no matter how we add the image it will not affect all 4 columns. In the above example I'm also using `column-span` that's actually not supported in Safari yet. So firstly, we need to figure out how to only span 3 columns, secondly we need to make the solution work for Safari.

To solve this we'll be using a negative margin and instead of using column-span we'll absolute position the image.

<div class="codepen">
<p class="codepen" data-height="560" data-theme-id="9641" data-slug-hash="qOJpZg" data-default-tab="result" data-user="stenehall">See the Pen <a href="http://codepen.io/stenehall/pen/qOJpZg/">4 column layout with image in pure css</a> by Johan Stenehall (<a href="http://codepen.io/stenehall">@stenehall</a>) on <a href="http://codepen.io">CodePen</a>.</p>

</div>
Now, lets add some extra styling and a caption for the photo to make the final touch.
<div class="codepen">
<p class="codepen" data-height="560" data-theme-id="9641" data-slug-hash="MaPrer" data-default-tab="result" data-user="stenehall">See the Pen <a href="http://codepen.io/stenehall/pen/MaPrer/">4 column layout with image in pure css</a> by Johan Stenehall (<a href="http://codepen.io/stenehall">@stenehall</a>) on <a href="http://codepen.io">CodePen</a>.</p>

</div>
Here I've added a very simple [drop cap][7] a slightly bigger font for the first paragraph and [a caption][8] for the photo. The end result is a newspaper feeling with cross browser support.

[1]: https://en.wikipedia.org/wiki/Spacer_GIF
[2]: http://stackoverflow.com/questions/33392042/advanced-css-tricks-how-to-span-an-image-over-multiple-columns-in-a-css3-site-l/
[3]: http://stackoverflow.com/
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/columns
[5]: http://caniuse.com/#search=column
[6]: https://developer.mozilla.org/en-US/docs/Web/CSS/column-span
[7]: http://www.smashingmagazine.com/2012/04/drop-caps-historical-use-and-current-best-practices/
[8]: https://developer.mozilla.org/en/docs/Web/HTML/Element/figcaption
