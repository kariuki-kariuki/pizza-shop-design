// BS Logic

function Pizza(size, topings, feel, price){
    this.size = size;
    this.topping = topings;
    this.feel = feel;
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
    let myCrust = this.feel
    let myPrice = pizzaSize[mySize] + top[myTop];
    return myPrice
}

let order1 = new Pizza (1, 2);

console.log(order1.price())