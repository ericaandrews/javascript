// <!DOCTYPE html>
// <html>
// <head>
// </head>    
// <!--Enter three integers to receive a sum, average, product, lowest value and highest value    -->
// <body style="text-align: right">
//     <form>    
//         Integer one: <input type="number" name="one" /><br>  
//         Integer two: <input type="number" name="two"/><br>   
//         Integer three: <input type="number" name="three"/><br><br>          
//         <input type="button" value="Submit" onclick="sum_int(); average_int(); product_int(); smallest_int(); largest_int();"/>
//         <input type="reset" value="Reset"/><br><br>    
//             Sum: <input type="number" name="sum" readonly/><br> 
//             Average: <input type="number" name="average" readonly/><br>    
//             Product: <input type="number" name="product" readonly/><br>
//             Smallest: <input type="number" name="smallest" readonly/><br>  
//             Largest: <input type="number" name="largest" readonly/>    
//     </form>
        <script>
            function sum_int(){
                let one = document.getElementsByName("one")[0].value;
                let two = document.getElementsByName("two")[0].value;
                let three = document.getElementsByName("three")[0].value;
                let sum = Number(one) + Number(two) + Number(three);
                document.getElementsByName("sum")[0].value = sum;
            }
            function average_int(){
                let one = document.getElementsByName("one")[0].value;
                let two = document.getElementsByName("two")[0].value;
                let three = document.getElementsByName("three")[0].value;
                let average = ((Number(one) + Number(two) + Number(three))/3);
                document.getElementsByName("average")[0].value = average;
            }    
            function product_int(){
                let one = document.getElementsByName("one")[0].value;
                let two = document.getElementsByName("two")[0].value;
                let three = document.getElementsByName("three")[0].value;
                let product = Number(one) * Number(two) * Number(three);
                document.getElementsByName("product")[0].value = product;
            }    
            function smallest_int(){
                let one = document.getElementsByName("one")[0].value;
                let two = document.getElementsByName("two")[0].value;
                let three = document.getElementsByName("three")[0].value; 
                let smallest = Math.min(Number(one), Number(two), Number(three));
                document.getElementsByName("smallest")[0].value = smallest;
            }    
            function largest_int(){
                let one = document.getElementsByName("one")[0].value;
                let two = document.getElementsByName("two")[0].value;
                let three = document.getElementsByName("three")[0].value;        
                let largest = Math.max(Number(one), Number(two), Number(three));
                document.getElementsByName("largest")[0].value = largest;
            }    
        </script>
//    </body> 
// </html>    
