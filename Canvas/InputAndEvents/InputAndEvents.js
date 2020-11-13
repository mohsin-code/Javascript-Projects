//Changes color of Canvas to Blue
function doBlue(){
  
  //Get Canvas
  var canvas = document.getElementById("cv");
   
  //Set blue as BG Color
  canvas.style.backgroundColor = "blue";
  
  //Sets color input back to default
  document.getElementById("clr").value = "#0000FF";
}


//Changes color of Canvas
function changeColor(){
  
  //Get Canvas
  var canvas = document.getElementById("cv");
  
  //Get Value of Color Input
  var clr_in = document.getElementById("clr").value;
  
  //Set Color Input as BG Color
  canvas.style.backgroundColor = clr_in;
}


//Makes a Square using the slider
function doSquare(){
  
  //Get Slider
  var slider = document.getElementById("sld");
  
  //Get Slider value
  var slide_v = parseInt(slider.value);
  
  //Get Canvas
  var canvas = document.getElementById("cv");
  
  //Get 2d Context of Canvas
  ctx = canvas.getContext("2d");
  
  //Clear Canvas
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  //Add Rectangle
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,slide_v,slide_v);  //Coordinates, Relative
  
  //Add Another Rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(150,10,slide_v,slide_v);
}
