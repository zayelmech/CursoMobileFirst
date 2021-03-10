var mover = document.getElementById('seccion_scroleable');
var anchoTarjeta = document.getElementById('main_tarjeta').clientWidth;
var buttonLeft = document.getElementById('bLess');
var buttonRight = document.getElementById('bMore');

console.log(anchoTarjeta); //Muestra el ancho en px de la tarjeta 

function checkButtonsNecesity() {
    if ((anchoTarjeta * 3 + 20) < mover.clientWidth) {
        console.warn("Botones innecesarios");
        buttonLeft.style.display = "none";
        buttonRight.style.display = "none";
    } else {
        console.warn("Botones necesarios");
        buttonLeft.style.display = "block";
        buttonRight.style.display = "block";
    }

}
checkButtonsNecesity();
mover.scroll(anchoTarjeta, 0); //moviendo a la tarjeta de en medio
function scrollRightNx() {

    mover.scroll(mover.scrollLeft + anchoTarjeta, 0);
    console.log(mover.scrollLeft); //Muestra en consola la posicion del scroll
}

function scrollLeftNx() {
    mover.scroll(mover.scrollLeft - anchoTarjeta, 0);
    console.log(mover.scrollLeft); //Muestra en consola la posicion del scroll

}