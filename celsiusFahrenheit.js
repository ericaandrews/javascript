<!DOCTYPE html>
<html>
<head>
</head>    
<body>
    <p id="p">'The following webpage contains:  The function celsius, that returns the Celsius equivalent of a Fahrenheit temperature, using the calculation: C = 5/9 * (F - 32), and the function fahrenheit that returns the Fahrenheit equivalent of a Celsius temperature, using the calculation: F = (9/5 * C) + 32 '.</p><br>
        <form style="text-align: right">
            <table>
                <tr><td>Fahrenheit: <input type="number" id="fahrenheitone"></td></tr>
                <tr><td><button type="button" onclick="conversionfc()">Submit</button><button type="reset">Reset</button><br></td></tr> 
                <tr><td>Celsius: <input  type="number" id="celsiusone" readonly><br><br><br></td></tr>    
                <tr><td>Celsius: <input type="number" id="celsiustwo"></td></tr>
                <tr><td><button type="button" onclick="conversioncf()">Submit</button><button type="reset">Reset</button><br></td></tr>
                <tr><td>Fahrenheit: <input type="number" id="fahrenheittwo" readonly></td></tr>
            <script>
            function conversionfc(){
                let fahrenheitone = document.getElementById("fahrenheitone").value;       
                if(Number(fahrenheitone) == ""){
                    alert("Please input a numeric value");
                    alert("Fahrenheit is assumed to equal 0");
                    let celsiusone = ((5/9) * (Number(fahrenheitone) - 32)); 
                    document.getElementById("celsiusone").value = celsiusone.toFixed(0); 
                }
                else{
                    let celsiusone = ((5/9) * (Number(fahrenheitone) - 32)); 
                    document.getElementById("celsiusone").value = celsiusone.toFixed(0);  
                }
            }             
            function conversioncf(){
                let celsiustwo = document.getElementById("celsiustwo").value;   
                if(Number(celsiustwo) == ""){
                    alert("Please input a numeric value");
                    alert("Celsius is assumed to equal 0");
                    let fahrenheittwo = ((9/5) * Number(celsiustwo)) + 32; 
                    document.getElementById("fahrenheittwo").value = fahrenheittwo.toFixed(0);
                }
                else{
                    let fahrenheittwo = ((9/5) * Number(celsiustwo)) + 32; 
                    document.getElementById("fahrenheittwo").value = fahrenheittwo.toFixed(0);
                }
            }                 
            </script>
            </table>
        </form>
    </body> 
</html>    
