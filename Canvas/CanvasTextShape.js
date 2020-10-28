/* This Javascript program is used to make changes
  in the Canvas tabs.....
  Canvas tabs of CanvasTextShape.html file */


//Changes color to Blue
function doBlue(){
  
  //Get Canvas
  var canvas = document.getElementById("about");
  canvas.style.backgroundColor = "Blue";
  
  //Get 2d Canvas Context
  ctx = canvas.getContext("2d");
  
  //Add Shapes (2 Rectangles)
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,50,50);  //Coordinates, Relative
  ctx.fillRect(80,10,50,50);
  
  //Add Text
  ctx.fillStyle = "Indigo";
  ctx.font = "15px Arial";
  ctx.fillText("Hello",13,30);  //Coorinate Position
}

//Changes color to Green
function doGreen(){
  
  //Get Canvas
  var canvas = document.getElementById("about");
  canvas.style.backgroundColor = "Lime";
  
  //Get 2d Context
  ctx = canvas.getContext("2d");
  
  //Clear the Context
  ctx.clearRect(0,0,canvas.width,canvas.height);  //Whole Canvas
}
