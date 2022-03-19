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

let top = [50, 60, 30, 70]

let crust = [78]


Pizza.prototype.price = function(){
    let mySize = this.size;
    let myTop = this.size;
    let myCrust = this.feel;
    let pizzaNo = this.amt;
    let myPrice = (pizzaSize[mySize][1] + top[myTop] + crust[myCrust]) * pizzaNo;
    return myPrice
}

let order1 = new Pizza (1, 2, 0, 5);

console.log(`The total price is: ${order1.price()}`)


$(document).ready( () => {
    function myModal(pizzaType){
        if(pizzaType === 'medium'){
            calculate('medium')
        } else if (pizzaType === 'small'){
            calculate('small');
        } else {
            calculate('large');
        }
    }

    function calculate(param){
        $("#modal").show()

    }
})