---
title: Autocomplete from any folder using CDPATH
published: true
layout: '../../layouts/BlogPost.astro'
category: article
tags:
  - article
  - english
  - gist
  - linux
  - tip
---

## The magic of CDPATH

Bashs man page describes what the `CDPATH` variable does.
<!--more-->

> The search path for the cd command. This is a colon-separated list of directories in which the shell looks for destination directories specified by the cd command. A sample value is ".:~:/usr".

This means that if we add our `~/Sites` folder to `CDPATH` we will be able to just type `cd project-name` instead of cd `~/project-name`. OS X uses `~/.bash_profile` to load predefined variables and function so this is where we'll add our `CDPATH` modifications.

The code below will add your `~/Sites` to `CDPATH` keeping any other changes you might have done with it. After this you should be able to `cd project-name` from a terminal (remember that you'll need to restart terminal or do an export on the `CDPATH` changes before it will start working).

Use your favorite code editor to open `~/.bash_profile` and add the following.

```bash
CDPATH=$CDPATH:~/Sites/
```

## bash-completion gives you back tab completion

This is great! Now I just need to type the project name to go to it. But I'm actually even more lazy, I want tab completion as well. Enter bash-completion. Sadly bash-completion isn't installed by default to OS X (at least not my install of OS X 10.6). To install this we need some kind of ports system. I decided that this would be a great time to try out the new solution called Homebrew. From what I'd read about it it was supposed to be simpler than the alternatives Fink and MacPorts.

## Homebrew, a great ports solution

Installing homebrew was extremely simple and I was up and running fast. Sadly homebrew have some requirements that might take you longer to get working (no exception for homebrew, the same goes for Fink as well as MacPorts). But instead of me copy/pasting the homebrew installation instructions just read them from homebrews page.

Once you have Homebrew up and running installing bash-completion is as simple as

```bash
brew install bash-completion
```

The bash-completion installer wanted me to add a couple of lines to my .bash_profile file.

```bash
if [ -f `brew --prefix`/etc/bash_completion ]; then
  . `brew --prefix`/etc/bash_completion
fi
```

## Credits and Disclaimers

I toke most of this information from either Rob Wilkerson » Tab Completion for CDPATH on Mac or Homebrew — MacPorts driving you to drink? Try Homebrew!. Thanks for an excellent post Rob and a great app Max!

As always when it comes to playing with your toys. Everything is at your own risk, if you break something it's your fault not mine.
