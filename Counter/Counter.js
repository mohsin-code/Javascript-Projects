//This the script for Counter.html file

var num = document.getElementsByClassName("num")[0];


function AddCount(){
    num.innerHTML++;
    if(num.innerHTML < 0){
        num.style.color = "red";
    } else if (num.innerHTML > 0){
        num.style.color = "green";
    } else {
        num.style.color = "grey";
    }
}

function LowerCount(){
    num.innerHTML--;
    if(num.innerHTML < 0){
        num.style.color = "red";
    } else if (num.innerHTML > 0){
        num.style.color = "green";
    } else {
        num.style.color = "grey";
    }
}