let tablero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const imagenesTotales = document.getElementsByTagName("img");
let conta = 0;
let turno = 0;

function cambia(nombre) {
    if (turno === 0) {
        let posicion = nombre.substr(3);
        let imagen = document.getElementById(nombre);
        imagen.src = "./img/jedi2.png";
        conta++;
        imagen.style.pointerEvents = "none";

        for (let i = 0; i < tablero.length; i++) {
            if (tablero[i] == posicion) {

                tablero.splice(i, 1);
            }
        }
        turno = 1;
        //metodo que edita el css, inhabilitando los eventos 
        setTimeout(sid, 1000);
    }
}

function reinicia(nombre2) {
    let nombreFinal;
    conta = 0;
    for (let i = 1; i <= imagenesTotales.length; i++) {
        nombreFinal = nombre2 + i;

        document.getElementById(nombreFinal).src = "./img/elige2.png";
        //metodo que edita el css, habilitando los eventos
        document.getElementById(nombreFinal).style.pointerEvents = "auto";
    }
    tablero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
}

function sid() {
    if (turno === 1) {
        let aleatorio;
        aleatorio = Math.floor(Math.random() * (tablero.length));

        let nombre2 = "img" + tablero[aleatorio];
        let imagen2 = document.getElementById(nombre2);

        imagen2.src = "./img/sith2.png";
        imagen2.style.pointerEvents = "none";

        console.log(aleatorio);
        tablero.splice(aleatorio, 1);
        console.log(tablero);
        turno = 0;
    }
}


function comprueba() {

}