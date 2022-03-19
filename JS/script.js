// BS Logic

function Pizza(size, topings, crust, amt) {
    this.size = size;
    this.topping = topings;
    this.crust = crust;
    this.amt = amt;
}

let pizzaSize = [
    ['Small', 700],
    ['Medium', 900],
    ['Large', 1200]
]

let tops = [
    ["Red Paper", 100],
    ["Cauli Flower", 70],
    ["Tomatoes ", 120],
    ["Butternut Squash", 150]
]

let crust = [
    ["Cripsy", 50],
    ["Stuffed", 70],
    ["Gluten Free", 100]
]
let pictures = ["/assets/pizza-g538ad5b47_640.jpg", "/assets/italian-cuisine-g64e6fe569_640.jpg", "/assets/pizza-ga7513f267_640.jpg"]

let items = [];


Pizza.prototype.price = function () {
    let mySize = this.size;
    let myTop = this.size;
    let myCrust = this.crust;
    let pizzaNo = this.amt;
    if(mySize === "large"){
        tops[0][1] = 120;
        tops[1][1] = 90;
        tops[2][1] = 140;
        tops[3][1] = 170;
    } else if(mySize === 'medium'){
        tops[0][1] = 110;
        tops[1][1] = 80;
        tops[2][1] = 130;
        tops[3][1] = 160;
    }

    let myPrice = (pizzaSize[mySize][1] + tops[myTop][1] + crust[myCrust][1]) * pizzaNo;
    return myPrice
}

let order1 = new Pizza(0, 2, 0, 1);

console.log(`The total price is: ${order1.price()}`)


function myModal(pizzaType) {
    if (pizzaType === 'medium') {
        calculate('Medium Size', pizzaType)
    } else if (pizzaType === 'small') {
        calculate('Small Size', pizzaType);
    } else {
        calculate('Large Size', pizzaType);
    }
}





function calculate(param, param2) {
    // document.getElementById("modal").style.display = "block";
    // $("#tbody").empty();
    console.log(param, param2)
    $("#modal").append(
        '<div class="w3-modal-content col-sm-6"> ' +
        '<header class="w3-main-container text-center bg-dark">' +
        '<h1>' + param + '</h1>' +
        '<p id="datatype">' + param2 + '</p>' +
        '<span id = "myHide"' +
        'class="w3-button w3-display-topright">&times;</span>' +
        '</header>' +
        '<div class="w3-main-container pb-4 base-1">' +
        '<form class="w3-container base-0" id="myform">' +
        '<div class="w3-main-container">' + "<br>" +
        '<label for="toppings">Choose Topping</label>' +
        '<select name="toppings" id = "toppings" class="w3-input" id="toppings">' +
        '<option value="0">Red Pepper</option>' +
        '<option value="1">Cauli Flower</option>' +
        '<option value="2">Tomatoes</option>' +
        '<option value="2">Butternut Squash</option>' +
        '</select>' +
        '</div>' +

        '<div class="w3-main-container">' + "<br>" +
        '<label for="crust">Choose crust</label>' +
        '<select class="w3-input" id = "crust" name="crust" id="crust">' +
        '<option value="0">Cripsy</option>' +
        '<option value="1">Stuffed</option>' +
        '<option value="2">Gluten-Free</option>' +
        '</select>' + "<br>" +

        '<label for="quantity">Choose Quantity</label>' +
        '<input type="number" class="w3-input w3-border" id = "quantity" placeholder="choose quantity" required>' +
        '<br>' +
        '</div>' +

        '<input type="submit" value="Order" class="btn btn-primary">' +
        '</form>' +
        '</div>' +
        '</div>'

    );
    $("#modal").show("slow");


    $('form#myform').submit(event => {
        event.preventDefault();

        $("#tbody").empty();
        let toppingVal = $("#toppings").val();
        let pizzaValue = $('#datatype').text();
        let crustVal = $("#crust").val();
        let quantityVal = $("#quantity").val();
        let pizzaData;
        if (param2 === 'small') {
            pizzaData = 0;
        } else if (param2 === 'medium') {
            pizzaData = 1;
        } else {
            pizzaData = 2;
        }
        console.log(`You are odering ${pizzaData} sized pizza and toping Value is ${toppingVal} quantity ${quantityVal} crust ${crustVal}`)

        let mypizza = new Pizza(pizzaData, toppingVal, crustVal, quantityVal);
        console.log(mypizza.price());
        items.push(mypizza);
        console.log(items)

        items.forEach((item, index) => {
        
            $("#tbody").append(
                '<tr id="' + (index + 1) + '">' +
                '<td>' + (index + 1) + '</td>' +
                '<td><img src="' + pictures[item.size]  +'" alt="" class="img-fluid tdimg"></td>' +
                '<td>' + pizzaSize[item.size][0] + '</td>' +
                '<td>' + tops[item.topping][0] + '</td>' +
                '<td>' + crust[item.crust][0] + '</td>' +
                '<td>' + item.price() + '</td>' +
                '<td><input type="checkbox" name="check" id="check' + (index + 1) +'" value= "' + item.price() + '"></td>' +
                '</tr>');
        });

        reset();
    })


    $("#myHide").click(() => {
        $("#modal").empty();
        $("#modal").hide("slow");
    })
}
function reset() {
    $("input#quantity").val("");
}

function myCheckout(){
    

}