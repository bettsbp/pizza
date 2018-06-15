// business

function Pizza() {
  this.forWho
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
      this.tempPrice += .75
      this.totalPrice += this.tempPrice
      this.tempPrice = 0
    } if (pizzaString.includes('Olives')) {
      this.tempPrice += 3.00
      this.totalPrice += this.tempPrice
      this.tempPrice = 0
    } if (pizzaString.includes('Red Sauce')) {
      this.tempPrice += 99.00
      this.totalPrice += this.tempPrice
      this.tempPrice = 0
    }
  }
}
// user


$(document).ready(function() {

  var newPizza = new Pizza;

  $('#pizzaOrder').submit(function(event) {
    event.preventDefault();
    newPizza.forWho = $('input#name').val();
    newPizza.size = $('input#pizzaSize').val();
    newPizza.toppings =



  });
});
