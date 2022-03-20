let index = 0;

(function slides(){
    let i;
    let slider1 = document.getElementsByClassName("slides1");
    let slider2 = document.getElementsByClassName("slides2");
    let slider3 = document.getElementsByClassName("slides3");
    for (i = 0; i < slider1.length; i++) {
        slider1[i].style.display = "none";
        slider2[i].style.display = "none";
        slider3[i].style.display = "none";
    }
    index++;
    if (index > slider1.length) {
        index = 1;
    }
    slider1[index - 1].style.display = "block";
    slider2[index - 1].style.display = "block";
    slider3[index - 1].style.display = "block";
    setTimeout(slides, 7000)
    
})();


setInterval(function showChar() {
    let elem = document.getElementById('demo');
    let i = -1;
    let myText = "We make  deliveries around Nairobi and all it's surb-urbs area";

    (function start() {
        if (i < myText.length) {
            demo.innerHTML = demo.innerHTML + myText.charAt(i++);
            setTimeout(start, 130);
        }
    })();
    demo.innerHTML = "";

}, 12000);

(function showChar2() {
    let x = -1;
    let str = "Palais Des Pizzas";
    let elem1 = document.getElementById('pro');

    (function programmer() {
        if (x < str.length) {
            pro.innerHTML = pro.innerHTML + str.charAt(x++);
            setTimeout(programmer, 500);
        }
    })();
    pro.innerHTML = "";
})();


