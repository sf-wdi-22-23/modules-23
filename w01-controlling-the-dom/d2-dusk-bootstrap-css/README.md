# Bootstrap Grid and CSS
| Objectives |
| :--- |
| Add the Bootstrap library to your projects |
| Use the Bootstrap Grid and Navbar component |
| Wireframe and take inspiration from existing websites |

## What?

Bootstrap is a front end styling framework that simplifies using **Conventional** front end patterns such as:

* A Responsive Grid
* Thumbnails
* Typography
* Error, Warning, and Success Text and Alerts
* Tooltips
* Modals
* many more - [see docs](http://getbootstrap.com/css/)

## Analogy - Help from a Time Traveller

Imagine you were a surgeon in 1850. You have no antibiotics, no anesthesia, no procedures to cure the thousands of ailments that befall your patients every day.

Now imagine that a time traveling doctor from 2034 leaves a set of books on your doorstep written in the 1950's. These might not be the best medicine that the doctor had available in his time, but the books contain a treasure trove of improvements from what you are working with.

Bootstrap is like these books from 1950. There is better stuff out there, but this is pretty good to start!

## Boostrap Boilerplate

Here is a boilerplate bootstrap html document. **NOTICE** that bootstrap is being loaded through the web from a CDN `https://maxcdn.bootstrapcdn.com`.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">

  <!-- set viewport to device width to allow responsiveness -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CDN -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

  <!-- custom styles (always require after Bootstrap) -->
  <link rel="stylesheet" href="style.css">

  <title>Bootstrap Boilerplate</title>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h1>col-sm-6</h1>
        <p>These columns take up half the page.</p>
      </div>
      <div class="col-sm-6">
        <h1>col-sm-6</h1>
        <p>And they take up the whole page on small devices.</p>
      </div>
    </div>
  </div>
</body>
</html>
```

## Responsive Navbar Boilerplate

This is a simple classic bootstrap navbar you can add to any project.

```html
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
```
