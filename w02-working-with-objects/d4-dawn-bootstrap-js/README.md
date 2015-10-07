# Bootstrap's Javascript

| Objectives |
| :--- |
| Utilize Bootstrap's JavaScript components |

## Motivation (Why?)

Bootstrap is virtually universal today and its JS components simplify many common UX/UI patterns.

##Using jQuery Plugins with Bootstrap
- One of the most powerful aspects of jQuery is that its functionality can be extended by plugins.
- You can write your own plugins which is pretty straightforward or you can use a wide variety of plugins created by other people.
- Bootstrap provides a number of plugins that help you with your development.
- You can see a good list of what they provide [here](http://getbootstrap.com/javascript/).
- Some of the plugins can be manipulated through data- attributes instead of having to write any JavaScript, like the dropdown plugin:

```
<div class="dropdown">
	<button id="dLabel" type="button" data-toggle="dropdown">
		Dropdown trigger
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu">
		<li><a href="#">Link 1</a></li>
	</ul>
</div>
```

- Most of these plugins can also be triggered via JavaScript as well. For example the dropdown menus again:

```
$('.dropdown-toggle').dropdown();
```

##In-Class Exercise: Tooltips
- Let's take a look at a neat plugin called the tooltips.
- Try with a partner to implement a tooltip on some lists.

### Docs & Resources

[Bootstrap JavaScript Docs](http://getbootstrap.com/javascript/)
