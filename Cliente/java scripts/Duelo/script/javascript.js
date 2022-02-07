    //creacion de los objetos a utilizar (mascotas: nombre, raza e imagen)
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
    
    //Creacion de los contadores para la funcion genera que cuenta los clicks realizados en el boton
    var conta=1;
    var conta2=2;
    
    //Funcion que genera un numero aleatorio en funcion de la longitud del array de mascotas 
    function Aleatorio() {
        var aleatorio;
        if(mascotas.length>0){
            aleatorio = Math.floor(Math.random() * (mascotas.length));    
        }else{
            aleatorio=0;
        }
        return aleatorio;
    }
    
   
   //Funcion que elige dos objetos de forma aleatoria y los coloca en el div correspondiente
    function genera() { 
        /*Div Pares*/

        //Creacion de las variables y del numero aleatorio
        var numMasc1= Aleatorio();
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"
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
        var numMasc2= Aleatorio();
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"
        
        //Concatenacion de las variables con la posicion en la que hay que colocar el objeto
        nombreMasc= nombreMasc + (conta2);
        razaMasc= razaMasc + (conta2);
        imagen=imagen + conta2;

        //Asignacion de los objetos en funcion de la posicion del array dada por el numero aleatorio y en el sitio acumulado en las variables
        document.getElementById(nombreMasc).innerHTML = mascotas[numMasc2].nom;
        document.getElementById(razaMasc).innerHTML = mascotas[numMasc2].raza;
        document.getElementById(imagen).src = mascotas[numMasc2].img;
		console.log(mascotas[numMasc2].img);
        //Una vez colocado el objeto se elimina este del array para que no vuelva a salir
        mascotas.splice(numMasc2,1);
        //Se acumula de 2 en 2
        conta2+=2;

        //Si se ha pulsado el boton 8 veces (16 div acumulados), se reproduce un video con un audio de fondo
        if (nombreMasc==="nombre16") {
            document.getElementById('video').src = "video/tata.mp4"
            document.getElementById('audio').src = "audio/jota.mp3"
           
        }
            
        
    }
   

    //Funcion que reinicia el programa a los valores predeterminados
    function reiniciar(){
        //Se elimina el video y el audio
        document.getElementById('video').src = "";
        document.getElementById('audio').src = "";
        //Se colocan de nuevo los contadores a 1 para los impares y 2 para los pares
       conta=1;
       conta2=2;
        
       //Se inicializan de nuevo las variables
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen";

        //Se vuelve a rellenar el array de mascotas
        mascotas = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16];
        
        //Se vuelven a poner los valores originales en los div
        for (let i = 1; i < 17; i++) {
        document.getElementById(nombreMasc+i).innerHTML ="??????";
        document.getElementById(razaMasc+i).innerHTML = "?????";
        document.getElementById(imagen+i).src = "./img/huella.jpg";
        }   

        //Se reinicia el contador de tiempo (segundos, minutos y la concatenacion -s1-)
        clearInterval(contador);
        s=0;
        m=0;
        s1="0";
        //Se vuelve a iniciar el contador
        contador = setInterval(startTime, 1000);
    }

    //Creacion de variables segundos, minutos, concatenacion y el intervalo
    var s = 0;
    var m = 0;
    var s1="0";
    var contador = setInterval(startTime, 1000);
   
    //Funcion que añade un contador de tiempo (segundos y minutos)
    function startTime() {
        document.getElementById("contador").innerHTML = m + ":" +s1 + s;
        //Se acumulan los segundos
        s = s+1;

        //Si llega a 59, se reinician los segundos y se suma 1 a los minutos
        if(s>=60){
            s = 1;
            m = m +1;
        }

        //Si el segundo es menor que 10 se le concatena un 0
        if(s<10){
            s1 = "0";
        }
        else{
            s1="";
        }  
      }
      

    



