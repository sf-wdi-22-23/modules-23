# Asset Pipeline

### Overview

The asset pipeline deals with your assets:

  * HTML
  * CSS
  * JS
  * Images

To make these assets be sent and run fast the asset pipeline does three things:

  * Combination
  * Compression (Minification)
  * Caching

#### Remember this?

``` html
<head>
    <title>Load all the things!</title>
    <script type="text/javascript" src="/vendor/jquery.js"></script>
    <script type="text/javascript" src="/vendor/lodash.js"></script>
    <script type="text/javascript" src="app.js"></script>
</head>
```

That's 3 different requests to the server, for 3 different javascript files. Ouch!

#### Caching & Fingerprinting

In Rails, assets are given a "fingerprint" that changes every time the file is updated (almost like a timestamp).

For example, `application.js` file, with a fingerprint looks like this:

`application-908e25f4bf641868d8683022a5b62f54.js`

- If the fingerprint is the same, the browser simply uses its cached copy.
- If the fingerprint has changed, the browser requests the new version of the file (and then caches it!).
    + This is called "cache busting"

#### Compression / Minification / Uglification

The asset pipeline combines, compresses, minifies, and uglifies your assets in production. In development it just pre-processes them into vanilla JS and CSS.

What's the difference between these two files: [jquery.js](http://code.jquery.com/jquery-2.1.4.js) and [jquery.min.js](http://code.jquery.com/jquery-2.1.4.min.js)?

Let's do a quick comparison on the command line:

``` bash
# uncompressed jquery file
curl http://code.jquery.com/jquery-2.1.4.js | wc
#   lines  words   bytes
#   9210   37959   247597

# compressed jquery file
curl http://code.jquery.com/jquery-2.1.4.min.js | wc
#   lines  words   bytes
#   4      1305    84345
```

#### What about CDNs?
A CDN is a "content delivery network" and a handy way to deliver common "vendor" or "third party" libraries to your application. It's common to use a CDN for jQuery, Bootstrap, Undescore, Handlebars, etc.

But is it fast?

If a common file, like jQuery is delievered via CDN it is likey:

    1. cached in your browser
    2. cached by your ISP (Internet Service Provider)
    3. dispatched from a nearby server

But is that faster than just sending 1 javascript file from your own server?

Could be! You'll have to make a decision about whether you want to host third party libraries (like jquery), or if you want to use a public CDN.

## The Asset Pipeline in Rails

#### The Manifest

In rails, instead of manually adding all those script tags, you're going to take advantage of `app/assets/javascripts/application.js`. Inside it there's a weird looking comment called a `manifest`:

``` javascript
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
```

Actually, **It's not a comment!**. It's instructions saying _which files_ need to be loaded in the `head` of your html, and _in what order_.

It will look for the name of the file (e.g. "jquery") in the following directories:

1. `app/assets/` -- application specific code
2. `lib/assets/` -- custom libraries
3. `vendor/assets/` -- third party libraries

## Reference
For more info, hit the docs:
[Rails Guides: Asset Pipeline](http://guides.rubyonrails.org/asset_pipeline.html)
