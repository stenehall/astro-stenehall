---
title: Quick svn-web guide for Habari
description: Quick explanation on how to get your habari into your own svn repository.
published: true
publishDate: 2008-10-16
layout: '../../layouts/BlogPost.astro'
category: article
tags:
  - article
  - english
  - habari
---

## It's simple

Quick explanation on how to get your habari into your own svn repository. All commands should be run in a console.
<!--more-->

Ok, so here goes. I assume you've got your svn setup. If not [google it][1] Make sure you have a new svn repository with the standard branches/, `/tags` and `trunk/` foldersFirst you want to checkout your newly created repository.

After this you want to use `svn export to get http://svn.habariproject.org/habari/trunk/htdocs/user/` into your my*web*project. svn export doesn't create .svn files, making a clean download

Now it's time to add the rest of the habari files, this is the tricky part. Quite often you dont have a svn editor set so this is good to run. This will set pico as the default editor for svn files.

Then it's time to add the habari files. svn:externals lets you add external sources to your repository and then work with them as if they're your own. You won't be able to commit to them since you don't have writing rights on the habari server.
then add this to your pico and `ctrl + x` save your svn:externals
Now you have your own user/ files and everything else is updated using the habari HEAD. Do a commit and you're done

When you do a svn update all the habari struff will be included from from the externals.More to come

[1]: http://www.google.se/search?hl=sv&client=firefox-a&rls=org.mozilla%3Asv-SE%3Aofficial&hs=kD4&q=install+svn+linux+server&btnG=S%C3%B6k&meta=
