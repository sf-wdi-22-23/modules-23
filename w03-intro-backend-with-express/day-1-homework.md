# REST API homework

1. Read [this discussion](http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming) of what REST is, especially the top comment. 

1. Read [this blog](http://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/) about best practices for REST

1. Do this exercise and submit it to your homework repo as usual:


## Understanding REST

Now that you've read these over-complicated explanations of REST (though they are the best one's I could find), you will see through this exercise that it isn't so complicated. 

In the web everything is a resource. These are the NOUNS of your program. 

There are but a few verbs that you can perform on these resources:

- GET
- POST
- PUT
- PATCH

Lets not worry about PUT and PATCH for the time being. There's nothing scary about them, we just won't need them at first. 

We have worked with the Giphy API. For this API the nouns were GIFS. But there was more to it than that! As you recall, there were trending GIFS, GIFS by keyword, etc. We could GET these GIF objects, and that would return a JSON object with a bunch of information for us to do whatever we wanted with. 

If we wanted trending GIFS, we went to one URL. If we wanted GIFS by a keyword, we went to another. The way that this is set up is the essence of REST.

###Let's look at a concrete example: 

Say we want to create our own RESTful API that for comedy video objects, much like our GIF objects. 

We want urls that can return the following resources:
1. all videos in our database
1. an individual video based on the video ID
1. info on all comedians
1. info on a specific comedian based on comedian ID
1. all videos by a specific comedian
1. specific video by a specific comedian

In Express this will be done using JavaScript, but we will be PSEUDOCODING to remove the element of syntax from the equation so we can focus on REST itself. Here is pseudocode of routes for the above API:

// My pseudo-code routes:

GET ALL VIDEOS "/videos"

GET VIDEO BY ID "/vidoes/:id"

GET ALL COMEDIANS "/comedians"

GET COMEDIAN: "/comedians/:id"

GET ALL VIDEOS BY COMEDIAN "/comedians/:id/videos"

GET VIDEO BY COMEDIAN "/comedians/:id/videos/:id"

That's all there is to it! 

### Now its your turn. 

Say we want to create an API similar to the one above, that returns data about icecream. We need to be able to get information about specific flavors, as well as all of the flavors we have in our database. We also want to get some flavors by category, like "fruity", "gluten free", or "chunky". Finally we want to add one POST route that allows users of our api to add new flavors!

Write Pseudocode like the above. Be creative, and follow RESTful conventions and best practices. 

Submit this pseudocode in a markdown or text file via Github. 


