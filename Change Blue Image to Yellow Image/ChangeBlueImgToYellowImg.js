var image = new SimpleImage("duke_blue_devil.png");     //The image in the current directory
write(image);

print("\n\nThe above picture is converted into: ")

for (var pixel of image.values()) {    //Each blue pixel is converted into yellow
    if (pixel.getGreen() < 225 && pixel.getRed() < 225) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}

document.write(image);
