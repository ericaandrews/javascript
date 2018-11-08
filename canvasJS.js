<!--
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="description" content="">
<title>Title</title>
-->
<script>
 window.onload = function () {
    var c = new CanvasJS.Chart("chart",
    { 
      axisX: {
        titleFontFamily: "courier",
      },
      axisY: {
        titleFontFamily: "courier"  
      },    
      data: [
      {        
        type: "column",
        color: "blue",
        dataPoints: [
        { label: "Spring 16", y: 160},
        { label: "Fall 16", y: 170},
        { label: "Spring 17", y: 120},
        { label: "Fall 17", y: 185},
        { label: "Spring 18", y: 190},
        { label: "Fall 18", y: 195}
        ]
      }]
    });
    c.render();
  }   
</script>   
<script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>   
<!--
</head>
    
<body>
    <div id="chart"></div>
</body>-->
