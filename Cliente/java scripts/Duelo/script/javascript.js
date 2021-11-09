<<<<<<< HEAD
//Creacion de los objetos (mascotas) con sus nombres, raza e imagen.
=======
    //creacion de los objetos a utilizar (mascotas: nombre, raza e imagen)
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
    function creaPet(arg1, arg2, arg3) {
        this.nom=arg1;
        this.raza=arg2;
        this.img=arg3;
    }
    var pet1 = new creaPet("Salem","&nbsp;Michi&nbsp;","./img/salem.jpeg");
    var pet2 = new creaPet("Chachá","&nbsp;Michi&nbsp;","./img/chacha.jpeg");
    var pet3 = new creaPet("Zoro","&nbsp;Michi&nbsp;","./img/zoro.jpg");
    var pet4 = new creaPet("Amy","&nbsp;Michi&nbsp;","./img/amy.jpeg");
    var pet5 = new creaPet("Perse","&nbsp;Perra&nbsp;","./img/perse.jpeg");
    var pet6 = new creaPet("Aza","&nbsp;Michi&nbsp;","./img/aza.jpeg");
    var pet7 = new creaPet("Rizos","&nbsp;Michi&nbsp;","./img/rizos.jpeg");
    var pet8 = new creaPet("Porro","&nbsp;Pez&nbsp;","./img/porro.jpeg");
    var pet9 = new creaPet("Luna","&nbsp;Perra&nbsp;","./img/tata.jpeg");
    var pet10= new creaPet("Siri Pequeña ","&nbsp;Michi&nbsp;","./img/sirip.jpeg");
    var pet11= new creaPet("Siri Awela ","&nbsp;Michi&nbsp;","./img/awela.jpeg");
    var pet12= new creaPet("Princesa O. ","&nbsp;Michi&nbsp;","./img/princesa.jpeg");
    var pet13= new creaPet("Mandarina ","&nbsp;Michi&nbsp;","./img/mandi.jpeg");
    var pet14= new creaPet("Luisito ","&nbsp;Michi&nbsp;","./img/luiso.jpeg");
    var pet15= new creaPet("Cattana ","&nbsp;Michi&nbsp;","./img/cattana.jpeg");
    var pet16= new creaPet("Nala ","&nbsp;Michi&nbsp;","./img/nala.jpeg");
    var mascotas = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16];
<<<<<<< HEAD
    //Dos conta para ir acumulando las veces que se pulsa el boton genera
    var conta=1;
    var conta2=2;
    

    //Funcion que devuelve un número aleatorio en función de la longitud de la cadena
=======
    
    //Creacion de los contadores para la funcion genera que cuenta los clicks realizados en el boton
    var conta=1;
    var conta2=2;
    
    //Funcion que genera un numero aleatorio en funcion de la longitud del array de mascotas 
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
    function Aleatorio() {
        var aleatorio;
        if(mascotas.length>0){
            aleatorio = Math.floor(Math.random() * (mascotas.length));    
        }else{
            aleatorio=0;
        }
        return aleatorio;
    }
    
   
<<<<<<< HEAD
   //Funcion para el boton genera
    function genera() { 
        /*Impares*/

        //Se crean e inicializan las variables y el numero aleatorio para ir rellenando de forma automatica cada campo de texto
=======
   //Funcion que elige dos objetos de forma aleatoria y los coloca en el div correspondiente
    function genera() { 
        /*Div Pares*/

        //Creacion de las variables y del numero aleatorio
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
        var numMasc1= Aleatorio();
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"
<<<<<<< HEAD

        //Se concatena el nombre con las variables conta, para ir acumulando el numero de veces que pulsamos el boton
        nombreMasc= nombreMasc + (conta);
        razaMasc= razaMasc + (conta);
        imagen=imagen + conta;
        //Se sustituye los valores obtenidos con los ya existentes
        document.getElementById(nombreMasc).innerHTML = mascotas[numMasc1].nom;
        document.getElementById(razaMasc).innerHTML = mascotas[numMasc1].raza;
        document.getElementById(imagen).src = mascotas[numMasc1].img;
        //Una vez colocadas las variables, se elimina el objeto en la posicion del numero aleatorio
        mascotas.splice(numMasc1,1);
        //Acumulacion del primer conta
        conta+=2;

        /*Pares*/

        //Creacion e inicializacion de las variables y el numero aleatorio
=======
        //Concatenacion de las variables con la posicion en la que hay que colocar el objeto
        nombreMasc= nombreMasc + (conta);
        razaMasc= razaMasc + (conta);
        imagen=imagen + conta;
        
        //Asignacion de los objetos en funcion de la posicion del array dada por el numero aleatorio y en el sitio acumulado en las variables
        document.getElementById(nombreMasc).innerHTML = mascotas[numMasc1].nom;
        document.getElementById(razaMasc).innerHTML = mascotas[numMasc1].raza;
        document.getElementById(imagen).src = mascotas[numMasc1].img;
        //Una vez colocado el objeto se elimina este del array para que no vuelva a salir
        mascotas.splice(numMasc1,1);
        //Se acumula de 2 en 2
        conta+=2;

        /*Div Impares*/

         //Creacion de las variables y del numero aleatorio
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
        var numMasc2= Aleatorio();
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"
        
<<<<<<< HEAD
        //Concatenacion de las variables con el segundo conta
        nombreMasc= nombreMasc + (conta2);
        razaMasc= razaMasc + (conta2);
        imagen=imagen + conta2;
        //Se sustituyen los valores obtenidos con los ya existentes
        document.getElementById(nombreMasc).innerHTML = mascotas[numMasc2].nom;
        document.getElementById(razaMasc).innerHTML = mascotas[numMasc2].raza;
        document.getElementById(imagen).src = mascotas[numMasc2].img;
        //Una vez colocadas las variables, se elimina el objeto en la posicion del numero aleatorio
        mascotas.splice(numMasc2,1);
        //Acumulacion del segundo conta
        conta2+=2;

        //Final. Si el ultimo campo rellenado coincide con la ultima posicion en el duelo, se reproduce un video y una cancion
=======
        //Concatenacion de las variables con la posicion en la que hay que colocar el objeto
        nombreMasc= nombreMasc + (conta2);
        razaMasc= razaMasc + (conta2);
        imagen=imagen + conta2;

        //Asignacion de los objetos en funcion de la posicion del array dada por el numero aleatorio y en el sitio acumulado en las variables
        document.getElementById(nombreMasc).innerHTML = mascotas[numMasc2].nom;
        document.getElementById(razaMasc).innerHTML = mascotas[numMasc2].raza;
        document.getElementById(imagen).src = mascotas[numMasc2].img;
        //Una vez colocado el objeto se elimina este del array para que no vuelva a salir
        mascotas.splice(numMasc2,1);
        //Se acumula de 2 en 2
        conta2+=2;

        //Si se ha pulsado el boton 8 veces (16 div acumulados), se reproduce un video con un audio de fondo
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
        if (nombreMasc==="nombre16") {
            document.getElementById('video').src = "video/tata.mp4"
            document.getElementById('audio').src = "audio/jota.mp3"
           
        }
            
        
    }
   
<<<<<<< HEAD
    //Funcion del boton reiniciar
    function reiniciar(){

        //Se vuelve a reiniciar todos los elementos
=======

    //Funcion que reinicia el programa a los valores predeterminados
    function reiniciar(){
        //Se elimina el video y el audio
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
        document.getElementById('video').src = "";
        document.getElementById('audio').src = "";
        //Se colocan de nuevo los contadores a 1 para los impares y 2 para los pares
       conta=1;
       conta2=2;
        
       //Se inicializan de nuevo las variables
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen";
<<<<<<< HEAD
        //Se vuelve a rellenar el array
        mascotas = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16];
        
        //Se reinician los valores sustituidos
=======

        //Se vuelve a rellenar el array de mascotas
        mascotas = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16];
        
        //Se vuelven a poner los valores originales en los div
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
        for (let i = 1; i < 17; i++) {
        document.getElementById(nombreMasc+i).innerHTML ="??????";
        document.getElementById(razaMasc+i).innerHTML = "?????";
        document.getElementById(imagen+i).src = "./img/huella.jpg";
        }   
<<<<<<< HEAD
        //Se reinicia el contador de tiempo
=======

        //Se reinicia el contador de tiempo (segundos, minutos y la concatenacion -s1-)
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
        clearInterval(contador);
        s=0;
        m=0;
        s1="0";
        //Se vuelve a iniciar el contador
        contador = setInterval(startTime, 1000);
    }
<<<<<<< HEAD
    //Declaracion e inicializacion de las variables para el contador
=======

    //Creacion de variables segundos, minutos, concatenacion y el intervalo
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
    var s = 0;
    var m = 0;
    //Variable que añade el 0 concatenando
    var s1="0";
    var contador = setInterval(startTime, 1000);
   
<<<<<<< HEAD
    //Funcion que pone un contador de tiempo en la pantalla
    function startTime() {
        document.getElementById("contador").innerHTML = m + ":" + s1 + s;
        s = s+1;
        //Suma de los minutos
=======
    //Funcion que añade un contador de tiempo (segundos y minutos)
    function startTime() {
        document.getElementById("contador").innerHTML = m + ":" +s1 + s;
        //Se acumulan los segundos
        s = s+1;

        //Si llega a 59, se reinician los segundos y se suma 1 a los minutos
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
        if(s>=60){
            s = 1;
            m = m +1;
        }
<<<<<<< HEAD
        //Si los segundos estan entre 0 y 10 se añade un 0 delante
=======

        //Si el segundo es menor que 10 se le concatena un 0
>>>>>>> c08e4f1a7eca1985137ff66e0a60eefe8f3793bb
        if(s<10){
            s1 = "0";
        }
        else{
            s1="";
        }  
      }
      

    



