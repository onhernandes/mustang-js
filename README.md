# Mustang.js - Simple slide plugin - 
[DEMO](https://onhernandes.github.io/mustang-js)

Simple slide plugin with CSS3 + a bit of pure JS(yes, without jQuery! and 2.4kb minified!)

## How to use

Add `mustang.min.js` to your file then, call the plugin(these also are the defaults)

```html
<script>
	Mustang('.parent', {
		item: '.item',
		time: 2500,
		height: 300, // parent height, children will have 100%
		transition: '1s ease 0.1s', // css3 transition for slide items
		next: false, // next button, optional
		prev: false // prev button, optional
	})
</script>
```

You don't need to set `next` and `prev`, but if you want have buttons you must active both.

Mustang sets CSS for parent/children automatically, the CSS attributes are:

```css
.parent {
	position: relative;
	display: flex;
	flex-flow: nowrap row;
	overflow: hidden;
	box-sizing: border-box;
	height: 300px;
}

.child {
	flex: 0 0 100%;
	height: 100%;
	box-sizing: border-box;
	transition: all 1s ease 0.1s;
	transform: translateX(-100%); // when sliding
}
```

## Hey dude, I'm having some problems...

Just open an 
[issue](https://github.com/onhernandes/mustang-js/issues) and let's 
solve it!

## See also

1. [Complete Sublime 
SCSS](https://github.com/onhernandes/sublime-scss-snippets)
1. [Dragon - Jekyll 
Theme](https://github.com/onhernandes/dragon-theme)

## License

[MIT License](LICENSE.md)
