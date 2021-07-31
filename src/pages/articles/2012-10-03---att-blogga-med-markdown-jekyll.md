---
title: 'Att blogga med markdown & Jekyll'
description: Den största skillnaden mellan Nanoc och traditionella blogglösningar är att Nanoc generera statiska html filer.
publishDate: 2012-10-03
published: true
layout: '../../layouts/BlogPost.astro'
category: code
tags:
  - code
  - github
  - jekyll
  - swedish
---

## Markdown till statiska filer

Den största skillnaden mellan Nanoc och traditionella blogglösningar är att Nanoc generera statiska html filer. Det här innebär betydligt snabbare sidladdningar och mindre serverbelastning. Men det betyder också att du aktivt måste generera dessa statiska filer varje gång du vill uppdatera ett blogginlägg. Inga snabba uppdateringar via mobilen alltså.</p>

Vill du ha en [WYSIWYG][1] är Jekyll inte heller rätt för dig. Inlägg skriver du istället direkt i din favorit-editor, just nu [Sublime Text 2][2]. Om du känner dig bekväm med html kan du skriva dina inlägg direkt i HTML eller så använder du [Markdown][3] eller varför inte [Textile][4]?

## Github support

För att göra saken ännu lite smidigare kan man använda github som webbhotel. Med en [CNAME][5] fil kan du använda ett [github][6] repo för att driva din blogg.

Även om det bara handlar om statiska filer är tyvärr

[1]: http://sv.wikipedia.org/wiki/WYSIWYG
[2]: http://www.sublimetext.com/2
[3]: http://daringfireball.net/projects/markdown
[4]: http://sv.wikipedia.org/wiki/Textile
[5]: https://help.github.com/articles/setting-up-a-custom-domain-with-pages
[6]: http://github.com
