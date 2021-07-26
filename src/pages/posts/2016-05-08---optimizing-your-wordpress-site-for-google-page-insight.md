---
title: Optimizing your WordPress site for Google PageSpeed Insight
published: true
publishDate: 2016-05-08
layout: '../../layouts/BlogPost.astro'
category: article
tags:
  - article
  - code
  - css
  - english
  - google
  - wordpress
---
I spent some time optimising my page-loading speed a while ago. While I've not yet looked into optimising the html and css or even the rendering. Since this is a rather simple page I believe the optimizations I've done so far is the biggest improvements you can do.

Optimize html, css and javascript. And Cache, cache cache.
---

I actually didn't have to do a lot to optimize my site. I installed two plugins. One that caches page requests and one that combines and minifies javascript as well as includes css inline.

There's several good cache plugins so pick whatever you likes best. I'm using [WP Super Cache][1] but I could just as well have used [W3 Total Cache][2] or one of several other alternatives.

Currently I'm not using any kind of fancy settings. for WP Super Cache, I just enabled it and let it be as it was. Just doing this cut the loading speed from ruffly 1.5s to around 70ms.

However TTFB (Time To First Byte) isn't all. You also want to minimize the number of external files loaded. DNS lookups and so on. For some quick and simple improvements I'm using [Autoptimize][3] and have the following enabled

- Optimize HTML Code?
- Optimize JavaScript Code?
- Also aggregate inline JS?
- Optimize CSS Code?
- Also aggregate inline CSS?
- Inline all CSS?
- Save aggregated script/css as static files?

Not all of these settings might be ideal for you. What fits your site depends on what other scripts your using, how you're including css and javascript and so on. One rather critical decision here is the inline of all CSS. There's both pros and cons with this and what is best for you noone but you can decide. Instead of inlining all CSS you could just inline the [above the fold css][4]. Doing so involves more work and could potentially create a lot of work for you if you tend to update your site often. On the other hand it lets browser cache the main css file and the page size will be a lot smaller.

### Inline CSS

Before I wrote this article I included the entire [Ionic][5] css. Ionic weight in on 56Kb and was actually almost 6x as big as my own main css file. Inlining this on every single page request is far from ok.

So I set out to remove some of the parts I don't need. Removing the icons I don't use and rewriting the initial declaration and the Ionic css file is down to 4.5Kb. I ended up only keeping the social icons. It's still more icons than what I use but I kept them for easy usage in the future.

The result
---

My site was already pretty ok from the start. While doing this I realized I still using the 1.4Mb big image I was using when building the site. So I replaced that with a smaller version. I also added some longer cache expiration dates to js files in my nginx config.

```
location ~* \.(?:ico|css|js|gif|jpe?g|png)$ {
expires 30d;
add_header Pragma public;
add_header Cache-Control "public";
}
```

Google PageSpeed Insights, the paradox
---

After my improvements did a [PageSpeed Insight][6] test on my site. PageSpeed helps you find potential problems with your site and provides you with useful insight on what you can improve.

My site was close to perfect, I got score of 99 out of a 100. The ironic thing with this is what the last 1 point was.

```
https://www.google-analytics.com/analytics.js (2 hours)
```

Google penalise me for using Google Analytics. Analytics.js only have a 2 hours expiration date. That's far to little for being ok. There's ways around this, the simplest would be to just drop Google Analytics. Or I could store a local version of the file. Google suggests against this tho. There's no way of knowing exactly when Google might update the file and there by break your local version. Of course I could write a small solution that update my local file. Doing this also means I need to make a cache burst solution for it and keep track of when the file is updated.

<img class="alignnone size-large wp-image-502" title="PageSpeed Insights width=" data-src="https://stenehall.se/wp-content/uploads/2016/05/Screenshot-2016-05-07-20.40.04-4-1024x534.png" alt="PageSpeed Insights" height="534" />

Since Google is penalising me for including their script I'm going to be a bit bad and just not deliver their own script for them. This could be done either with `php` or `javascript`. Since I'm caching my pages it means I can't target Page Insight directly form the backend. This only leave `javascript`. By looking at the User Agent we're able to skip loading Googles scripts if Google is the visitor.

```
if (window.navigator.userAgent.indexOf("Speed Insights") === -1) {
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3855M');
}
```

Some final tweak
---

Since I'm nowdays also using Codepen I had to exclude that from being loaded for Speed Insights.

```
function script(url) {
var s = document.createElement('script');
s.async = true;
s.src = url;
var x = document.getElementsByTagName('head')[0];
x.appendChild(s);
}
script("https://assets.codepen.io/assets/embed/ei.js")
```

With Wordpress Jetpack came another script needing to be removed. [Removing it was the simplest solution][7]

```
function remove_devicepx() {
wp_dequeue_script( 'devicepx' );
}
add_action( 'wp_enqueue_scripts', 'remove_devicepx' );
```

The result
---

<div class="clear">
<img class="size-medium alignleft" data-src="https://stenehall.se/wp-content/uploads/2016/05/Screenshot-2016-12-02-23.56.05-300x183.jpg" alt="screenshot-2016-12-02-23-56-05" /><img class="size-medium alignleft" data-src="https://stenehall.se/wp-content/uploads/2016/05/Screenshot-2016-12-02-23.55.52-300x183.jpg" alt="screenshot-2016-12-02-23-55-52" />
</div>

[1]: https://wordpress.org/plugins/wp-super-cache/
[2]: https://wordpress.org/plugins/w3-total-cache/
[3]: https://wordpress.org/plugins/autoptimize/
[4]: https://css-tricks.com/authoring-critical-fold-css/
[5]: http://ionicons.com/
[6]: https://developers.google.com/speed/pagespeed/insights/
[7]: http://www.swashcap.com/blog/2013/07/removing-devicepx-jetpack-js-for-wordpress/