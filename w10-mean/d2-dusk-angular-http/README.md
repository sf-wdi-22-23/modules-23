# Angular $http

| Objective |
| :--- |
| Use Angular $http to query an API and CRUD one resource |

The [$http](https://docs.angularjs.org/api/ng/service/$http) service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.

## Challenges

We're going to be using Angular $http and the [DareToDiscover API](https://github.com/arsood/SampleAPI#wines) to build a wine discovery app. DareToDiscover is a RESTful API, so its request syntax follows this pattern:

**Base URL:** http://daretodiscover.herokuapp.com

| HTTP Verb | URL | Functionality |
| :--- | :--- | :--- |
| GET | /wines | READS all wines |
| POST | /wines | CREATES new wine |
| GET | /wines/:id | READS one wine |
| PUT | /wines/:id | UPDATES one wine |
| DELETE | /wines/:id | DESTROYS one wine |

----------

1. Open up browser window and go to `http://daretodiscover.herokuapp.com/wines`. Make sure the response is a list of wine objects, and familiarize yourself with how the data is structured.

1. Clone a fresh copy of [seed-mean-html](https://github.com/sf-wdi-22-23/seed-mean-html) and name it `wineApp`.

3. Rename `PostsIndexCtrl` to `WinesIndexCtrl` and make sure `$http` in included as a dependency. Also rename the template `posts-index.html` to `wines-index.html`. **Hint:** Make sure you link `WinesIndexCtrl` to your template `wines-index` in your Angular app in `app.js`.

4. When a user opens your app, they should see a list of all the wines from DareToDiscover. Display all the wine attributes, including the photo. **Hint:** Look up `ng-src` for images.

5. Make a form to create a new wine. When a user submits the form, it should send an `$http` request to CREATE a new wine in the DareToDiscover database.

6. Each wine in your list should have an edit button. When a user clicks the edit button, the wine information should hide and the edit form should show.

7. When a user submits the edit form, send an `$http` request to UPDATE the wine in the DareToDiscover database.

8. Implement a delete button. When the user clicks it, send an `$http` request to DELETE the wine from the DareToDiscover database.

## Stretch Challenge

Link the `name` of each wine to a view that shows only the details for that wine. **Hints:**

* Use the `.config` section in `app.js` to set up multiple views in your Angular app. Like in Express, you can use the `/:id` route to indicate a wildcard.
* Use `$stateParams` to figure out which wine to display.
* Your view for a single wine will have a different controller than your view that displays all wines.

## Docs & Resources

* [Angular $http](https://docs.angularjs.org/api/ng/service/$http)
* [Solution](https://github.com/sf-wdi-22-23/seed-mean-html/tree/wines-app)
