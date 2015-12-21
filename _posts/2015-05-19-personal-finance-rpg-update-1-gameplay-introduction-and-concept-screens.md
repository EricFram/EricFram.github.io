---
layout: post
title: "Personal Finance RPG Update 1: Gameplay Introduction and Concept Screens"
date: 2015-05-19
categories: [game-development]
---
Eric Fram  

*This article was originally posted on ZippyBrain.com on May 19th, 2015. [Link](http://zippybrain.com/2015/05/personal-finance-rpg-update-1-gameplay-introduction-and-concept-screens/).*

<h2>Introduction</h2>
A few weeks ago, we announced that we're developing a personal finance RPG (currently untitled). <a href="http://zippybrain.com/2015/04/personal-finance-education-rpg/">Read the announcement here</a>. We've been bogged down with other work and haven't had a chance to get an alpha version up and running. We have, however, put together a general rundown of how the app is going to play.

All the screenshots shown here are early mock ups, and the art assets shown (houses, characters, etc) are just placeholders until we can put together some really good art. Additionally, not all of the financial figures in these shots make complete sense; think of them as lorem ipsum but for numbers.

Even at this early stage, we'd love to hear feedback about this project, so feel free to reach out. We're developing this with <a href="https://coronalabs.com/products/corona-sdk/">Corona SDK</a> and plan to release on iOS first.
<h2>The Gameplay</h2>

At its core, this app is a role-playing game. For the duration of a round, you will assume the role of a single character (we're calling them "personas" internally for now). Each persona will have a different starting condition (age, income, net worth, education levels, etc.), and a set of 5 lifetime goals that you need to accomplish before the end of the game (i.e. retirement).

This will not be a traditional role-playing game in which you assemble a team, fight monsters, and level up. To keep the game educational, we're going a more realistic route. More <a href="http://www.wallstreetsurvivor.com/">Wall Street survivor</a> and less dungeon crawler. Your progress in the game is measured by your goal completion status and your assets.

In order to give you plenty of time to weigh your options and strategies, the game will be turn-based. We're still not 100% sure how much time each turn will represent, but we're learning towards 1 month, as that is a typical billing cycle and most people build their budgets by month.

The turns will be structured something like this:

<a href="http://zippybrain.com/wp-content/uploads/2015/05/Anatomy-of-a-Turn.png"><img class="aligncenter wp-image-1927" src="http://zippybrain.com/wp-content/uploads/2015/05/Anatomy-of-a-Turn.png" alt="Anatomy of a Turn" style="width: 750px; max-width: 100%;" /></a>
<h2>Home Screen</h2>
The home screen is what you see when you don't have any other specific menus open. It will show you your home (<em>it is a home screen</em>) along with other assets you might happen to have like cars. The art used here is just a placeholder.

<a href="http://zippybrain.com/wp-content/uploads/2015/05/home-screen_2.png"><img class="aligncenter wp-image-1937" src="http://zippybrain.com/wp-content/uploads/2015/05/home-screen_2-595x1024.png" alt="home-screen_2" style="width: 350px; max-width: 100%;" /></a>

This screen also shows you a top-level rundown of your net worth and cash flow forecast. Tapping on either of those bars will open up accounting detail menus, which I'll show later. We shows these status bars on several other screens too so that you can quickly see your overall financial situation without any additional taps.
<h2>Goal Screen</h2>
The focus of each round is accomplishing your persona's five goals, the last of which is always retirement with a minimum net worth. We're using this goal system to give the game some structure.

In order to help you plan out expenditures for the goals and to save up appropriately, this page includes a function to "psychologically allocate" liquid assets towards goals. Doing this doesn't directly affect the asset, but works as a planning tool. When a goal's condition is met, you can complete it and progress to the next one. This is the most recent mockup we have for this screen:

<a href="http://zippybrain.com/wp-content/uploads/2015/05/goal-screen.png"><img class="aligncenter wp-image-1935" src="http://zippybrain.com/wp-content/uploads/2015/05/goal-screen-595x1024.png" alt="goal-screen" style="width: 350px; max-width: 100%;" /></a>
<h2>Accounting Screens</h2>
The accounting screens are accessible by tapping either the net worth or cash flow summary bars at the top of most screens. These screens are designed to give you a way to drill down into the details of your finances quickly and easily. This is generally how they will look:

<a href="http://zippybrain.com/wp-content/uploads/2015/05/cash-flow.png"><img class="aligncenter wp-image-1933" src="http://zippybrain.com/wp-content/uploads/2015/05/cash-flow-595x1024.png" alt="cash-flow" style="width: 350px; max-width: 100%;" /></a> <a href="http://zippybrain.com/wp-content/uploads/2015/05/balance-sheet.png"><img class="aligncenter wp-image-1932" src="http://zippybrain.com/wp-content/uploads/2015/05/balance-sheet-595x1024.png" alt="balance-sheet" style="width: 350px; max-width: 100%;" /></a>
<h2>Lifestyle Screen</h2>
The lifestyle screen is where you make decisions regarding housing and transportation. We're still figuring out how to give you an interface to manage other types of lifestyle expenses, but this is what we have now:

<a href="http://zippybrain.com/wp-content/uploads/2015/05/lifestyle-screen.png"><img class="aligncenter wp-image-1940" src="http://zippybrain.com/wp-content/uploads/2015/05/lifestyle-screen-595x1024.png" alt="lifestyle-screen" style="width: 350px; max-width: 100%;" /></a>

This page shows relevant accounting information for their current living arrangements. Players can also access the real estate or automotive markets from this page (which we don't have mocked up yet). On those pages, players will be able to see all of the options they have, along with the various ways of paying for them. We will get into more depth with this section later.
<h2>Investment Screen</h2>
The investment screen is the place where you can access stock markets and manage retirement and brokerage accounts. It functions similarly to the lifestyle page from an interface standpoint. Since the <a href="http://corporate.morningstar.com/us/documents/MethodologyDocuments/ResearchPapers/ImportanceOfAssetAllocation.pdf">vast majority of portfolio returns are the result of asset allocation</a>, and since our goal here is to focus on overall personal finance strategies instead of active investment strategies, we're not planning to include full-featured stock trading. Instead, we provide the players with a selection of indices that will simulate returns for different types of asset classes.

In order to simulate investment returns, we are working on a scheme that takes historical returns and volatility for given asset classes to simulate the market in a reasonably realistic way. We are also planning to implement several overall market conditions that affect the game over many turns, such as recessions, bear markets, and bull markets.

Here's what we have now:

<a href="http://zippybrain.com/wp-content/uploads/2015/05/investing.png"><img class="aligncenter wp-image-1938" src="http://zippybrain.com/wp-content/uploads/2015/05/investing-595x1024.png" alt="investing" style="width: 350px; max-width: 100%;" /></a>

By scrolling down, you will be able to see some additional portfolio summary data, including asset allocation, historical returns compared to benchmarks, and a graph:

<a href="http://zippybrain.com/wp-content/uploads/2015/05/investing-alterate.png"><img class="aligncenter wp-image-1939" src="http://zippybrain.com/wp-content/uploads/2015/05/investing-alterate-595x1024.png" alt="investing-alterate" style="width: 350px; max-width: 100%;" /></a>

You can access the trading screen for an individual asset class by tapping on the "trade" button next to that asset class's line item. The market screen will look something like this (but with better graphs):

<a href="http://zippybrain.com/wp-content/uploads/2015/05/stock-market.png"><img class="aligncenter wp-image-1942" src="http://zippybrain.com/wp-content/uploads/2015/05/stock-market-595x1024.png" alt="stock-market" style="width: 350px; max-width: 100%;" /></a>

The trade confirmation screens will look like this (inspiration taken from <a href="http://www.google.com/design/spec/material-design/introduction.html">Material Design</a>):

<a href="http://zippybrain.com/wp-content/uploads/2015/05/stock-confirm.png"><img class="aligncenter wp-image-1941" src="http://zippybrain.com/wp-content/uploads/2015/05/stock-confirm-595x1024.png" alt="stock-confirm" style="width: 350px; max-width: 100%;" /></a>
<h2>//TODO</h2>
This is our most ambitious app so far, and we still have a long way to do. There are still a number of things we are working on. Here's a few:
<ul>
	<li><strong>Tutorial and Educational Content</strong> - The goal of this app is to educate people about personal finance. Since personal finance is an intimidating topic for many, we need to present the information in a straightforward, accessible way. I'm thinking now that players will be able to tap on the headers for different section (such as "Stocks" or "Liquid Assets") to open up a relevant help screen.</li>
	<li><strong>Complete Interface</strong> - The persona selection screen, the real estate market screen, and others still need to be finished up.</li>
	<li><strong>Game Summaries</strong> - To help players better understand how their decisions affect their finances, we're planning to include a details summary page at the end of each game round that outlines what players did well and what they could have done better.</li>
	<li><strong>Random Events </strong>- Just like in real life, you will have to deal with different types of random events (car breakdowns, storm damage, etc) that will require you to adapt your strategies.</li>
	<li><strong>Fun</strong> - If the game is no fun, people aren't going to play it. We will need lots of feedback along the way. Fortunately, Apple's new integration with TestFlight will make it easier than before to send the game to beta testers.</li>
</ul>
I understand that the details of this app are still a little nebulous, but we're getting them pinned down. Stay tuned for future updates and feel free to tweet any comments or feedback to <a href="https://twitter.com/ZippyBrain">@ZippyBrain</a>.
