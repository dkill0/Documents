//Creacion de los objetos (mascotas) con sus nombres, raza e imagen.
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
    //Dos conta para ir acumulando las veces que se pulsa el boton genera
    var conta=1;
    var conta2=2;
    

    //Funcion que devuelve un número aleatorio en función de la longitud de la cadena
    function Aleatorio() {
        var aleatorio;
        if(mascotas.length>0){
            aleatorio = Math.floor(Math.random() * (mascotas.length));    
        }else{
            aleatorio=0;
        }
        return aleatorio;
    }
    
   
   //Funcion para el boton genera
    function genera() { 
        /*Impares*/

        //Se crean e inicializan las variables y el numero aleatorio para ir rellenando de forma automatica cada campo de texto
        var numMasc1= Aleatorio();
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"

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
        var numMasc2= Aleatorio();
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"
        
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
        if (nombreMasc==="nombre16") {
            document.getElementById('video').src = "video/tata.mp4"
            document.getElementById('audio').src = "audio/jota.mp3"
           
        }
            
        
    }
   
    //Funcion del boton reiniciar
    function reiniciar(){

        //Se vuelve a reiniciar todos los elementos
        document.getElementById('video').src = "";
        document.getElementById('audio').src = "";
       conta=1;
       conta2=2;
    
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen";
        //Se vuelve a rellenar el array
        mascotas = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16];
        
        //Se reinician los valores sustituidos
        for (let i = 1; i < 17; i++) {
        document.getElementById(nombreMasc+i).innerHTML ="??????";
        document.getElementById(razaMasc+i).innerHTML = "?????";
        document.getElementById(imagen+i).src = "./img/huella.jpg";
        }   
        //Se reinicia el contador de tiempo
        clearInterval(contador);
        s=0;
        m=0;
        s1="0";
        contador = setInterval(startTime, 1000);
    }
    //Declaracion e inicializacion de las variables para el contador
    var s = 0;
    var m = 0;
    //Variable que añade el 0 concatenando
    var s1="0";
    var contador = setInterval(startTime, 1000);
   
    //Funcion que pone un contador de tiempo en la pantalla
    function startTime() {
        document.getElementById("contador").innerHTML = m + ":" + s1 + s;
        s = s+1;
        //Suma de los minutos
        if(s>=60){
            s = 1;
            m = m +1;
        }
        //Si los segundos estan entre 0 y 10 se añade un 0 delante
        if(s<10){
            s1 = "0";
        }
        else{
            s1="";
        }  
      }
      

    



