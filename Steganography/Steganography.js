var hide = null;
var img = null;

function UploadHidden()
{
    var input = document.getElementById("hide");
    hide = new SimpleImage(input);
    canvas = document.getElementById("cv1")
    
    hide.drawTo(canvas);

    //get latter pixels of this
}

function UploadImg()
{
    var input = document.getElementById("img");
    img = new SimpleImage(input);
    canvas = document.getElementById("cv2")
    
    img.drawTo(canvas);

    //get header of this
}

function HideImg()
{
    //Perform steganography
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