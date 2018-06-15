// business

function Pizza(name, toppings, size) {
  this.forWho
  this.toppings = []
  this.size
  this.tempPrice = 0
  this.totalPrice = 0
}

Pizza.prototype.combineToppings = function(sauce, cheese, meat1, meat2) {
  this.toppings.push(sauce, cheese, meat1, meat2)
}

Pizza.prototype.getPrice = function() {
    this.tempPrice = 0
    for (i=0; i>=this.toppings.length; i++)
    // sauces
    if (this.toppings[i].toString().includes('Choose a sauce')) {
      alert(errormsg)
    } else if (this.toppings[i].toString().includes('Tomato')) {
      alert(this.tempPrice += 3)
      this.totalPrice += this.tempPrice
    } else if (this.toppings[i].toString().includes('White Garlic')) {
      this.tempPrice += 3.25
      this.totalPrice += this.tempPrice
    } else if (this.toppings[i].toString().includes('None')) {
      this.tempPrice += 0
      this.totalPrice += this.tempPrice
    } else {
      return errormsg
    }
    console.log(this.totalPrice)
    // cheese
}

// user

$(document).ready(function() {

  var newPizza = new Pizza;
  var errormsg = 'Please fill out entire order'

  $('#pizzaOrder').submit(function(event) {
    event.preventDefault();
    newPizza.forWho = $('#name').val();
    newPizza.size = $('#pizzaSize').val();
    var sauce = $('#pizzaSauce').val();
    var cheese = $('#pizzaCheese').val();
    var meat1 = $('#pizzaMeat1').val();
    var meat2 = $('#pizzaMeat2').val();
    var errormsg = 'Please fill out entire order'

    newPizza.combineToppings(sauce, cheese, meat1, meat2);

    alert(newPizza.getPrice());

  });
});
