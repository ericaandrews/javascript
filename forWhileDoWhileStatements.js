<!DOCTYPE html>
<html>
<head>
<!--<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">-->
<!--<link rel="stylesheet" href="/resources/demos/style.css">--> 
<style>
    #draggable {border: 1px solid;margin: 20px;}
    #pone, #ptwo, #pthree{text-align: center}
    #scriptone{text-align: center; font-size: 10pt;}
    #scripttwo{text-align: center; font-size: 10pt;}
</style>    
</head>    
    <body>
        <div id="draggable" class="ui-widget-content">
            <p id="pone">Part 1a: This webpage calculates the product and sum of every third integer from 5 to 20 inclusive and then displays the results</p><br>
                <div id="scriptone">
                <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
                <script>
                $( function() {
                    $( "#draggable" ).draggable();
                } );
                </script>         
                <script>
                    var product = 1;
                    var sum = 0;
                    for(var integer = 5;integer <= 20;integer += 3){
                        product *= integer;
                        sum += integer;
                    }
                    document.write("The product of every third integer from 5 to 20 is " + product);
                    document.write("<br><br>The sum of every third integer from 5 to 20 is " + sum);
                </script>
                </div><br>
                <p id="ptwo">Part 1b: This webpage calculates the product and sum of every fourth integer from 3 to 31 inclusive and then displays the results</p><br>
                <div id="scripttwo">
                <script>
                    var product = 1;
                    var sum = 0;
                    var integer = 3;
                    while(integer <= 31){
                        product *= integer;
                        sum += integer; 
                        integer += 4;
                    }
                    document.write("The product of every fourth integer from 3 to 31 is " + product);
                    document.write("<br><br>The sum of every fourth integer from 3 to 31 is " + sum);
                </script>
                </div><br>
            <p id="pthree">This section can be dragged around this webpage</p>
        </div>            
    </body> 
</html>    
