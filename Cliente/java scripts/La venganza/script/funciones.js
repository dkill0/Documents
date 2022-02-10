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
            fin("jugador");
        } else {

            setTimeout(sid, 1000);
        }
    }
}

function reinicia() {
    let nombre2 = "img";
    let nombreFinal;
    conta = 0;
    turno = 0;
    for (let i = 1; i <= imagenesTotales.length; i++) {
        nombreFinal = nombre2 + i;

        document.getElementById(nombreFinal).src = "./img/elige2.png";
        //metodo que edita el css, habilitando los eventos
        document.getElementById(nombreFinal).style.pointerEvents = "auto";
    }
    tablero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    posicionesA = [0, 0, 0, 0];
    posicionesB = [0, 0, 0, 0];
    posicionesC = [0, 0, 0, 0];
    posicionesD = [0, 0, 0, 0];
    jugadas = [];


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
            fin("maquina");
        }

    }
}

let jugadas = [];
let posicionesA = [0, 0, 0, 0];
let posicionesB = [0, 0, 0, 0];
let posicionesC = [0, 0, 0, 0];
let posicionesD = [0, 0, 0, 0];


function comprueba(celda, tipo) {


    let posi = celda + tipo;
    jugadas.push(posi);
    if (jugadas.length >= 7) {

        let letra = "";
        let numero;
        let jugador;
        for (let i = 0; i < jugadas.length; i++) {
            letra = jugadas[i].substring(2, 3);
            numero = jugadas[i].substring(1, 2);
            jugador = jugadas[i].substr(3);

            switch (letra) {
                case "a":
                    switch (numero) {
                        case "1":
                            if (jugador === "jugador") {
                                posicionesA[0] = 1;

                            } else {
                                posicionesA[0] = 2;
                            }
                            break;
                        case "2":
                            if (jugador === "jugador") {
                                posicionesA[1] = 1;

                            } else {
                                posicionesA[1] = 2;
                            }
                            break;
                        case "3":
                            if (jugador === "jugador") {
                                posicionesA[2] = 1;

                            } else {
                                posicionesA[2] = 2;
                            }
                            break;
                        case "4":
                            if (jugador === "jugador") {
                                posicionesA[3] = 1;

                            } else {
                                posicionesA[3] = 2;
                            }
                            break;

                        default:
                            break;
                    }


                    break;
                case "b":
                    switch (numero) {
                        case "1":
                            if (jugador === "jugador") {
                                posicionesB[0] = 1;

                            } else {
                                posicionesB[0] = 2;
                            }
                            break;
                        case "2":
                            if (jugador === "jugador") {
                                posicionesB[1] = 1;

                            } else {
                                posicionesB[1] = 2;
                            }
                            break;
                        case "3":
                            if (jugador === "jugador") {
                                posicionesB[2] = 1;

                            } else {
                                posicionesB[2] = 2;
                            }
                            break;
                        case "4":
                            if (jugador === "jugador") {
                                posicionesB[3] = 1;

                            } else {
                                posicionesB[3] = 2;
                            }
                            break;

                        default:
                            break;
                    }
                    break
                case "c":
                    switch (numero) {
                        case "1":
                            if (jugador === "jugador") {
                                posicionesC[0] = 1;

                            } else {
                                posicionesC[0] = 2;
                            }
                            break;
                        case "2":
                            if (jugador === "jugador") {
                                posicionesC[1] = 1;

                            } else {
                                posicionesC[1] = 2;
                            }
                            break;
                        case "3":
                            if (jugador === "jugador") {
                                posicionesC[2] = 1;

                            } else {
                                posicionesC[2] = 2;
                            }
                            break;
                        case "4":
                            if (jugador === "jugador") {
                                posicionesC[3] = 1;

                            } else {
                                posicionesC[3] = 2;
                            }
                            break;

                        default:
                            break;
                    }
                    break
                case "d":
                    switch (numero) {
                        case "1":
                            if (jugador === "jugador") {
                                posicionesD[0] = 1;

                            } else {
                                posicionesD[0] = 2;
                            }
                            break;
                        case "2":
                            if (jugador === "jugador") {
                                posicionesD[1] = 1;

                            } else {
                                posicionesD[1] = 2;
                            }
                            break;
                        case "3":
                            if (jugador === "jugador") {
                                posicionesD[2] = 1;

                            } else {
                                posicionesD[2] = 2;
                            }
                            break;
                        case "4":
                            if (jugador === "jugador") {
                                posicionesD[3] = 1;

                            } else {
                                posicionesD[3] = 2;
                            }
                            break;

                        default:
                            break;
                    }
                    break

                default:
                    break;
            }





        }
        console.log(posicionesA);
        console.log(posicionesB);
        console.log(posicionesC);
        console.log(posicionesD);
        for (let i = 0; i < 4; i++) {

            //Comprobacion de las verticales
            if ((posicionesA[i] === 1) && (posicionesB[i] === 1) && (posicionesC[i] === 1) && (posicionesD[i] === 1)) {

                return true;

            } else if ((posicionesA[i] === 2) && (posicionesB[i] === 2) && (posicionesC[i] === 2) && (posicionesD[i] === 2)) {
                return true;
            }
        }

        //Comprobacion de las horizontales
        let vecesJ = 0;
        let vecesM = 0;


        for (let i = 0; i < posicionesA.length; i++) {

            if (posicionesA[i] === 1) {
                vecesJ++;
            } else if (posicionesA[i] === 2) {
                vecesM++;
            }

        }

        if (vecesJ === 4) {
            return true;
        } else if (vecesM === 4) {
            return true;
        }
        vecesJ = 0;
        vecesM = 0;


        for (let i = 0; i < posicionesB.length; i++) {

            if (posicionesB[i] === 1) {
                vecesJ++;
            } else if (posicionesB[i] === 2) {
                vecesM++;
            }

        }

        if (vecesJ === 4) {
            return true;
        } else if (vecesM === 4) {
            return true;
        }
        vecesJ = 0;
        vecesM = 0;


        for (let i = 0; i < posicionesC.length; i++) {

            if (posicionesC[i] === 1) {
                vecesJ++;
            } else if (posicionesC[i] === 2) {
                vecesM++;
            }

        }

        if (vecesJ === 4) {
            return true;
        } else if (vecesM === 4) {
            return true;
        }
        vecesJ = 0;
        vecesM = 0;


        for (let i = 0; i < posicionesD.length; i++) {

            if (posicionesD[i] === 1) {
                vecesJ++;
            } else if (posicionesD[i] === 2) {
                vecesM++;
            }

        }

        if (vecesJ === 4) {
            return true;
        } else if (vecesM === 4) {
            return true;
        }


        //Comprobacion diagonales

        if ((posicionesA[0] === 1) && (posicionesB[1] === 1) && (posicionesC[2] === 1) && (posicionesD[3] === 1)) {

            return true;

        } else if ((posicionesA[0] === 2) && (posicionesB[1] === 2) && (posicionesC[2] === 2) && (posicionesD[3] === 2)) {
            return true;
        }

        if ((posicionesD[0] === 1) && (posicionesC[1] === 1) && (posicionesB[2] === 1) && (posicionesA[3] === 1)) {

            return true;

        } else if ((posicionesD[0] === 2) && (posicionesC[1] === 2) && (posicionesB[2] === 2) && (posicionesA[3] === 2)) {
            return true;
        }
    } else {
        return false;
    }

}






function fin(ganador) {
    console.log(ganador);
}