---
title: 'Write using ruby and rake &#8211; Jekyll again'
published: true
layout: '../../layouts/BlogPost.astro'
category: article
tags:
  - code
  - english
  - gist
  - jekyll
  - rake
  - ruby
---

## Easier deploy

This is a small task that simply deploys the current changes to github.

```
desc 'deploy to github'
task :deploy do
  puts 'deploying'
  sh "git add . && git commit -a -m 'Adding new content' && git push"
  puts 'done!'
end
```

## Create a new post

This adds a new post to the given category and opens the newly created post in my favorite markdown editor [Mou][1].

```
desc 'create new post or bit. args: type (post, bit), title, future (# of days)'
# rake new future=0 title="New post title goes here" slug="slug-override-title"
task :new do
  require 'rubygems'
  require 'chronic'
  require 'stringex'
  require 'active_support'

  title = ENV["title"] || "New Title"
  future = ENV["future"] || 0
  slug = (ENV["slug"] ? ENV["slug"].gsub(' ','-').downcase : nil) || title.gsub(' ','-').downcase

  slug.gsub! /\s*[^A-Za-z0-9\.\-]\s*/, '_'
  slug.gsub! /_+/,"_"
  slug.gsub! /\A[_\.]+|[_\.]+\z/,""
  slug.to_url

  category = ENV["category"] || "article"
  target = ActiveSupport::Inflector.pluralize(category)
  TARGET_DIR = "_posts/#{target}"

  if ! (File.exists?(TARGET_DIR)) then
    Dir.mkdir(TARGET_DIR)
  end

  filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.md"

  path = File.join(TARGET_DIR, filename)
  puts "Creating new post: #{filename}"
  post = <<-HTML
---
template: post
title: 'TITLE'
description: "DESCRIPTION"
created_at: "#{Time.now.strftime("%Y-%m-%d %H:%M")}"
published: false
categories : [#{category}]
---


HTML
  post.gsub!('TITLE', title).gsub!('DATE', Time.new.to_s)
  File.open(path, 'w') do |file|
    file.puts post
  end
  puts "new #{category} generated in #{path}"
  system "/Applications/Mou.app/Contents/MacOS/Mou #{path} &"
end
```

[1]: http://mouapp.com/
