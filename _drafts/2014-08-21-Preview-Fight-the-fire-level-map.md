---
layout: post
title: "Preview of the Level Map in 'Fight the Fire'"
date: 2014-08-21
categories: [Game-Development]
---
Eric Fram  
<em>This article was originally posted on ZippyBrain.com on August 13th, 2014. [Link.](http://zippybrain.com/2014/08/preview-of-fight-the-fires-level-map/)</em>

We are making great progress with our upcoming wildfire containment game, Fight the Fire. As we touched on in previous posts, we have implemented a level progression system into the game. Players progress through the game linearly by successfully saving houses in each level (which we call "regions" in game). At release, Fight the Fire will have 50 levels across 5 different biomes. <a href="http://zippybrain.com/creating-the-biomes-in-fight-the-fire/">Here's how we decided which biomes to use.</a>

Instead of simply listing levels in a traditional menu, players select them from a scrollable map. You are likely familiar with this kind of level progression map from other mobile games. This is what ours looks like with the level selection buttons in place:

<a href="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-20-at-4.25.11-PM.png"><img class="aligncenter size-full wp-image-1436" src="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-20-at-4.25.11-PM.png" alt="Screen Shot 2014-08-20 at 4.25.11 PM" width="415" height="797" /></a>

Blue indicates that the player has already completed the level, green indicates the next level the player needs to complete, and gray indicates that the player has not yet reached that level. Levels that the player has not yet completed show up as on fire. When you are running the game on your device, you won't be able to see the entire map on screen at once. Fortunately, you can see it here! This is it:

<a href="http://zippybrain.com/wp-content/uploads/2014/08/map_total_detailed_v4.png"><img class="aligncenter wp-image-1438 size-full" src="http://zippybrain.com/wp-content/uploads/2014/08/map_total_detailed_v4.png" alt="map_total_detailed_v4" width="583" height="2000" /></a>

We have designed our level progression system to be extensible. When our analytics tell us that many players are completing the game, we can easily <a href="http://zippybrain.com/procedural-level-design-in-fight-the-fire/">generate additional levels</a>, add more map space, and release an update.

We've gotta get back to work! <a href="https://twitter.com/ZippyBrain">As always, tweet at us with comments and questions! </a>