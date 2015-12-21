---
layout: post
title: "Fight the Fire v3.0 is Coming! Here’s What to Expect"
date: 2015-05-20
categories: [game-development, Insights]
---
Eric Fram

<em>This article was originally posted on ZippyBrain.com on May 20, 2015. [Link](http://zippybrain.com/2015/05/fight-the-fire-v3-0-is-coming-heres-what-to-expect/)</em>

<h2>What's Changing?</h2>

There are two big changes that you'll notice when we release the update:
<ol>
	<li><strong>The Fire Monitoring Station is now free, and there are no longer banners ads during game rounds</strong></li>
	<li><strong>Level progression is more forgiving, and difficulty between regions scales more smoothly</strong></li>
</ol>
<h2>Why?</h2>

Since we released Fight the Fire, we've received a lot of great user feedback. Along with that, we've collected tons of usage analytics data through Flurry. We now have a much better idea of what parts of Fight the Fire we can improve.

<strong>Users: "Fight the Fire is Confusing"</strong>

Since we released Fight the Fire, we've found that a lot of users have issues with the amount of gameplay status information we display. The game asks for users to save a certain number of houses, but then doesn't tell them how many houses are on the screen in the first place. The game also doesn't reveal which direction the fire is spreading until it actually spreads. Players also seem initially confused by the variable wind speed between different levels. These factors make the game more challenging, but not more fun.

We actually did develop the interface elements to show users all of this information. We call it the Fire Monitoring Station, but we hid it behind a pay wall. It's one of Fight the Fire's better features, so it is a shame that only a small percentage of users ever saw it. That's why we're making it free! See it in action:

<video autoplay="autoplay" loop="loop" style="max-width: 100%;width: 350px;"><source src="http://i.imgur.com/pvWNpBw.webm" type="video/webm" />Your browser does not support the video tag.</video>

Since the fire monitoring station does displace the banner ads we had shown at the lower edge of the screen, we are going to replace them with interstitials that don't disrupt actual game play. We think that this will create a way better gameplay experience.

<strong>Data: "Fight the Fire is Too Hard"</strong>

There are 50 levels across 5 different biomes in the game, but if you can't beat the early levels, you can't see them all. Unfortunately, the level progression system we originally designed is just too difficult.

Figure 1 compares the total number of attempts for each level compared to the total number of times it was actually completed since release. Instead of showing the actual number of times each level is completed, I've created an index, where the number of attempts on level 1 is indexed to 100.

<a href="http://zippybrain.com/wp-content/uploads/2015/05/indexed_attemptsVSsuccess.png"><img class="size-large wp-image-1959" src="http://zippybrain.com/wp-content/uploads/2015/05/indexed_attemptsVSsuccess-1024x406.png" alt="Figure 1 - Level attempts (gray) vs. level completions (blue) | Tools: R, ggplot2"   /></a><em><strong> Figure 1</strong> - Level attempts (gray) on level completions (blue) | Tools: R, ggplot2</em>

This graph helps up see overall trends for level completion rate in a very general way. People are spending a lot of time on the first ten levels and then either stop playing, or breeze through the early teens before getting stuck on levels 18, 19, and 20. People do seem to be very persistent on these challenging levels, as the total number of attempts are nearly as high as for the first few levels.

For a clearer look and where people are running into problems, Figure 2 shows just the completion rate for each level.

<a href="http://zippybrain.com/wp-content/uploads/2015/05/sucess_ratio.png"><img class="size-large wp-image-1961" src="http://zippybrain.com/wp-content/uploads/2015/05/sucess_ratio-1024x440.png" alt="Figure 2 - Success ratio by level | Tools: R, ggplot2"  /></a> <em><strong>Figure 2</strong> - Success ratio by level | Tools: R, ggplot2 </em>

Level 19 has a 4% overall success rate, and level 20 has a 6% success rate. It's pretty clear that these levels are too hard. If people can't get past these levels, they can't progress onto the premium levels (30 to 50) where most of Fight the Fire's content actually is. This is why we're scaling back the difficult on these early levels.

Once players have progressed into the premium levels, they're still running into problems near the end of each zone. Success rates for levels 30 and 40 are just 5%. We'll make these a little bit easier as well so that people can keep progressing and so we finally have an excuse to release more levels.
<h2>Coming Soon!</h2>

We've already made significant progress actually implementing the changes into the app. The only thing that we can't really predict is how long it will take for Apple to approve the update once we submit it. We haven't had many issues with getting approval in the past, so I don't anticipate that we'll get delayed too much on that stage. Even so, I don't want to give a hard release date yet. It will be soon.

If you have any questions or comments, hit me up on Twitter <a href="https://twitter.com/i/notifications">@ZippyBrain</a>.
