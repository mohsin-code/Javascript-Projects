//Run on https://www.dukelearntoprogram.com//course1/example/index.php

var img = new SimpleImage("smallpanda.png");
print(img);

//Sets a pixel Black
function setBlack(pix){
    pix.setGreen(0);
    pix.setBlue(0);
    pix.setRed(0);
}

//Adds border on an image
function addBorder(image, width){
    for(var pixel of image.values()){
        if(pixel.getX()< width || pixel.getY()< width){
            setBlack(pixel);
        } else if(pixel.getX()>(image.getWidth()-width) || pixel.getY()>(image.getHeight()-width)){
            setBlack(pixel);
        }
    }
}

addBorder(img, 10);
print(img);
