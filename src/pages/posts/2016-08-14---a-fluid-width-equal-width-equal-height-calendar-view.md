---
title: A fluid width, equal height calendar view.
published: true
layout: '../../layouts/BlogPost.astro'
category: code
tags:
  - code
  - codepen
  - css
  - english
  - html
  - sass
---

We created a calendar view for work some weeks back and we wanted the cells to be equal height/width. If you don't need it to be fluid it's not a hard problem. But when you want the calendar fluid it gets trickier.

To get the days in a week equal width you can either go with the old `display: table` solution or with the more modern `display: flex`. The web have come a long way the last few years and [flex is actually very well supported now days][1]. So there's no reasons to not use it.

Combining this with a classic [fluid width video][2] solutions and we're mostly done.

## The code

Just a quick haml version of what the html could look like.

```haml
.month
  - (0..3).each do |i|
    .week
      - (1..7).each do |j|
        .day{:class => (j%7 == 0 || j%6 == 0) && "day--is-weekend"}
          %p
            %span #{(i*7)+j}
  .week
    .day
      %p
        %span 29
    .day
      %p
        %span 30
    .day
      %p
        %span 31
    - (1..4).each do |i|
      .day.day--outside
```

## The scss

```scss
.month {
  margin: 0 auto;
  max-width: 500px;
  border-bottom: 1px solid #ddd;
}

.week {
  display: flex; // This will give each day equal width
  flex-direction: row; // Combined with this of course
  border: 1px solid #ddd;
  border-width: 1px 0px 0 1px;
}

.day {
  flex-grow: 1; // We tell each day to grow equally
  flex-basis: 0;
  border-right: 1px solid #ddd;
  position: relative;

  &:before {
    // This is my take on a classic equal width/height solution
    display: block;
    content: '';
    padding-top: 100%;
  }
}

p {
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex; // Inside each day we tell the content to center
  justfify-content: center;
  align-items: center;
}

span {
  width: 100%;
  text-align: center;

  &:before {
    position: absolute;
    bottom: 20%;
    left: 30%;
    width: 40%;
    border: 2px solid #ddd;
    content: '';
  }
}
```

## The result

<p class="codepen" data-height="450" data-theme-id="9641" data-slug-hash="jAdYzV" data-default-tab="result" data-user="stenehall" data-embed-version="2">See the Pen <a href="http://codepen.io/stenehall/pen/jAdYzV/">jAdYzV</a> by Johan Stenehall (<a href="http://codepen.io/stenehall">@stenehall</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

[1]: http://caniuse.com/#search=flex
[2]: https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
