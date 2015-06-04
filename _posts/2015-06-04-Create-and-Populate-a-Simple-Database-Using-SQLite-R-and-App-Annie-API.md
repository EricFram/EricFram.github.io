---
layout: post
title: "Create and Populate a Simple App Sales and Revenue Database using SQLite, App Annie's API, and R"
date: 2015-06-04
categories: [R-Programming]
---
Eric Fram
##Introduction##

I've found that I frequently want to compare sales and revenue data across territories, dates, and applications. We use App Annie to keep track of all of this information, but constantly going to their website to download .csv files gets pretty tedious. They offer and API that let's me get all the data I want much more efficiently. Instead of making frequent API calls, I prefer to store the data in my own database.

The database management system I've chosen for this purpose is [SQLite]("https://www.sqlite.org/"). It's lightweight, easy to set up, and perfect for storing a relatively small amount of data. It would not be good if I had a large amount of data that I needed to store on a server or if lots of other people were also accessing the database, but it is perfect for my uses here.

From within R, I can get the data from the API and create and set up the sales and revenue database with only about 100 lines of code. Once everything is set up, it's easy to query data and run a wide range of analyses.

This guide will show you how to set this system up for yourself.

##Get Sales and Revenue Data from App Annie ##

We can get all the data we need with just two API calls after a little bit of preparation work. First, you'll need to get your API key from App Annie. You can do so [here]("https://www.appannie.com/account/api/key/"). Next, you'll need to make sure that you have the "httr" and "jsonlite" packages installed in R.

You'll also need to know your account number. If you don't know your App Annie account number, you can retrieve it through the API as so:

```r
# Save your authorization header as a variable to easier use
auth <- "bearer {your API key}"

# Load the "httr" and "jsonlite" libraries
library(httr) # for GET() function
library(jsonlite) # for fromJSON() function

# Call the API, get account information, and save account number
acctQuery <- "https://api.appannie.com/v1.2/accounts"
acctQuery <- GET(url=acctQuery, add_headers(Authorization=auth))
acctNo <- fromJSON(content(acctQuery,type="text"))
acctNo <- acctNo$accounts$account_id

```
Let's go ahead and get all of our sales and revenue data for each date by country and by territory.

```{r}
#Get sales and revenue breakdown by product, country, and date
query <- "https://api.appannie.com/v1.2/accounts/{your account number}/sales
                                            ?break_down=product+country+date"
getdata <- GET(url=query, add_headers(Authorization=auth))

#Convert data into data frame
data <- fromJSON(content(getdata,type="text"))
df <- data$sales_list
df <- flatten(df) # as df originally contains nested data frames

#See how the data is structured
colnames(df)
```
```
## [1] "date"                       "country"                    "product_id"                 "units.product.promotions"
## [5] "units.product.downloads"    "units.product.updates"      "units.product.refunds"      "units.iap.promotions"
## [9] "units.iap.sales"            "units.iap.refunds"          "revenue.ad"                 "revenue.product.promotions"
## [13] "revenue.product.downloads" "revenue.product.updates"    "revenue.product.refunds"    "revenue.iap.promotions"
## [17] "revenue.iap.sales"         "revenue.iap.refunds"
```
Now we have all of our revenue and downloads data in one place broken down by date, territory, and application. Each row in this new data represents a unique combination of date, country, and product id. In this data frame though, we can't really tell which product_id is associated with which app. This is easy to fix.

## Get App Name Reference Data from App Annie ##

We can make another call to the API to check which product_id is associated with which app.

```r
#Get product information and convert to data frame
prodIDQuery <- "https://api.appannie.com/v1.2/accounts/{your account number}/products?page_index=0"
prodIDQuery <- GET(url=prodIDQuery, add_headers(Authorization=auth))
prodIDData <- fromJSON(content(prodIDQuery,type="text"))
app.list <- prodIDData$products

#Select only product_ID and _product_name
app.list <- app.list[,c(2,6)]

#Check to make sure we have the correct information
colnames(app.list)
```
```
## [1] "product_id"   "product_name"
```
Perfect. Now we have a data frame where each product ID is associated with the actual application name. We're ready to insert this new data into our SQLite database.

## Conceptual Data Model ##

At this stage, the database we are creating is really simple. It's just two tables. One for looking up app names based on their product ID's, and one that contains revenue and downloads data. The data model will look like this:

![]({{ site.url }}/images/Database_ER.png)

SQLite automatically creates Row ID's for use as primary keys for each table, so we'll just use those. Also, since SQLite doesn't support Foreign Keys by default and since App Annie is already enforcing Foreign Key relationships in this data, I'm not going to explicitly specify the one here.

## Create and Populate the Database ##

We can create a new SQLite database from within R using the RSQLite package. RSQLite's dbConnect function will create a new empty database if the one you specify doesn't already exist.

```r
#Connect to the app information database
dbFile <- {file path to your database}
library(RSQLite)
con <- dbConnect(SQLite(),dbFile)
```
Let's create the app name lookup table.

```r
#Create App Reference table
dbWriteTable(con, "app_reference",
             app.list, row.names = NA, overwrite = TRUE, append = FALSE,
             field.types = NULL)
             #app.list is the data frame containing product_id and product_name informtion
```
Now, let's create the account sales and revenue table.

```r
#Create Account Connection Sales table
dbWriteTable(con,"account_sales",
             df, row.names = NA, overwrite = TRUE, append = FALSE,
             field.types = NULL)
```
Let's test drive the database. This query will get the total downloads for each app.

```r
#Example query to get total downloads for each app
testQuery <- dbSendQuery(con, "
                        SELECT
                              app_reference.[product_name],
                              SUM(account_sales.[units.product.downloads])
                        FROM app_reference
                        INNER JOIN account_sales
                        ON app_reference.[product_id] = account_sales.[product_id]
                        GROUP BY app_reference.[product_name]")
testData <- fetch(testQuery, n= -1)
testData
```
```
product_name                                           SUM(account_sales.[units.product.downloads])
## 1                     Beautiful You the App                                             x,xxx
## 2  Birds vs. Bees: Battle for the Birdhouse                                            xx,xxx
## 3             Birds vs. Bees: Beehive Blast                                            xx,xxx
## 4                                Dot Direct                                             x,xxx
## 5                           Earth Day Carol                                           xxx,xxx
## 6                            Fight the Fire                                            xx,xxx
## 7                  Helitack: Fight the Fire                                            xx,xxx
## 8                                  Puznetic                                             x,xxx
## 9                        Puznetic Anthology                                             x,xxx
## 10                             Puznetic Art                                             x,xxx
## 11                            Puznetic Pets                                             x,xxx
## 12                             Puznetic Sky                                             x,xxx
```
Looks like everything is working. (Note: I've obscured the actual numbers with x's. R will return actual numbers for you.)

## Update the Database as Necessary ##

You'll probably want to update your data at some point. The function below will do that. It connects to the database, checks to see if there is likely to be new data available, then gets the new data and stores it. This will work if you've already defined "dbFile" as the path to your database, and "auth" as your bearer authorization.

```r
#Function to get new data
update <- function() {

      require(RSQLite)
      con <- dbConnect(SQLite(),dbFile)

      #1 - Check to see what the most recent date in account_sales is
      maxDate <- dbSendQuery(con, "
                                    SELECT
                                          max(date)
                                    FROM account_sales")
      maxDate <- fetch(maxDate, n=-1)
      maxDate <- (maxDate[1,1])

      #2 - Get the date two days before current date
      #(App Annie reports take between 24 and 48 hours)
      newDate <- Sys.Date()-2

      #3 - Check to make sure that newDate is more recent than maxDate
      if (maxDate > newDate) {
            stop("Please wait until newer data is available")
      }
      #4- Get new data from API
      else{
            query <- "https://api.appannie.com/v1.2/accounts/{your account no}/sales
                                                    ?break_down=product+country+date"
            getdata <- GET(url=query, add_headers(Authorization=auth))
            data <- fromJSON(content(getdata,type="text"))
            df <- data$sales_list
            df <- flatten(df)

      #5- Add new data to the account_sales table
            dbWriteTable(con,"account_sales",
                         df, row.names = NA, overwrite = TRUE, append = FALSE,
                         field.types = NULL)
      }
}

#Update the information in the database
update()

#Disconnect from the database
dbDisconnect(con)
```
##Conclusion##

Thanks for reading. I definitely get that this may be overkill for such a small amount of data, but I've found that storing everything in a database like this makes it much easier to access exactly the data I want. If you have any questions or comments, please feel free to contact me directly or tweet at me [@ZippyBrain]("https://twitter.com/ZippyBrain").
