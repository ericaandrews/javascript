<!-- <!DOCTYPE html>
<html>
<head>   
</head>
<!--This webpage allows the user to select a page layout and formatting through the user of the className property. The user may choose at least three form elements from among radio buttons, select items, checkboxes, and buttons to allow the user to change the background color, font size, font family, font style, and font weight.    -->
<!-- <body id="body">
        <form id="myForm" action="#" onclick="return myfunction(this)">
            <p>Select a background-color: </p>    
             <input type="radio" name="backgroundcolor" value="blue"> Blue<br>
             <input type="radio" name="backgroundcolor" value="green"> Green<br>
             <input type="radio" name="backgroundcolor" value="pink"> Pink<br>
             <input type="radio" name="backgroundcolor" value="purple"> Purple<br>
             <input type="radio" name="backgroundcolor" value="yellow"> Yellow<br>
             <input type="radio" name="backgroundcolor" value="orange"> Orange<br>
            <p>Select a font-size: </p>    
            <select name="fontsize">
             <option value=""></option>
             <option value="fontsize10px">Font-Size: 10px</option>
             <option value="fontsize15px">Font-Size: 15px</option>
             <option value="fontsize20px">Font-Size: 20px</option>
             <option value="fontsize25px">Font-Size: 25px</option>
             <option value="fontsize30px">Font-Size: 30px</option>
            </select> 
            <p>Select a font-family: &#40;only one selection will be applied&#41;</p>    
             <input type="checkbox" id="timesnewroman" value="timesnewroman">Times New Roman<br>
             <input type="checkbox" id="arial" value="arial">Arial<br>
             <input type="checkbox" id="georgia" value="georgia">Georgia<br>
             <input type="checkbox" id="serif" value="serif">Serif<br> 
             <input type="checkbox" id="courier" value="courier">Courier<br>
             <input type="checkbox" id="cursive" value="cursive">Cursive<br> 
           </form>
            <p>Select a font-style: </p>    
             <button name="normal" onclick="normal(this)">Normal</button>
             <button name="italic" onclick="italic(this)">Italic</button>   
             <button name="oblique" onclick="oblique(this)">Oblique</button>  
             <p>Select a font-weight: </p>    
             <button id="normalweight" onclick="normalweight(this)">Normal</button>
             <button id="ligherweight" onclick="lighterweight(this)">Lighter</button>   
             <button id="boldweight" onclick="boldweight(this)">Bold</button>   
             <button id="bolderweight" onclick="bolderweight(this)">Bolder</button><br><br><br> 
             <input type="reset" onClick="window.location.reload()" value="Reset"> --> -->
            <script>
                function myfunction(thisForm){
                    if(thisForm.backgroundcolor.value=="blue"){
                       document.getElementById("body").style.backgroundColor = "blue";
                    }else if(thisForm.backgroundcolor.value=="green"){
                       document.getElementById("body").style.backgroundColor = "green";
                    }else if(thisForm.backgroundcolor.value=="pink"){
                       document.getElementById("body").style.backgroundColor = "pink";
                    }else if(thisForm.backgroundcolor.value=="purple"){
                       document.getElementById("body").style.backgroundColor = "purple";
                    }else if(thisForm.backgroundcolor.value=="yellow"){
                       document.getElementById("body").style.backgroundColor = "yellow";
                    }else if(thisForm.backgroundcolor.value=="orange"){
                       document.getElementById("body").style.backgroundColor = "orange";
                    }
                    
                    if(thisForm.fontsize.value=="fontsize10px"){
                       document.getElementById("body").style.fontSize = "10px";
                    }else if(thisForm.fontsize.value=="fontsize15px"){
                       document.getElementById("body").style.fontSize = "15px";
                    }else if(thisForm.fontsize.value=="fontsize20px"){
                       document.getElementById("body").style.fontSize = "20px";
                    }else if(thisForm.fontsize.value=="fontsize25px"){
                       document.getElementById("body").style.fontSize = "25px";
                    }else if(thisForm.fontsize.value=="fontsize30px"){
                       document.getElementById("body").style.fontSize = "30px";
                    }
                    
                    if(thisForm.timesnewroman.checked){
                       document.getElementById("body").style.fontFamily = 'Times New Roman';
                    }else if(thisForm.arial.checked){
                       document.getElementById("body").style.fontFamily = 'Arial';
                    }else if(thisForm.georgia.checked){
                       document.getElementById("body").style.fontFamily = 'Georgia';
                    }else if(thisForm.serif.checked){
                       document.getElementById("body").style.fontFamily = 'serif';
                    }else if(thisForm.courier.checked){
                       document.getElementById("body").style.fontFamily = 'courier';
                    }else if(thisForm.cursive.checked){
                       document.getElementById("body").style.fontFamily = 'cursive';
                    }
                }
                
                function normal(thisForm){
                    document.getElementById("body").style.fontStyle = "normal";
                }
                function italic(thisForm){
                    document.getElementById("body").style.fontStyle = "italic";
                }
                function oblique(thisForm){
                    document.getElementById("body").style.fontStyle = "oblique";
                }
                
                function normalweight(thisForm){
                    document.getElementById("body").style.fontWeight = "normal";
                }
                function lighterweight(thisForm){
                    document.getElementById("body").style.fontWeight = "lighter";
                }
                function boldweight(thisForm){
                    document.getElementById("body").style.fontWeight = "bold";
                }
                function bolderweight(thisForm){
                    document.getElementById("body").style.fontWeight = "bolder";
                }
             </script>
<!--     </body>    
</html> -->
 -->
