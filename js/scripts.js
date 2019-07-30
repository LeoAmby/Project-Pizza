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
    $("form#placeOrder").submit(function(event)     {
        event.preventDefault();
        
        var name = $("#yourName").val();
        var pizzaSize   = $("#size").val();
        var pizzaFlavor = $("#flavors").val();
        var pizzaNumber = $("#numberOfPizza").val();
        var pizzaCrust  = $("input[name='gridRadios']:checked").val();
        var services = $("input[name='Radios']:checked").val();
        var location = $("#location").val();
        var pizzaToppings = [];
        $.each($('input:checkbox[name="toppings"]:checked'),function(){
            pizzaToppings.push($(this).val());
                    });
        var toppingsPrice = 0;
        if (pizzaSize === 'mega'){
            toppingsPrice = 250;
        } else if (pizzaSize === 'large'){
            toppingsPrice = 200;
        } else if (pizzaSize === 'medium'){
            toppingsPrice = 150;
        } else if (pizzaSize === 'small'){
            toppingsPrice = 100;
        }

        var crustPrice = 0;
        if (pizzaSize == 'mega' && pizzaCrust == 'crispy'){
            crustPrice =250;
        } else if (pizzaSize == 'large' && pizzaCrust == 'crispy'){
            crustPrice = 250;
        } else if (pizzaSize == 'medium' && pizzaCrust == 'crispy'){
            crustPrice = 200;
        } else if (pizzaSize == 'small' && pizzaCrust == 'crispy'){
            crustPrice = 150;
        }else if (pizzaSize == 'mega' && pizzaCrust == 'stuffed'){
            crustPrice = 400;
        } else if (pizzaSize == 'large' && pizzaCrust == 'stuffed'){
            crustPrice = 350;
        } else if (pizzaSize == 'medium' && pizzaCrust == 'stuffed'){
            crustPrice = 300;
        } else if (pizzaSize == 'small' && pizzaCrust == 'stuffed'){
            crustPrice = 250;
        } else if (pizzaSize == 'mega' && pizzaCrust == 'glutten-free'){
            crustPrice = 300;
        } else if (pizzaSize == 'large' && pizzaCrust == 'glutten-free'){
            crustPrice = 250;
        } else if (pizzaSize == 'medium' && pizzaCrust == 'glutten-free'){
            crustPrice = 200;
        } else if (pizzaSize == 'mega' && pizzaCrust == 'glutten-free'){
            crustPrice = 150;
        } 
 
        var sizePrice = 0;
        if (pizzaSize == 'mega'){
            sizePrice = 1200;
        } else if (pizzaSize == 'large'){
            sizePrice = 1000;
        } else if (pizzaSize == 'medium'){
            sizePrice = 800;
        } else if (pizzaSize == 'large'){
            sizePrice = 550;
        }

        var deliveryPrice = 0;
        if(location == 'withinNairobi'){
            deliveryPrice = 250;
        } else if (location == 'nairobiOutcasts'){
            deliveryPrice = 500;
        }else deliveryPrice = 0;
  
        var noOfPizza = document.getElementById('numberOfPizza').value;

 
    var cost= 0;
    function totalCost(){
        cost = (sizePrice + crustPrice + toppingsPrice + deliveryPrice)*noOfPizza;
    }
    totalCost();
    alert("Thank you "+ name + " for your order." + " You have ordered " +pizzaNumber +" " + pizzaSize +" "+ pizzaFlavor +" pizza with a "+ pizzaCrust + " crust."+ "Your toppings choice include "+pizzaToppings + ". The total cost of your order is Ksh."+ cost );
    })
})
//business logic
