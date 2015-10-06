### Week 2 Drills -- solutions

#### isEmpty()

```js
function isEmpty() {
  return !onBlue() && !onGreen();
}
```

#### moveRight(n)
```js
function moveRight(n) {
  n = n || 1; // by default move 1 space if n is not defined
  for(var i=0; i<n; i++){
    $(".instructions").append("<div>moveRight</div>");
    if(kyrel.x < row.x - 1) {
      kyrel.x = kyrel.x + 1;
      updateRow();
    }
  }
}
```

#### moveLeft(n)
```js
function moveLeft(n) {
  n = n || 1; // by default move 1 space if n is not defined
  for(var i=0; i<n; i++){
    $(".instructions").append("<div>moveLeft</div>");
    if(kyrel.x > 0) {
      kyrel.x = kyrel.x - 1;
      updateRow();
    }
  }
}
```

#### move(direction, times)

```js
function move(direction, times) {
  if (direction === "r") {
    moveRight(times);
  } else if (direction === "l") {
    moveLeft(times);
  }
}
```
