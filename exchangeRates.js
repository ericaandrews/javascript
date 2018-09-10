// <!DOCTYPE html>
// <html>
// <head>
// <style>
//     form{margin: 25px;}
//     table{width: 50%;margin: 30px auto;}
//     table, th, td{border: 1px solid;border-collapse: collapse;text-align: left;font-size: 10pt;}
//     #display, #exchangerates{text-align: center;padding: 10px;border: 1px solid;width: 60%;margin: 30px auto;}
//     #exchangerates{padding: 20px;display: none;}
// </style> 
// </head> 
// <!--                Enter dollar amount to output the foreign exchange values-->

// <body>
//      <p id="display">Click to show the 'Monetary Exchange Rates'</p>
//         <div id="exchangerates">     
//             <p>The foreign exchange rates on <span id="date"></span></p>
// <!--                    Date formatted as 'Month Day, Year'-->
                <script>
                   var d = new Date(); 
                   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                   document.getElementById("date").innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
                </script>
                    
// <p>Enter a dollar amount in the table below to see the corresponding foreign exchange values:</p>  
//                 <table id="table">
//                 <form>   
//                 <tr><td colspan="3" id="monetary">Monetary Exchange Rates</td></tr> 
//                 <tr id="monetary"><td>Currency</td><td>Rate</td><td>Value</td></tr> 
//                 <tr><td>British Pound</td><td id="rightjustify"><input size="10" value="0.77521" readonly/></td>
//                     <td id="britishpound"></td></tr>   
//                 <tr><td>Canadian Dollar</td><td id="rightjustify"><input size="10" value="1.34461" readonly/></td>
//                     <td id="canadiandollar"></td></tr>    
//                 <tr><td>Euro</td><td id="rightjustify"><input size="10" value="0.88754" readonly/></td>
//                     <td id="euro"></td></tr>    
//                 <tr><td>Japanese Yen</td><td id="rightjustify"><input size="10" value="109.350" readonly/></td>
//                     <td id="japaneseyen"></td></tr>    
//                 <tr><td>Mexican Peso</td><td id="rightjustify"><input size="10" value="18.2806" readonly/></td>
//                     <td id="mexicanpeso"></td></tr> 
//                 <tr>
//                     <td id="monetary" colspan="2">Enter Amount of U.S. Dollars</td>
//                     <td id="rightjustify"><input size="10" id="textfield"/><button type="button" onclick="aFunction()">Submit</button><button type="reset" id="table" value="Reset">Reset</button></td><br>
//                 </tr>                    

             <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
                    <script>
                    $(document).ready(function(){
                    $("#display").click(function(){
                    $("#exchangerates").slideToggle("slow");
                    });
                    $('#textfield').focus(function() {
		             $(this).css('background-color','lightblue');
	                }); 
                    });    
                    </script> 
                    <script>
                        function aFunction() 
                        {
                            let textfield = document.getElementById("textfield").value;
                            var britishpound = 0.77521 * Number(textfield);
                            var canadiandollar = 1.34461 * Number(textfield);
                            var euro = 0.88754 * Number(textfield);
                            var japaneseyen = 109.350 * Number(textfield);
                            var mexicanpeso = 18.2806 * Number(textfield);
                            var bp = britishpound.toFixed(2);
                            var cd = canadiandollar.toFixed(2);
                            var eu = euro.toFixed(2);
                            var jy = japaneseyen.toFixed(2);
                            var mp = mexicanpeso.toFixed(2);
                            document.getElementById("britishpound").innerHTML = bp;
                            document.getElementById("canadiandollar").innerHTML = cd;
                            document.getElementById("euro").innerHTML = eu;
                            document.getElementById("japaneseyen").innerHTML = jy;
                            document.getElementById("mexicanpeso").innerHTML = mp;
                        }
                    </script>
//                   </form>     
//             </table>
//         </div>  
//     </body> 
// </html>    
