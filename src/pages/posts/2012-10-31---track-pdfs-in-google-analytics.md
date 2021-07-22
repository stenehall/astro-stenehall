---
title: Track PDFs in Google Analytics
description: How to track PDF openings using Google Analytics
publishDate: 2012-10-31
published: true
layout: '../../layouts/BlogPost.astro'
category: code
tags:
  - code
  - english
  - gist
  - google-analytics
  - jquery
---

## With just 3 lines of code

After a quick Google search I couldn't find a really clean way to track PDF clicks. So I wrote my own solution instead.

```javascript
$("a[href$='pdf']").live('click', function() {
  _gaq.push(['_trackEvent', 'PDF', 'Download', $(this).attr('href')])
})
```

This solution depends on [jQuery][1]. Since I had to implement this on a somwhat old jQuery version I had to use [`live`][2] instead of [`on`][3]. `Live` is deprecated as of version 1.7 of jQuery so if you're using a newer version use `on`.

[1]: http://jquery.com/
[2]: http://api.jquery.com/live/
[3]: http://api.jquery.com/on/
