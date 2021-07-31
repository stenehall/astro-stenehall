---
title: 'on{X} for android'
description: I recently bought an Nexus 7 to play with and had to try one of the best products created by Microsoft, ever.
published: true
publishDate: 2012-11-24
layout: '../../layouts/BlogPost.astro'
category: code
tags:
  - android
  - code
  - english
  - gist
  - nexus-7
---

## New Nexus 7, time for a Nexus 4?

I recently bought an <a href="http://www.google.com/nexus/7">Nexus 7</a> to play with and had to try one of the best products created by Microsoft, ever. <a href="https://www.onx.ms">onX</a> lets you automate almost anything on your phone. Microsoft have created a couple of different recipes for you but you can easily create new ones using their excellent <a href="https://www.onx.ms/#apiPage">API</a>.

- Text a random good morning message to my boyfriend every work day at 8:00 AM
- Text "I'm in a noisy place, will call you back" when I'm in a noisy place and miss a phone call
- Launch the Foursquare application when I am at my favorite restaurant for over 10 minutes
- Turn WiFi on when I arrive at work
- Remind me to take an umbrella every day the first time I unlock my phone, if it is going to be rainy

Above is just a couple of predefined recipes. If you want to write your own you need to login to their site and create a new recipe. My first attempt at an recipe gives me the current wheather on unlock but only after 60 minutes.

```javascript
var onLocked;
device.screen.on('off', function () {
  onLocked = 0;
  var now = new Date();
  onLocked = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), 0, 0);
});

device.screen.on("unlock", function(){

  var timeDiff = Math.floor((new Date().getTime() - onLocked.getTime())  / 1000 ); // Minutes

  if(timeDiff > 60) {
    feeds.weather.get(
      {
        location: 'Linköping',
        locationtype: 'city',
        unittype: 'm'
      },
      function onSucess (weather, textStatus, response) {
        var messageBox = device.notifications.createMessageBox('Weather info');
        messageBox.content = "It's " + weather.now.temperature + "C, Rain:" + weather.now.rain + "% It's " + weather.now.sky;
        messageBox.buttons = [ 'Ok' ];
        messageBox.show();
      }
    );
  }
});
```

<small>The above is currently not working.</small>

onX actually makes me want an Android phone. Nexus 4 just came out, right?
