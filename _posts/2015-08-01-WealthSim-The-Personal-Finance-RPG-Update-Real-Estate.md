---
layout: post
title: "WealthSim (The Personal Finance RPG) Update 4: Real Estate"
date: 2015-08-01
categories: [game-development]
---
Eric Fram

<em> This article was originally posted in ZippyBrain.com on August 1st, 2015. [Link](http://zippybrain.com/2015/08/wealthsim-the-personal-finance-rpg-update-4-real-estate/) </em>

<h2>Introduction</h2>
We're continuing to make great progress on our current project, <a href="http://wealthsim.com/">WealthSim</a>. If you're not familiar with the project, feel free to catch yourself up on the update I've published so far: <a href="http://zippybrain.com/2015/04/personal-finance-education-rpg/">Announcement</a> | <a href="http://zippybrain.com/2015/05/personal-finance-rpg-update-1-gameplay-introduction-and-concept-screens/">Update 1</a> | <a href="http://zippybrain.com/2015/07/wealthsim-update-2/">Update 2</a> | <a href="http://zippybrain.com/2015/07/wealthsim-the-personal-finance-rpg-update-3-market-simulation/">Update 3</a>.

As of today, we finally have mortgages working in the game. I thought it would be a good time for a post about how real estate works in WealthSim. Right now, there are 11 different houses in the game available for either purchase or rent. When a player rents a property, we don't really have to do much math. When a player buys a property, though, we need to accurately simulate the mortgage repayment schedule based on the total value of the mortgage and the current in-game interest rates. Other expenses, such as maintenance, insurance, condo fees, utilities and taxes are also simulated.

Right now, property values are static. Eventually, the value of each property will vary with inflation and other factors.

<h2>What's on the Market?</h2>

There are a wide variety of properties available in WealthSim, from fixer-uppers to beachside estates. (We're still showing some debug text on the bottom of these screenshots. That will be removed for later versions).

These houses were build using <a href="http://kenney.nl/">Kenney</a>'s great tilesets.
<h4 style="text-align: center;"><strong>1294 Colorado Ave. - 2bd, 1 bth - 1,224 sq ft - 0.25 acres | </strong><strong>List Price: $172,000 - Great Value!</strong></h4>

<em><a href="http://zippybrain.com/wp-content/uploads/2015/07/house12.png"><img class="aligncenter size-large wp-image-2125" src="http://zippybrain.com/wp-content/uploads/2015/07/house12-1024x709.png" alt="house1"  /></a></em>
<h4 style="text-align: center;"><strong>65 Mountainview Rd. - 2bd, 1bth - 1,048 sq ft - 0.05 acres | </strong><strong>List Price: $213,000 - Convenient Freeway!</strong></h4>

<a href="http://zippybrain.com/wp-content/uploads/2015/07/house21.png"><img class="aligncenter size-large wp-image-2126" src="http://zippybrain.com/wp-content/uploads/2015/07/house21-1024x709.png" alt="house2"  /></a>
<h4 style="text-align: center;"><strong>295 Doubletree Rd - 3br, 1bth  - 1,835 sq ft - 0.15 acres | </strong><strong>List Price: $315,000 - Convenient Airport!</strong></h4>

<a href="http://zippybrain.com/wp-content/uploads/2015/07/house31.png"><img class="aligncenter size-large wp-image-2127" src="http://zippybrain.com/wp-content/uploads/2015/07/house31-1024x709.png" alt="house3"  /></a>
<h4 style="text-align: center;"><strong>451 4th St. #304 - 1br, 1bth - 510 sq ft - 3rd floor | </strong><strong>List Price: $395,000 - Great Views!</strong></h4>

<a href="http://zippybrain.com/wp-content/uploads/2015/07/house41.png"><img class="aligncenter size-large wp-image-2128" src="http://zippybrain.com/wp-content/uploads/2015/07/house41-1024x709.png" alt="house4"  /></a>
<h4 style="text-align: center;"><strong>12240 San Vicente Blvd. - 2br, 1bth - 972 sq ft - 0.06 acres  | </strong><strong>List Price: $450,000 - Good Schools!</strong></h4>

<a href="http://zippybrain.com/wp-content/uploads/2015/07/house51.png"><img class="aligncenter size-large wp-image-2129" src="http://zippybrain.com/wp-content/uploads/2015/07/house51-1024x709.png" alt="house5"  /></a>
<h4 style="text-align: center;"><strong>6401 Arroyo Verde Dr. #210 - 2br, 1bth - 1,100 sq ft - 2nd floor | </strong><strong>List Price: $699,000- Close to Beach!</strong></h4>

<a href="http://zippybrain.com/wp-content/uploads/2015/07/house61.png"><img class="aligncenter size-large wp-image-2130" src="http://zippybrain.com/wp-content/uploads/2015/07/house61-1024x709.png" alt="house6"  /></a>

<h4 style="text-align: center;"><strong>19128 Sunset Blvd. #1065 - 3br, 3bth - 907 sq ft - 10th floor | </strong><strong>List Price: $835,000 - Great Schools &amp; Good Views!</strong></h4>

<a href="http://zippybrain.com/wp-content/uploads/2015/07/house71.png"><img class="aligncenter size-large wp-image-2131" src="http://zippybrain.com/wp-content/uploads/2015/07/house71-1024x709.png" alt="house7"  /></a>

<h4 style="text-align: center;"><strong>5319 Iowa Road - 3br, 2bth - 1,457 sq ft - 0.13 acres | </strong><strong>List Price: $1,350,000 - Ocean Views!</strong></h4>

<a href="http://zippybrain.com/wp-content/uploads/2015/07/house81.png"><img class="aligncenter size-large wp-image-2132" src="http://zippybrain.com/wp-content/uploads/2015/07/house81-1024x709.png" alt="house8"  /></a>

<h4 style="text-align: center;"><strong>810 24th St. - 5br, 4th, 3,637 sq ft - 0.17 acres | </strong><strong>List Price: $3,450,000 - Great Schools &amp; Close to Beach!</strong></h4>

<a href="http://zippybrain.com/wp-content/uploads/2015/07/house91.png"><img class="aligncenter size-large wp-image-2133" src="http://zippybrain.com/wp-content/uploads/2015/07/house91-1024x709.png" alt="house9"  /></a>

<h4 style="text-align: center;"><strong>10 Century Way #2203 - 6,000 sq ft - 22nd floor | </strong><strong>List Price: $7,200,000 - Fantastic Views!</strong></h4>

<a href="http://zippybrain.com/wp-content/uploads/2015/07/house101.png"><img class="aligncenter size-large wp-image-2134" src="http://zippybrain.com/wp-content/uploads/2015/07/house101-1024x709.png" alt="house10"  /></a>

<h4 style="text-align: center;"><strong>3191 Chautauqua Blvd. - 7bd, 9bth - 7,100 sq ft - 0.47 acres | </strong><strong>List Price: $10,450,000 - Great Schools &amp; Fantastic Views!</strong></h4>

<a href="http://zippybrain.com/wp-content/uploads/2015/07/house111.png"><img class="aligncenter size-large wp-image-2135" src="http://zippybrain.com/wp-content/uploads/2015/07/house111-1024x709.png" alt="house11"  /></a>

<h2>Let's Buy 12240 San Vicente!</h2>

First, we'll just go to the real estate listings screen and scroll down:

<a href="http://zippybrain.com/wp-content/uploads/2015/07/housepost_ss1.jpg"><img class="aligncenter size-large wp-image-2139" src="http://zippybrain.com/wp-content/uploads/2015/07/housepost_ss1-584x1024.jpg" alt="housepost_ss1"    /></a>

There it is! Now we'll click the "Buy" button to open up the different options for buying the property:

<a href="http://zippybrain.com/wp-content/uploads/2015/08/housepost_ss2.jpg"><img class="aligncenter size-large wp-image-2140" src="http://zippybrain.com/wp-content/uploads/2015/08/housepost_ss2-584x1024.jpg" alt="housepost_ss2"    /></a>

We'll pick the 15 year mortgage since we'll pay a lot less total interest. After confirming our purchase, we can go back to the home screen to see our new house (which looks like it might be costing us too much)!

<a href="http://zippybrain.com/wp-content/uploads/2015/08/housepost_ss3.jpg"><img class="aligncenter size-large wp-image-2141" src="http://zippybrain.com/wp-content/uploads/2015/08/housepost_ss3-584x1024.jpg" alt="housepost_ss3"    /></a>

To see the value of our house and to see how much money is left on the mortgage, we can check out balance sheet:

&nbsp;

<a href="http://zippybrain.com/wp-content/uploads/2015/08/housepost_ss5.jpg"><img class="aligncenter size-large wp-image-2143" src="http://zippybrain.com/wp-content/uploads/2015/08/housepost_ss5-584x1024.jpg" alt="housepost_ss5"    /></a>

&nbsp;

Since each turn is a month, we'll be making one payment each turn for the next 180 turns/15 years (assuming we don't buy another house in that time). Our first month's payment of $2,736 dollars will reduce the mortgage balance to $358,439 ($960 paid in interest). As time passes, we'll be paying a lot less interest and will reduce our mortgage balance much more quickly. Had we picked a 30 year mortgage, our total monthly payments would be lower, but we'd pay a lot more total interest and it would take us a lot longer to reduce the mortgage balance.

We're closing in on the user testing stage, so you'll be able to try this out for yourself soon!

Thanks for checking out this update. Please contact <a href="https://twitter.com/ZippyBrain">@ZippyBrain</a> with any questions or comments.
