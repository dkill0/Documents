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
        let celda = imagen.className.substring(6);
        //metodo que edita el css, inhabilitando los eventos 
        if (comprueba(celda, "jugador")) {
            reinicia();
        } else {

            setTimeout(sid, 1000);
        }
    }
}

function reinicia() {
    let nombre2 = "img";
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
        let celda = imagen2.className.substring(6);


        imagen2.src = "./img/sith2.png";
        imagen2.style.pointerEvents = "none";
        tablero.splice(aleatorio, 1);

        turno = 0;
        if (comprueba(celda, "maquina")) {
            reinicia();
        }

    }
}

let matriz = [];


function comprueba(celda, tipo) {
    let posi = celda + tipo;
    matriz.push(posi);
    console.log(matriz);

    let lineaAPers = 0;
    let lineaBPers = 0;
    let lineaCPers = 0;
    let lineaDPers = 0;
    let lineaAMaq = 0;
    let lineaBMaq = 0;
    let lineaCMaq = 0;
    let lineaDMaq = 0;


    let columPers = 0;
    let columMaq = 0;
    let diagonalPers = 0;
    let diagonalMaq = 0;
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i].lastIndexOf("jugador") != (-1)) {

            if (matriz[i].indexOf("a") != (-1)) {
                lineaAPers++;
            } else if (matriz[i].indexOf("b") != (-1)) {
                lineaBPers++;
            } else if (matriz[i].indexOf("c") != (-1)) {
                lineaCPers++;
            } else if (matriz[i].indexOf("d") != (-1)) {
                lineaDPers++;
            }
        } else if (matriz[i].lastIndexOf("maquina") != (-1)) {
            if (matriz[i].indexOf("a") != (-1)) {
                lineaAMaq++;
            } else if (matriz[i].indexOf("b") != (-1)) {
                lineaBMaq++;
            } else if (matriz[i].indexOf("c") != (-1)) {
                lineaCMaq++;
            } else if (matriz[i].indexOf("d") != (-1)) {
                lineaDMaq++;
            }
        }
    }


    if ((lineaAPers === 4) || (lineaBPers === 4) || (lineaCPers === 4) || (lineaDPers === 4)) {
        console.log("linea ! xd");
        lineaAPers = 0;
        lineaBPers = 0;
        lineaCPers = 0;
        lineaDPers = 0;
        lineaAMaq = 0;
        lineaBMaq = 0;
        lineaCMaq = 0;
        lineaDMaq = 0;
        alert("has ganado");
        return true;


    } else if ((lineaAMaq === 4) || (lineaBMaq === 4) || (lineaCMaq === 4) || (lineaDMaq === 4)) {
        console.log("linea maquina");
        lineaAPers = 0;
        lineaBPers = 0;
        lineaCPers = 0;
        lineaDPers = 0;
        lineaAMaq = 0;
        lineaBMaq = 0;
        lineaCMaq = 0;
        lineaDMaq = 0;
        return true;
    } else {
        return false;
    }


}

function fin() {

}