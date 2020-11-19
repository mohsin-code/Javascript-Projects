var canvas = document.getElementById("canvas"); //refers to the canvas
var image = null;   //To be uploaded image is initialized to null as a global variable

function loadImage(){   
    //Loads the image on the canvas
    var input = document.getElementById("file");  //the inputted file
    image = new SimpleImage(input);    //using the SimpleImage function
    
    /*image.setSize(800, 500);  
    Image seems to disappear
    Done at random by canvas (Sort of)*/
    
    image.drawTo(canvas);     //Print image on canvas
    
    //alert("Button Works");
}

function greyScale(){
    //The Greyscale Algorithm
    if(image != null && image.complete()){      //checks if the image is loaded
    var greyImage = image;          //creating a copy of the original image to operate on it
    
    for (var pixel of greyImage.values()){      //going through the all the pixels
        var greyPixel = (pixel.getGreen() + pixel.getBlue() + pixel.getRed())/3;    //Average of the RGB values
        pixel.setGreen(greyPixel);
        pixel.setBlue(greyPixel);
        pixel.setRed(greyPixel);
    }

    greyImage.drawTo(canvas);   //Display the Greyed Image

    } 
    else {
        alert("Image is not loaded yet");       //Else just alert me the Error
    }
  //alert("Button Works");  
}

function redify(){
    //Convert an Image into Shades of Red (Reddish Image)
    if(image != null && image.complete()){      //If image is loaded
        var redImage = image;   //copy of image
        for (var pixel of redImage.values()){   //for all pixels of red Image
            var avgPixel = (pixel.getGreen() + pixel.getBlue() + pixel.getRed())/3;     //Average of RGB values
            if(avgPixel < 128){     //Dark Pixel
                pixel.setRed(2*avgPixel);
                pixel.setBlue(0);
                pixel.setGreen(0);
            } else {            //Light Pixel
                pixel.setRed(255);
                pixel.setBlue((2*avgPixel) - 255);
                pixel.setGreen((2*avgPixel) - 255);
            }
        }

        redImage.drawTo(canvas);    //Print the image on screen
    }
    else {
        alert("Image is not loaded yet");       //Errors if image aint loaded
    }
    //alert("Button Works");  
}

function sepia(){
    //Sepia Algorithm
    if(image != null && image.complete()){      //if image is loaded
        var sepImage = image;       //copy image
        
        for (var pixel of sepImage.values()){       //for each pixel of the image
            //Sepia RGB Values according to Microsoft
            var r = (pixel.getRed() * 0.393) + (pixel.getGreen() * 0.769) + (pixel.getBlue() * 0.189);  //Red
            var b = (pixel.getRed() * 0.272) + (pixel.getGreen() * 0.534) + (pixel.getBlue() * 0.131);  //Green
            var g = (pixel.getRed() * 0.349) + (pixel.getGreen() * 0.686) + (pixel.getBlue() * 0.168);  //Blue
            pixel.setRed(r>255?255:r);      //Sets 255 if r is more than 255
            pixel.setGreen(g>255?255:g);    //Sets 255 if g is more than 255
            pixel.setBlue(b>255?255:b);     //Sets 255 if b is more than 255
        }
        
        sepImage.drawTo(canvas);        //Display the Sepia Image
    }
    
    else {
        alert("Image is not loaded yet");     //Error if image is not loaded
    }
    //alert("Button Works");  
}

function clearCanvas(){
  if(image != null && image.complete()){    //If image is loaded
    image = new SimpleImage(document.getElementById("file"));   //image object inputted into file input
    image.drawTo(canvas);       //Display image on canvas
  }else{    //If not loaded
    alert("No Image loaded!");      //Error message
  }
  //alert("Button Works");
}