var menuInd = true;


function Menu() {
    var logo = document.getElementsByClassName('logo')
    var menu = document.querySelector('#Menu')
    var nav = document.querySelector('#Nav')
    var item1 = document.getElementsByClassName("stack-item1")
    var item2 = document.getElementsByClassName("stack-item2")
    var item3 = document.getElementsByClassName("stack-item3")

    if (menuInd === true) {
        menu.classList.add('menu-open')
        nav.classList.remove('adaptive-nav')
        logo[0].classList.add('adaptive-logo')
        item1[0].classList.add('stack-item1-active')
        item3[0].classList.add('stack-item3-active')
        item2[0].classList.add('stack-none')
    }
    else {
        menu.classList.remove('menu-open')
        nav.classList.add('adaptive-nav')
        logo[0].classList.remove('adaptive-logo')
        item1[0].classList.remove('stack-item1-active')
        item3[0].classList.remove('stack-item3-active')
        item2[0].classList.remove('stack-none')
    }

    menuInd = !menuInd

}
function MenuOFF() {
    var logo = document.getElementsByClassName('logo')
    var menu = document.querySelector('#Menu')
    var nav = document.querySelector('#Nav')
    var item1 = document.getElementsByClassName("stack-item1")
    var item2 = document.getElementsByClassName("stack-item2")
    var item3 = document.getElementsByClassName("stack-item3")

    menu.classList.remove('menu-open')
    nav.classList.add('adaptive-nav')
    logo[0].classList.remove('adaptive-logo')
    item1[0].classList.remove('stack-item1-active')
    item3[0].classList.remove('stack-item3-active')
    item2[0].classList.remove('stack-none')

    menuInd = true
}

function Back() {
    var back1 = document.getElementsByClassName('back-item1');
    var back2 = document.getElementsByClassName('back-item2');
    var back3 = document.getElementsByClassName('back-item3');


    back1[0].classList.add('back-item1-active');
    back2[0].classList.add('back-item2-active');
    back3[0].classList.add('back-item3-active')
}


function Modul(b) {
    const open = document.getElementsByClassName('img-hover')
    const plus = document.getElementsByClassName('plus')
    var step;

    if(open[b].classList.contains('img-hover-after')){
        for (step = 0; step < 6; step++) {
            open[step].classList.remove('img-hover-after');
            plus[step].classList.remove('plus-after')
        }
    }
    else{
        for (step = 0; step < 6; step++) {
            open[step].classList.remove('img-hover-after');
            plus[step].classList.remove('plus-after')
        }
        open[b].classList.add('img-hover-after');
        plus[b].classList.add('plus-after')
    }
}