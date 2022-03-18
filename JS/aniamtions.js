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



