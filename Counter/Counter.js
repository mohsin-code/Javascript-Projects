//This the script for Counter.html file

//This is the number <p> tag element object
var num = document.getElementsByClassName("num")[0];

//This functions sets the font color accordinn to value
function color(){
    if(num.innerHTML < 0){
        //Red if negative
        num.style.color = "red";
    } else if (num.innerHTML > 0){
        //Green if positive
        num.style.color = "green";
    } else {
        //Grey if zero
        num.style.color = "grey";
    }
}

//THis function increases the number by 1
function AddCount(){
    //increment
    num.innerHTML++;
    
    //Call the function above
    color();
}

function LowerCount(){
    //decrement
    num.innerHTML--;

    //Call the same function again
    color();
}