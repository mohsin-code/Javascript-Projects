function Upload(){
    var file = document.getElementById("imgInput");
    var image = new SimpleImage(file);     //The image in the current directory
    image.drawTo("canvas");
}

function makeBlue(){
    for (var pixel of image.values()) {    //Each blue pixel is converted into yellow
        if (pixel.getGreen() < 225 && pixel.getRed() < 225) {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }

    image.drawTo("canvas");
}