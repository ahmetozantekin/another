# Another JS

Another JS is a little library which define alternative sources for your links. 
When your ```href``` target is down or fail because of somethings, ```another``` automatically route to ```data-another``` target.


#### Install with Bower

``` 
bower install another
```

#### Easy Integration

  - Include jQuery (1.11.3)
  - Call in HTML
  - Add ```data-another``` attribute to element which you want
  - Add ```another()``` relation to your element in js code

#### Step 1: Include JS Files into your HTML

```
    <head>
        <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
	    <script src="another.js"></script>
    </head>
```

#### Step 2: Add attribute to your link element
```
    <a href="zutturubut.pig" data-another="http://google.com">It's my cool link text</a>
```

#### Step 3: Activate plugin for  element in JS
```
<script>
		$(function() {
			$('a').another();
		})
	</script>
```



