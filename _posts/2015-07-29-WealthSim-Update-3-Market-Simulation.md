---
layout: post
title: "WealthSim (The Personal Finance RPG) Update 3: Market Simulation"
date: 2015-07-29
categories: [game-development]
---
Eric Fram

<em> This article was originally posted in ZippyBrain.com on July 29th, 2015. [Link](http://zippybrain.com/2015/07/wealthsim-the-personal-finance-rpg-update-3-market-simulation/) </em>

<h2>Introduction</h2>
As promised in <a href="http://zippybrain.com/2015/07/wealthsim-update-2/">Update 2</a>,  this post will explain the system we've developed to simulate different economic environments, including the markets for stocks, bonds, and gold. We've developed a system that simulates the market within a set of parameters. Every game will have different results, since many aspects of the simulation are based on randomness. This is both realistic and will make WealthSim much more replayable.

In the game, there are five different possible economic environments that do a reasonably good job of replicating full stock market cycles. The current economic situation in the game affects stock returns, gold prices, bond interest rates, loan rates, money market rates, and inflation. They are as follows:
<ol>
	<li><strong>Consolidation/Accumulation</strong>, based roughly on the period from February 2009 to October 2009</li>
	<li><strong>Upward Advancement/Bull Market</strong>, based roughly on the period from June 2006 to April 2007</li>
	<li><strong>Culmination/Distribution</strong>, based roughly on the period from May 2007 to Dec 2007</li>
	<li><strong>Decline/Bear Market</strong>, based roughly on the period from January 2008 to January 2009</li>
	<li><strong>Stagflation,</strong> based roughly on the period from 1979 to 1984</li>
</ol>
The first 4 environments replicate a full stock market cycle. We included stagflation as a way to include a unique economic situation that can force players to significantly reconsider their strategies. We've built our system to be flexible, so we will be able to add or remove other types of economic environments as needed based on feedback.

The game uses the following table to pick which economic environment will occur next based on the "Percent Time" column. I will never pick the same one twice in a row. The number of turns each environment lasts is randomly picked from between that environment's minimum and maximum length (each turn equals one month).
<table style="height: 206px;">
<tbody>
<tr>
<td width="76"><strong>Cycle No</strong></td>
<td width="76"><strong>Min Turns</strong></td>
<td width="76"><strong>Max Turns</strong></td>
<td width="76"><strong>Percent Time</strong></td>
</tr>
<tr>
<td>1</td>
<td>3</td>
<td>7</td>
<td>0.12</td>
</tr>
<tr>
<td>2</td>
<td>3</td>
<td>8</td>
<td>0.35</td>
</tr>
<tr>
<td>3</td>
<td>5</td>
<td>12</td>
<td>0.355</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
<td>6</td>
<td>0.15</td>
</tr>
<tr>
<td>5</td>
<td>12</td>
<td>24</td>
<td>0.025</td>
</tr>
</tbody>
</table>
&nbsp;

Each economic environment has it's own table of possible values for stock returns, interest rates, etc, that I randomly generated within realistic parameters. I'm not going to show those here, since they are pretty big. The game will randomly pick values from the current environment's table each turn.
<h2>Testing the Simulation</h2>
The simulation system we designed will produce realistic, but wildly different results for each game. Over the long term (so hundreds or thousands of turns), the investment returns of different asset classes are in line with their real-life counterparts. In the short term though, lots of interesting things can happen (just like real life).

I've run 20 years (240 turns) of the simulation five different times to demonstrate how it works. In the game, we have four asset classes: Stocks, Bonds, Gold, and Cash (Money Market). Each one behaves like a <a href="https://en.wikipedia.org/wiki/Index_fund">total market index fund</a>, and all dividends and interest payments are automatically reinvested. We've chosen to simplify the market simulation in this way to make the game more accessible and reduce development time. <a href="https://www.betterment.com/resources/investment-strategy/index-fund-portfolios-win/#methodology">Investors should be investing in index funds instead of individual stocks anyways</a>.

In each simulation, I've started the game with $10,000 invested in each asset type. Over the simulations, the geometric average returns of our core asset classes come out like this (all in APR, with simulated inflation included for reference):

<table>
<tbody>
<tr>
<td width="76"><strong>simNo</td>
<td width="76"><strong>Avg. Inflation</strong></td>
<td width="76"><strong>Avg. Stock Return</strong></td>
<td width="85"><strong>Avg. Bond Return</strong></td>
<td width="76"><strong>Avg. Gold Return</strong></td>
<td width="76"><strong>Avg. Money Mkt. Return</strong></td>
</tr>
<tr>
<td>sim1</td>
<td>0.029</td>
<td>0.161</td>
<td>0.077</td>
<td>-0.017</td>
<td>0.024</td>
</tr>
<tr>
<td>sim2</td>
<td>0.039</td>
<td>0.064</td>
<td>0.088</td>
<td>0.097</td>
<td>0.035</td>
</tr>
<tr>
<td>sim3</td>
<td>0.028</td>
<td>0.236</td>
<td>0.06</td>
<td>-0.043</td>
<td>0.022</td>
</tr>
<tr>
<td>sim4</td>
<td>0.043</td>
<td>0.077</td>
<td>0.069</td>
<td>0.116</td>
<td>0.043</td>
</tr>
<tr>
<td>sim5</td>
<td>0.027</td>
<td>0.136</td>
<td>0.068</td>
<td>-0.023</td>
<td>0.021</td>
</tr>
</tbody>
</table>

&nbsp;

20 year average stock returns (including dividend reinvestment) varied from 6.4% to 23.5%. I'm aiming for a little bit over 11% for a long term average (in nominal terms, not real), so this is pretty close. Bond returns varied less between simulations. Gold had the potential to outperform other assets, but also the potential to lose money.

Let's look at each simulation a little more in depth, since an average return doesn't really show us what happened along the way. Remember, each of these simulations uses the same starting parameters and variables:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/sims_returns.png"><img class="aligncenter wp-image-2113 size-full" src="http://zippybrain.com/wp-content/uploads/2015/07/sims_returns.png" alt="sims_returns"/></a>

&nbsp;

While the system is working, it still needs a few tweaks. You can see that sometimes the returns on stocks will end up being too high. Generally though, we're getting pretty close! These charts looks a lot like real financial returns charts!
<h2>Back to Work</h2>
Thanks for checking out this update. WealthSim still needs some work before we are ready for user testing, but we're making very satisfying progress. Stay on the lookout for some more in-depth information about our simulation techniques.

Please feel free to reach out with with any questions or comments to <a href="https://twitter.com/ZippyBrain">@ZippyBrain</a>.
