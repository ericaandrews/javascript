// <!DOCTYPE html>
// <html>
// <head>
//     <style>   
//       #p_mail, #p_order, #p_square{text-align: center;}
//       table, th, td{border: 1px solid;font-size: 8pt; margin: 0 auto; border-collapse: collapse;}
//     </style>
// </head>    
// <body>
//     <p id="p_mail">This webpage calculates an amount sold weekly based on quantity and price of five products sold by a mail-order house.</p>
//         <p id="p_order">Enter quantity for each product:</p><br>
//             <form name="mailorder">
//             <table>
//                 <tr id="background_one"><td>Product #</td><td>Qty</td><td>Price</td><td>Amount</td></tr>
//                 <tr id="background_two"><td><input value="1" id="one" disabled></td><td><input id="qtyone" type="number"></td><td>2.98</td><td><input id="amntone" readonly></td></tr>
//                 <tr id="background_three"><td><input value="2" id="two" disabled></td><td><input id="qtytwo" type="number"></td><td>4.50</td><td><input id="amnttwo" readonly></td></tr>
//                 <tr id="background_four"><td><input value="3" id="three" disabled></td><td><input id="qtythree" type="number"></td><td>9.98</td><td><input id="amntthree" readonly></td></tr>
//                 <tr id="background_five"><td><input value="4" id="four" disabled></td><td><input id="qtyfour" type="number"></td><td>4.49</td><td><input id="amntfour" readonly></td></tr>
//                 <tr id="background_six"><td><input value="5" id="five" disabled></td><td><input id="qtyfive" type="number"></td><td>6.87</td><td><input id="amntfive" readonly></td></tr>
//                 <tr id="background_seven"><td colspan="3">Total Amount Sold</td><td><input id="totlamnt" readonly></td></tr>
//                 <tr id="background_eight"><td colspan="4"><button type="button" onclick="amount();">Submit</button><button type="reset">Reset</button></td></tr>
//             </table>
            <script>
            function amount(){
                
                var quantityOne = document.getElementById("qtyone").value;
                var quantityTwo = document.getElementById("qtytwo").value; 
                var quantityThree = document.getElementById("qtythree").value;
                var quantityFour = document.getElementById("qtyfour").value;
                var quantityFive = document.getElementById("qtyfive").value;

                var amntOne = document.getElementById("amntone").value;
                var amntTwo = document.getElementById("amnttwo").value;
                var amntThree = document.getElementById("amntthree").value;
                var amntFour = document.getElementById("amntfour").value;
                var amntFive = document.getElementById("amntfive").value;
                
                var totalAmnt = document.getElementById("totlamnt").value;
                var sum;

                //display amount for quantity sold for the week for each product
                switch(quantityOne)
                {
                    case quantityOne:
                    amntone = quantityOne * 2.98;     
                    break;                         
                }
                document.getElementById("amntone").value = amntone.toFixed(2);
                
                switch(quantityTwo)
                {
                    case quantityTwo:
                    amnttwo = quantityTwo * 4.50;    
                    break;    
                }
                document.getElementById("amnttwo").value = amnttwo.toFixed(2);
                
                switch(quantityThree)
                {
                    case quantityThree:
                    amntthree = quantityThree * 9.98;    
                    break;    
                }
                document.getElementById("amntthree").value = amntthree.toFixed(2);
                
                switch(quantityFour)
                {
                    case quantityFour:
                    amntfour = quantityFour * 4.49;    
                    break;    
                }
                document.getElementById("amntfour").value = amntfour.toFixed(2);
                
                switch(quantityFive)
                {
                    case quantityFive:
                    amntfive = quantityFive * 6.87;    
                    break;    
                }
                document.getElementById("amntfive").value = amntfive.toFixed(2);
                
                switch(totalAmnt)
                {
                    case totalAmnt:
                    amntone = quantityOne * 2.98;     
                    amnttwo = quantityTwo * 4.50;    
                    amntthree = quantityThree * 9.98;    
                    amntfour = quantityFour * 4.49;    
                    amntfive = quantityFive * 6.87;    

                    var sum = Number(amntone) + Number(amnttwo) + Number(amntthree) + Number(amntfour) + Number(amntfive);
                    break;    
                }
                document.getElementById("totlamnt").value = sum.toFixed(2);        
            }
            </script>  
//             </form>
//         <br>
// </body> 
// </html>    
