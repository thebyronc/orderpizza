var orderId = 0;

function Pizza(size, crust, meats, veggies) {
  this.size = size;
  this.crust = crust;
  this.meats = meats;
  this.veggies = veggies;
  this.cost = 10;
  orderId += 1;
}
Pizza.prototype.calcCost = function () {
  var totalCost = this.cost + (this.meats.length*2) + this.veggies.length;
  if (this.size === "Small") {
    totalCost -= 2;
  } else if (this.size === "Large") {
    totalCost += 2;
  } else {
    console.log("Size Medium");
  }
  return totalCost;
}
Pizza.prototype.displayOrder = function() {
  return "You've orderd a " + this.size + " " + this.crust + " pizza with the following toppings: "  + this.meats + " " + this.veggies;
}

// front end
$(document).ready(function() {
  $("#orderPizza").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var crust = $("input:radio[name=crust]:checked").val();
    var meats = [];
    var veggies = [];
    $("input:checkbox[name=meats]:checked").each(function(){
      var checkedMeats = $(this).val();
      meats.push(checkedMeats);
    });
    $("input:checkbox[name=veggies]:checked").each(function(){
      var checkedVeggies = $(this).val();
      veggies.push(checkedVeggies);
    });

    var newPizza = new Pizza(size, crust, meats, veggies);

    $("#checkoutCart").append('<div class="pizzaOrder" id="pizzaItem' + orderId + '">' + '<div class="row cost"><div class="col-md-6">' + '<span>Order #'+ orderId +'</span></div><div class="col-md-6">$' + newPizza.calcCost() + '</div></div>' + newPizza.displayOrder() + '</div>');
  });
  // $("#pizza")
}); // end document.ready
