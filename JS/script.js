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
        calculate('Medium Size')
    } else if (pizzaType === 'small'){
        calculate('Small Size');
    } else {
        calculate('Large Size');
    }
}
function calculate(param){
    // document.getElementById("modal").style.display = "block";
    $("#modal").append(
        '<div class="w3-modal-content pb-4"> ' +
            '<header class="w3-main-container w3-teal">' +
                '<h1>' + param +'</h1>' +
                '<span id = "myHide"'+
                    'class="w3-button w3-display-topright">&times;</span>'+
            '</header>'+
            '<div class="w3-container">'+
                '<form class="w3-container">'+
                    '<div class="w3-main-container">'+
                        '<label for="toppings">Choose Topping</label>'+
                        '<select name="toppings" class="w3-input" id="toppings">'+
                            '<option value="0">Red Pepper</option>'+
                            '<option value="1">Cauli Flower</option>'+
                            '<option value="2">Tomatoes</option>'+
                           '<option value="2">Butternut Squash</option>'+
                        '</select>'+
                    '</div>'+

                    '<div class="w3-main-container">'+
                        '<label for="crust">Choose crust</label>'+
                        '<select class="w3-input" name="crust" id="crust">'+
                            '<option value="0">Cripsy</option>'+
                            '<option value="1">Stuffed</option>'+
                            '<option value="2">Gluten-Free</option>'+
                        '</select>'+

                        '<label for="quantity">Choose Quantity</label>'+
                        '<input type="number" class="w3-input w3-border" placeholder="choose quantity">'+
                            '<br>'+
                            '</div>'+

                            '<input type="submit" value="Order" class="btn btn-primary">'+
                            '</form>'+
                    '</div>'+
            '</div>'
    );
    $("#modal").show("slow");
    $("#myHide").click(() => {
        $("#modal").empty();
        $("#modal").hide("slow");
    })

}