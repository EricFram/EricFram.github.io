---
layout: post
title: "Do Local Notifications Increase Retention Rates?"
date: 2015-04-16
categories: [Insights]
---
Eric Fram  

<em>This article was originally posted on ZippyBrain.com on April 16, 2015. [Link](http://zippybrain.com/2015/04/do-local-notifications-increase-retention-rates/)</em>

*If you want to try this analysis with your own data, I've created a guide to help you follow along. [Link]({{ site.url }}/articles/2015/05/10/compare-retention-strategies-with-r/)*

User retention is perhaps the most important metric for measuring the viability of an app. Once new users have downloaded the app, getting them to come back over and over is absolutely critical to create value. Users who use an app frequently are more likely to spend money on it, more likely to tell their friends (free advertising!), and more likely to give us valuable feedback about how we can improve our product.

It is becoming increasingly difficult to retain users. Standard benchmarks for user retention are the number of users who come back to an app on the 1st, 7th, and on 30th days after downloading it .  According to<a href="http://andrewchen.co/mobile-retention-benchmarks-for-2014-vs-2013-show-a-50-drop-in-d1-retention-guest-post/"> research done on aggregate app data by Mack Flavelle at Tapstream</a> (an app marketing agency), an average of just 14% of users will come back to a typical app on the first day after downloading it. Average day 7 retention is 10%, and average day 30 retention is 2.3%.

There are a lot of strategies mobile developers can use to increase retention rates. One of the ones we tried is using local notifications to remind users to reopen the app. We completely understand that lots of people find these annoying, but some of our research indicated that using them could have a significant positive effect on retention. Apps on iOS can schedule local notifications without users needing to explicitly allow them (though the rules are a little bit different in iOS8). From a user's perspective, they can look a lot like push notifications, which do require explicit user permission, but local notifications do not get data from an external server.

The first time we used this strategy was in our app Beehive Blast. Beehive Blast is a simple arcade game that is heavily based on another one of our apps, Battle for the Birdhouse. After users play Beehive Blast, they will get local notifications reminding them to redeem their daily power-ups 24 and 72 hours after their initial session. Beehive Blast and Battle for the Birdhouse are very similar and have been in the market place alongside each other for a long time, so it makes sense to compare the retention rates between the two to see if adding local notifications made any difference. Our overall retention number for both of these apps are actually not bad. See Figure 1 for overall retention rates over time for both apps.

<a href="http://zippybrain.com/wp-content/uploads/2015/04/ReturnRates_Birdhouse_vs_Beehive.png"><img class="size-full wp-image-1721" src="http://zippybrain.com/wp-content/uploads/2015/04/ReturnRates_Birdhouse_vs_Beehive.png" alt="Figure 1 - Retention Rates Over Time for Beehive Blast and Battle for the Birdhouse | Tools: R, ggplot2" /></a> 

<em><strong>Figure 1</strong> - Retention Rates Over Time for Beehive Blast and Battle for the Birdhouse | Tools: R, ggplot2</em>

Our benchmark, based on Mack Flavelle's data, for 1st/7th/30th day retention is 14%/10%/2.3%. For Battle for the Birdhouse these numbers are 22.8%/4.5%/1.4%. Beehive Blast is 22.6%/3.6%/1.3%.

Our day one numbers for both apps are good (though not great), but people don't seem to stick around for much longer than that. Both of these apps are very simple games with limited long term value, so I can completely understand this dropoff.

To our point though, did adding local notifications increase user retention? Looking at this graph, it looks like the answer is no. Retention seem pretty similar for both apps, and if anything it looks like Beehive Blast actually has worse retention than Battle for the Birdhouse.

We can use a Wilcoxon (aka a Mann-Whitney) test to see if the differences in retention rates are significant -- that's our hypothesis. Figure 2 shows the results of this test:

<a href="http://zippybrain.com/wp-content/uploads/2015/04/wilcoxon-results.png"><img class="wp-image-1907 size-full" src="http://zippybrain.com/wp-content/uploads/2015/04/wilcoxon-results.png" alt="" /></a> 

<em><strong>Figure 2</strong> - Results of Wilcoxon test comparing retention rates for Beehive and Birdhouse (Tools: R)</em>

A p-value &lt; 0.05 indicates that there is a significant difference between retention rates. The p-value here is only a little bit higher than that, so we can still say with a fair amount of certainty that the difference between these apps' retention rates is actually significant. This information confirms my suspicion from looking at the graph that Beehive actually has worse retention that Birdhouse.

<em>(I had originally used a Welch Two Sample t-test here to compare the data from the two apps, but at the time I overlooked the fact that this test assumes that the data is normally-distributed, which ours is not.)</em>

It looks like local notifications didn't improve user retention for Beehive Blast compared with Battle for the Birdhouse. It looks like they actually made it worse. Maybe they worked in the past, but perhaps users are experiencing notification fatigue from many of their apps and no longer pay any attention to them. Based on this experiment, I don't think we will continue to implement them into our games, at least not without integrating them more deeply into game mechanics.

I hope you will find this information useful for your own projects. As always, feel free to send any questions to info[at]zippybrain.com or tweet at me <a href="https://twitter.com/ZippyBrain">@ZippyBrain</a>.
