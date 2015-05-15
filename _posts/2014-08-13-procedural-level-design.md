---
layout: post
title: "Procedural Level Design in 'Fight the Fire'"
date: 2014-08-13
categories: [Game-Development]
---
Eric Fram  

<em>This article was originally posted on ZippyBrain.com on August 13th, 2014. [Link.](hhttp://zippybrain.com/2014/08/procedural-level-design-in-fight-the-fire/)</em>

Hey everyone! Thank you so much for taking the time to read about our upcoming wildfire containment game, Fight the Fire! We are developing quickly and plan to release the app on both iOS and Android, though iOS will likely come first. 

<h3>Procedural Level Generation System</h3>
In our last post, we covered how Fight the Fire simulates wildfire spread. <a href="http://zippybrain.com/a-look-at-fire-spread-in-fight-the-fire/" target="_blank">It's a quick read! </a> In short, we have a system to easily define how aggressively wildfire spreads in each game level. The same system allows us to define other difficulty factors and create new level maps with very little effort. Here's a sample of the Lua code we use for this:

<img class="aligncenter size-full wp-image-1275" src="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-13-at-2.07.43-PM.png" alt="Screen Shot 2014-08-13 at 2.07.43 PM" width="917" height="131" />

Fight the Fire procedurally generates level maps based on the variables we enter here. No need to spend hours manually placing assets for every level!  We have designed the game so that it will generate slightly different maps each time the player begins a round. This method increases replay value and minimizes development time. The difficulty variables are defined as follows:
<ul>
	<li><strong>wind</strong>= "wind speed", the number of milliseconds before the fire spreads to downwind tiles</li>
	<li><strong>flam=</strong> "flammability", the percentage chance that a given tile will catch fire when fire reaches it</li>
	<li><strong>hstart=</strong> "houses start", the number of houses placed randomly on the map at the start of the game</li>
	<li><strong>hend=</strong> "houses end", the number of houses that the player must save in order to complete the level</li>
	<li><strong>fire=</strong> the number of fires that start on the map during the game</li>
	<li><strong>lakes=</strong> the number of non-flammable 2x2 lakes placed on the map</li>
	<li><strong>mount=</strong> "mountains", the number of non-flammable 2x2 mountains placed on the map</li>
	<li><strong>cut</strong>= the number of non-flammable pre-cut tiles on the map</li>
	<li><strong>saw=</strong> the number of saws that player has to chop down trees</li>
	<li><strong>heli=</strong> "helicopters", the number of helicopters the player has to drop water</li>
	<li><strong>zone=</strong> the biome tile set to be used</li>
</ul>

Currently, wind direction is random, so we don't define it here. The actual numbers we're using are likely to change as we receive more user feedback. The initial release of Fight the Fire will include fifty levels across five different biome zones. If we see that players are completing most of the levels (we use <a href="http://www.flurry.com/solutions/analytics">Flurry analytics</a> for this), we can create more levels very quickly and release an update with the additional content.

<h3>Procedurally-Generated Maps in Action</h3>
Each time a player starts a level,  he or she will have a unique experience. For example, here is our current iteration of Level 20, started thrice:

<img class="aligncenter size-large wp-image-1284" src="http://zippybrain.com/wp-content/uploads/2014/08/ftf_level20_procedural-1024x592.png" alt="ftf_level20_procedural"/>

We are still showing debug text at the bottom of the screen, so you can see exactly which variables we have defined for this level. Every time a player starts Level 20, there will be nine houses, one lake, etc., but these objects will be in different places each time.

<h3>Back to work!</h3>
We have lots more to work on with Fight the Fire. Please check back here for more dev logs, and make sure to <a href="https://twitter.com/ZippyBrain">connect with us on Twitter!</a> Feel free to tweet at us with any questions or comments.
