function Pizza(crust, cheese, meats, veggies) {
  this.crust = crust;
  this.cheese = cheese;
  this.meats = meats;
  this.veggies = veggies;
  this.cost = this.meats.length + this.veggies.length;
}
Pizza.prototype.displayOrder = function() {
  return "You've orderd a " + this.crust + " pizza with "+ this.cheese + "  and the following toppings: "  + this.meats + this.veggies;
}
// front end
$(document).ready(function() {
  $("#orderPizza").submit(function(event) {
    event.preventDefault();
    var crust = $("input:radio[name=crust]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var meats = [];
    $("input:checkbox[name=meats]:checked").each(function(){
      var checkedMeats = $(this).val();
      meats.push(checkedMeats);
    });
    var veggies = "green pepper";
    var newPizza = new Pizza(crust, cheese, meats, veggies);

    $("#checkoutCart").append('<div>' + newPizza.displayOrder() +'</div>');

  });
}); // end document.ready
