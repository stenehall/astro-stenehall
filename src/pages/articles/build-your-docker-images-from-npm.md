---
title: Build your docker images from npm
description: Automate things with npm
image: /wp-content/uploads/2015/09/docker1.png
published: true
publishDate: 2015-09-18
layout: '../../layouts/BlogPost.astro'
category: code
tags:
  - code
  - docker
  - english
  - gist
---

## The background, docker and gitflow

At work we're slowly moving over to use [docker][1] for all our servers. While I'm not in charge of this I've also been toying with moving my work environment to docker as well as development deploys. We're using [gitflow][2] for development meaning we'll always be using a branch named something like feature/adding-something.

When doing a deploy for this branch I would normally first build and tag the new image with the feature branch's name, then push it and lastly deploy it. The two first steps always looked identical.

```shell
$ docker build -t our.docker.com/frontend:feature-adding-something .
$ docker push our.docker.com/frontend:feature-adding-something
```

## Lets automate it using npm

Why not automate this a bit? You might have noticed that instead of having the docker image tag look exactly the same as the branch name, feature/adding-something, I replaced the / with a -. This is because docker doesn't like /s in tag names.

To get this automated I wanted to add it to my package.json file. After all I already had a `dev` and a `prod` task in there so why not add a build task as well?

```shell
DOCKER_TAG=`git rev-parse --abbrev-ref HEAD | sed 's/\\//-/g'`  \
&& docker build -t our.docker.com/$DOCKER_TAG .                 \
&& docker push our.docker.com/$DOCKER_TAG                       \
&& echo "********************\n**\n**\n** ${DOCKER_TAG}         \
pushed successfully time to deploy it\n**\n**\n                 \
********************"
```

## What does it do?

It's a fairly straight forward build script. `git rev-parse --abbrev-ref HEAD` gives you the current branch name from git. We then pipe that to `sed 's/\\//-/g'` that replaces all \ with - to make docker happy. Once we have the tag name we want to use we build the new image and push it.

Now instead of having to remember both the docker commands every time we want to push our current branch all we have to do is `npm run build` and it will take care of everything for us.

[1]: https://www.docker.com/ 'Docker - Build, Ship, and Run Any App, Anywhere'
[2]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow 'Gitflow Workflow | Atlassian Git Tutorial'
