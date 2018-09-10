// <!DOCTYPE html>
// <html lang="en">
// <head>
<script>
function showHint(str) {
    if (str.length == 0) { 
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "partone_ajax_applications.php?q=" + str, true);
        xmlhttp.send();
    }
}
</script>    
// </head>    
// <body>    
//     <p>This webpage recreates the 'gethint' Ajax example from <a href="https://www.w3schools.com/php/php_ajax_php.asp">W3Schools</a>. The following allows the user to type in the field below for name suggestions:</p>
//         <form> 
//             First name: <input type="text" onkeyup="showHint(this.value)">
//         </form>
// <!--            Suggestions appear when uploaded-->
//     <p>Suggestions: <span id="txtHint"></span></p>
// </body>    
// </html>
