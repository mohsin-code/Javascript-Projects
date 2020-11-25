//The function that is gonna run as the Submit button is clicked
function Message(){
    
    //The text inputted in the textbox
    var text = document.getElementById("msg").value;

    //This the <p> tag
    var output = document.getElementsByClassName("msg")[0];
    
    //The <p> tag's innerHTML is changed into text
    output.innerHTML = text;
}