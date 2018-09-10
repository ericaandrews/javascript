// <!DOCTYPE html>
// <html>
// <head> 
// </head>

// <body onload="document.forms['myForm'].elements['input'].focus();">  
//       <form name = "myForm">
//          <table>
//             <tr><td>Enter a Phone number: </td>
//                <td><input name="input" type="text" id="input" placeholder="(999) 999-9999" autofocus>
//                </td>
//             </tr>
//             <tr><td>Area Code: </td>
//                <td><input id="areacode">
//                </td>
//             </tr>
//             <tr><td>Seven-Digit Phone Number</td>
//                <td><input id="sevendigit">
//                </td>
//             </tr>
//             <tr><td><input type="button" value="Submit" onclick="telephonenumber()"></td></tr> 
//          </table>
//          <input type="reset" value="Reset" onClick="window.location.reload();">
//       </form>
//     <form>
//      <table>
//         <tr><td id="toString"></td></tr>
//         <tr><td id="toLocaleString"></td></tr> 
//         <tr><td id="toUTCString"></td></tr>
//         <tr><td><button type="button" onclick="strings()">Click Here for new date and time</button><br><br><br></td></tr>
//         <p>Difference between UTC time and PDT Time in hours:</p><p id="timeZoneDif"></p>
//         <p>Difference between UTC time and EST Time in hours:</p><p id="timeZoneDifTwo"></p>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="/path/to/jquery-input-mask-phone-number.min.js"></script>
            <script>    
            $(document).ready(function () {
            $("#input").usPhoneFormat({
            format: '(xxx) xxx-xxxx',
            });   
            });
            </script>
                <script>          
                 function telephonenumber() {  
                    var err = "Invalid phone #";
                    var phoneNumber = document.forms["myForm"].elements["input"].value;
                    var frstareacode = phoneNumber.charAt(1);
                    var secareacode = phoneNumber.charAt(2);
                    var thirareacode = phoneNumber.charAt(3);

                    var frstdigit = phoneNumber.charAt(6);
                    var secdigit = phoneNumber.charAt(7);
                    var thirdigit = phoneNumber.charAt(8);
                    var fthdigit = phoneNumber.charAt(10);
                    var fifdigit = phoneNumber.charAt(11);
                    var sithdigit = phoneNumber.charAt(12);
                    var svthdigit = phoneNumber.charAt(13);

                    var areacode;
                    var sevendigits;

                      phoneRegExp = /^(\()(\d{3})(\))(\s)(\d{3})(-\d{4})$/;

                    if ( !phoneRegExp.test(phoneNumber))
                    alert("Phone number entered must use exact format, (999) 999-9999, where each 9 represents a number");
                    else  {
                        areacode = frstareacode+secareacode+thirareacode;
                        document.getElementById("areacode").value = areacode;

                       sevendigits = frstdigit+secdigit+thirdigit+"-"+fthdigit+fifdigit+sithdigit+svthdigit; document.getElementById("sevendigit").value = sevendigits;

                    }
                 }
              </script>
             <script>
              function strings(){
                 var dates = new Date();
                 var newdate = dates.toString();
                 var secondnewdate = dates.toLocaleString();
                 var thirdnewdate = dates.toUTCString();
                 var timeZone = dates.getTimezoneOffset();
                     timeZone = timeZone/60;
                 var timeZoneTwo = dates.getTimezoneOffset();
                     timeZoneTwo = (timeZoneTwo/60) - 3;
                 document.getElementById("toString").innerHTML = newdate;
                 document.getElementById("toLocaleString").innerHTML = secondnewdate;
                 document.getElementById("toUTCString").innerHTML = thirdnewdate;                 
                 document.getElementById("timeZoneDif").innerHTML = timeZone;
                 document.getElementById("timeZoneDifTwo").innerHTML = timeZoneTwo;
                }
            </script> 
//     </table>    
//     </form>
// </body>
// </html>
