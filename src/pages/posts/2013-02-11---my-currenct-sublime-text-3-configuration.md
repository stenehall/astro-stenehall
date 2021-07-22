---
title: My currenct Sublime Text 3 configuration
description: Sublime Text 3, with Phoenix Dark, Base16 color scheme and Source Code Pro.
published: true
layout: '../../layouts/BlogPost.astro'
category: article
tags:
  - article
  - config
  - english
  - gist
  - sublime
---

Sublime Text 3, with [Phoenix Dark][1], [Base16 color scheme][2] and [Source Code Pro][3].

## Package controll

To install the theme and color scheme I used [Sublime Package Control][4]. Since things have change in Sublime 3 Package Control couldn't be installed as usual but instead needed to be grabed from github.

## Phoenix Dark and Base16

Once Package Control was installed both Phoenix Dark and Base16 could be installed from it.

## Source Code Pro

My current favorit font for coding is Source Code Pro. I just love it.

## Settings - User

Once the above was installed I tweaked the default settings a bit. Parts of it is taken from [Sublime Text 2 Love — kennethreitz.org][5], the rest is from the Phoenix github page.

```json
{
  "close_windows_when_empty": false,
  "color_scheme": "Packages/Base16 Color Schemes/base16-eighties.dark.tmTheme",
  "fold_buttons": false,
  "folder_exclude_patterns": [
    ".svn",
    ".git",
    ".hg",
    "CVS",
    "_build",
    "dist",
    "build",
    "site",
    ".bin",
    "node_modules"
  ],
  "font_face": "Source Code Pro",
  "font_size": 12,
  "ignored_packages": ["Vintage"],
  "phoenix_dirty_bottom_bar": true,
  "phoenix_eighties": true,
  "phoenix_highlight_current_tab": true,
  "phoenix_sidebar_tree_large": "xsmall",
  "phoenix_solid_current_tab": true,
  "phoenix_tabs_auto_width": true,
  "phoenix_tabs_small": true,
  "rulers": [80],
  "tab_size": 2,
  "theme": "Phoenix Dark.sublime-theme",
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true
}
```

## Lots of plugins

Beside the beutifyl result of the above I also use a lot of useful plugin. Here's some of them:

- SideBarEnhancements - One of the things sublime text really lacks is a good sidebar
- Can I Use - Short cut to caniuse.com
- SublimeLinter
- SCSS
- Jade
- Nodejs
- SublimeCodeIntel

[1]: https://github.com/netatoo/phoenix-theme
[2]: https://github.com/chriskempson/base16
[3]: http://blogs.adobe.com/typblography/2012/09/source-code-pro.html
[4]: http://wbond.net/sublime_packages/package_control/installation#ST3
[5]: http://kennethreitz.org/exposures/sublime-text-2-love
