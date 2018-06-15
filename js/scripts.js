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

Pizza.prototype.getPrice = function(errormsg) {
    this.tempPrice = 0
    // sauces
    if (this.toppings[0] == 'Choose a sauce') {
      alert(errormsg)
      return errormsg
    } else if (this.toppings[0] == 'Tomato') {
      this.tempPrice += 3
      this.totalPrice += this.tempPrice
    } else if (this.toppings[0] == 'White Garlic') {
      this.tempPrice += 3.25
      this.totalPrice += this.tempPrice
    } else if (this.toppings[0] == 'None') {
      this.tempPrice += 0
      this.totalPrice += this.tempPrice
    } else {
      return errormsg
    }

    // cheese
    if (this.toppings[1] == 'Choose a cheese') {
      alert(errormsg)
      return errormsg
    } else if (this.toppings[1] == 'Cheddar') {
      this.tempPrice += 3
      this.totalPrice += this.tempPrice
    } else if (this.toppings[1] == 'Mozzarella') {
      this.tempPrice += 3.25
      this.totalPrice += this.tempPrice
    } else if (this.toppings[1] == 'None') {
      this.tempPrice += 0
      this.totalPrice += this.tempPrice
    } else {
      return errormsg
    }

    // meat1
    if (this.toppings[2] == 'Primary Meat') {
      alert(errormsg)
      return errormsg
    } else if (this.toppings[2] == 'Sausage') {
      this.tempPrice += 3
      this.totalPrice += this.tempPrice
    } else if (this.toppings[2] == 'Bacon') {
      this.tempPrice += 3.25
      this.totalPrice += this.tempPrice
    } else if (this.toppings[2] == 'None') {
      this.tempPrice += 0
      this.totalPrice += this.tempPrice
    } else {
      return errormsg
    }

    // meat2
    if (this.toppings[3] == 'Secondary Meat') {
      alert(errormsg)
      return errormsg
    } else if (this.toppings[3] == 'Ham') {
      this.tempPrice += 3
      this.totalPrice += this.tempPrice
    } else if (this.toppings[3] == 'Chicken') {
      this.tempPrice += 3.25
      this.totalPrice += this.tempPrice
    } else if (this.toppings[3] == 'None') {
      this.tempPrice += 0
      this.totalPrice += this.tempPrice
    } else {
      return errormsg
    }
    return this.totalPrice
}

Pizza.prototype.reset = function() {
  this.forWho = ''
  this.toppings = []
  this.size = ''
  this.tempPrice = 0
  this.totalPrice = 0
}

Pizza.prototype.sizePrice = function(errorsize) {
  if (this.size == 'Choose a size') {
    alert(errorsize)
    return errorsize
  } else if (this.size == 'Small') {
    this.tempPrice += 3
    this.totalPrice += this.tempPrice
  } else if (this.size == 'Medium') {
    this.tempPrice += 5
    this.totalPrice += this.tempPrice
  } else {
    this.tempPrice += 8
    this.totalPrice += this.tempPrice
  }
  return this.totalPrice
}

// user

$(document).ready(function() {

  var newPizza = new Pizza;

  $('#pizzaOrder').submit(function(event) {
    event.preventDefault();
    newPizza.forWho = $('#name').val();
    newPizza.size = $('#pizzaSize').val();
    var sauce = $('#pizzaSauce').val();
    var cheese = $('#pizzaCheese').val();
    var meat1 = $('#pizzaMeat1').val();
    var meat2 = $('#pizzaMeat2').val();
    var errormsg = 'Please fill out entire order';
    var errorname = 'Please fill out your name';
    var errorsize = 'Please choose a size for your pizza';

    if (newPizza.forWho == '') {
      alert('Please enter your name');
      return;
    } else {

    newPizza.combineToppings(sauce, cheese, meat1, meat2);
    newPizza.sizePrice(errorsize);
    newPizza.getPrice(errormsg);
    $('#orderForm').hide();
    $('#results').show();

    $('#finalorder').text(newPizza.forWho + ', your total is $' + newPizza.totalPrice);
    $('#finalorder').text('You ordered a ' + newPizza.size + ' pizza, with ' + newPizza.toppings + ', for a total of: $' + newPizza.totalPrice + '. Enjoy your pizza!');
    newPizza.reset();
    };
  });

  // $('#refreshbutton').click(function(event) {
  //   event.preventDefault();
  //   location.reload(forceGet);
  // });

});
