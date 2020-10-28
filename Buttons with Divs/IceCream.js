function getIceCream(){
  alert('Here is your Ice Cream 🍦 Sorry we only have Vanilla 😅');
}

function topping(){
  var choice = confirm('Do you want toppings?');
  if(choice){
    var message = "Here is your topping 🍨";
  } else {
    var message = "You sure?";
  }
  alert(message);
}
