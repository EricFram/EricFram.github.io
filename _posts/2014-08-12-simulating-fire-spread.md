---
layout: post
title: "Simulating Fire Spread in 'Fight the Fire'"
date: 2014-08-12
categories: [Game-Development]
---
Eric Fram  

<em>This article was originally posted on ZippyBrain.com on August 12th, 2014. [Link.](http://zippybrain.com/2014/08/a-look-at-fire-spread-in-fight-the-fire/)</em>

We have been working hard to finish up Fight the Fire! We started the project at a Startup Weekend with the goal of spreading wildfire prevention awareness through fun. The final version of the game will have a completely different user interface, a fun level progression system, and more. We plan to release the final version of the game on iOS and Android (though iOS will probably come first).

In the game, there are 5 themed zones, each with 10 playable levels. As players progress through the game levels, the fires spread more and more aggressively. The system we have set up allows us to define several variables for each level, including flammability, wind speed, and wind direction: flammability determines a given tile’s chance of catching on fire when its “upwind” tile is on fire; wind speed determines the speed at which fire spreads to “downwind” tiles; and wind direction determines the direction that the fire spreads. With some help from our resident wildfire containment expert, we have made something that is somewhat realistic.

The following video is look at fire spread in our “Forest” biome levels. Here, the wind spreads the fire downwind through a moderately flammable forest.

<iframe src="//www.youtube.com/embed/1XVflxggAlU" width="560" height="315" frameborder="0"></iframe>

This second video contains a look at two more biomes. First, you will see the easier “Icy Taiga” biome. Levels in the Icy Taiga biome have a low flammability variable, so the fire spares many tiles. Next, you will see the more difficult “Dry Scrubland” biome, where the high flammability variable leaves few tiles unburnt.

<iframe src="//www.youtube.com/embed/xGo7g3lIXIU" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

In both videos, you will note that the wildfire spreads in a cone pattern. This behavior mirrors that of actual wildfires (see image below), though our model is quite a bit simpler than [those used to model actual wildfires](http://en.wikipedia.org/wiki/Wildfire_modeling). 

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Propagation_model_wildfire_%28English%29.svg/407px-Propagation_model_wildfire_%28English%29.svg.png" alt="" crossorigin="anonymous" /> 

<em><a href="http://en.wikipedia.org/wiki/Wildfire_modeling">Source: Wikipedia</a></em>

We have to get back to work! Makes sure to check back for more development logs soon. Please <a href="https://twitter.com/ZippyBrain">follow us on Twitter </a>for frequent updates. Tweet at us if you want to talk gamedev!