window.onscroll = function() { myFunction(), imagem(); };


var navbar = document.getElementById("navbar");
var navcolap = document.getElementById("navbarResponsive");

var sticky = navbar.offsetTop;

var img1 = document.getElementById("img1");
var anima = 0;

document.getElementById("logo").style.height = "120px";
document.getElementById("logo").style.width = "120px";

function myFunction() {

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.height = "3rem";
        // navcolap.style.height *= 0.01;
        document.getElementById("logo").style.height = "70px";
        document.getElementById("logo").style.width = "70px";

    } else {
        navbar.style.padding = "1rem 1rem";
        // navcolap.style.height *= 1.01;
        navbar.classList.remove("sticky");
        navbar.style.height = "5.2rem";
        document.getElementById("logo").style.height = "75px";
        document.getElementById("logo").style.width = "75px";
    }
}

function imagem() {
    if (img1) {
        if (anima == 0) {
            if (window.pageYOffset >= (img1.offsetTop / 1.5)) {
                img1.innerHTML = " <img id='cara' class='caraMove' style='width: 100%; max-width: 600px;' src='assets/img/vr1.png'>";
                anima = 1;
            }
        }
    }
}

var show = 0;
var hor = document.getElementById("showHorario")

function horario() {
    if (show) {
        show = 0;
        hor.classList.remove("entra");
        hor.classList.add("sai");

    } else {
        show = 1;
        hor.classList.add("entra");
        hor.classList.remove("sai");
    }
}