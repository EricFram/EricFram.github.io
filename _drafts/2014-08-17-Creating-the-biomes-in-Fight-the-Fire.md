---
layout: post
title: "Creating the Biomes in in 'Fight the Fire'"
date: 2014-08-17
categories: [Game-Development]
---
Eric Fram  

<em>This article was originally posted on ZippyBrain.com on August 13th, 2014. [Link.](http://zippybrain.com/2014/08/creating-the-biomes-in-fight-the-fire/)</em>

We are still working hard on Fight the Fire, our upcoming wildfire containment game. We plan to release the game for both iOS and Android within a couple months. Watch this quick video to get an idea of how the gameplay works:

<iframe src="//www.youtube.com/embed/gk2GHf29-jQ?rel=0" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

It's a fun project, and we hope you will try it out when we're finished!

<h3>Minimum Viable Product</h3>
We created the first iteration of Fight the Fire at a <a href="http://startupweekend.org/">Startup Weekend.</a>  With just twenty or so hours of time to work, we were focused on creating a working minimum viable product to present to the judges. We created a playable game, but did not have a chance at the time to consider progressive difficulty, a level map, or multiple biomes.

When designing the original level map, we just needed something that looked like it would catch fire. A quick google search for "flammable landscapes" turned up images like this one of <a href="http://en.wikipedia.org/wiki/Cedar_Mountain_Wilderness">Utah's Cedar Mountain Wilderness</a>:

<a href="http://commons.wikimedia.org/wiki/Utah#mediaviewer/File:Cedar_Mtn_Wilderness.jpg"><img class="aligncenter size-large wp-image-1345" src="http://zippybrain.com/wp-content/uploads/2014/08/1280px-Cedar_Mtn_Wilderness-1024x682.jpg" alt="1280px-Cedar_Mtn_Wilderness" /></a>
<p style="text-align: center;"><a href="http://www.blm.gov/ut/st/en/fo/salt_lake/blm_special_areas/cedar_mountains_wilderness/photo_gallery.html"><em>Source: US Dept. of Interior, Bureau of Land Management</em></a></p>
This was a fine place to start, and we were in a time crunch. After a few minutes in Illustrator, we ended up with a workable tile set. Here's an action shot:

<img class="aligncenter wp-image-1245 size-large" src="http://zippybrain.com/wp-content/uploads/2014/08/fb_herobanner-1024x377.png" alt="fb_herobanner" width="1024" height="377" />

The trees and cabins look very likely to catch fire. Success! This art was great for the startup weekend, but to make Fight the Fire successful in the market, we needed to create something more.
<h3>Level Progression System</h3>
To provide players with a sense of progress, we implemented a level progression system. Players must complete increasingly difficult rounds in order to progress in the game. If every level looked the same, progressing through them would not be very interesting. Adding several different tile sets, which correspond to real biomes, is good way to show players that they are making headway.  You are likely familiar with this kind of system from other mobile games. Here is a preview of ours:

<a href="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-16-at-8.24.58-AM.png"><img class="aligncenter size-full wp-image-1353" src="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-16-at-8.24.58-AM.png" alt="Screen Shot 2014-08-16 at 8.24.58 AM" /></a>

&nbsp;
<h3>Creating the Biomes</h3>
After we decided to include fifty levels in the game, we broke those levels into five different biomes with ten levels each. The first biomes that the players experience would be less flammable and easier, while the later biomes needed to be especially volatile.  <a href="http://zippybrain.com/procedural-level-design-in-fight-the-fire/">We had already designed a level progression system</a>, so our challenge here was artistic, rather than technical. We couldn't really make up biomes, as we suspect that most of our users are generally familiar with the Earth's different climates.  Short of creating some sort of sci-fi world, we were stuck with the ones that exist in the real world. Here they are:

<a href="http://en.wikipedia.org/wiki/Biome"><img class="aligncenter size-full wp-image-1362" src="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-16-at-6.55.00-PM.png" alt="Screen Shot 2014-08-16 at 6.55.00 PM" /></a>
<p style="text-align: center;"><em><span style="text-decoration: underline;"><a href="http://en.wikipedia.org/wiki/Biome">Source: Wikipedia</a></span></em></p>
<p style="text-align: left;">Fight the Fire's gameplay is based on cutting down trees to create fire lines, so we immediately nixed anything that didn't have trees (tundra, desert, steppe, ocean). We narrowed the rest of the list down from there.</p>
<p style="text-align: left;">Monsoon forest, moist forest, and tropical rainforest are too wet.</p>
<p style="text-align: left;">Taiga is cold, icy, and has lots of trees: perfect for our easiest levels. Temperate forests have plenty of vegetation and get some percipitation: that makes sense for the second easiest levels. Mediterranean environments like Italy or California have less rainfall and a variety of plants: ideal for the intermediate levels. Savannah regions have trees, lots of flammable grass, and not much water: that makes sense for Fight the Fire's second most difficult region. For the most difficult region, we decided on shrubland, the same biome from which we had drawn our inspiration for the original tile set.</p>
<p style="text-align: left;">Thus, players will progress through the game zones as so: <em>Taiga --&gt; Temperate Forest --&gt; Mediterranean --&gt; Savannah --&gt; Shrubland</em></p>

<h4>Icy Taiga - Easiest Levels</h4>
Taiga (AKA boreal forest) is cold, coniferous forest that occupies the northern reaches of our planet. All of this green land is taiga:

<a href="http://commons.wikimedia.org/wiki/Category:Taiga#mediaviewer/File:Distribution_Taiga.png"><img class="aligncenter size-full wp-image-1366" src="http://zippybrain.com/wp-content/uploads/2014/08/Distribution_Taiga.png" alt="Distribution_Taiga" /></a>
<p style="text-align: center;"><a href="http://commons.wikimedia.org/wiki/Category:Taiga#mediaviewer/File:Distribution_Taiga.png">Source: Wikimedia</a></p>
Here is a closer look at some Russian taiga:

<a href="http://commons.wikimedia.org/wiki/Category:Taiga_in_Russia#mediaviewer/File:Talkessel_von_Werchojansk.JPG"><img class="aligncenter size-full wp-image-1367" src="http://zippybrain.com/wp-content/uploads/2014/08/1024px-Talkessel_von_Werchojansk.jpg" alt="1024px-Talkessel_von_Werchojansk" /></a>
<p style="text-align: center;"><a href="http://commons.wikimedia.org/wiki/Category:Taiga_in_Russia#mediaviewer/File:Talkessel_von_Werchojansk.JPG">Source: Wikimedia</a></p>
Taiga was an easy pick for our easiest levels, but turned out to be a design challenge. Our first try looked like this:

<a href="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-17-at-7.20.02-AM.png"><img class="aligncenter wp-image-1385 size-full" src="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-17-at-7.20.02-AM-e1408285285592.png" alt="Screen Shot 2014-08-17 at 7.20.02 AM" /></a>

This tile set does look like taiga, but user testing revealed several problems. First, the white snow is hard on the eyes on screen. Second, our firefighting expert told us that fire could never possibly spread in the conditions we depict here. We melted the snow, brightened the trees, and painted the cabins for our second try:

<img class="aligncenter size-large wp-image-1380" src="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-16-at-8.06.24-PM.png" alt="Screen Shot 2014-08-16 at 8.06.24 PM"  />

Two problems solved with one revision. Not only is this does the design not blind users with bright white, but also looks more flammable.
<h4>Temperate Broadleaf Forest - Easy Levels</h4>
Temperate forests are made up of dense foliage and are home to trees like oak and maple. These forests cover all of the land highlighted here:
<p style="text-align: center;"><a href="http://commons.wikimedia.org/wiki/Category:Temperate_broadleaf_and_mixed_forests#mediaviewer/File:Biome_map_04.svg"><img class="aligncenter size-large wp-image-1388" src="http://zippybrain.com/wp-content/uploads/2014/08/Biome_map_04.svg_-1024x556.png" alt="Biome_map_04.svg" /><em>Source: Wikimedia </em></a></p>
<p style="text-align: left;">This Romanian forest is pretty close to the look we wanted:</p>
<p style="text-align: left;"><a href="http://commons.wikimedia.org/wiki/Category:Temperate_broadleaf_and_mixed_forests#mediaviewer/File:Mixed_forest_in_Romania.jpg"><img class="aligncenter size-full wp-image-1389" src="http://zippybrain.com/wp-content/uploads/2014/08/1024px-Mixed_forest_in_Romania.jpg" alt="1024px-Mixed_forest_in_Romania"  /></a></p>
<p style="text-align: center;"><a href="http://commons.wikimedia.org/wiki/Category:Temperate_broadleaf_and_mixed_forests#mediaviewer/File:Mixed_forest_in_Romania.jpg">Source: Wikimedia</a></p>
<p style="text-align: left;">This tile set came together very quickly, and we ended up using the first version we made:</p>
<p style="text-align: left;"><a href="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-17-at-7.38.41-AM.png"><img class="aligncenter wp-image-1392 size-full" src="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-17-at-7.38.41-AM-e1408286410614.png" alt="Screen Shot 2014-08-17 at 7.38.41 AM" /></a></p>
<p style="text-align: left;">Easy. The users liked it, we like it.</p>

<h4>Mediterranean - Intermediate Levels</h4>
This climate is dry, coastal, and full of plants like olive trees, cypresses, and sagebrush. It covers the land highlighted in this map:

<a href="http://commons.wikimedia.org/wiki/Category:Mediterranean_climate#mediaviewer/File:Medclim.png"><img class="aligncenter size-full wp-image-1396" src="http://zippybrain.com/wp-content/uploads/2014/08/Medclim.png" alt="Medclim"  /></a>
<p style="text-align: center;"><a href="http://commons.wikimedia.org/wiki/Category:Mediterranean_climate#mediaviewer/File:Medclim.png"><em>Source: Wikimedia</em></a></p>
<p style="text-align: left;">For this biome, we were inspired by images like this one of Siena, Tuscany:</p>
<p style="text-align: left;"><a href="http://commons.wikimedia.org/wiki/Category:Panoramics_in_Tuscany#mediaviewer/File:201105_Toscane_Sienne.jpg"><img class="aligncenter size-large wp-image-1399" src="http://zippybrain.com/wp-content/uploads/2014/08/201105_Toscane_Sienne-1024x352.jpg" alt="201105_Toscane_Sienne" /></a></p>
<p style="text-align: center;"><a href="http://commons.wikimedia.org/wiki/Category:Panoramics_in_Tuscany#mediaviewer/File:201105_Toscane_Sienne.jpg"><em>Source: Wikimedia</em></a></p>
The color palette is important for this biome, and the white cabins we used in the previous biomes wouldn't cut it here. We redesigned the house tile in the style of a Tuscan villa and used olive trees as our inspiration for the tree tiles in this set.

<a href="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-17-at-1.33.46-PM-e1408307711360.png"><img class="aligncenter size-full wp-image-1401" src="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-17-at-1.33.46-PM-e1408307711360.png" alt="Screen Shot 2014-08-17 at 1.33.46 PM" /></a>

&nbsp;

The users liked this!
<h4>Tree Savannah - Hard Levels</h4>
Savannah is dry, expansive, and home to lots of grass and trees. It covers all of the yellow space shown on this map:

<a href="http://commons.wikimedia.org/wiki/Category:Tropical_and_subtropical_grasslands,_savannas,_and_shrublands#mediaviewer/File:Biome_map_07.svg"><img class="aligncenter size-large wp-image-1406" src="http://zippybrain.com/wp-content/uploads/2014/08/Biome_map_07.svg_-1024x556.png" alt="Biome_map_07.svg"  /></a>
<p style="text-align: center;"><em><a href="http://commons.wikimedia.org/wiki/Category:Tropical_and_subtropical_grasslands,_savannas,_and_shrublands#mediaviewer/File:Biome_map_07.svg">Source: Wikimedia</a></em></p>
<p style="text-align: left;">Depending on the region, the types of trees that grow in savannah biomes vary greatly. African savannah, for example, hosts umbrella-like Acacia trees, seen here:</p>
<p style="text-align: left;"><a href="http://commons.wikimedia.org/wiki/Category:Tropical_and_subtropical_grasslands,_savannas,_and_shrublands#mediaviewer/File:Biome_map_07.svg"><img class="aligncenter size-large wp-image-1407" src="http://zippybrain.com/wp-content/uploads/2014/08/Acacia-tree-1024x650.jpg" alt="Acacia-tree"  /></a></p>
<p style="text-align: center;"><a href="http://commons.wikimedia.org/wiki/Category:Tropical_and_subtropical_grasslands,_savannas,_and_shrublands#mediaviewer/File:Biome_map_07.svg"><em>Source: Wikimedia</em></a></p>
We used images like this as inspiration for our savannah tile set. The Acacia tree is distinctly recognizable as a savannah tree and was a easy choice for the tree in this tile set. Designing the houses was a greater challenge. We considered creating some sort of safari tent, but the designs just would not come together. We ended up just repainting the roof of our existing house design. This design was intended as a placeholder, but actually worked well enough with the rest of the tile set that we went with it. Here's what we came up with:

<a href="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-17-at-1.56.15-PM-e1408309037376.png"><img class="aligncenter size-full wp-image-1408" src="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-17-at-1.56.15-PM-e1408309037376.png" alt="Screen Shot 2014-08-17 at 1.56.15 PM"  /></a>

Ready for a safari?
<h4>Dry Shrubland - Hardest Levels</h4>
When we created our original tile set for the Startup Weekend, we deliberately created the most flammable-looking landscape we could. When creating our most difficult biome, we decided to reuse most of our original tile set. As we mentioned earlier, we based this design on Utah's scrubland. For more perspective, scrubland and deserts cover all of the colored area of this map:

<a href="http://commons.wikimedia.org/wiki/Category:Deserts_and_xeric_scrublands#mediaviewer/File:Biome_map_13.svg"><img class="aligncenter size-large wp-image-1410" src="http://zippybrain.com/wp-content/uploads/2014/08/Biome_map_13.svg_-1024x556.png" alt="Biome_map_13.svg"  /></a>

As we showed earlier, our first version of this biome looked like this:

<a href="http://zippybrain.com/wp-content/uploads/2014/08/fb_herobanner.png"><img class="aligncenter size-large wp-image-1245" src="http://zippybrain.com/wp-content/uploads/2014/08/fb_herobanner-1024x377.png" alt="fb_herobanner"  /></a>

While this was workable, user feedback indicated that the log cabins did not stand out against the background and weren't glance-able during a fast game. We reused the white cabins from before and ended up with this:

<a href="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-17-at-2.11.50-PM-e1408309970935.png"><img class="aligncenter size-full wp-image-1411" src="http://zippybrain.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-17-at-2.11.50-PM-e1408309970935.png" alt="Screen Shot 2014-08-17 at 2.11.50 PM" w /></a>

Users liked it better, and this is what we are currently using in the app.

<h3>Back to work!</h3>
Thanks for reading! We're glad you were interested in our process. Let us know if you'd like some more details! Please <a href="https://twitter.com/ZippyBrain">connect with us on Twitter</a> and tweet at us with any questions or comments.
