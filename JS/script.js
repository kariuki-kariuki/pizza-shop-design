// BS Logic

function Pizza(size, topings, feel, amt){
    this.size = size;
    this.topping = topings;
    this.feel = feel;
    this.amt = amt;
}

let pizzaSize = [
    ['small', 700],
    ['medium', 900],
    ['large', 1200]
]

let tops = [50, 60, 30, 70]

let crust = [78]


Pizza.prototype.price = function(){
    let mySize = this.size;
    let myTop = this.size;
    let myCrust = this.feel;
    let pizzaNo = this.amt;
    let myPrice = (pizzaSize[mySize][1] + tops[myTop] + crust[myCrust]) * pizzaNo;
    return myPrice
}

let order1 = new Pizza (1, 2, 0, 5);

console.log(`The total price is: ${order1.price()}`)


function myModal(pizzaType){
    if(pizzaType === 'medium'){
        calculate('Medium Size', pizzaType)
    } else if (pizzaType === 'small'){
        calculate('Small Size', pizzaType);
    } else {
        calculate('Large Size', pizzaType);
    }
}
function calculate(param, param2){
    // document.getElementById("modal").style.display = "block";
    $("#modal").append(
        '<div class="w3-modal-content col-sm-6"> ' +
            '<header class="w3-main-container text-center bg-dark">' +
                '<h1>' + param +'</h1>' +
                '<p id="datatype">'+ param2 + '</p>' +
                '<span id = "myHide"'+
                    'class="w3-button w3-display-topright">&times;</span>'+
            '</header>'+
            '<div class="w3-main-container pb-4 base-1">'+
                '<form class="w3-container base-0" id="myform">'+
                    '<div class="w3-main-container">'+ "<br>" +
                        '<label for="toppings">Choose Topping</label>'+
                        '<select name="toppings" id = "toppings" class="w3-input" id="toppings">'+
                            '<option value="0">Red Pepper</option>'+
                            '<option value="1">Cauli Flower</option>'+
                            '<option value="2">Tomatoes</option>'+
                           '<option value="2">Butternut Squash</option>'+
                        '</select>'+
                    '</div>'+

                    '<div class="w3-main-container">'+ "<br>" +
                        '<label for="crust">Choose crust</label>'+
                        '<select class="w3-input" id = "crust" name="crust" id="crust">'+
                            '<option value="0">Cripsy</option>'+
                            '<option value="1">Stuffed</option>'+
                            '<option value="2">Gluten-Free</option>'+
                        '</select>'+ "<br>" +

                        '<label for="quantity">Choose Quantity</label>'+
                        '<input type="number" class="w3-input w3-border" id = "quantity" placeholder="choose quantity" required>'+
                            '<br>'+
                    '</div>'+

                        '<input type="submit" value="Order" class="btn btn-primary">'+
                '</form>'+
            '</div>'+
        '</div>'

    );
    $("#modal").show("slow");


    $('form#myform').submit(event => {
        event.preventDefault();
        let toppingVal = $("#toppings").val();
        let pizzaValue = $('#datatype').text();
        console.log(`You are odering ${pizzaValue} sized pizza and toping Value is ${toppingVal}`)


        
        reset()
    })


    $("#myHide").click(() => {
        $("#modal").empty();
        $("#modal").hide("slow");
    })
}
function reset(){
    $("input#quantity").val("");
}
// $('form#myform').submit( event => {
//     event.preventDefault();
//     let toppingVal = $("#toppings").val();
//     let pizzaValue = $('#datatype').text();
//     console.log(`You are odering ${pizzaValue} and toping Value is ${pizzaValue}`)
// })