// var fields = {
//     Name: "yourName",
//     Phone: "phoneNumber",
//     Flavor: ["Hawaiian", "Magheritta", "Vege Tikka", "Peri-Peri Chicken", "BBQ-Steak", "Pepperoni", "Mushroom Tikka", "BBQ-Chicken"],
//     Size: ["Mega", "Large", "Medium", "Small"],
//     Number: "numberOfPizzas",
//     Crust: ["crispy", "stuffed", "gluttenFree"],
//     Service: ["delivery", "pick-up"],
//     Delivery: ["within Nairobi", "Nairobi Outcasts"],
//     Prices: [1200, 1000, 800, 550]

// }
//user logic
$(document).ready(function(){
    $("form#placeOrder").submit(function(event) {
        event.preventDefault();

        var pizzaSize   = $("#size").val();
        var pizzaFlavor = $("#flavors").val();
        var pizzaNumber = $("#numberOfPizza").val();
        var pizzaCrust  = $("input[name='gridRadios']:checked").val();
        var pizzaToppings = [];
        $.each($('input:checkbox[name="toppings"]:checked'),function(){
            pizzaToppings.push($(this).val());
                    });
        var services = $("input[name='Radios']:checked").val();
        var location = $("#location").val();
        console.log(location);

    })
})
//business logic
