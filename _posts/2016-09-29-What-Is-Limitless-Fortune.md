---
layout: post
title: "What is Limitless Fortune?"
date: 2016-09-29
categories: [game-development, process]
---
Eric Fram  

I realized that it had been some time since my last post, and it also occurred to me that despite the fact that Limitless Fortune is one of my largest recent projects, I never actually posted anything about it! I’ve been caught up in other, non-game projects and just haven’t been doing a great job keeping up with this blog.

[Limitless Fortune: Orbital Trade and Investment](https://itunes.apple.com/us/app/limitless-fortune-orbital/id1101932740?ls=1&mt=8) is a financial strategy game for iOS. Quoting the App Store entry, in the game “you assume the role of a spaceship captain with one goal: get rich. To make this dream come true, you will travel around the solar system to trade exotic commodities, purchase major assets, and invest in interplanetary stock and bond markets.”

![]({{ site.url }}/images/what-is-limitless-fortune-images/lf-intro-screens.png)

The gameplay is turn-based, where each turn represents one month. Travel between different planets can take anywhere from one month to several years, so players must carefully consider their destinations. Many expenses accrue each month, regardless of how long the planetary transfer lasts, so budgeting for journeys is an important way to avoid going deep into debt and paying high interest rates. Players will also have various types of encounters along the way. As time passes, each planet transits around the sun, moving closer or farther away from other planets. Because of this, the most profitable trade routes are constantly shifting.

To win the game, players can buy a residency permit for one of the system's most desirable worlds and retire. Game stats are posted to leaderboards, so players can see how successful and efficient they were relative to other traders. There are 5 different places players can retire.

<img class="blog-entry-image-small" src="{{ site.url }}/images/what-is-limitless-fortune-images/lf-res-permit.png" rel="lf res permit">

The game’s underlying goal is to teach basic personal finance concepts in an indirect and unobtrusive way. To play the game well, players need to manage expenses and debt, prepare for unexpected expenses, invest in financial markets, and make good decisions about when to buy our rent property. The in-game mechanisms for all finances are realistic, so hopefully, some players will transfer these concepts into their own financial lives.

If you’ve never tried out Limitless Fortune, it’s currently available on the [App Store](https://itunes.apple.com/us/app/limitless-fortune-orbital/id1101932740?ls=1&mt=8). You can also learn more at [LimitlessFortuneGame.com](http://limitlessfortunegame.com/).

##Gameplay##

###Your Spaceship###

<img class="blog-entry-image-small" src="{{ site.url }}/images/what-is-limitless-fortune-images/lf-small-ship.png" rel="lf torus">

Players start the game with a tiny, unimpressive space ship, the Deimosian XJ-22. To start making serious dough, players need to upgrade to something with a larger cargo capacity. As of v1.3, the game includes 20 different space ships players can buy or rent. They include everything from tiny little capsules to massive, space station-sized behemoths.

Unlike a lot of other management games, buying a space ship in Limitless Fortune is not as simple as just saving up money and buying it. Sure that works, but players can also rent space ships for a monthly fee, or mortgage their space ship with either a fifteen- or thirty-year mortgage. The financial outcomes of these four different purchasing options are all simulated accurately. For example, if a player purchases a spaceship with a fifteen-year mortgage, he or she will continue to build equity in it month-to-month according to a realistic amortization schedule based on in-game interest rates.

<img class="blog-entry-image-small" src="{{ site.url }}/images/what-is-limitless-fortune-images/lf-ship-market.png" rel="lf torus">

The game also keeps track of insurance and maintenance costs for ships. The gritty details are automated, but players have to consider that their greatest asset might also cost them a lot more money that they might expect. This is meant to mirror the real-life costs of maintaining and insuring real estate cars, boats, or other assets.

Many of the game's ships can only be used after beating the game in certain ways. I don’t want to spoil everything, so play the game to find out!

###Planets and Trade###

<img class="blog-entry-image-small" src="{{ site.url }}/images/what-is-limitless-fortune-images/lf-torus.png" rel="lf torus">

As of v1.3, there are ten visitable planets (or stations) in Limitless Fortune. Each planet exists in its own orbit around the sun, and as time progresses in the game, each one moves.

<img class="blog-entry-image-small" src="{{ site.url }}/images/what-is-limitless-fortune-images/lf-system-map.png" rel="lf system map">

At the start of the game, players only have access to the inner system worlds: Mercury, Venus, Earth, and Mars. Permits to visit outer system worlds, including Pluto can be purchased for a price.

<img class="blog-entry-image-small" src="{{ site.url }}/images/what-is-limitless-fortune-images/lf-permits.png" rel="lf permits">

Each location specializes producing one or two commodities and demands a lot of one or two others. These commodities include things like algae, hydrogen, and nanoprocessors. These economic factors result in predictable price trends over time, but disruptions like extreme shortages or surpluses of certain goods can throw things out of balance for short periods. Players in the right place at the right time can use these special events to great advantage.

<img class="blog-entry-image-small" src="{{ site.url }}/images/what-is-limitless-fortune-images/lf-alert.png" rel="lf alert">

Trade is the primary way to generate money in the early- and mid-game, and it's possible to lose a ton of money on bad trades. Limitless Fortune does reward players who carefully consider their purchases and their trade routes.

###Financial Statements###

To help players keep track of all the financial information in the game, Limitless Fortune provides live in-game balance sheets, income statements, and budgeting predictions. Especially for a game with mechanics like mortgages, I thought it was important to accurately represent to players how it looks to build equity in an asset and to easily display a breakdown of expected monthly expenses.

<img class="blog-entry-image-small" src="{{ site.url }}/images/what-is-limitless-fortune-images/lf-finances2.png" rel="lf finances">

All in-game financial activity is tracked and is available to check at any time. This includes things like stocks and bonds, trade inventory (using average cost basis valuation), and total net worth.

###Investing###

To allow players to hedge their risk with trading as well as to give them tools for long-term planning, I created an in game financial market. The three assets to trade are stocks, bonds, and gold. Each asset represents an index, like an [ETF](http://www.investopedia.com/terms/e/etf.asp), of an entire asset class. As you might expect, stocks are volatile but can generate the highest returns, bonds are predictable but not especially lucrative, and gold can be used to hedge against an uncertain market.

<img class="blog-entry-image-small" src="{{ site.url }}/images/what-is-limitless-fortune-images/lf-stocks-summary.png" rel="lf stocks">

The game simulates five different types of economic cycles, each lasting from several months to several years. Within each cycle, the game simulates market returns and interest rates. Any financial assets the player owns will change in value based on these returns.

<img class="blog-entry-image-small" src="{{ site.url }}/images/what-is-limitless-fortune-images/lf-stocks-graphs.png" rel="lf stocks">

In the early game, players won’t be too excited by the returns they get from the investment part of the game. However, even small investments early in the game can turn into giant sums forty game-years later. Players can take advantage of [compound interest](http://www.investopedia.com/terms/c/compoundinterest.asp) in-game just as they can in real life.

##Technical##

Limitless Fortune was my first mostly solo major coding project, and since I am pretty comfortable working with [AngularJS](https://angularjs.org/)/[Ionic](http://ionicframework.com/), I decided to go with that. Even though these frameworks are not normally well-suited for game development, they actually work great for a management simulation game like Limitless Fortune. The game includes a lot of UI, so being able to build menus with HTML/CSS rather than some other proprietary method saved me a ton of time.

The game stores all gameplay data, including the current game and any high scores, in a sqlite database. Any time the user makes a change, that change is automatically stored. This way, users who get interrupted while playing or something like that will not lose any of their progress.

I created all of the music in Limitless Fortune in Garage Band using loops. Since I released Limitless Fortune, I’ve improved my own music production skills immensely and have switched over to Logic, but I am happy with how the current soundtrack sets an upbeat tone for the game.

At the time of writing this, Limitless Fortune is in version 1.3, and I will continue to support it as I create new content (or run into bugs).

##Thanks!##

I think that Limitless Fortune is a fun game.  I am willing to recognize its flaws: it could have a more rewarding game loop, it could use a better tutorial (understatement), and it would do well with some more story. What it does do, that no other game does as well, is give players a really solid glimpse into how finance works and how they can take advantage of it.

If you’re sold on it so far, check it out on the [App Store](https://itunes.apple.com/us/app/limitless-fortune-orbital/id1101932740?ls=1&mt=8), and let me know what you think!
