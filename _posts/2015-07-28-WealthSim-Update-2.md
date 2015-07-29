---
layout: post
title: "WealthSim (The Personal Finance RPG) Update 2: Status Report"
date: 2015-07-28
categories: [game-development]
---
Eric Fram

<em> This article was originally posted in ZippyBrain.com on July 28th, 2015. [Link](http://zippybrain.com/2015/07/wealthsim-update-2/) </em>

<h2>We're making progress!</h2>
It's been a while since our last update, but in that time we've made a ton of progress on our upcoming personal finance RPG, WealthSim. If you're not familiar with the project, you can read our <a href="http://zippybrain.com/2015/04/personal-finance-education-rpg/">kickoff announcement here</a> and our <a href="http://zippybrain.com/2015/05/personal-finance-rpg-update-1-gameplay-introduction-and-concept-screens/">first update here</a>. In our last update, we only had mockups, but all of the pictures I show in this post are actual screenshots from the current version of the app.

We now have all of the following features working, at least in an early state:
<ul>
	<li>Turn-based game progression system</li>
	<li>Balance Sheet and Cash Flow Statements</li>
	<li>Salary and job application system</li>
	<li>Real estate market with mortgage and rental options</li>
	<li>Automotive market with purchase and lease options</li>
	<li>Stock market cycles and investment interface</li>
	<li>Random life events</li>
</ul>
Many of these sections will get their own post at a later time with a lot more detail. Please note that some interface elements and graphics are not in their final state. Also, we're still showing a lot of debugging text that we will remove in the release version of the game.

The financial situations shown in some of these screenshots are a little bit wonky, but that will happen less in later versions of the game when we get the gameplay nailed down a little bit more.
<h2>Turn-based Game Progression System</h2>
We decided to make WealthSim a turn-based game so that players can take as much or as little time as they need to make financial decisions. Each turn represents one month of time, and players will earn income and pay expenses at the end of each turn. As the game goes on, players will need to weather a variety of economic environments, including bear markets, bull markets, and inflationary periods. Interest rates for bonds and loans vary with economic conditions, so players will need to consider that when making financial decisions.

<a href="http://zippybrain.com/wp-content/uploads/2015/07/ss11.jpg"><img class="aligncenter size-large wp-image-2073" src="http://zippybrain.com/wp-content/uploads/2015/07/ss11-584x1024.jpg" alt="ss1"  /></a> <p>During each turn, players make whatever investment or lifestyle decisions they would like, then tap "Next Turn" in the bottom right corner of the screen to advance to the next month.</p>
<h2>Balance Sheet and Cash Flow Statements</h2>
An important, if not particularly thrilling, part of the game is showing players their current financial situation in detail. In the screenshot above, you can see that players can see their net worth and monthly cash flow at a glance at the top of the screen. By tapping on the net worth bar, players can see their balance sheet in detail. This allows them to see what kinds of assets and liabilities they have. We finally have it hooked up to the game logic, and it looks like this:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/ss2.jpg"><img class="aligncenter wp-image-2074 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/ss2-584x1024.jpg" alt=""  /></a>

We also have the cash flow statement working, which looks like this (not all living expenses are currently implemented in the game, but those will be significant):

<a href="http://zippybrain.com/wp-content/uploads/2015/07/ss3.jpg"><img class="aligncenter wp-image-2075 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/ss3-584x1024.jpg" alt=""  /></a>
<h2>Salary and Job Application System</h2>
Players can finally earn an income! To progress in the game, many players will want to pursue higher-paying jobs. Players are allowed to apply to one job each turn, and the chances of getting an offer are based on the relative rank of the job they have compared to the rank of the job they are applying to. This means that players who apply for a job that is a little bit better than their current one are reasonably likely to get an offer, but players who are currently interns will not get offers to be senior executives.

Players can search the job listings, which look like this:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/ss4.jpg"><img class="aligncenter wp-image-2076 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/ss4-584x1024.jpg" alt=""  /></a>

The jobs in WealthSim range all the way from intern to CEO
<h2>Real Estate Market with Mortgage and Rental Options</h2>
This part got pretty complicated, but we have it working! WealthSim now has a working real estate market with a wide range of properties to buy or rent. Players can see their current living situation on the lifestyle screen, but can access the real estate market at any time through the "Housing" menu.

Property listings look like this:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/ss5.jpg"><img class="aligncenter wp-image-2077 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/ss5-584x1024.jpg" alt=""  /></a>

To streamline things, all the properties are available for either purchase or for rent. Since large properties cost a lot to maintain beyond just the purchase price, we also show the expected additional expenses.

When looking to buy property, we give players the option to buy the property with cash or to take out one of three types of mortgage:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/ss6.jpg"><img class="aligncenter wp-image-2078 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/ss6-584x1024.jpg" alt=""  /></a>

Mortgage rates vary over time in the game based on economic conditions, so players will need to be somewhat strategic about when they buy or rent. Mortgages behave the same in WealthSim as they do in real life.

The interface for renting is somewhat similar (but players won't be able to build any equity):

<a href="http://zippybrain.com/wp-content/uploads/2015/07/ss7.jpg"><img class="aligncenter wp-image-2079 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/ss7-584x1024.jpg" alt=""  /></a>
<h2>Automotive Market with Purchase and Lease Options</h2>
The market for transport is set up a little bit differently than for real estate, since players have the option to purchase both new and used cars. The "Transport" screen looks like this:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/ss8.jpg"><img class="aligncenter wp-image-2080 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/ss8-584x1024.jpg" alt=""  /></a>

When purchasing a car, players have the option to either pay cash or to take out a loan:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/ss9.jpg"><img class="aligncenter wp-image-2081 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/ss9-584x1024.jpg" alt=""  /></a>

Leasing cars (like renting houses) has a similar interface, but different financial implications:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/ss10.jpg"><img class="aligncenter wp-image-2082 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/ss10-584x1024.jpg" alt=""  /></a>

Car expenses change over time and vary with the age or value of the car. For example, maintenance expenses increase over time as cars age.
<h2>Stock Market Cycles and Investment Interface</h2>
This part got complicated! The economic situation in the game changes over time, and depending on the market conditions, the returns of different asset classes change a lot. We'll go into more detail on how this works in a later post.

Players can quickly view their asset allocation and historical returns on the Investment screen:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/SS11.jpg"><img class="aligncenter wp-image-2083 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/SS11-584x1024.jpg" alt=""  /></a>

We still need to add some more information to help players understand how their assets are performing, such as total return over different periods of time.

To trade assets, players can tap "Trade Assets" to get to the trading screen, which looks like this:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/SS12.jpg"><img class="aligncenter wp-image-2084 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/SS12-584x1024.jpg" alt=""  /></a>

Players can exchange any asset for any other asset by simply dragging the icon they want to sell onto the icon they want to buy. Doing so opens up a confirmation screen that asks players how much they want to transfer (the final version will have more options). Here's an example of selling stocks:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/SS13.jpg"><img class="aligncenter wp-image-2085 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/SS13-584x1024.jpg" alt=""  /></a>

&nbsp;

Players have both a regular brokerage account and a retirement account, which have different usage and tax implications.
<h2>Random Life Events</h2>
At the beginning of some turns, players will encounter different life events that have varying financial ramifications. They're an important part of the game, as they can confound player strategies.

<a href="http://zippybrain.com/wp-content/uploads/2015/07/SS14.jpg"><img class="aligncenter wp-image-2086 size-large" src="http://zippybrain.com/wp-content/uploads/2015/07/SS14-584x1024.jpg" alt=""  /></a>
<h2>Lots More To Do!</h2>
I plan to go into a lot more detail in later posts about how our economic climate and stock/bond/gold market simulations work, since they're pretty sophisticated. Our transport and real estate market systems also deserve their own post, which will come as we get the game a little more fleshed out.

We've been making a lot of progress, but still have to complete some big items before we start user testing:
<ul>
	<li>Life goal system (a core part of the gameplay)</li>
	<li>Different playable characters (another core part of the game)</li>
	<li>Taxes for income and assets</li>
	<li>Accurate living expenses</li>
	<li>Interface visual improvement</li>
	<li>Educational and tutorial information (lots of it)</li>
	<li>Tons of details</li>
</ul>
Thanks for checking out this update, and make sure to stay on the lookout for our next posts. Feel free to reach out to <a href="https://twitter.com/ZippyBrain">@ZippyBrain</a> if you have any questions or comments.
