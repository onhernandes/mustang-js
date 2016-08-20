# Mustang.js - Simple slide plugin

Simple slide plugin with CSS3 + a bit of jQuery
To see an example, [click here](http://devmath.github.io/mustang-js)

## How to use

Create your HTML tags, like:

```html
	<section id="container">
		<article class="item"></article>
	</section>
```

Set those properties to the container for do the plugin works.

```css
	display: flex;
	flex-flow: nowrap row;
	overflow: hidden;
```

If you want that the items fit all the user view, set

```css
	width: 100%;
	height: 100vh;
```

Set those properties for the items

```css
	flex: 0 0 100%;
	height: 100%;
	transform: translateX(0);
	transition: transform .7s ease-in .2s;
```

you can use the transition property to play with the transition speed and whatever you want.

If you want, add next and prev buttons too:

```html
	<a href="javascript:void(0);" id="prev"><</a>
	<a href="javascript:void(0);" id="next">></a>
```

Add jQuery and **mustang.js** file

```html
	<body>
		...
		<!-- include jQuery -->
		<!-- include mustang.js -->
		<script src="assets/js/mustang.js"></script>
	</body>
```

Set the Mustang.js properties

```javascript
	// start plugin with the container
	$("#container").mustang({
		// slide item
		item: '.item',
		// time between each slide
		time: 2500,
        // want to active next and prev buttons?
        // if you type false,
        // you don't have to worry about buttons
        buttonActive: true,
        // next button
        next: "#next",
        // prev button
        prev: "#prev"
	});
```

and ready! Your slide is already working!

You can copy the SCSS file to use too. To see an example, [click here](http://devmath.github.io/mustang-js) 