<!--
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="description" content="">
<title>Title</title>
<style>
#chart rect{
  fill: #4aaeea;
}

#chart text{
  fill: white;
  font: 10px sans-serif;
  text-anchor: end; 
}

.axis text{
  font: 10px sans-serif;
}

.axis path, .axis line{
  fill: none;
  stroke : #fff;
}

body{
  background: #1a1a1a;
  color : #eaeaea;
  padding : 10px;
}
</style>
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
