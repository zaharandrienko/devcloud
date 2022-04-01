

var x = true;
var y = true;



window.addEventListener('scroll', function () {
    var toolbarBack = document.getElementsByClassName("toolbar");
    if (pageYOffset > -1) {
        toolbarBack[0].classList.add('scroll');
    } else {
        toolbarBack[0].classList.remove('scroll');
    }

});





function Menu() {
    var toolbarLogo = document.getElementsByClassName("toolbarLogo");
    var toolbar = document.getElementsByClassName("toolbar");
    var menu = document.getElementsByClassName("menu");
    var bar1 = document.getElementsByClassName("bar1");
    var bar2 = document.getElementsByClassName("bar2");
    var bar3 = document.getElementsByClassName("bar3");


    if (x === true) {
        toolbar[0].classList.add('blackMenu');
        bar1[0].classList.add('rotate1');
        bar3[0].classList.add('rotate2');
        bar2[0].classList.add('opacity');
        toolbarLogo[0].classList.add('opacity');
        toolbarLogo[1].classList.add('opacity');
        menu[0].style.display = "block";
    }
    else {
        toolbar[0].classList.remove('blackMenu');
        bar1[0].classList.remove('rotate1');
        bar3[0].classList.remove('rotate2');
        bar2[0].classList.remove('opacity');
        toolbarLogo[0].classList.remove('opacity');
        toolbarLogo[1].classList.remove('opacity');
        menu[0].style.display = "none";

    }

    x = !x
}



function DownMenuActive(){
    var downMenu = document.getElementsByClassName("downMenu");
    var downArr = document.getElementsByClassName("downArr");



    if(y == true){
        downMenu[0].classList.add('downMenuActive')
        downArr[0].classList.add('downArrRota')
    }
    else{
        downMenu[0].classList.remove('downMenuActive')
        downArr[0].classList.remove('downArrRota')

    }
    y = !y
}




function Active(n) {
    var activeIndex = n
    var index = document.getElementsByClassName("index");
    var img = document.getElementsByClassName("img3");
    var text = document.getElementsByClassName("text3");


    var i;
    for (i = 0; i < index.length; i++) {
        index[i].classList.remove('active');
    }
    index[activeIndex].classList.add('active');


    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[activeIndex].style.display = "block";


    for (i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }
    text[activeIndex].style.display = "block";
}

function Control(n) {
    var services = document.getElementsByClassName("services");
    var controller = document.getElementsByClassName("controller");

    var i
    for (i = 0; i < controller.length; i++) {
        controller[i].classList.remove('activeController');
    }
    controller[n].classList.add('activeController');


    if (n == 0) {
        services[0].classList.add('left');
        services[0].classList.remove('right');
    }
    if (n == 1) {
        services[0].classList.remove('left');
        services[0].classList.remove('right');
    }
    if (n == 2) {
        services[0].classList.remove('left');
        services[0].classList.add('right');
    }
}
