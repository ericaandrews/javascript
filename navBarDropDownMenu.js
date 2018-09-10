<!DOCTYPE html>
<html>
<head>
<style>
.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 70px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
}
.dropdown:hover .dropdown-content {
    display: block;
}
    
a:hover {
    background-color: #ccccff;
}    
</style>    
</head>
<!--This webpage contains a script that displays a top navigation bar containing a link to Homework 1 and five other links that will be to the cover page for each Homework 2 - Homework 6. When you mouseover any of these other links, a drop-down menu that contains the links of homework parts (part 1, part 2, etc...) is displayed.    -->
<body>
    <br><br><br>
        <ul id="nav" style="text-align: center">   
            <div class="dropdown">
             <a href="" id="navparts">HOMEWORK ONE -</a>    
            </div>    
            <div class="dropdown">
             <a href="" id="navparts">HOMEWORK TWO -</a>
            <div class="dropdown-content">
                <a href="" id="navpartss">Part 1 </a><br><br>
                <a href="" id="navpartsss">Part 2 </a><br><br>
                <a href="" id="navpartssss">Part 3 </a><br><br>
                <a href="" id="navpartsssss">Part 4 </a><br><br>
                <a href="" id="navpartssssss">Extra Credit</a>
            </div>
            </div> 
            <div class="dropdown">
             <a href="" id="navparts">HOMEWORK THREE -</a>
            <div class="dropdown-content">
                <a href="" id="navpartss">Part 1 </a><br><br>
                <a href="" id="navpartsss">Part 2 </a><br><br>
                <a href="" id="navpartssss">Part 3 </a><br><br>
                <a href="" id="navpartsssss">Part 4</a><br><br>
            </div>
            </div> 
            <div class="dropdown">
             <a href="" id="navparts">HOMEWORK FOUR -</a>
            <div class="dropdown-content">                
                <a href="" id="navpartss">Part 1 </a><br><br>
                <a href="" id="navpartsss">Part 2 </a><br><br>
                <a href="" id="navpartssss">Part 3 </a><br><br>
                <a href="" id="navpartsssss">Extra Credit</a><br><br>
            </div>  
            </div> 
            <div class="dropdown">
             <a href="" id="navparts">HOMEWORK FIVE -</a>
            <div class="dropdown-content">                
                <a href="" id="navpartss">Part 1 </a><br><br>
                <a href="" id="navpartsss">Part 2 </a><br><br>
                <a href="" id="navpartssss">Part 3</a>
            </div>  
            </div>
            <div class="dropdown">
             <a href="" id="navparts">HOMEWORK SIX</a>    
            <div class="dropdown-content">                
                <a href="" id="navpartss">Part 1 </a><br><br>
                <a href="" id="navpartsss">Part 2 </a><br><br>
                <a href="" id="navpartssss">Part 3</a>
            </div>  
        </div>     
    </ul>
</body>    
</html>
