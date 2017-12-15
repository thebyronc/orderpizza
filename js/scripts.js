function Pizza(crust, cheese, meats, veggies) {
  this.crust = crust;
  this.cheese = cheese;
  this.meats = meats;
  this.veggies = veggies;
  this.cost = 10 + this.meats.length + this.veggies.length;
}
Pizza.prototype.displayOrder = function() {
  return "You've orderd a " + this.crust + " pizza with "+ this.cheese + "  and the following toppings: "  + this.meats + " " + this.veggies + " Cost: " + this.cost;
}

// front end
$(document).ready(function() {
  $("#orderPizza").submit(function(event) {
    event.preventDefault();
    var crust = $("input:radio[name=crust]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
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

    var newPizza = new Pizza(crust, cheese, meats, veggies);

    $("#checkoutCart").append('<div>' + newPizza.displayOrder() +'</div>');

  });
}); // end document.ready
