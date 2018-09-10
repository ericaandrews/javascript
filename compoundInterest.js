// <!DOCTYPE html>
// <html>
// <head>
//     <style>
//         #column{column-count: 3;}
//         table, th, td{border: 1px solid;font-size: 8pt; margin: 0 auto; border-collapse: collapse;}
//     </style>
// </head>    
//     <body>
//         <p id="p_interest">This webpage calculates compound interest on a principal of $1000 for interest rates of 5, 6, 7, 8, 9, and 10%, for years 1 through 10.</p><br>
//             <div id="column">
// <!--
//                 P = principal /the initial amount you borrow or deposit/
//                 r = annual rate of interest /percentage/
//                 n = number of years the amount is deposited
//                 A = amount of money accumulated after n years, including interest
//                 A = P(1 + r)^n /compound interest/  
// -->
//             <form>    
//             <table>
//                 <tr id="maroon_white_one"><td>Year</td><td>Amount on deposit</td><td>Interest Rate</td></tr>
//                 <tr id="yellow_one"><td>1</td><td><input id="amnt_one" readonly></td><td>0.05</td></tr>
//                 <tr><td>2</td><td><input id="amnt_two" readonly></td><td>0.05</td></tr>
//                 <tr id="yellow_two"><td>3</td><td><input id="amnt_three" readonly></td><td>0.05</td></tr>
//                 <tr><td>4</td><td><input id="amnt_four" readonly></td><td>0.05</td></tr>
//                 <tr id="yellow_three"><td>5</td><td><input id="amnt_five" readonly></td><td>0.05</td></tr>
//                 <tr><td>6</td><td><input id="amnt_six" readonly></td><td>0.05</td></tr>
//                 <tr id="yellow_four"><td>7</td><td><input id="amnt_seven" readonly></td><td>0.05</td></tr>
//                 <tr><td>8</td><td><input id="amnt_eight" readonly></td><td>0.05</td></tr>
//                 <tr id="yellow_five"><td>9</td><td><input id="amnt_nine" readonly></td><td>0.05</td></tr>
//                 <tr><td>10</td><td><input id="amnt_ten" readonly></td><td>0.05</td></tr>
//             </table><br>
//             <table>
//                 <tr id="maroon_white_two"><td>Year</td><td>Amount on deposit</td><td>Interest Rate</td></tr>
//                 <tr id="yellow_six"><td>1</td><td><input id="amnt_one_six" readonly></td><td>0.06</td></tr>
//                 <tr><td>2</td><td><input id="amnt_two_six" readonly></td><td>0.06</td></tr>
//                 <tr id="yellow_seven"><td>3</td><td><input id="amnt_three_six" readonly></td><td>0.06</td></tr>
//                 <tr><td>4</td><td><input id="amnt_four_six" readonly></td><td>0.06</td></tr>
//                 <tr id="yellow_eight"><td>5</td><td><input id="amnt_five_six" readonly></td><td>0.06</td></tr>
//                 <tr><td>6</td><td><input id="amnt_six_six" readonly></td><td>0.06</td></tr>
//                 <tr id="yellow_nine"><td>7</td><td><input id="amnt_seven_six" readonly></td><td>0.06</td></tr>
//                 <tr><td>8</td><td><input id="amnt_eight_six" readonly></td><td>0.06</td></tr>
//                 <tr id="yellow_ten"><td>9</td><td><input id="amnt_nine_six" readonly></td><td>0.06</td></tr>
//                 <tr><td>10</td><td><input id="amnt_ten_six" readonly></td><td>0.06</td></tr>
//             </table><br>
//             <table>
//                 <tr id="maroon_white_three"><td>Year</td><td>Amount on deposit</td><td>Interest Rate</td></tr>
//                 <tr id="yellow_eleven"><td>1</td><td><input id="amnt_one_seven" readonly></td><td>0.07</td></tr>
//                 <tr><td>2</td><td><input id="amnt_two_seven" readonly></td><td>0.07</td></tr>
//                 <tr id="yellow_twelve"><td>3</td><td><input id="amnt_three_seven" readonly></td><td>0.07</td></tr>
//                 <tr><td>4</td><td><input id="amnt_four_seven" readonly></td><td>0.07</td></tr>
//                 <tr id="yellow_thirteen"><td>5</td><td><input id="amnt_five_seven" readonly></td><td>0.07</td></tr>
//                 <tr><td>6</td><td><input id="amnt_six_seven" readonly></td><td>0.07</td></tr>
//                 <tr id="yellow_fourteen"><td>7</td><td><input id="amnt_seven_seven" readonly></td><td>0.07</td></tr>
//                 <tr><td>8</td><td><input id="amnt_eight_seven" readonly></td><td>0.07</td></tr>
//                 <tr id="yellow_fifteen"><td>9</td><td><input id="amnt_nine_seven" readonly></td><td>0.07</td></tr>
//                 <tr><td>10</td><td><input id="amnt_ten_seven" readonly></td><td>0.07</td></tr>
//             </table><br>
//             <table>
//                 <tr id="maroon_white_four"><td>Year</td><td>Amount on deposit</td><td>Interest Rate</td></tr>
//                 <tr id="yellow_sixteen"><td>1</td><td><input id="amnt_one_eight" readonly></td><td>0.08</td></tr>
//                 <tr><td>2</td><td><input id="amnt_two_eight" readonly></td><td>0.08</td></tr>
//                 <tr id="yellow_seventeen"><td>3</td><td><input id="amnt_three_eight" readonly></td><td>0.08</td></tr>
//                 <tr><td>4</td><td><input id="amnt_four_eight" readonly></td><td>0.08</td></tr>
//                 <tr id="yellow_eighteen"><td>5</td><td><input id="amnt_five_eight" readonly></td><td>0.08</td></tr>
//                 <tr><td>6</td><td><input id="amnt_six_eight" readonly></td><td>0.08</td></tr>
//                 <tr id="yellow_nineteen"><td>7</td><td><input id="amnt_seven_eight" readonly></td><td>0.08</td></tr>
//                 <tr><td>8</td><td><input id="amnt_eight_eight" readonly></td><td>0.08</td></tr>
//                 <tr id="yellow_twenty"><td>9</td><td><input id="amnt_nine_eight" readonly></td><td>0.08</td></tr>
//                 <tr><td>10</td><td><input id="amnt_ten_eight" readonly></td><td>0.08</td></tr>
//             </table><br>
//             <table>
//                 <tr id="maroon_white_five"><td>Year</td><td>Amount on deposit</td><td>Interest Rate</td></tr>
//                 <tr id="yellow_twenty_one"><td>1</td><td><input id="amnt_one_nine" readonly></td><td>0.09</td></tr>
//                 <tr><td>2</td><td><input id="amnt_two_nine" readonly></td><td>0.09</td></tr>
//                 <tr id="yellow_twenty_two"><td>3</td><td><input id="amnt_three_nine" readonly></td><td>0.09</td></tr>
//                 <tr><td>4</td><td><input id="amnt_four_nine" readonly></td><td>0.09</td></tr>
//                 <tr id="yellow_twenty_three"><td>5</td><td><input id="amnt_five_nine" readonly></td><td>0.09</td></tr>
//                 <tr><td>6</td><td><input id="amnt_six_nine" readonly></td><td>0.09</td></tr>
//                 <tr id="yellow_twenty_four"><td>7</td><td><input id="amnt_seven_nine" readonly></td><td>0.09</td></tr>
//                 <tr><td>8</td><td><input id="amnt_eight_nine" readonly></td><td>0.09</td></tr>
//                 <tr id="yellow_twenty_five"><td>9</td><td><input id="amnt_nine_nine" readonly></td><td>0.09</td></tr>
//                 <tr><td>10</td><td><input id="amnt_ten_nine" readonly></td><td>0.09</td></tr>
//             </table><br>
//             <table>
//                 <tr id="maroon_white_six"><td>Year</td><td>Amount on deposit</td><td>Interest Rate</td></tr>
//                 <tr id="yellow_twenty_six"><td>1</td><td><input id="amnt_one_ten" readonly></td><td>0.10</td></tr>
//                 <tr><td>2</td><td><input id="amnt_two_ten" readonly></td><td>0.10</td></tr>
//                 <tr id="yellow_twenty_seven"><td>3</td><td><input id="amnt_three_ten" readonly></td><td>0.10</td></tr>
//                 <tr><td>4</td><td><input id="amnt_four_ten" readonly></td><td>0.10</td></tr>
//                 <tr id="yellow_twenty_eight"><td>5</td><td><input id="amnt_five_ten" readonly></td><td>0.10</td></tr>
//                 <tr><td>6</td><td><input id="amnt_six_ten" readonly></td><td>0.10</td></tr>
//                 <tr id="yellow_twenty_nine"><td>7</td><td><input id="amnt_seven_ten" readonly></td><td>0.10</td></tr>
//                 <tr><td>8</td><td><input id="amnt_eight_ten" readonly></td><td>0.10</td></tr>
//                 <tr id="yellow_thirty"><td>9</td><td><input id="amnt_nine_ten" readonly></td><td>0.10</td></tr>
//                 <tr><td>10</td><td><input id="amnt_ten_ten" readonly></td><td>0.10</td></tr>   
//             </table><br>
                <script>
                let P = 1000.00;
                let r = 0.05;
                let a = 1 + Number(r);
                let A_oneYear = Number(P) * Math.pow(Number(a), 1);
                document.getElementById("amnt_one").value = A_oneYear.toFixed(2);
                let A_twoYear = Number(P) * Math.pow(Number(a), 2);
                document.getElementById("amnt_two").value = A_twoYear.toFixed(2);
                let A_threeYear = Number(P) * Math.pow(Number(a), 3);
                document.getElementById("amnt_three").value = A_threeYear.toFixed(2);
                let A_fourYear = Number(P) * Math.pow(Number(a), 4);
                document.getElementById("amnt_four").value = A_fourYear.toFixed(2);
                let A_fiveYear = Number(P) * Math.pow(Number(a), 5);
                document.getElementById("amnt_five").value = A_fiveYear.toFixed(2);
                let A_sixYear = Number(P) * Math.pow(Number(a), 6);
                document.getElementById("amnt_six").value = A_sixYear.toFixed(2);
                let A_sevenYear = Number(P) * Math.pow(Number(a), 7);
                document.getElementById("amnt_seven").value = A_sevenYear.toFixed(2);
                let A_eightYear = Number(P) * Math.pow(Number(a), 8);
                document.getElementById("amnt_eight").value = A_eightYear.toFixed(2);
                let A_nineYear = Number(P) * Math.pow(Number(a), 9);
                document.getElementById("amnt_nine").value = A_nineYear.toFixed(2);
                let A_tenYear = Number(P) * Math.pow(Number(a), 10);
                document.getElementById("amnt_ten").value = A_tenYear.toFixed(2);
                
                let r_six = 0.06;
                let a_six = 1 + Number(r_six);
                let A_oneYear_six = Number(P) * Math.pow(Number(a_six), 1);
                document.getElementById("amnt_one_six").value = A_oneYear_six.toFixed(2);
                let A_twoYear_six = Number(P) * Math.pow(Number(a_six), 2);
                document.getElementById("amnt_two_six").value = A_twoYear_six.toFixed(2);
                let A_threeYear_six = Number(P) * Math.pow(Number(a_six), 3);
                document.getElementById("amnt_three_six").value = A_threeYear_six.toFixed(2);
                let A_fourYear_six = Number(P) * Math.pow(Number(a_six), 4);
                document.getElementById("amnt_four_six").value = A_fourYear_six.toFixed(2);
                let A_fiveYear_six = Number(P) * Math.pow(Number(a_six), 5);
                document.getElementById("amnt_five_six").value = A_fiveYear_six.toFixed(2);
                let A_sixYear_six = Number(P) * Math.pow(Number(a_six), 6);
                document.getElementById("amnt_six_six").value = A_sixYear_six.toFixed(2);
                let A_sevenYear_six = Number(P) * Math.pow(Number(a_six), 7);
                document.getElementById("amnt_seven_six").value = A_sevenYear_six.toFixed(2);
                let A_eightYear_six = Number(P) * Math.pow(Number(a_six), 8);
                document.getElementById("amnt_eight_six").value = A_eightYear_six.toFixed(2);
                let A_nineYear_six = Number(P) * Math.pow(Number(a_six), 9);
                document.getElementById("amnt_nine_six").value = A_nineYear_six.toFixed(2);
                let A_tenYear_six = Number(P) * Math.pow(Number(a_six), 10);
                document.getElementById("amnt_ten_six").value = A_tenYear_six.toFixed(2);
                
                let r_seven = 0.07;
                let a_seven = 1 + Number(r_seven);
                let A_oneYear_seven = Number(P) * Math.pow(Number(a_seven), 1);
                document.getElementById("amnt_one_seven").value = A_oneYear_seven.toFixed(2);
                let A_twoYear_seven = Number(P) * Math.pow(Number(a_seven), 2);
                document.getElementById("amnt_two_seven").value = A_twoYear_seven.toFixed(2);
                let A_threeYear_seven = Number(P) * Math.pow(Number(a_seven), 3);
                document.getElementById("amnt_three_seven").value = A_threeYear_seven.toFixed(2);
                let A_fourYear_seven = Number(P) * Math.pow(Number(a_seven), 4);
                document.getElementById("amnt_four_seven").value = A_fourYear_seven.toFixed(2);
                let A_fiveYear_seven = Number(P) * Math.pow(Number(a_seven), 5);
                document.getElementById("amnt_five_seven").value = A_fiveYear_seven.toFixed(2);
                let A_sixYear_seven = Number(P) * Math.pow(Number(a_seven), 6);
                document.getElementById("amnt_six_seven").value = A_sixYear_seven.toFixed(2);
                let A_sevenYear_seven = Number(P) * Math.pow(Number(a_seven), 7);
                document.getElementById("amnt_seven_seven").value = A_sevenYear_seven.toFixed(2);
                let A_eightYear_seven = Number(P) * Math.pow(Number(a_seven), 8);
                document.getElementById("amnt_eight_seven").value = A_eightYear_seven.toFixed(2);
                let A_nineYear_seven = Number(P) * Math.pow(Number(a_seven), 9);
                document.getElementById("amnt_nine_seven").value = A_nineYear_seven.toFixed(2);
                let A_tenYear_seven = Number(P) * Math.pow(Number(a_seven), 10);
                document.getElementById("amnt_ten_seven").value = A_tenYear_seven.toFixed(2);
                
                let r_eight = 0.08;
                let a_eight = 1 + Number(r_eight);
                let A_oneYear_eight = Number(P) * Math.pow(Number(a_eight), 1);
                document.getElementById("amnt_one_eight").value = A_oneYear_eight.toFixed(2);
                let A_twoYear_eight = Number(P) * Math.pow(Number(a_eight), 2);
                document.getElementById("amnt_two_eight").value = A_twoYear_eight.toFixed(2);
                let A_threeYear_eight = Number(P) * Math.pow(Number(a_eight), 3);
                document.getElementById("amnt_three_eight").value = A_threeYear_eight.toFixed(2);
                let A_fourYear_eight = Number(P) * Math.pow(Number(a_eight), 4);
                document.getElementById("amnt_four_eight").value = A_fourYear_eight.toFixed(2);
                let A_fiveYear_eight = Number(P) * Math.pow(Number(a_eight), 5);
                document.getElementById("amnt_five_eight").value = A_fiveYear_eight.toFixed(2);
                let A_sixYear_eight = Number(P) * Math.pow(Number(a_eight), 6);
                document.getElementById("amnt_six_eight").value = A_sixYear_eight.toFixed(2);
                let A_sevenYear_eight = Number(P) * Math.pow(Number(a_eight), 7);
                document.getElementById("amnt_seven_eight").value = A_sevenYear_eight.toFixed(2);
                let A_eightYear_eight = Number(P) * Math.pow(Number(a_eight), 8);
                document.getElementById("amnt_eight_eight").value = A_eightYear_eight.toFixed(2);
                let A_nineYear_eight = Number(P) * Math.pow(Number(a_eight), 9);
                document.getElementById("amnt_nine_eight").value = A_nineYear_eight.toFixed(2);
                let A_tenYear_eight = Number(P) * Math.pow(Number(a_eight), 10);
                document.getElementById("amnt_ten_eight").value = A_tenYear_eight.toFixed(2);
                
                let r_nine = 0.09;
                let a_nine = 1 + Number(r_nine);
                let A_oneYear_nine = Number(P) * Math.pow(Number(a_nine), 1);
                document.getElementById("amnt_one_nine").value = A_oneYear_nine.toFixed(2);
                let A_twoYear_nine = Number(P) * Math.pow(Number(a_nine), 2);
                document.getElementById("amnt_two_nine").value = A_twoYear_nine.toFixed(2);
                let A_threeYear_nine = Number(P) * Math.pow(Number(a_nine), 3);
                document.getElementById("amnt_three_nine").value = A_threeYear_nine.toFixed(2);
                let A_fourYear_nine = Number(P) * Math.pow(Number(a_nine), 4);
                document.getElementById("amnt_four_nine").value = A_fourYear_nine.toFixed(2);
                let A_fiveYear_nine = Number(P) * Math.pow(Number(a_nine), 5);
                document.getElementById("amnt_five_nine").value = A_fiveYear_nine.toFixed(2);
                let A_sixYear_nine = Number(P) * Math.pow(Number(a_nine), 6);
                document.getElementById("amnt_six_nine").value = A_sixYear_nine.toFixed(2);
                let A_sevenYear_nine = Number(P) * Math.pow(Number(a_nine), 7);
                document.getElementById("amnt_seven_nine").value = A_sevenYear_nine.toFixed(2);
                let A_eightYear_nine = Number(P) * Math.pow(Number(a_nine), 8);
                document.getElementById("amnt_eight_nine").value = A_eightYear_nine.toFixed(2);
                let A_nineYear_nine = Number(P) * Math.pow(Number(a_nine), 9);
                document.getElementById("amnt_nine_nine").value = A_nineYear_nine.toFixed(2);
                let A_tenYear_nine = Number(P) * Math.pow(Number(a_nine), 10);
                document.getElementById("amnt_ten_nine").value = A_tenYear_nine.toFixed(2);
                
                let r_ten = 0.10;
                let a_ten = 1 + Number(r_ten);
                let A_oneYear_ten = Number(P) * Math.pow(Number(a_ten), 1);
                document.getElementById("amnt_one_ten").value = A_oneYear_ten.toFixed(2);
                let A_twoYear_ten = Number(P) * Math.pow(Number(a_ten), 2);
                document.getElementById("amnt_two_ten").value = A_twoYear_ten.toFixed(2);
                let A_threeYear_ten = Number(P) * Math.pow(Number(a_ten), 3);
                document.getElementById("amnt_three_ten").value = A_threeYear_ten.toFixed(2);
                let A_fourYear_ten = Number(P) * Math.pow(Number(a_ten), 4);
                document.getElementById("amnt_four_ten").value = A_fourYear_ten.toFixed(2);
                let A_fiveYear_ten = Number(P) * Math.pow(Number(a_ten), 5);
                document.getElementById("amnt_five_ten").value = A_fiveYear_ten.toFixed(2);
                let A_sixYear_ten = Number(P) * Math.pow(Number(a_ten), 6);
                document.getElementById("amnt_six_ten").value = A_sixYear_ten.toFixed(2);
                let A_sevenYear_ten = Number(P) * Math.pow(Number(a_ten), 7);
                document.getElementById("amnt_seven_ten").value = A_sevenYear_ten.toFixed(2);
                let A_eightYear_ten = Number(P) * Math.pow(Number(a_ten), 8);
                document.getElementById("amnt_eight_ten").value = A_eightYear_ten.toFixed(2);
                let A_nineYear_ten = Number(P) * Math.pow(Number(a_ten), 9);
                document.getElementById("amnt_nine_ten").value = A_nineYear_ten.toFixed(2);
                let A_tenYear_ten = Number(P) * Math.pow(Number(a_ten), 10);
                document.getElementById("amnt_ten_ten").value = A_tenYear_ten.toFixed(2);
                </script>
//             </form>
//         </div>
//     </body> 
// </html>    
