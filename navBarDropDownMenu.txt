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
<!--This webpage contains a script that displays a top navigation bar containing a 
link to 'ONE' and five other links that will be to the cover page for each 
'TWO' - 'SIX'. When you mouseover any of these other links, a drop-down 
menu that contains the links of parts (part 1, part 2, etc...) is displayed.    -->
<body>
    <br><br><br>
        <ul id="nav" style="text-align: center">   
            <div class="dropdown">
             <a href="" id="navpart_one">ONE -</a>    
            </div>    
            <div class="dropdown">
             <a href="" id="navpart_two">TWO -</a>
            <div class="dropdown-content">
                <a href="" id="two_partone">Part 1 </a><br><br>
                <a href="" id="two_parttwo">Part 2 </a><br><br>
                <a href="" id="two_partthree">Part 3 </a><br><br>
                <a href="" id="two_partfour">Part 4 </a><br><br>
                <a href="" id="two_partfive">Part 5</a>
            </div>
            </div> 
            <div class="dropdown">
             <a href="" id="navpart_three">THREE -</a>
            <div class="dropdown-content">
                <a href="" id="three_partone">Part 1 </a><br><br>
                <a href="" id="three_parttwo">Part 2 </a><br><br>
                <a href="" id="three_partthree">Part 3 </a><br><br>
                <a href="" id="three_partfour">Part 4</a><br><br>
            </div>
            </div> 
            <div class="dropdown">
             <a href="" id="navpart_four">FOUR -</a>
            <div class="dropdown-content">                
                <a href="" id="four_partone">Part 1 </a><br><br>
                <a href="" id="four_parttwo">Part 2 </a><br><br>
                <a href="" id="four_partthree">Part 3 </a><br><br>
                <a href="" id="four_partfour">Part 4</a><br><br>
            </div>  
            </div> 
            <div class="dropdown">
             <a href="" id="navpart_five">FIVE -</a>
            <div class="dropdown-content">                
                <a href="" id="five_partone">Part 1 </a><br><br>
                <a href="" id="five_parttwo">Part 2 </a><br><br>
                <a href="" id="five_partthree">Part 3</a>
            </div>  
            </div>
            <div class="dropdown">
             <a href="" id="navpart_six">SIX</a>    
            <div class="dropdown-content">                
                <a href="" id="six_partone">Part 1 </a><br><br>
                <a href="" id="six_parttwo">Part 2 </a><br><br>
                <a href="" id="six_partthree">Part 3</a>
            </div>  
        </div>     
    </ul>
</body>    
</html>
