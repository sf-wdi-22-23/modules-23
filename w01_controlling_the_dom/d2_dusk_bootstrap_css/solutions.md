# Solutions


1. Create a new folder from your terminal called "bootstrap" and create a new file in it called index.html. Paste into this file the bootstrap boilerplate.

  ```bash
  cd ~/dev
  mkdir bootstrap
  cd bootstrap
  touch index.html
  subl index.html
  ```
  Copy the boilerplate code with `CMD+c` and `CMD+v`.
  
1. Add the boilerplate navbar code above the div with the class .container.

  Copy the boilerplate code with `CMD+c` and `CMD+v`.

1. Using the bootstrap grid, make a grid that is 4 columns wide when on desktop (lg), 3 on laptop (md), 2 on tablet (sm), and 1 on mobile.  

  ```html
  <div class='row'>
    <div class="col-lg-3 col-md-4 col-sm-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo leo.
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo leo.
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo leo.
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo leo.
    </div>
  </div>
  ```

1.Using the bootstrap grid, make a grid that is six columns wide with with a offset of three columns on the left -- except for on mobile where there is just 1 column.

  ```html
  <div class='row'>
    <div class="col-sm-offset-3 col-sm-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo leo. Suspendisse ut tincidunt felis, nec efficitur nulla. Morbi auctor, nulla non varius molestie, magna ligula ullamcorper erat, quis aliquet dui arcu in neque.
    </div>
  </div> 
  ```

1.  Using the bootstrap grid, make a three column grid that is 3-6-3 on desktop (lg), or 2-6-2 with 1 offset on tablet (sm). On mobile (xs), it should show as one column, and the leftmost column should be hidden.
  
  ```html
  <div class='row'>
    <div class="col-lg-3 col-sm-offset-1 col-sm-2 hidden-xs">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo leo.
    </div>
    <div class="col-lg-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo leo.
    </div>
    <div class="col-lg-3 col-sm-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo leo.
    </div>
</div>
```
