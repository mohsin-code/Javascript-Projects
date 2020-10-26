var image = new SimpleImage("android.jpeg");
document.write(image);

for(var pixel of image.values()){
    if(pixel.getX()<(image.getWidth()/3)){
        pixel.setRed(255);
    }else if(pixel.getX()<(2*image.getWidth()/3)){
        pixel.setGreen(255);
    }else{
        pixel.setBlue(255);
    }
}

document.write(image);

