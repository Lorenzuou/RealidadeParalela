var seta = document.getElementById("seta");
var troca = 0;
setInterval(function() {
    if (troca == 1) {
        seta.style.borderBottomWidth = "7px";
        seta.style.borderRightWidth = "7px";
        troca = 0;
    } else {
        seta.style.borderBottomWidth = "3px";
        seta.style.borderRightWidth = "3px";
        troca = 1;
    }
}, 500);