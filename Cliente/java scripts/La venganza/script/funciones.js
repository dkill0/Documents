//Variables globales
let tablero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const imagenesTotales = document.getElementsByTagName("img");
//Variable que suma la cantidad de intentos
let conta = 0;
//Indica si el turno es del jugador o de la maquina
let turno = 0;

//Funcion que pinta una imagen en la celda seleccionada por el jugador
function cambia(nombre) {
    if (turno === 0) {
        let posicion = nombre.substr(3);
        let imagen = document.getElementById(nombre);
        imagen.src = "./img/jedi2.png";
        //Inhabilitamos la casilla elegida
        imagen.style.pointerEvents = "none";

        //Eliminamos la casilla del array para que no pueda ser seleccionada por la maquina
        for (let i = 0; i < tablero.length; i++) {
            if (tablero[i] == posicion) {

                tablero.splice(i, 1);

            }
        }
        //Cambio de turno
        turno = 1;

        //Guardamos la posicion de la celda
        let celda = imagen.className.substring(6);

        //Se comprueba si has ganado, en caso verdadero, se reinicia el contador
        if (comprueba(celda, "jugador") === true) {
            let conta2 = conta;
            conta = 0;
            fin("jugador", conta2);

        } else {
            //Se ejecuta la funcion que hace que la maquina elija casilla
            setTimeout(sid, 800);
        }
    }
}

//Funcion que reinicia el tablero y aumenta el contador de intentos
function reinicia() {
    let nombre2 = "img";
    let nombreFinal;

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
    conta++;
}

//Funcion que pinta una casilla de forma aleatoria en funcion de las ya elegidas por el jugador
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

        //Comprueba si la maquina ha ganado o ha empatado
        if (comprueba(celda, "maquina") === true) {
            fin("maquina");
        } else if (comprueba(celda, "maquina") === "empate") {
            fin("empate");

        }

    }
}

//Arrays de posiciones para registrar las jugadas y comprobarlas
let jugadas = [];
let posicionesA = [0, 0, 0, 0];
let posicionesB = [0, 0, 0, 0];
let posicionesC = [0, 0, 0, 0];
let posicionesD = [0, 0, 0, 0];


//Funcion que comprueba si se ha ganado, empatado o perdido contra la maquina
function comprueba(celda, tipo) {

    //Se guardan las posiciones ya elegidas en un array
    let posi = celda + tipo;
    jugadas.push(posi);

    //Si ya hay 7 posiciones, la siguiente puede ser ganadora, asi que se empieza a comprobar desde ahi
    if (jugadas.length >= 7) {

        let letra = "";
        let numero;
        let jugador;

        //Se registra en el tablero una por una las posiciones del array, 1 para jugador, 2 para maquina, 0 para vacio
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

        //Comprobacion de las verticales
        for (let i = 0; i < 4; i++) {

            if ((posicionesA[i] === 1) && (posicionesB[i] === 1) && (posicionesC[i] === 1) && (posicionesD[i] === 1)) {

                return true;

            } else if ((posicionesA[i] === 2) && (posicionesB[i] === 2) && (posicionesC[i] === 2) && (posicionesD[i] === 2)) {
                return true;
            }
        }

        //Comprobacion de las horizontales
        let vecesJ = 0;
        let vecesM = 0;
        let empate = 0;


        for (let i = 0; i < posicionesA.length; i++) {

            if (posicionesA[i] === 1) {
                vecesJ++;
                empate++;
            } else if (posicionesA[i] === 2) {
                vecesM++;
                empate++;
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
                empate++;

            } else if (posicionesB[i] === 2) {
                vecesM++;
                empate++;
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
                empate++;

            } else if (posicionesC[i] === 2) {
                empate++;
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
                empate++;

            } else if (posicionesD[i] === 2) {
                vecesM++;
                empate++;
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

        //Si despues de comprobar en las horizontales están todas ocupadas (1 o 2) se devuelve un empate
        if (empate === 16) {
            return "empate";
        }

    } else {
        return false;
    }

}

let nombre = " ";
let intentos = " ";

//Funcion que comprueba quién ha terminado una partida y, en caso de que el jugador gane, registra su nombre y las tiradas
function fin(ganador, tirada) {
    //Se aumenta la tirada para que no aparezca un 0 
    if (tirada === 0) {
        tirada = 1;
    }
    if (ganador === "maquina") {
        alert("¿En serio? Era super fácil... inténtalo otra vez");
    } else if (tirada === 1 && ganador === "jugador") {

        alert("Menudo pro, a la primera");
        //Se guardan los nombres y las tiradas en un array con "-" de separador
        nombre = nombre + "-" + prompt("Introduce tu nombre: ");
        intentos = intentos + "-" + tirada;
        ganadores(nombre, intentos);
    } else if (ganador === "empate") {
        alert("Empate, vuelve a intentarlo");
    } else {

        alert("Menudo pro");
        nombre = nombre + "-" + prompt("Introduce tu nombre: ");
        intentos = intentos + "-" + tirada;
        ganadores(nombre, intentos);

    }
}

//Funcion que muestra la lista de ganadores por pantalla
function ganadores(ganadores, tiradas) {
    //Se separan los nombres y los intentos, se concatena y se imprime
    let lista = ganadores.split("-")
    let numero = tiradas.split("-");
    let imprime = "";
    for (let i = 1; i < lista.length; i++) {
        imprime += (i) + ". " + lista[i] + ": " + (numero[i]) + " tiradas. <br>";

    }
    document.getElementById("ganadores").innerHTML = imprime;
}