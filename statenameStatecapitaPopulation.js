// <!DOCTYPE html>
// <html lang="en">
// <head>  
// <style>
//     form{width: 100%; margin: 0 auto; text-align: left;}
//     table{width: 100%;}
//     table, th, td{border: 1px solid black; border-collapse: collapse; font-size: 8pt; font-weight: bold;}
//     th, td{padding: 10px; text-align: left;}
//     tr{background-color: #fff;}
//     #button, #content{padding: 5px; text-align: center; border: solid 1px #ddd;}
//     #content{padding: 50px; display: none; width: 80%;}
//     input{width:100%; }
//     #StateAbbr, #StateName, #Capital, #Population{font-weight: bold;}
// </style>
// </head>
// <body>
//     <p style="text-align: center">This webpage enables the user to enter a state name &#40;full or abbreviated&#41; and have the State Name, State Capital, and population appear in seperate form text fields of the page.</p>
//             <div id="button"><button>State Info</button></div>
//             <form id="content">
//             <p>Enter only State Abbreviations or State Names from the following list:<br><br>AL : Alabama<br>AK : Alaska<br>AZ : Arizona<br>AR : Arkansas<br>CA : California<br>CO : Colorado<br>&#40;lower or upper case is ok&#41;</p>    
//              <table>         
//               <tr><th><input id="StateAbbr" readonly></th><th><input id="StateName" readonly></th><th><input id="Capital" readonly></th><th><input id="Population" readonly></th></tr>
//                  <tr id="state"><td><input id="stateAbbr">Enter State Abbr Here</td><td><input id="stateName">Enter State Name Here</td><td><input id="capital" readonly></td><td><input id="population" readonly></td></tr> 
//                  <tr><td colspan="4"><button type="button" onclick="stateInfo()">Submit</button><button type="reset">Reset</button><br></td></tr> 
//              </table>
//             </form>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script> 
                $(document).ready(function(){
                $("#button").click(function(){
                $("#content").slideToggle("slow");
                });
                });
            </script>
            <script>
                function stateInfo(){
                let stateAbbr = document.getElementById("stateAbbr").value;
                let StateAbbr = document.getElementById("StateAbbr").value;
                let stateName = document.getElementById("stateName").value;
                let StateName = document.getElementById("StateName").value;
                let capital = document.getElementById("capital").value;
                let Capital = document.getElementById("Capital").value;
                let population = document.getElementById("population").value;
                let Population = document.getElementById("Population").value;
                
                var a = new Array(4);
                for(i=0; i < 2; i++)
                a[i]=new Array(4) 
                
                a[0][1] = "State Abbr";
                a[0][2] = "State Name";
                a[0][3] = "Capital";
                a[0][4] = "Population";
                var abbr = stateAbbr.toUpperCase();
                var name = stateName.toUpperCase();
                
                if(abbr!="" && name==""){        
                    
                if(abbr == "AL"){
                    capital = "Montgomery";
                    population = 4,779,736;
                    stateName = "Alabama";
                    stateAbbr = abbr;
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else if(abbr == "AK"){
                    capital = "Juneau";
                    population = 710,231;
                    stateName = "Alaska";
                    stateAbbr = abbr;
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else if(abbr == "AZ"){
                    capital = "Phoenix";
                    population = 6,392,017;
                    stateName= "Arizona";
                    stateAbbr = abbr;
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else if(abbr == "AR"){
                    capital = "Little Rock";
                    population = 2,915,918;
                    stateName = "Arkansas";
                    stateAbbr = abbr;
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else if(abbr == "CA"){
                    capital = "Sacramento";
                    population = 37,253,956;
                    stateName = "California";
                    stateAbbr = abbr;
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else if(abbr == "CO"){
                    capital = "Denver";
                    population = 5,029,196;
                    stateName = "Colorado";
                    stateAbbr = abbr;
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else{
                    alert("Please enter State Abbreviations only in this field and check for spelling errors");
                    if(confirm(onclick.document.getElementById("stateAbbr").value = ""));
                }
                }    
        -->        
                if(abbr=="" && name!=""){
                if(name == "ALABAMA"){
                    capital = "Montgomery";
                    population = 4,779,736;
                    stateName = name;
                    stateAbbr = "AL";
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else if(name == "ALASKA"){
                    capital = "Juneau";
                    population = 710,231;
                    stateName = name;
                    stateAbbr = "AK";
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else if(name == "ARIZONA"){
                    capital = "Phoenix";
                    population = 6,392,017;
                    stateName= name;
                    stateAbbr = "AZ";
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else if(name == "ARKANSAS"){
                    capital = "Little Rock";
                    population = 2,915,918;
                    stateName = name;
                    stateAbbr = "AR";
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else if(name == "CALIFORNIA"){
                    capital = "Sacramento";
                    population = 37,253,956;
                    stateName = name;
                    stateAbbr = "CA";
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else if(name == "COLORADO"){
                    capital = "Denver";
                    population = 5,029,196;
                    stateName = name;
                    stateAbbr = "CO";
                    a[1][1] = stateAbbr;
                    a[1][2] = stateName;
                    a[1][3] = capital;
                    a[1][4] = population;
                }else{
                    alert("Please enter State Name only in this field and check for spelling errors");
                    if(confirm(onclick.document.getElementById("stateName").value = ""));
                }    
                }
                a[1][1] = stateAbbr;
                a[1][2] = stateName;
                a[1][3] = capital;
                a[1][4] = population;
                
                document.getElementById("StateAbbr").value = a[0][1];
                document.getElementById("StateName").value = a[0][2];
                document.getElementById("Capital").value = a[0][3];
                document.getElementById("Population").value = a[0][4];
                
                document.getElementById("stateAbbr").value = a[1][1];
                document.getElementById("stateName").value = a[1][2];
                document.getElementById("capital").value = a[1][3];
                document.getElementById("population").value = a[1][4];       
                }       
        </script>    
//     </body>    
// </html>
