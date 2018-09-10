// <!DOCTYPE html>
// <html>
// <head>
// </head>  
// <body style="text-align: right">    
// <!--            Enter five integers and receive the number of negatives, positives and zeros with Jquery -->           
//             <form>    
//                 Integer one: <input type="number" name="one" /><br>  
//                 Integer two: <input type="number" name="two"/><br>   
//                 Integer three: <input type="number" name="three"/><br>
//                 Integer four: <input type="number" name="four"/><br>
//                 Integer five: <input type="number" name="five"/><br><br>    
//                 <input type="button" value="Submit" onclick="negative_int(); positive_int(); zero_int();"/>
//                 <input type="reset" value="Reset"/><br><br>     
//             </form>
//             <div id="jquery" style="text-align: center;border: 2px dotted;width: 50%;margin: 0 auto;padding: 20px;">   
//                 Negatives: <input type="number" name="negatives" readonly/><br> 
//                 Positives: <input type="number" name="positives" readonly/><br>    
//                 Zero&#40;s&#41;: <input type="number" name="zeros" readonly/><br><br> 
//                 <button>Click to Fade</button><br> 
//             </div><br>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script>
                $(document).ready(function(){
                $("button").click(function(){
                $("#jquery").fadeTo("slow", 0.15);
                });
                });
            </script>
        <script>
            function negative_int(){
                let one = document.getElementsByName("one")[0].value;
                let two = document.getElementsByName("two")[0].value;
                let three = document.getElementsByName("three")[0].value;
                let four = document.getElementsByName("four")[0].value;
                let five = document.getElementsByName("five")[0].value;
 
                if(one < 0){
                    one = 1;  
                } 
                else{
                    one = 0;
                }
                
                if(two < 0){
                    two = 1;  
                } 
                else{
                    two = 0;
                }
                
                if(three < 0){
                    three = 1;  
                } 
                else{
                    three = 0;
                }
                
                if(four < 0){
                    four = 1;  
                }
                else{
                    four = 0;
                }
                
                if(five < 0){
                    five = 1;  
                }
                else{
                    five = 0;
                }
                let negatives = Number(one) + Number(two) + Number(three) + Number(four) + Number(five);
                document.getElementsByName("negatives")[0].value = negatives;
            }
            
            function positive_int(){
                let one = document.getElementsByName("one")[0].value;
                let two = document.getElementsByName("two")[0].value;
                let three = document.getElementsByName("three")[0].value;
                let four = document.getElementsByName("four")[0].value;
                let five = document.getElementsByName("five")[0].value;
 
                if(one > 0){
                    one = 1;  
                } 
                else{
                    one = 0;
                }
                
                if(two > 0){
                    two = 1;  
                } 
                else{
                    two = 0;
                }
                
                if(three > 0){
                    three = 1;  
                } 
                else{
                    three = 0;
                }
                
                if(four > 0){
                    four = 1;  
                }
                else{
                    four = 0;
                }
                
                if(five > 0){
                    five = 1;  
                }
                else{
                    five = 0;
                }
                let positives = Number(one) + Number(two) + Number(three) + Number(four) + Number(five);
                document.getElementsByName("positives")[0].value = positives;
            }
            function zero_int(){
                let one = document.getElementsByName("one")[0].value;
                let two = document.getElementsByName("two")[0].value;
                let three = document.getElementsByName("three")[0].value;
                let four = document.getElementsByName("four")[0].value;
                let five = document.getElementsByName("five")[0].value;
 
                if(one == 0){
                    one = 1;  
                }  
                else{
                    one = 0;
                }
                
                if(two == 0){
                    two = 1;  
                } 
                else{
                    two = 0;
                }
                
                if(three == 0){
                    three = 1;  
                } 
                else{
                    three = 0;
                }
                
                if(four == 0){
                    four = 1;  
                }
                else{
                    four = 0;
                }
                
                if(five == 0){
                    five = 1;  
                }
                else{
                    five = 0;
                }
                let zeros = Number(one) + Number(two) + Number(three) + Number(four) + Number(five);
                document.getElementsByName("zeros")[0].value = zeros;
            }
        </script>
//     </body> 
// </html>  
