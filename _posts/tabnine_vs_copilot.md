---
title: "Github Copilot vs Tabnine"
excerpt: "My experience with Tabnine and Github Copilot"
date: "2021-11-29"
---

What Copilot and Tabnine are, I will not explain in detail in this article, because you surely already know what these tools are. However, if you don't have a clue: they are tools for developers to help you work with the help of AI.

## The imagination

I became aware of AI Assistants when Github's Copilot made waves on Twitter and Reddit. So I signed right up for the beta program for Copilot. Some time later, I was also unlocked for testing.

The first steps with Copilot were amazing. Directly ready functions, just based on the name of the method or a comment on what should happen. Ingenious!

With such a tool, I can now finish all my started projects in no time! So enough trying around - time for the right use.

## The reality

Copilot should help me with an API. The Python framework Flask is used here. The first steps with it were solid for now. Some good suggestions where I only had to change some variables here and there. So far so good.

After using Copilot for four days, some things started to bother me. Unfortunately, it was so much so that I uninstalled Copilot completely after one week in use.

There were 2 main reasons for this:

Everybody knows the feeling when you are in the zone and write down the code, like in a typical hacker from movies. Copilot does a very good job of kicking me out of the zone. The reason here is the constant suggestions. In itself, it would not be a big deal, but Copilot's suggestions are never 100% correct and need to be adjusted in the best case. When writing, I always looked at the suggested code to see if it fit and so often lost that flow. I'm not sure if it slowed me down, but it bothered me overall.

The second reason is that with Copilot, it was not uncommon for Magic Code to be delivered to me. This means it was code that ended up doing what I expected, but I knew at that moment now that I wouldn't know what was happening in it in 2 days. Sure I could put comments but I would be writing more comments than actual code, provided I myself understand what exactly happens there.

## The change

When I talked to other programmers about Copilot, they suggested Tabnine as an alternative. So I directly tried it out.

I've been using Tabnine for about a month now and I have to say it's terrific. While Copilot is like an overzealous intern, constantly delivering code that you have to check, Tabnine helps you with intelligent autocompletion. Writing feels so much more natural and at least for me, goes cleanly into the way I work.

In the time I've been using Tabnine, I feel like I've been able to write faster.

Here is an example of how easily you can write a whole function:
<VideoFile filePath="/assets/blog/tabnine_vs_copilot/tabnine_in_action" />

## The comparison

In direct comparison, both tools are amazing. Copilot shows an impressive look at where things are headed with the help of AI. However, it is still too immature in its current state. The reason here is three major problems which can’t make it work in a real environment.

One of those problems is privacy. For me, and probably for one or two others, the point is privacy. In Copilot, it is stated as follows:

> **Is the transmitted data secure?**  
> All data is transmitted and stored securely. Access to the telemetry is strictly limited to individuals on a need-to-know basis. Inspection of the gathered source code will be predominantly automatic, and when humans read it, it is specifically with the aim of improving the model or detecting abuse.

<PageLink url="https://copilot.github.com/#faq-is-the-transmitted-data-secure">
Copilot FAQ
</PageLink>

This point alone will prevent some developers from starting Copilot. At least that is the case for me.

Here Tabnine has a better position than GitHub:

> For work projects, staying compliant often means that code cannot leave your network. Tabnine works without sending any of your code to a cloud. You can easily run Tabnine locally, ensuring that no code or queries ever leave your local network.

<PageLink url="https://www.tabnine.com">
Tabnine Homepage
</PageLink>

Other problems that still exist with Copilot are:

- License legal issues
- Accuracy of Code prediction

<PageLink url="https://javascript.plainenglish.io/why-i-disagree-with-github-copilot-naysayers-62a43cce6329">
A detailed article about these problems has been written by Jonathan Fielding
</PageLink>

Tabnine, on the other hand, has been on the market for a long time and has already eliminated all teething problems. Working with it seems very natural to me because of the way I write code, but now, much faster than before.

I am currently still using the Free variant, but will switch to the Pro variant. An update will follow.

## The conclusion

Copilot is powerful but it's not a tool I want to use on a daily basis as it just pushes itself way too much. Tabnine, on the other hand, is much more of a true wizard that gives me a small list of appropriate suggestions that I can simply select as I write, without really having to interrupt the whole process from writing and checking an entire generated function to see if it's the right thing for what I really want.

Copilot, while impressive, is not suitable for my workflow. This might change in the future, but as long as there are still the issues with licenses and privacy, my favorite clearly remains Tabnine.
