const imagenesTotales = document.getElementsByTagName("img");
let conta = 0;

function cambia(nombre) {

    let imagen = document.getElementById(nombre);
    imagen.src = "./img/jedi.png";
    conta++;
    imagen.style.pointerEvents = "none";
    //metodo que edita el css, inhabilitando los eventos 
    setTimeout(sid, 1000);
}

function reinicia(nombre2) {
    let nombreFinal;
    conta = 0;
    for (let i = 1; i <= imagenesTotales.length; i++) {
        nombreFinal = nombre2 + i;

        document.getElementById(nombreFinal).src = "./img/elige.png";
        //metodo que edita el css, habilitando los eventos
        document.getElementById(nombreFinal).style.pointerEvents = "auto";
    }
}

function sid() {
    let aleatorio;
    aleatorio = Math.floor(Math.random() * (imagenesTotales.length) +
        1);
    let nombre2 = "img" + aleatorio;
    console.log(aleatorio);
    console.log(nombre2);
    let imagen2 = document.getElementById(nombre2);

    if ((imagen2.src != "./img/jedi.png")) {
        imagen2.src = "./img/sith.png";
        imagen2.style.pointerEvents = "none";
    }
}