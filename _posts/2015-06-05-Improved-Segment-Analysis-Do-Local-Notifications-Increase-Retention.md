---
layout: post
title: "Is 'Fight the Fire' Too Hard? Turning Flurry Event Parameter Logs Into Insights"
date: 2015-06-05
categories: [R-Programming, Insights]
---
Eric Fram  

<em> This article was originally posted in ZippyBrain.com on June 4th, 2015. [Link](http://zippybrain.com/2015/06/improved-segment-analysis-do-local-notifications-increase-retention-rate/) </em>

<h2>Introduction</h2>
A couple months ago I posted an analysis that attempted to determine whether or not local notifications increase mobile app retention rates.<a href="http://ericfram.com/articles/2015/04/16/do-local-notifications-increase-retention-rates/"> Read it here</a>. My methods with that analysis weren't perfect, as I compared two similar apps -- Beehive Blast and Battle for the Birdhouse -- instead of segments of the same app. I now have better data, so I thought it would be worthwhile to re-do that analysis.

Instead of comparing two similar apps, I can now compare user segments of Fight the Fire. In Fight the Fire, we prompt users three times to approve notifications. Once at the completion of level 4, once at the completion of level 8, and once at the completion of level 12. We use <a href="http://www.flurry.com/">Flurry</a> custom events to anonymously track how many users approve or deny this prompt. Overall, about 15% of people who use Fight the Fire approve notifications. We could potentially change the way we ask for notifications to improve that number, but at this point we do have a big enough pool of users who have approved notifications to conduct this analysis.

I used Flurry's segments feature to divide all users of Fight the Fire into two groups:
<ul>
	<li><strong> Notification Approvers - 15% of Total Users</strong>
<ul>
	<li>Users that have triggered ANY of the following events:
<ul>
	<li><em> <span class="colorBlackBlack bold">Notification Permission - YES from user at level 4</span></em></li>
	<li><em> <span class="colorBlackBlack bold">Notification Permission - YES from user at level 8</span></em></li>
	<li><em> <span class="colorBlackBlack bold">Notification Permission - YES from user at level 12</span></em></li>
</ul>
</li>
</ul>
</li>
	<li><strong>Notification Non-Approvers - 85% of Total Users</strong>
<ul>
	<li>Users that have NOT triggered ANY of the following events:
<ul>
	<li><em><span class="colorBlackBlack bold">Notification Permission - YES from user at level 4</span></em></li>
	<li><em><span class="colorBlackBlack bold">Notification Permission - YES from user at level 8</span></em></li>
	<li><em><span class="colorBlackBlack bold">Notification Permission - YES from user at level 12</span></em></li>
</ul>
</li>
</ul>
</li>
</ul>
As I cited in my <a href="http://ericfram.com/articles/2015/04/16/do-local-notifications-increase-retention-rates/">previous analysis</a>, mobile app industry averages last year for 1st/7th/30th day retention were just 14%/10%/4% (<a href="http://andrewchen.co/mobile-retention-benchmarks-for-2014-vs-2013-show-a-50-drop-in-d1-retention-guest-post/">Source: Mack Flavelle at Tapstream</a>). This means that after a user downloads an app, the chance that user opens the app the day after downloading it is just 14%. Not super great.

We've just released a big update to Fight the Fire (v3.0), but for this analysis I'm only going to include usage data from our previous version (v2.0).
<h2>Overall Retention</h2>
Fight the Fire's over retention stats aren't spectacular. 1st/7th/30th (well, 29th as that's what Flurry gives me) day retention is 17%/2%/&lt;1%. Figure 1 shows retention rates.

<a href="http://zippybrain.com/wp-content/uploads/2015/06/FtF-Retention.png"><img class="size-full wp-image-2009" src="http://zippybrain.com/wp-content/uploads/2015/06/FtF-Retention.png" alt="Figure 1 - Fight the Fire Overall Retention Rates | Tools: R, ggplot2" width="960" height="478" /></a>

<em><strong>Figure 1</strong> - Fight the Fire Overall Retention Rates | Tools: R, ggplot2</em>

<h2>Retention by Segments</h2>
To get a look at whether or not users who approve notifications behave any differently, let's now plot two lines. One line showing retention for Notification Approvers and one line showing retention for Notification Non-Approvers/Deniers. See Figure 2.

<a href="http://zippybrain.com/wp-content/uploads/2015/06/FtF-Retention_Comp.png"><img class="size-full wp-image-2010" src="http://zippybrain.com/wp-content/uploads/2015/06/FtF-Retention_Comp.png" alt="Figure 2 - Comparison of Retention Rate for Notification Approvers and Notification Non-Approvers | Tools: R, ggplot2" width="960" height="478" /></a>

<em><strong>Figure 2</strong> - Comparison of Retention Rate for Notification Approvers and Notification Non-Approvers | Tools: R, ggplot2</em>

Notification Approver 1st/7th/29th day retention is 32%/5%/3%. Notification Non-Approver retention is 15%/2%/&lt;1%. You can see in Figure 2 that Notification Approver retention rate is higher across the board.

Let's perform a Wilcoxon (Mann-Whitney) test to see if the differences in retention rate are significant. See Figure 3 for the results.

<a href="http://zippybrain.com/wp-content/uploads/2015/06/Wilcoxon.png"><img class="size-full wp-image-2011" src="http://zippybrain.com/wp-content/uploads/2015/06/Wilcoxon.png" alt="Figure 3 - Wilcoxon  test results comparing retention for Notification Approvers  and Notification Non-Approvers | Tools: R" width="539" height="88" /></a>

<em><strong>Figure 3</strong> - Wilcoxon test results comparing retention for Notification Approvers and Notification Non-Approvers | Tools: R</em>

A p-value &lt;0.05 means that we can be pretty sure the differences in retention rates between these segments is significant. The p-value here is 0.0000001234, so we can be nearly absolutely certain that the difference is significant. Let's be honest, we already knew that just from looking at the chart in Figure 2 that users who approve notifications are far more likely to be retained.
<h2>What Does it Mean?</h2>
This analysis tells us that people who approve notifications are more likely to keep using the app. I recognize that this doesn't answer the original question I asked, which is "do local notifications increase retention rates?", but it's still valuable information.

People who are okay with getting notifications and so approve them are likely to come back to an app that sends those notifications. People who don't want notifications are probably going to ignore them. I think it's likely that we continue to see increased retention from users who approve notifications,. By presenting more compelling uses for notifications in future updates and projects (such as social interaction or time-based incentives), we'll be able to get more users to approve them and hopefully increase overall retention rates.

Thanks for taking the time to read this! If you have any questions or comments, please feel free to reach out to me (contact information at <a href="http://ericfram.com/contact/">ericfram.com/contact</a>) or tweet at me <a href="https://twitter.com/ZippyBrain">@ZippyBrain</a>.
