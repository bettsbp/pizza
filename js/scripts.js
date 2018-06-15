// business

function Pizza() {
  this.name
  this.toppings = []
  this.size
  this.tempPrice = 0
  this.totalPrice = 0
}


Pizza.prototype.addToppings = function(pizzaToppings) {
  for (i=0; i<=pizzaToppings.length; i++) {
    var pizzaString = pizzaToppings[i].toString()
    if (pizzaString.includes('Cheddar Cheese')) {
      this.tempPrice += .5
      this.totalPrice += this.tempPrice
      this.tempPrice = 0
    } if (pizzaString.includes('Tomatoes')) {
      this.tempPrice += 1.25
      this.totalPrice += this.tempPrice
      this.tempPrice = 0
    } if (pizzaString.includes('Jalapenos')) {
      this.tempPrice += 30.00
      this.totalPrice += this.tempPrice
      this.tempPrice = 0
    }
  }
}
// user


$(document).ready(function() {

  var newPizza = new Pizza;

  $('#pizzaform').submit(function(event) {
    var pizzaSize = $('input#pizzaSize').val();
    var pizzaToppings = [];

  });
});
