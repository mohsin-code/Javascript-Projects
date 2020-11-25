var canvas = document.getElementById("canvas");
var image = 0;

function Upload(){
    var file = document.getElementById("imgInput");
    image = new SimpleImage(file);     //The image in the current directory
    image.drawTo(canvas);
}

function makeYellow(){
    for (var pixel of image.values()) {    //Each blue pixel is converted into yellow
        if (pixel.getBlue() > (pixel.getGreen() + pixel.getRed())) {
            pixel.setRed(pixel.getBlue());
            pixel.setGreen(pixel.getBlue());
            pixel.setBlue(0);
        }
    }

    image.drawTo(canvas);
}