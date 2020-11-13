//Add some Comments later please
//Fix Green Screen condition
//Fix Image Sizes
var fore = null;
var back = null;


function loadForeGround(){
  var input = document.getElementById("fore");
  fore = new SimpleImage(input);
  var canvas = document.getElementById("cv1");
  //fore.setSize(canvas.width, canvas.height);
  fore.drawTo(canvas);
  //alert("Foreground loaded");
}

function loadBackGround(){
  var input = document.getElementById("back");
  back = new SimpleImage(input);
  var canvas = document.getElementById("cv2");
 // back.setSize(canvas.width, canvas.height);
  back.drawTo(canvas);
  //alert("Background loaded");
}

function doGreenScreen(){
  if(fore == null || !fore.complete()){
    alert("Foreground Image is not loaded yet");
  }
  if(back == null || !back.complete()){
    alert("Background Image is not loaded yet");
  }  
  
  clearCanvas();
  
  var output = new SimpleImage(fore.getWidth(), fore.getHeight());
  
  for(var pixel of fore.values()){
        if(pixel.getGreen() > (pixel.getRed() + pixel.getBlue())){ //Fix this condition
            output.setPixel(pixel.getX(),pixel.getY(),back.getPixel(pixel.getX(),pixel.getY()));
        } 
    else {
      output.setPixel(pixel.getX(),pixel.getY(),fore.getPixel(pixel.getX(),pixel.getY()));
    }
    }
  
  var canvas = document.getElementById("cv1");
  output.drawTo(canvas);
  //alert("Green Screen Algorithm");
}

function clearCanvas(){
  var canvas_1 = document.getElementById("cv1");
  var canvas_2 = document.getElementById("cv2");
  var ctx_1 = canvas_1.getContext("2d");
  var ctx_2 = canvas_2.getContext("2d");  
  ctx_1.clearRect(0,0,canvas_1.width,canvas_1.height);
  ctx_2.clearRect(0,0,canvas_2.width,canvas_2.height);
  document.getElementById("fore").value = null;
  document.getElementById("back").value = null;
  //alert("Canvas Cleared");
}