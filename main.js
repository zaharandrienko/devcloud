

var x = true;
var y = true;
var z = true


const item = document.getElementsByClassName('comment-slider')
var Ind = 1;

// window.addEventListener('scroll', function () {
//     var toolbarBack = document.getElementsByClassName("toolbarMain");
//     if (pageYOffset > 200) {
//         toolbarBack[0].classList.add('scroll');
//     } 
//     else{
//         toolbarBack[0].classList.remove('scroll');
//     }
// });

function Plus(e){
    if(e==1){
        Ind = Ind + 1;
    }
    else{
        Ind = Ind - 1;
    }

    if(Ind > 4){
        Ind = 1
    }

    if(Ind < 1){
        Ind = 4
    }
    Team(Ind);
}

function Team(x){

    if(x == 1){
        item[0].classList.remove('comment-slider2');
        item[0].classList.remove('comment-slider3');
        item[0].classList.remove('comment-slider4');
    }

    if(x == 2){
        item[0].classList.add('comment-slider2');
        item[0].classList.remove('comment-slider3');
        item[0].classList.remove('comment-slider4');
    }

    if(x == 3){
        item[0].classList.add('comment-slider3');
        item[0].classList.remove('comment-slider2');
        item[0].classList.remove('comment-slider4');
    }

    if(x == 4){
        item[0].classList.add('comment-slider4');
        item[0].classList.remove('comment-slider2');
        item[0].classList.remove('comment-slider3');
    }
}
















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

// function Call(){
//     var phone = document.getElementsByClassName("phone");
//     var callImg = document.getElementsByClassName("callImg");
//     var callForm = document.getElementsByClassName("callForm");

//     if(z === false){
//         phone[0].classList.add('call');
//         callImg[0].classList.add('paperBlock');
//         callForm[0].classList.add('paperBlock2')
//     }
//     else{
//         phone[0].classList.remove('call');
//         callImg[0].classList.remove('paperBlock');
//         callForm[0].classList.remove('paperBlock2')
//     }

//     z = !z
// }

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


function Work1(x){
    let ind1 = document.getElementsByClassName("work1ind")
    let block1 = document.getElementsByClassName("blockWork1")

    if(x == 1){
        ind1[0].classList.add('workActive')
        ind1[1].classList.remove('workActive')
        ind1[2].classList.remove('workActive')
        block1[0].classList.add('textWorkNone')
        block1[1].classList.remove('textWorkNone')
        block1[2].classList.remove('textWorkNone')
    }
    if(x == 2){
        ind1[0].classList.remove('workActive')
        ind1[1].classList.add('workActive')
        ind1[2].classList.remove('workActive')
        block1[0].classList.remove('textWorkNone')
        block1[1].classList.add('textWorkNone')
        block1[2].classList.remove('textWorkNone')
    }
    if(x == 3){
        ind1[0].classList.remove('workActive')
        ind1[1].classList.remove('workActive')
        ind1[2].classList.add('workActive')
        block1[0].classList.remove('textWorkNone')
        block1[1].classList.remove('textWorkNone')
        block1[2].classList.add('textWorkNone')
    }
}
function Work2(x){
    let ind1 = document.getElementsByClassName("work1ind2")
    let block1 = document.getElementsByClassName("blockWork2")

    if(x == 1){
        ind1[0].classList.add('workActive')
        ind1[1].classList.remove('workActive')
        ind1[2].classList.remove('workActive')
        block1[0].classList.add('textWorkNone')
        block1[1].classList.remove('textWorkNone')
        block1[2].classList.remove('textWorkNone')
    }
    if(x == 2){
        ind1[0].classList.remove('workActive')
        ind1[1].classList.add('workActive')
        ind1[2].classList.remove('workActive')
        block1[0].classList.remove('textWorkNone')
        block1[1].classList.add('textWorkNone')
        block1[2].classList.remove('textWorkNone')
    }
    if(x == 3){
        ind1[0].classList.remove('workActive')
        ind1[1].classList.remove('workActive')
        ind1[2].classList.add('workActive')
        block1[0].classList.remove('textWorkNone')
        block1[1].classList.remove('textWorkNone')
        block1[2].classList.add('textWorkNone')
    }
}
function Work3(x){
    let ind1 = document.getElementsByClassName("work1ind3")
    let block1 = document.getElementsByClassName("blockWork3")

    if(x == 1){
        ind1[0].classList.add('workActive')
        ind1[1].classList.remove('workActive')
        ind1[2].classList.remove('workActive')
        ind1[3].classList.remove('workActive')
        block1[0].classList.add('textWorkNone')
        block1[1].classList.remove('textWorkNone')
        block1[2].classList.remove('textWorkNone')
        block1[3].classList.remove('textWorkNone')
    }
    if(x == 2){
        ind1[0].classList.remove('workActive')
        ind1[1].classList.add('workActive')
        ind1[2].classList.remove('workActive')
        ind1[3].classList.remove('workActive')
        block1[0].classList.remove('textWorkNone')
        block1[1].classList.add('textWorkNone')
        block1[2].classList.remove('textWorkNone')
        block1[3].classList.remove('textWorkNone')
    }
    if(x == 3){
        ind1[0].classList.remove('workActive')
        ind1[1].classList.remove('workActive')
        ind1[2].classList.add('workActive')
        ind1[3].classList.remove('workActive')
        block1[0].classList.remove('textWorkNone')
        block1[1].classList.remove('textWorkNone')
        block1[2].classList.add('textWorkNone')
        block1[3].classList.remove('textWorkNone')
    }
    if(x == 4){
        ind1[0].classList.remove('workActive')
        ind1[1].classList.remove('workActive')
        ind1[2].classList.remove('workActive')
        ind1[3].classList.add('workActive')
        block1[0].classList.remove('textWorkNone')
        block1[1].classList.remove('textWorkNone')
        block1[2].classList.remove('textWorkNone')
        block1[3].classList.add('textWorkNone')
    }
}
function Work4(x){
    let ind1 = document.getElementsByClassName("work1ind4")
    let block1 = document.getElementsByClassName("blockWork4")

    if(x == 1){
        ind1[0].classList.add('workActive')
        ind1[1].classList.remove('workActive')
        ind1[2].classList.remove('workActive')
        block1[0].classList.add('textWorkNone')
        block1[1].classList.remove('textWorkNone')
        block1[2].classList.remove('textWorkNone')
    }
    if(x == 2){
        ind1[0].classList.remove('workActive')
        ind1[1].classList.add('workActive')
        ind1[2].classList.remove('workActive')
        block1[0].classList.remove('textWorkNone')
        block1[1].classList.add('textWorkNone')
        block1[2].classList.remove('textWorkNone')
    }
    if(x == 3){
        ind1[0].classList.remove('workActive')
        ind1[1].classList.remove('workActive')
        ind1[2].classList.add('workActive')
        block1[0].classList.remove('textWorkNone')
        block1[1].classList.remove('textWorkNone')
        block1[2].classList.add('textWorkNone')
    }
}