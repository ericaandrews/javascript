<!DOCTYPE html>
<html lang="en">
<head>   
</head>
<body>
    <div id="border">
            <p style="text-align: center;">This webpage contains a form that displays an input text box, radio buttons, checkboxes, and select items along with a script that executes form validation.</p>
        <div id="centered">
            <form id="myForm" action="#" onsubmit="return myFunction(this)">
              First name:<br><input type="text" id="fname" name="fname"><br>
              Last name:<br><input type="text" id="lname" name="lname"><br>
              <br>    
              <input type="hidden" value="" name="gender">       
              <input type="radio" value="male" name="gender">Male
              <input type="radio" value="female" name="gender">Female
              <input type="radio" value="decline to answer" name="gender">Decline to answer<br>
              <br>
              <input type="checkbox"  id="bike" value="i have a bike">I have a bike<br>
              <input type="checkbox" id="car" value="i have a car">I have a car<br> 
              <input type="checkbox"  id="other" value="other">Other<br>
              <br>
              Which browser are you most familiar with?<br>
              <select name="browsers">   
              <option value="none of these">None of these</option> 
              <option value="internet explorer">Internet Explorer</option>
              <option value="firefox">Firefox</option>
              <option value="chrome">Chrome</option>                
              <option value="opera">Opera</option>
              <option value="safari">Safari</option>
              </select>
              <br><br>  
              <input type="submit" value="submit">
            </form>
            <p id="p"></p>
            <script>
              function myFunction(thisForm) {
                let f = document.getElementById("fname").value;
                let l = document.getElementById("lname").value;
                var b; 
                var c;  
                var othr; 
                if(f==""){
                    alert("Please enter your first name");
                }else if(l==""){
                    alert("Please enter your last name");
                }else if(thisForm.gender.value==""){
                    alert("Please choose a gender option");
                }else if(!thisForm.bike.checked && !thisForm.car.checked && !thisForm.other.checked){
                    alert("Please select a vehicle option");    
                }else if(thisForm.browsers.value==""){
                    alert("Please make a browser selection");
                }else if(thisForm.bike.checked){
                    b = true;
                }else if(thisForm.car.checked){
                    c = true;
                }else if(thisForm.other.checked){
                    othr = true;
                }
                if(f!="" && l!="" && thisForm.browsers.value!="" && thisForm.gender.value!="" && (thisForm.bike.checked || thisForm.car.checked || thisForm.other.checked)){
                document.write("<span style=font-family:monospace;>Data entered:</span><br><br>");    
                document.write("<span style=font-family:monospace;>First Name: </span><span style=font-weight:bold;>" + f + "</span><br>");
                document.write("<span style=font-family:monospace;>Last Name: </span><span style=font-weight:bold;>" + l + "</span><br>");
                document.write("<span style=font-family:monospace;>Gender: </span><span style=font-weight:bold;>" + thisForm.gender.value + "</span><br>");
                if(b==true){
                  document.write("<span style=font-family:monospace;>Vehicle: </span><span style=font-weight:bold;>" + thisForm.bike.value + "</span><br>");    
                }else if(c==true){
                  document.write("<span style=font-family:monospace;>Vehicle: </span><span style=font-weight:bold;>" + thisForm.car.value + "</span><br>");      
                }else if(othr==true){
                  document.write("<span style=font-family:monospace;>Vehicle: </span><span style=font-weight:bold;>" + thisForm.other.value + "</span><br>");     
                }    
                document.write("<span style=font-family:monospace;>Which browser are you most familiar with entered: </span><span style=font-weight:bold;>" + thisForm.browsers.value + "</span><br><br><br>");

                document.write("<span style=font-family:monospace;><a href=partone_textbox_radiobuttons_checkboxes_selectitems.html>Click here to return to the original form or refresh the page</a></span>");
                }     
              }       
            </script>
        </div>
    </div>
</body>    
</html>
