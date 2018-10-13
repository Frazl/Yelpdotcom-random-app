# What is this?

This is a simple nodejs express server that acts a sort of middleman between the Yelp API and then reactjs application. It can be easily modified to retrieve and forward on requests from the Yelp Api to a client.
Note though that this doesn't have any request limiting and could be abused by outside sources and therefore is recommended that you modify the 'Access-Control-Allow-Origin' to only point to your domain and add some form of rate-limiting.

# How do I set it up?

Type NPM install to install neccessary modules.
Add your Yelp API key into the authorization header but keep bearer before it in the index.js file 
Type Node index.js to run a development server. 

This is super simply to run on a heroku server too which is what I'm currently doing. 

# What does this do?

Once you enter your API key and are set up, this will simply listen for requests with a location parameter and return json with an array of businesses (max 20) that are within 1000 meters. 
It's easily modifyable though and there's documentation on stuff you can do on the Yelp API pages.

[demo of the application it's feeding](https://www.redbrick.dcu.ie/~fraz/)
