---
templateKey: blog-post
title: '9 Books For Junior Developers In 2019'
author: Khalil Stemmler
date: '2019-03-12T19:50:23-04:00'
description: >-
 Whether you’re a new developer or you’re fairly experienced as a programmer, you’ll come to realize that the amount of time you’ve worked at a job isn’t the best way to determine your skill and knowledge as a programmer (I know, tell that to the recruiters 🤫). 

tags:
  - student
  - career
featured: false
image: /img/9-books-mountain.jpg
category: Resources
parentcategory: Resources
public: true
---

Whether you’re a new developer or you’re fairly experienced as a programmer, you’ll come to realize that the amount of time you’ve worked at a job isn’t the best way to determine your skill and knowledge as a programmer (I know, tell that to the recruiters 🤫). 

What you do in your spare time and how you choose to take learning into your own hands is what’s going to ultimately determine your success in this industry. That’s why it’s so important for us as developers to adopt a growth mindset.

There are some excellent ways to learn and improve as a developer. Some of those ways are pair-programming, online courses, meetups, work experience, building projects and finding a mentor. 

One of my personal favourite ways to learn is to crack open a well-written book and try to absorb something from those who have distilled years of knowledge and insight into a permanent artifact.

Here are my personal recommendations that I think all developers (especially junior ones) should read at some point. These books are all highly regarded by professionals in our industry and have the potential to leave a profound impact on the quality of your work and your speed of development & learning. Some of them stray from the technical details and focus more on giving you practical rules about what it means to be a good developer; on the interpersonal and professional level.


# [1. Clean Code](https://www.amazon.ca/gp/product/0132350882/ref=as_li_tl?ie=UTF8&tag=stemmlerjs09-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=0132350882&linkId=63a7fb47960db0590eabb58edf25aee5)
### by Robert C. Martin (Uncle Bob)

After you overcome the basic challenges of development and get comfortable figuring out how to write code to solve problems, it’d be a good idea to take a read of this book. It turns out that making the code work the first time is actually the easy part. The hard part is making your code read well so that others are able to understand it and change it in the future. 

Remember the last time you had to read code like this?

```javascript
function calculateIt (a, b) {
 if (a.delta < b.element.x) {
   var x = b.element.x;
   return x - b.delta.x
 } else {
   var y = b.next.y;
   var h = b.element.y * 2;
   return y - h
 }
}
```

Who knows what it really does. Code like this might work… but the moment we need to change it, we have to hope the author of the code is still in the company- and pray that he’s somehow able to decipher what he wrote potentially years ago.

When careful attention isn’t taken to write code that’s readable and maintainable, we end up with pockets of code like this that everyone is afraid to touch, and if it ever breaks- we’re in trouble.

Uncle Bob’s “Clean Code” teaches you how to identify what clean code looks like compared to bad code, and it teaches you how to transform it into good code. A task like this sounds trivial to most, but you’d be surprised at how turning a just a few clean software design principles into habits can help you write much more professional and scalable code. 

We’re software craftsmen, you know. Building a house is not much different than building an application in principle. We need to pay attention to the details or else it can all become very expensive to fix in the future if not done right first time.

# [2. The Clean Coder](https://www.amazon.ca/gp/product/0137081073/ref=as_li_tl?ie=UTF8&tag=stemmlerjs09-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=0137081073&linkId=c172b446308df330b348e0db03e30168)
### by Robert C. Martin (Uncle Bob)

This book is not necessarily a technical book as it is a book for teaching you how to be a professional in this industry. Professionals are those who: when faced with challenges, uncertainty and pressure, will continue to treat creating software as a craft and will be unswerved to adhering to their professional values.

The Clean Coder is full of practical advice on estimation, refactoring, testing, dealing with conflict, schedules, avoiding burnout, and much more. Trusted advice from someone who has spent decades doing this stuff.

One of the best things it teaches is how to have integrity as a developer, when to say “No” and how to say it.

A book about professionalism.

# [3. Refactoring](https://www.amazon.ca/gp/product/0134757599/ref=as_li_tl?ie=UTF8&tag=stemmlerjs09-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=0134757599&linkId=cd665cc1a6483955a2d51dd2d1a576d1)
### by Martin Fowler

Martin Fowler is one of my favourite authors. The first reason is because he’s hilarious. His approach to writing software books is unmistakably “Fowler”. The other reason is because he's incredibly good at explaining complex topics, and doing so very simply- in a way that doesn’t fatigue you as a reader.

Refactoring is a book that the creator of Ruby on Rails once said that you should “read before you write another line of code”. Fowler guides you through refactoring a simple application, introducing you to a number of techniques that he’s accumulated and cataloged over his years of consulting.

Fowler shows you how to flip between coding and refactoring, how often you should be committing your code and when you should be writing your tests. Highly recommended. The latest version of this book was updated to present the examples in JavaScript, which was an added plus for me since it's my favourite language.

# [4. Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.ca/gp/product/0134757599/ref=as_li_tl?ie=UTF8&tag=stemmlerjs09-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=0134757599&linkId=cd665cc1a6483955a2d51dd2d1a576d1)
### by Erich Gamma, Richard Helm, Ralph Johnson, & John Vlissides

This is the seminal book on Design Patterns (and also the name of a damn good post-punk band). What are design patterns, you ask? Design Patterns are well-known solutions to commonly occurring problems in software development. If you’re familiar with the patterns, you’ll find that you’ll be able to greatly reduce the amount of time it takes you to put forth the solutions to those problems. 
Having good awareness of design patterns also allows you to communicate your solutions effectively with other developers.

> “Yeah, I just used a Facade overtop of whichever database Adapter gets loaded from the Strategy.”

> “Ahh! Gotcha.”

Yeah, it’s an older book. But it’s still one of the best for reference. If you’d like something on this topic that’s a bit more recent and friendly, I’d also recommend the good “Head First Design Patterns: A Brain-Friendly Guide” by Eric Freeman.

# [5. Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.amazon.ca/gp/product/0321125215/ref=as_li_tl?ie=UTF8&tag=stemmlerjs09-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=0321125215&linkId=c16807ab5ed838159eb3a89a339459a6)
### by Eric Evans

In order for large codebases to continue to scale, we need to logically split up code into different parts. The idea is to partition your code in a way such that it would be possible for separate teams to work on those parts of your system without affecting anyone else. 

The underlying concept that enables moving your codebase in this direction is Domain-Driven Design. It’s an approach to software development where we model the problems that exist in the “problem domain” (the real world) to a number of solution domains. 

DDD is incredibly important when a codebase gets sufficiently large. Large enterprise companies employ DDD in order to assign teams to parts of the company’s codebase.

![/img/anemic.png](/img/anemic.png)

<b style="font-size: 14px; text-align: center">
  <i>Taken from Vladimir Khorikov's course on "Refactoring an Anemic Domain Model to a Rich One"</i>
</b>
<br/>

Eric Evan’s coined the term “Ubiquitous Language”, which is the term for building a common, all-encompassing language between the developers, the domain experts and any other users or actors in the domain. By using this Ubiquitous Language, it ensures that the most important domain concepts are well understood and get modeled in the software.

The book is a little more technical and challenging than the others, but if you get familiar with these concepts, you’ll be very well off in understanding how today’s largest companies keep their codebases manageable and scalable.

# [6. Soft Skills: The Software Developer's Life Manual](https://www.amazon.ca/gp/product/1617292397/ref=as_li_tl?ie=UTF8&tag=stemmlerjs09-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=1617292397&linkId=d1e4c3b453d124d01e886aab876c8ff9)
### by John Sonmez

We should strive to stay well-balanced as a software developer. Unfortunately, being well-balanced is not a trait that most people affiliate with software developers. The truth is, it’s incredibly important to invest in your learning, health and overall well-being as a developer.

Soft skills is about the important stuff that matters outside of actually coding, like productivity, career goals and personal finance. Sonmez also goes into investing, how he retired at 33, fitness hacking tips and maintaining relationships- things rarely addressed in the programming community.

It’s written in such a way that you can jump into the book at whichever chapter you think is most relevant to you today. 

# [7. Clean Architecture](https://www.amazon.ca/gp/product/0134494164/ref=as_li_tl?ie=UTF8&tag=stemmlerjs09-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=0134494164&linkId=32995f69d0747d8723d42ffdda296878)
### by Robert C. Martin (Uncle Bob)

What? Uncle Bob writes good books, ok?

In school, there’s a lot of focus on algorithms and less focus on software design principles. I think it’s kind of unfortunate because in reality, you don’t encounter that many algorithm challenges too often. Instead, it’s more common that you’ll be faced with the challenge of structuring your code in a way that’s modular, flexible, readable and will allow you to add new features quickly when requirements change. 

Clean Architecture is about the essential software design principles and patterns that you’ll be able to use in order to face these challenges.

![Cleeeeeean](/img/clean-arch.png)

Some of the best takeaways from this book are the cost of dependencies, stable vs. non-stable code and the SOLID principles: a way to write code so that it’s more understandable, flexible and maintainable.

Other aspects of this book that were incredibly useful were concepts of “screaming architecture” and “packaging by component” which are opinions on how to organize your modules so that it practically **__screams__** to the reader exactly what the project is all about.

This book goes well hand-in-hand with Domain-Driven Design, which is enabled through the use of a “Layered Architecture” or as Uncle Bob calls it, “The Clean Architecture” (also known as Ports and Adapters). A great book for anyone who wants to up their architecture chops and learn how to effectively design a system at a high level, and do the dance of dependencies at the detail level.

# [8. The Effective Engineer](https://www.amazon.ca/gp/product/0996128107/ref=as_li_tl?ie=UTF8&tag=stemmlerjs09-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=0996128107&linkId=c26139ec47911c60569dc5851da21d06)
### by Edmond Lau

Time is our single most valuable asset in life, and we should aim to be more efficient with it. It’s easy to get bogged down and spend a lot of time fixing bugs and wasting effort. Doing repeated work. Bleh. The Effective Engineer is all about getting more done in less time and removing repeated work.

We can mitigate wasted time and effort on repetitive tasks through a framework called “leverage”.

Leverage helps you identify the activities that you can do that produce the most disproportionate results- per unit of time invested. It’s a framework that can apply to anything, whether that be how you learn, how you code, how you debug... anything!

# [9. The Pragmatic Programmer](https://www.amazon.ca/gp/product/020161622X/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=020161622X&linkCode=as2&tag=stemmlerjs09-20&linkId=005803be38be1c9a5d5b8c01afb049f3)
### by Andrew Hunt & David Thomas

Praised for being easy to follow and understand, The Pragmatic Programmer is a book that should be on the desktop of developers of all levels. Andrew and David are programmers that not only spent many years doing what they do, but paying attention to what they were doing **as they were doing it**- and then **trying to determine if they could do that better**. 

What came out of their years of introspection was this book, which introduces a number of essential programmer philosophies to follow throughout your career, like “programmers should have a "do it once, or automate" philosophy”.

It includes simple yet detailed advice that you should carry with you in the back of your mind before you write another line of code or start a new project.

## Final words

Books really are some of the best tools to improve your knowledge and skills as a new programmer or Junior Developer. Books tend to have a really high return on investment; did you know you can make a lot of money programming? 😉

These are just a few of the best books out there right now in 2019! None of them are really new, but that’s because programming has maintained the same general philosophies and best practices for years. As a prof I once had used to say, **“you can make a lot of money in this industry, you just have to read the damn manual”**.

Have you read any of these books? What did you think? Any books not on this list that you think newer developers would really benefit from reading? Let us know in the comments!

## Additional Resources

Here’s a list of some really excellent articles that cover some of the topics from these books. If you don’t quite have the time to invest in fully blown books right now, familiarizing yourself with these concepts might assist you in your journey to become a better developer!

[Refactoring.guru](https://refactoring.guru/)

[SOLID Design Principles](https://stackify.com/solid-design-principles/)

[DRY (Don’t Repeat Yourself)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

[NodeJS and Good Practices](https://blog.codeminer42.com/nodejs-and-good-practices-354e7d763626)

[Implementing the SOLID and the onion architecture in Node.js](https://dev.to/remojansen/implementing-the-onion-architecture-in-nodejs-with-typescript-and-inversifyjs-10ad)

[Better Software Design with Clean Architecture](https://fullstackmark.com/post/11/better-software-design-with-clean-architecture)

[The Clean Architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

Keep growing, and have fun while you’re at it!

---

If you’re a Canadian student or recent-grad looking for entry-level developer opportunities or co-ops / internships, you should check out our platform, Univjobs. We only post jobs specifically for students and recent-grads.
