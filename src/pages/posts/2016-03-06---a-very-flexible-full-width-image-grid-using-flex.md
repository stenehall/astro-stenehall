---
title: A very flexible full-width image grid using flex
description: It's always an interesting challenge to minimize the amount of Javascript needed to solve a problem. Using smarter CSS, improve your HTML, solve the problem in a different way.
image: /assets/blog/2016/03/grid-3.jpg
publishDate: 2016-03-06
layout: '../../layouts/BlogPost.astro'
category: article
tags:
  - article
  - code
  - css
  - english
  - gist
  - html
  - javascript
---

It's always an interesting challenge to minimize the amount of Javascript needed to solve a problem. Using smarter CSS, improve your HTML, solve the problem in a different way. This time I looked at how to create a full-width image grid with as little Javascript as possible.

## The current solution

When googling this I found plenty of Javascript solutions, but they all relied on calculating row widths in Javascript. While this solution works nicely it requires recalculations on window resizing. The basic algoritm is simple.

1. Grab the first image and get it's width and height and calculate it's aspect ratio.
2. Based on that ratio calculate the width of the next image keeping the images height equal.
3. Compare the total width of the images with the width of the parent. If the width of the images is less than the parent repeat step 2.
4. Decrease each image width equally until the width of all images equals the width of the parent. Make sure to also decrease the height of each image based on the aspect ratio from step 1.

This is a somewhat complex loop and requires us to keep track of all images and their aspect ratio and then recalculate it all whenever the parents width changes.

Why not try to be smart about it and remove that need?

## The ideal solution?

The ideal solution would not relay on Javascript at all and be a pure CSS solution. From my investigations I don't think we're there just yet tho.
Each row needs to have the same height while at the same time make sure it fills the entire width of the parent. This requires us to keep track of each image width/height ratio.

## Some background on how Flex works

But instead of calculating each image width ourselves we could let CSS take care of that. If we just tell our CSS how to do it it turns out this is actually possible.

There's a new display mode that's getting more and more popular and except for IE it's actually [well supported][caniuse]. With a combination of [`flex-shrink`][flex-shrink] and [`flex-basis`][flex-basis] we can give our CSS all it needs to keep track of our images on it's own. The way flex-shrink works is that if our images won't fit on a single row it will use this factor to start shrink the images until it can fit them on one row. But we don't want just that, we also want them to flow to the next row, this is solved by using [`flex-wrap`][flex-wrap].

When using flex-wrap in combination with flex-shrink our elements will only be shrunk as much that they just fit on a row, this is based of each elements flex-basis. Meaning that if we can fit 3 images on our row we'll get 4, shrunk just so much that they all fit.

## How to solve the problem

With the above knowledge we realise that the only think we need is to keep track of each image aspect ratio for it all to come together on it's own.
If we just set each image `flex-shrink` and `flex-basis` based on its aspect ratio our CSS will take care of making sure each row fills up with just the right number of images. If we use `flex-shrink` right it will resize each image based on it's aspect ratio and as a result give you a row of images with the same height.

## The result

<p data-height="900" data-theme-id="9641" data-slug-hash="yOYZpZ" data-default-tab="result" data-user="stenehall" class="codepen">See the Pen <a href="http://codepen.io/stenehall/pen/yOYZpZ/">A very flexible full-width image grid</a> by Johan Stenehall (<a href="http://codepen.io/stenehall">@stenehall</a>) on <a href="http://codepen.io">CodePen</a>.</p>

So what will this end up like? The result is a set of .grid\_\_element items with `flex-basis: 414.575px` and `flex-grow: 2.07287` set.

```
<div id="grid" class="grid">
    <div class="grid__element" style="flex-basis: 414.575px; flex-grow: 2.07287;">
        <img src="https://farm2.staticflickr.com/1464/24962527114_f7e582daa5_b.jpg">
        <div class="grid__title">
            <p>DSC_4585</p>
        </div>
    </div>
    <div class="grid__element" style="flex-basis: 336.449px; flex-grow: 1.68224;">
        <img src="https://farm2.staticflickr.com/1587/25500055431_262305edbf_b.jpg">
        <div class="grid__title">
            <p>rising sun by pfotograf</p>
        </div>
    </div>
    <div class="grid__element" style="flex-basis: 153.75px; flex-grow: 0.76875;">
        <img src="https://farm2.staticflickr.com/1708/25225077389_0630066de1_b.jpg">
        <div class="grid__title">
            <p>Bathed In Light</p>
        </div>
    </div>
</div>
```

## Gotchas

There's a couple of things to pay attention to here. It's also important to realise that this solution isn't 100% perfect all the time. It depends a great deal about the images aspect ratio in relation to each other. If the difference between them is to great we might end up with a not perfect row.

### max-image-width

Firstly, the way this works each row will fill up the entire width by default. This means that if the last row only contains one image we risk having it fill up the entire row. In some cases this might be ok, but for me I thought that looked odd. That's where `$max-image-width` in the scss file comes in. This makes sure no image gets to big and means the last rows images won't fill up. This also means that if we have images with to different aspect ratios we might end up with images not filling up the entire rows before the last row. You'll have to tweak this value to suit your needs.

### gridBasis

You find this setting in the javascript file and it's the images starting point before growing. This combined with the aspect ratio decides how wide an image will be. If this is to big while the `max-image-width` is to small we might end up with images hitting the max-width, this is not something we want because it breaks the flow.

[flex-shrink]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
[flex-basis]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
[flex-wrap]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
[caniuse]: http://caniuse.com/#search=flex
