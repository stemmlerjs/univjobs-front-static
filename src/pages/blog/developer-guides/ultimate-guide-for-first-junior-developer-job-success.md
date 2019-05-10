---
templateKey: blog-post
title: 'Surviving Your First Junior Developer Job [Guide]'
author: Khalil Stemmler
date: '2019-05-09T19:50:23-04:00'
description: >-
  How to be awesome at your junior developer job by learning the essential technical and communication skills necessary to making your team, boss and clients happy.
tags:
  - development
  - junior developer
  - guide
featured: false
image: /img/blog/ultimate-guide-for-success/ultimate-guide.png
category: Career
parentcategory: Career
public: true
keywords: junior developer job
---


Landing your first junior developer job is an **amazing** accomplishment. You've worked really hard towards getting the skills to pay the bills and now you're ready to prove yourself in your new job.

You're definitely excited. And you should be. Being a developer is awesome. But with that excitement, it's also normal to be feeling a bit nervous. My first week as a developer was pretty hectic. My first day, I was given a 200 line SQL query to try to make sense of... I still have flashbacks from that. Generally speaking, you're going to feel like there's so much you don't quite know or understand, but it's all a part of the experience.

In order to make your transition into the working world as a developer as smooth as possible and really bring value to your team, here are my professional recommendations.


## _Really_ Understand Git and Semantic Versioning

Git is the most popular tool for managing source code. If you've graduated from school or completed a bootcamp, you're probably at least _familar_ with what Git is. 

A working knowledge of Git will only take you so far. 

When you start working on a team, you'll be introduced to concepts strategies like:
- **Pull Requests (or PRs as it's known on GitHub)**
- **Merge Requests (this is what GitLab calls PRs)**
- **Merging**
- **Rebasing** 
-  **squashing commits** and
- **Semver (semantic versioning)** 

My first week as a developer, I actually couldn't stop sweating due to being so nervous thinking that I was going to **delete the entire company by accident** when presented with options in Git I wasn't familiar with how to deal with.

![](/img/blog/ultimate-guide-for-success/delete-prod.png)

<p class="caption">Even though I'm surprised this coaster exists, it really does say it all...</p>

In my experience, a lot of teams like to use **Git Flow** in order to manage how code gets developed, versioned, tagged and released into production builds.

For new developers, some of the common questions and confusions I see are:

- the difference between **merging** and **rebasing** 
- when should I **rebase**?
- how do version numbers work?

If you look into understanding each of these terms, I think you'll be _really well off_ for how to contribute within a team and release features.

## Come prepared to your standup meetings

If your team practices agile, you'll be expected to report:

- what you accomplished last day
- what you’re working on today
- what’s blocking you

This can be slightly different from company to company. Sometimes you might not even be asked to do this. But regardless, I think it's useful for you as a developer to know what you're going to work on the next day ahead of time. Sometimes it can be easy to get trapped into the mode of just responding to things that come up, and that can lead to burnout and losing focus.

Try coming prepared to your standup meetings by preparing ahead of time. Spend 3 minutes every morning before work or before you go to bed to lay out what you've accomplished lasy day, what you're going to work on for the day and what's blocking you.

You'll not only impress your team lead by coming prepared, but you'll appear a lot more professional and credible, even if you get stuck and aren't able to accomplish what you wanted to today. 

## Learn how to ask for help

Knowing **how** and **when** to ask for help as a new developer is _so_ important. What might take you 5 hours to figure out could take another more experienced developer  5 minutes (or seconds). 

It truly is in your best interest (and the company's) to ask for help when you need it. 

However, it's **not** a good idea to ask for help on every single challenge you're presented with _without attempting to solve it yourself first_.

So, before you ask for help on something, make sure that you:

- try to figure it out yourself
- search Google for answers on how to solve the problem (paste logs or error messages)

If no dice, then it's definitely time to ask for help. Here's how you properly ask for help:

### Asking for help in person

Look out for the other person's body language. If they seem like they're annoyed, stressed out, or in the zone- it might be better to ping them first and ask them if it's a good time for you to come over to ask them a question.

Be wary of people doing the 'ol **George Costanza: Looking Busy** trick.

<iframe width="auto" height="auto" src="https://www.youtube.com/embed/wC8PzhNuh7w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


### Asking for help over instant messenger

When you're thinking of pinging another developer over IM for help, there a couple of ways that you can increase your success on getting a positive and speedy message back. 

Here's a **bad example** on how to ask for help:

> “hey, can you help me? I can’t install node.js on my computer, it’s not working.”

This isn't a good way to ask for help. Here's how it could be improved:

- Introduce yourself first if you've never talked to this person before
- Be sure to include **what you tried** to solve the problem. Give the other person context as to what the problem might be by providing things that it's _not_.

Here's a better way to ask for help.

**Good example**

> "Hey John, I'm Khalil- the new developer here. Nice to meet you. I heard that you might be able to help me with a particular problem I'm facing. Basically, I'm trying to get Node.js installed on my computer. I tried this link (paste link) and followed the instructions, but when I ran this command (insert command), I got this error message (insert error message). I'm using one of the new Macbooks. Any idea what's going on?

There's a reason why this is **so much better**.

This way of asking for help provides the other person with so much context as to what you’ve probably already tried so that they can hone down on what the problem might be quicker.

When you don’t include this information, it’s putting a burden on the other person to ask you relevant questions in order to hone down the root of the problem.

Imagine how much time you save by giving the other person all the information right up front. It takes time to ask questions. That that other person might be busy with a lot of other things at the moment, so think about it like this:

> Try to help the other person save as much time as possible by giving them as much information about the problem as you can upfront.

### When receiving help

**Do not have an ego**. I repeat, **do not have an ego**. 

When someone takes the time to help you out, you should not aim to make it known to the other person that you knew how to fix it all along.

When your issue is resolved, non't say:

> “yeah, that’s what I was going to try next”

Do say:

> “Got it working, thanks!”

Be careful to not blame something not working on someone else. Don't say:

> "The backend team messed it up and that's why it wasn't working."

Instead, say:

> "I'm thinking that it may have had something to do with the recent changes on the backend."

Always make sure that when you finally get your problem solved, let the other person know. They might still be thinking about ways to help you solve your problem when you've already fixed it and moved onto the next thing.

### Make sure that you manually test your code

I'll never forget the one moment that at my first dev job that I neglected to test my code and just assumed that it would work in production.

That code made it's way out to the client and broke as soon as they tried it out.

Boy, did I ever get an earfull that day...

Don't be like me, make sure that you manually test that your features work! Test the **happy paths** and even more importantly, test the **non-happy paths**.

_Maliciously_ try to break your own code. If there's something I've learned by putting code into production, it's that if you've written bugs, your users will eventually find them.

Even if you have a QA team, aim for QA to find **nothing**.

### Learn to write testable code and how to write tests for them

Writing testable code isn't normally something that's taught in school, but it is easily learned by applying the **SOLID** design principles.

Also, ask the other lead developers how to write tests for something that you’ve written. They'll appreciate that you asked. They might be able to sit down with you and teach you a thing or two. If they’re unable, or you don’t notice that there’s many tests in the codebase anyways, the next best thing is to ensure that you tested the code manually.

### Constantly be learning

Even if you're a front-end developer, learn about backend development and devops.

If you're a backend developer, research HCI (human and computer interaction) and UX.

Master a tool that you use on a daily basis.

In this career as a professional in technology, the amount of learning and growing that you do will ultimately determine your success.

---

We've just gone over some of the **best ways** to make your first developer job a success, no matter if you're a jr web developer, jr backend developer, front-end or whatever. If you practice some of these things, you'll impress your boss and quickly figure out how to become productive working with your team.

If you're still looking for a Developer job, you should consider [joining Univjobs](https://app.univjobs.ca/register). We have hundreds of employers looking for students and recent-grads in technology. It truly is a great time to be a developer.

