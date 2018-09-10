// <!DOCTYPE html>
// <html>
// <head>
//     <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
//     <link rel="stylesheet" href="/resources/demos/style.css">
//     <style>
//         table, th, td{font-size: 8pt; border: 1px solid; border-collapse: collapse; text-align: right; margin: 0 auto;}
//         input{text-align: right;}
//     </style>
// </head>    
//     <body>
//         <p>'A large company pays its salespeople on a commission basis. The salespeople receive $200 per week, plus 9% of their gross sales for that week. The following webpage calculates how much a salesperson sold and earned, based on the items sold.'</p><br>
//           <div style="text-align: right">   
//           <p>Salesperson's Name:<input id="name" type="text" title="Please make sure that the salesperson's name is spelled correctly"></p><br>
//             <h6>#Items sold for the last week:</h6>    
//             <form>
//                 Item 1:<input type="number" id="itemone" min="0"><br> 
//                 Item 2:<input type="number" id="itemtwo" min="0"><br>    
//                 Item 3:<input type="number" id="itemthree" min="0"><br> 
//                 Item 4:<input type="number" id="itemfour" min="0"><br><br>
//                 <button type="button" onclick="commission()">Submit</button><button type="reset">Reset</button><br><br><br> 
//             <table>
//                 <tr><th>Item#</th><th>Price</th><th>Number Sold</th><th>Total</th></tr>
//                 <tr><td>1</td><td>239.99</td><td><input type="number" id="numbersolditemone" readonly></td><td><input id="totalitemone" readonly></td></tr>
//                 <tr><td>2</td><td>129.75</td><td><input type="number" id="numbersolditemtwo" readonly></td><td><input id="totalitemtwo" readonly></td></tr>
//                 <tr><td>3</td><td>99.95</td><td><input type="number" id="numbersolditemthree" readonly></td><td><input id="totalitemthree" readonly></td></tr>
//                 <tr><td>4</td><td>350.89</td><td><input type="number" id="numbersolditemfour" readonly></td><td><input id="totalitemfour" readonly></td></tr>
//             </table>
//                 <br><br>
//                 Total amount sold: <input id="amountsold" readonly><br>
//                 Total weekly earnings: <input id="weeklyearnings" readonly> 
                    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
                    <script>
                    $(function() {
                    $("#name").tooltip();
                    });
                    </script>
                <script>
                    function commission(){
                        let itemone = document.getElementById("itemone").value;
                        let itemtwo = document.getElementById("itemtwo").value;
                        let itemthree = document.getElementById("itemthree").value;
                        let itemfour = document.getElementById("itemfour").value;
                        
                        if(itemone < 0 || itemtwo < 0 || itemthree < 0 || itemfour < 0){
                            alert("Numeric values entered for Items 1 to 4 are >= 0");
                        }
                        else{    
                        let numbersolditemone = Number(itemone);
                        document.getElementById("numbersolditemone").value = numbersolditemone;
                        let numbersolditemtwo = Number(itemtwo);
                         document.getElementById("numbersolditemtwo").value = numbersolditemtwo;
                        let numbersolditemthree = Number(itemthree);
                         document.getElementById("numbersolditemthree").value = numbersolditemthree;
                        let numbersolditemfour = Number(itemfour);
                         document.getElementById("numbersolditemfour").value = numbersolditemfour;
                        
                        let totalitemone = Number(numbersolditemone) * 239.99;
                        let tone = totalitemone.toFixed(2);
                        document.getElementById("totalitemone").value = tone;
                        
                        let totalitemtwo = Number(numbersolditemtwo) * 129.75;
                        let ttwo = totalitemtwo.toFixed(2);
                         document.getElementById("totalitemtwo").value = ttwo;
                        
                        let totalitemthree = Number(numbersolditemthree) * 99.95;
                        let tthree = totalitemthree.toFixed(2);
                         document.getElementById("totalitemthree").value = tthree;
                        
                        let totalitemfour = Number(numbersolditemfour) * 350.89;
                        let tfour = totalitemfour.toFixed(2);
                        document.getElementById("totalitemfour").value = tfour;
                        
                        let amountsold = Number(totalitemone) + Number(totalitemtwo) + Number(totalitemthree) + Number(totalitemfour); 
                        let amntsld = amountsold.toFixed(2);
                        document.getElementById("amountsold").value = amntsld;
                        
                        let weeklyearnings =  200.00 + (.09 * Number(amountsold));
                        let earningsdisplay = weeklyearnings.toFixed(2);
                        document.getElementById("weeklyearnings").value = earningsdisplay;
                        }
                    }
            </script>
//         </form>
//       </div> 
//     </body> 
// </html>    
