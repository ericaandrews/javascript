<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="description" content="jQuery"><title>jQuery</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>    
</head> 
<body>
<div class="content">
<h1>Title</h1>
<ul></ul>    
<h2 id="">Title One</h2>
<h3>Sub Title One</h3>
<p>This is a paragraph.</p>
<h3>Sub Title Two</h3>
<p>This is a paragraph.</p>
<h3>Sub Title Three</h3>
<p>This is a paragraph.</p>
<hr/>
<h2 id="">Title Two</h2>
<h3>Sub Title One</h3>
<p>This is a paragraph.</p>
<h3>Sub Title Two</h3>
<p>This is a paragraph.</p>
<hr/>
<h2 id="">Title Three</h2>
<h3>Sub Title One</h3>
<p>This is a paragraph.</p>
<h3>Sub Title Two</h3>
<p>This is a paragraph.</p>
<hr/>
<h2 id="">Title Four</h2>
<h3>Sub Title One</h3>
<p>This is a paragraph.</p>
<h3>Sub Title Two</h3>
<p>This is a paragraph.</p>
<h3>Sub Title Three</h3>
<p>This is a paragraph.</p>
<h3>Sub Title Four</h3>
<p>This is a paragraph.</p>
<hr/>
</div>
 -->
<script>    
		$(document).ready(function () {
			var c = document.getElementsByClassName("content");
			var h_two = c[0].getElementsByTagName("h2");
			var u_l = document.createElement("ul");

			for (var i = 0; i < h_two.length; i++) {
				var l_i = document.createElement("li");
				l_i.innerHTML = '<a href="#' + i + '">' + h_two[i].textContent + '</a>';
				u_l.appendChild(l_i);
				h_two[i].setAttribute("id", i);
			}

			$('.content h1').after(u_l.innerHTML);
		});    
</script>

<!-- </body>    
</html> -->
