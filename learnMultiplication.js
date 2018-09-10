// <!DOCTYPE html>
// <html>
// <head>
// </head>    
// <body>
//     <p>'Computers are playing an increasing role in education. The following webpage contains: a program that will help an elementary school student learn multiplication.'</p><br>
//             <form>
//                 <table>     
//                     <tr><td>How much is <span id="randomnumone"></span> times <span id="randomnumtwo"></span>?</td></tr>
//                      <tr><td><input type="number" id="answer"></td></tr>
//                      <tr><td><button type="button" onclick="calculate()">Submit</button><button type="reset">Reset</button><br><br><br></td></tr> 
                <script>
                 let randomnumone = document.getElementById("randomnumone").innerHTML = Math.floor(Math.random() * 10);
                 let randomnumtwo = document.getElementById("randomnumtwo").innerHTML = Math.floor(Math.random() * 10);

                function correct(){
                    document.getElementById("answer").value = answer;
                }  

                function notcorrect(){
                    document.getElementById("answer").value = answer;
                }    

                function calculate(){
                    let answer = document.getElementById("answer").value;
                    let calculation = Number(randomnumone) * Number(randomnumtwo);

                    if(Number(calculation) == Number(answer)){
                        alert("Very good!");
                        let c = confirm("Select OK if you would like to continue");

                        if(c == true){ 
                            randomnumone = document.getElementById("randomnumone").innerHTML = Math.floor(Math.random() * 10);
                            randomnumtwo = document.getElementById("randomnumtwo").innerHTML = Math.floor(Math.random() * 10);
                            calculation = Number(randomnumone) * Number(randomnumtwo);
                            correct();
                        }    
                    }
                    else{
                        alert("No. Please try again."); 
                        notcorrect();
                    }
                }
                </script>
//             </table>
//         </form>
//  </body> 
// </html>    
