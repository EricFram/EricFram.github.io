---
layout: post
title: "The Helicopters of 'Fight the Fire'"
date: 2014-10-03
categories: [Game-Development]
---
Eric Fram  

<em>This article was originally posted on ZippyBrain.com on October 3rd, 2014. [Link.](http://zippybrain.com/2014/10/the-helicopters-of-fight-the-fire/)</em>

We're making a lot of great progress with our upcoming wildfire containment game, Fight the Fire. In a week or two we should have a release candidate ready for serious user testing. If you're unfamiliar with the project, we started it at a <a href="http://startupweekend.org/">Startup Weekend</a> with the goal of spreading wildfire prevention awareness through fun. We plan to release the final version of the game on iOS and Android (though iOS will come first. You can try out a <a href="https://play.google.com/store/apps/details?id=com.zippybrain.Fight_the_Fire&amp;hl=en">simple tech demo right now in Google Play</a> or watch this quick video to get an idea of how the gameplay works:

<iframe src="//www.youtube.com/embed/gk2GHf29-jQ?rel=0" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

We think it's a lot of fun and hope you download it once it's out!
<h3>Fighting wildfires from the sky</h3>
Wildland firefighters use both fixed-wing airplanes ("airtankers") filled with fire retardant and helicopters ("helitankers") equipped with tanks or buckets to fight remote wildfires. The list of aircraft used for aerial firefighting is <a href="http://calfire.ca.gov/communications/downloads/fact_sheets/Aviation_Firefighting_webbooklet.pdf">extensive</a>. As you can see from this video, it is pretty intense stuff (EDIT: it looks like this video doesn't work on mobile, so <a href="http://www.dvidshub.net/video/155244/maffs-psa-padres#.VDQ6pCldVYQ">here's a direct link</a>):

<iframe src="//commons.wikimedia.org/wiki/File:California_Air_National_Guard_waterbombers_DOD_100489779-720x406-1500k.theora.ogv?embedplayer=yes" max-width="100%"  frameborder="0" ></iframe>

In our app though, we have to keep things as simple as possible, at least for our initial release. We decided to use a helicopter to represent all aerial firefighting in the game. Firefighting with helicopters, known as <a href="http://en.wikipedia.org/wiki/Helitack">Helitack</a>, is actually very cool.
<h3>Gameplay</h3>
Users don't directly control any aircraft in Fight the Fire, but rather direct where to drop water. When the helicopter is toggled on during a game, users can tap on any tile to drop water. The water puts out any fire currently burning and prevents fire from spreading to that tile for the rest of the round.  After each water drop, there is a cooldown before another one can be used.  Imagine that the helicopter needs to refill its water bucket or refuel, like this:

<iframe src="//www.youtube.com/embed/QPNWDFkhyXI?rel=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

In <em>Fight the Fire</em>, the default water drop cooldown is three seconds. Users can cut that time in half by upgrading to the fast helicopter.
<h3>The Standard Heli</h3>
We designed the our original helicopter during the <a href="http://startupweekend.org/">Startup Weekend</a> at which we began the project. There are a lot of great pictures of Helitack choppers around, but this is the specific one we used for inspiration:

<img class="aligncenter wp-image-1566 size-large" src="http://zippybrain.com/wp-content/uploads/2014/10/A_fire_helicopter_with_helicopter_bucket1-1024x682.jpg" alt="A_fire_helicopter_with_helicopter_bucket" width="1024" height="682" />
<p style="text-align: center;"><a href="http://upload.wikimedia.org/wikipedia/commons/1/17/A_fire_helicopter_with_helicopter_bucket.jpg">Source: Wikimedia</a></p>
<p style="text-align: left;">A little bit of time in illustrator and we ended up with this:</p>
<p style="text-align: center;"><img class="size-full wp-image-1567 aligncenter" src="http://zippybrain.com/wp-content/uploads/2014/10/helicopter_forgif.gif" alt="helicopter_forgif" width="200" height="200" /></p>
<p style="text-align: left;">This gif is made from the same spritesheet we use in the game. This design turned out pretty well, so we've been able to get a lot of mileage out of it by reusing it in marketing and promotional materials. For example, and as a reminder.....</p>
<p style="text-align: left;"><a href="https://twitter.com/ZippyBrain"><img class="wp-image-1568 aligncenter" src="http://zippybrain.com/wp-content/uploads/2014/10/helicopter_twitter_v2.gif" alt="helicopter_twitter_v2" width="395" height="246" /></a></p>

<h3 style="text-align: left;">Bigger and Better</h3>
Once we implemented the users' ability to halve their water drop cooldown time by upgrading their helicopter, we realized we needed a brand new asset. We needed something that really contrasted with the standard helicopter and, hopefully, made people think, "I want that."

The Chinook helicopter immediately came to mind. They are enormous, have a different rotor combination from a standard helicopter, and would certainly contrast with our original design. Even better, Chinook helicopters can actually fight fires:

<iframe src="//www.youtube.com/embed/VGwMj2vCukM?rel=0" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Borrowing heavily from our original helicopter design, we came up with this:

<img class="wp-image-1575 aligncenter" src="http://zippybrain.com/wp-content/uploads/2014/10/heli_big_anim_v2.gif" alt="heli_big_anim_v2" width="336" height="198" />

This will definitely inspire lust in users who feel limited by the default water drop cooldown. The visual style is the same as the original helicopter, but this one is bulkier and sports those two big blades!
<h3>Back to work!</h3>
We're in the final stretch with this game, and have lots to do. Feel free to tweet at us @ZippyBrain with any comments and <a href="https://www.facebook.com/ZippyBrainInc">make sure to like us on Facebook</a>!