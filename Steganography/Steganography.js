var hide = null;
var img = null;

function UploadHidden()
{
    var input = document.getElementById("hide");
    hide = new SimpleImage(input);
    canvas_1 = document.getElementById("cv1")
    
    hide.drawTo(canvas_1);

    hide = HidePixs(hide);
}

function UploadImg()
{
    var input = document.getElementById("img");
    img = new SimpleImage(input);
    canvas_2 = document.getElementById("cv2")
    
    img.drawTo(canvas_2);

    img = ChopToHide(img);
}

function HideImg()
{
    ClearCanvas();
    
    for (var pixel of img) {
        pixel.setBlue(pixel.getBlue() + hide.getPixel(pixel.getX(), pixel.getY()).getBlue());
        pixel.setRed(pixel.getRed() + hide.getPixel(pixel.getX(), pixel.getY()).getRed());
        pixel.setGreen(pixel.getGreen() + hide.getPixel(pixel.getX(), pixel.getY()).getGreen());
    }

    img.drawTo(canvas_1)
}

function ClearCanvas()
{
    var canvas_1 = getElementById("cv1");
    var canvas_2 = getElementById("cv2");
    
    var ctx_1 = canvas_1.getContext("2d");
    var ctx_2 = canvas_1.getContext("2d");

    ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
    ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);

    img = null;
    hide = null;
}

function HidePixs(image)
{
    for (var pixel of image.values()) 
    {
        pixel.setRed(Math.floor(pixel.getRed() / 16) * 16);
        pixel.setBlue(Math.floor(pixel.getBlue() / 16) * 16);
        pixel.setGreen(Math.floor(pixel.getGreen() / 16) * 16);
    }

    return image;
}

function ChopToHide(image)
{
    for (var pixel of image.values()) 
    {
        pixel.setRed((pixel.getRed() % 16) * 16);
        pixel.setBlue((pixel.getBlue() % 16) * 16);
        pixel.setGreen((pixel.getGreen() % 16) * 16);
    }

    return image;
}