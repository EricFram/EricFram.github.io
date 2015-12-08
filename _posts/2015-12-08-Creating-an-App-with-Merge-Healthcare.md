---
layout: post
title: "Creating an App with Merge Healthcare - Overview"
date: 2015-12-8
categories: [process]
---
Eric Fram

It's been a long time since my last update, but I've been busy! Since it's been so long, I just wanted to give a brief overview of what I've been working on. We had a fantastic opportunity at Zippy Brain to work with [Merge Healthcare](http://www.merge.com/), a subsidiary of IBM, to create a mobile application.

Merge approached us with an idea for an app that provides Merge's end users (physicians, technologists, and site leaders) with a single portal to interact with Merge's various services. This app would act as a route for inexpensive communication with users, incentivize users to enroll in online learning, improve the efficiency of service requests and more.

After working with Merge to determine the functional requirements of the app, we decided to divide the app into five main sections: News, Learn, Service, Participate, and User.

<div class="col-md-12"><img class="img-responsive center-block site-ss" src="/images/apps_showcase/mrge_app_ss_device.png"></div>

The News section provides information about upcoming webinars and events, as well as localized information about scheduled service outages or maintenance. The Learn section (shown above) allows users to access in-depth learning materials via "Merge U" or to access quick reference materials tailored to their role and system. The Service section allows users to submit service requests that include pictures and voice recordings, which can streamline service for users who have complex problems. The Participate section gives users access to Merge community forums where they can interact with other users to learn tips & tricks or solve problems. Finally the User section gives users access to their own account information. A single sign on system will allow users to seamlessly interact with all of these services.

In future posts, I will go into more detail about my processes for creating the app. We encountered some interesting UX, UI, and information architecture challenges that I will dig deeper into when I have some more time to write additional posts.

The largest challenge we faced with this project was the timeline. Merge approached us just six weeks before they needed a working prototype to showcase at [RSNA 2015](http://www.rsna.org/Annual_Meeting.aspx). Due to this abbreviated timeline, we agreed with Merge that it would not be feasible to implement all needed back end functionality: the data transmitted through this application requires a high level of security, and some Merge web services do not yet have APIs available. So, for the RSNA prototype, much of the back end functionality is simulated client-side. Merge can showcase the prototype to their clients at RNSA and other conferences, collect feedback, and then make more informed decisions about which features will create the most value.

We delivered the prototype application ahead of schedule, and I'm thrilled with how well it turned out. It was a great experience working with Merge, and I definitely am looking forward to working with their team on future projects.

&nbsp;
