# Intro To MEAN Stack

| Objective |
| :--- |
| Intro to the MEAN stack |
| Use Angular $http to GET one resource |

## MEAN Stack

### Why?

### Pros and Cons

## Angular: $http

In addition to Angular's native template directives used in your html that are prefixed with `ng-`, Angular also has native services that you inject into your controllers that are prefixed with `$`. Some examples are:

* $http - used to do AJAX requests to urls.
* $window - same as the js `window` object.
* $location - similar to the js `window.location` object.
* $scope - the service that connects angular templates to angular controllers.
* $rootScope - the highest level scope.
* $filter - provides some helpers to manipulate objects and data.

#### 1. Long-Form

Similar to jQuery's `$.ajax()`

```js
$http({method: 'GET', url: '/someUrl'})
  .then(function(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status
  });
```

#### 2. Shortcut Methods

Similar to jQuery's `$.get()` and `$.post()`.

```js
// GET request
$http.get('/someUrl')
  .success(function(response) {
  })
  .error(function(response) {
  });
```

```js
// POST request (passing data)
$http.post('/someUrl', {msg:'hello word!'})
  .success(function(response) {
  })
  .error(function(response) {
  });
```

### Injection

All of Angular is not loaded in every module, controller, and template. Instead, you have to include or "inject" the parts of angular or external angular modules into the parts of your app where you want to use them.


## Challenges

1. Clone, install, and start the seed-mean-html project.

**Goal: $http to Giphy API**

1. In your angular project, in the `postsCtrl`, use `$http` to query the giphy API for "kitten" and console.log the response.
1. Time to display those gifs on the page. Set `$scope.gifs` equal to the gifs inside the giphy API response. In your template use the `ng-repeat` directive to loop over the gifs and display each one in an `<img>`.
1. Add a form and have it's `ng-submit` directive run a function called `searchGifs()`. Inside this form, add an input field that uses the `ng-model` directive that connects the input field to `$scope.term`, and add a `<button type="submit">Search</button>` inside the form.
1. This `ng-submit` won't work until you add the `searchGifs()` function to your `$scope` like this:
  ```js
    $scope.searchGifs = function() {
      console.log($scope.term);
    };
  ```
  Now when you put in a term and submit it, does it console log the term?
1. Now put your `$http` call into the `searchGifs()` function.
1. Now when you submit a term, it should update your gifs with the new search.

**Goal: $http to our own API**

All the following challenges are completed in the `public/controllers.js` file.

1. Use `$http` to get the posts from your `/api/posts` route and set them equal to `$scope.posts = data`.
2. Write the `$scope.createPost()` function to use `$http` to create a new post and `unshift` it onto `$scope.posts`. (hint you will need to declare `$scope.post = {}` in your contoller.)
3. Write the `$scope.deletePost(post)` function.
