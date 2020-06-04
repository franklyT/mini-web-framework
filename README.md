# mini-static-gen

### gulp "build-site" to build site to dist folder

build-site builds the following from an src folder to dist:

* Asset files, e.g. images, videos, music, etc.
  
* A root CSS folder, which is minified, cleaned and prefixed.
  
* A typescript folder, which is compiled into a singular AMD module currently to generate component blueprints and helper functions.
  
* A javascript folder, which supports hosting and loading libraries.
  
* HTML structure copying, e.g. from index and nested pages.

Our root compiled js is loaded into every html page in the head, to prevent pop-in. Our CSS is also loaded explicitly into the html file for the same reason.

Components are loaded sequentially into an HTML page in the body tag.

Your HTML page might look like this:

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link href="/./CSS/root.min.css" type="text/css" rel="stylesheet" />
    <script src="/./js/root.js"></script>
</head>

<body>
    <script>
    // components to load
        COMPONENTS.head; 
        COMPONENTS.navbar; 
          COMPONENTS.hero; 
          COMPONENTS.bodyAd; 
          COMPONENTS.news; 
          COMPONENTS.bodyAd;
          COMPONENTS.contact;
        COMPONENTS.footer;
    </script>
    <script src="/./js/Library/vanilla-lazyload.js"></script>
</body>

</html>
```

Note: Our quick and dirty CSS-in-JS solution supports only SASS-style media queries currently (all that was required for personal use) but could be rolled to accept more SASS-style queries easily.
