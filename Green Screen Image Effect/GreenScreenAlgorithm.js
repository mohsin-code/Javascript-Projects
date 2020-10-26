//Run on https://www.dukelearntoprogram.com//course1/example/index.php

var image = new SimpleImage("drewRobert.png");
var background = new SimpleImage("dinos.png");

background.setSize(image.getWidth(), image.getHeight());

print(image);
print(background);

//Adds border on an image
function greenScreen(image, back){
    for(var pixel of image.values()){
        if(pixel.getGreen() > (pixel.getRed() + pixel.getBlue())){
            image.setPixel(pixel.getX(),pixel.getY(),back.getPixel(pixel.getX(),pixel.getY()));
        }
    }
    return print(image);
}

document.write("After the Green Screen Effect, The Image look like: ");
greenScreen(image, background);
