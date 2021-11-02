
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
    var pet6 = new creaPet("Aza","&nbsp;Michi&nbsp;","./img/huella.jpg");
    var pet7 = new creaPet("Rizos","&nbsp;Michi&nbsp;","./img/rizos.jpeg");
    var pet8 = new creaPet("Porro","&nbsp;Pez&nbsp;","./img/huella.jpg");
    var pet9 = new creaPet("Luna","&nbsp;Perra&nbsp;","./img/tata.jpeg");
    var pet10= new creaPet("Siri Pequeña ","&nbsp;Michi&nbsp;","./img/sirip.jpeg");
    var pet11= new creaPet("Siri Awela ","&nbsp;Michi&nbsp;","./img/awela.jpeg");
    var pet12= new creaPet("Princesa O. ","&nbsp;Michi&nbsp;","./img/princesa.jpeg");
    var pet13= new creaPet("Mandarina ","&nbsp;Michi&nbsp;","./img/mandi.jpeg");
    var pet14= new creaPet("Luisito ","&nbsp;Michi&nbsp;","./img/luiso.jpeg");
    var pet15= new creaPet("Cattana ","&nbsp;Michi&nbsp;","./img/huella.jpg");
    var pet16= new creaPet("Nala ","&nbsp;Michi&nbsp;","./img/nala.jpeg");
    var mascotas = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16];
    
    var conta=1;
    var conta2=2;
    
    function Aleatorio() {
        var aleatorio;
        if(mascotas.length>0){
            aleatorio = Math.floor(Math.random() * (mascotas.length));    
        }else{
            aleatorio=0;
        }
        return aleatorio;
    }
    

    function genera() { 
        var numMasc1= Aleatorio();
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"

        nombreMasc= nombreMasc + (conta);
        razaMasc= razaMasc + (conta);
        imagen=imagen + conta;
          
        document.getElementById(nombreMasc).innerHTML = mascotas[numMasc1].nom;
        document.getElementById(razaMasc).innerHTML = mascotas[numMasc1].raza;
        document.getElementById(imagen).src = mascotas[numMasc1].img;
        mascotas.splice(numMasc1,1);
        conta+=2;

        var numMasc2= Aleatorio();
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"
        
        
        nombreMasc= nombreMasc + (conta2);
        razaMasc= razaMasc + (conta2);
        imagen=imagen + conta2;

        document.getElementById(nombreMasc).innerHTML = mascotas[numMasc2].nom;
        document.getElementById(razaMasc).innerHTML = mascotas[numMasc2].raza;
        document.getElementById(imagen).src = mascotas[numMasc2].img;
        mascotas.splice(numMasc2,1);
        conta2+=2;

           
    }
   
    function reiniciar(){
       
       conta=1;
       conta2=2;
    
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"
        mascotas = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16];
        
        for (let i = 1; i < 17; i++) {
        document.getElementById(nombreMasc+i).innerHTML ="??????";
        document.getElementById(razaMasc+i).innerHTML = "?????";
        document.getElementById(imagen+i).src = "./img/huella.jpg";
        }   
        clearInterval(contador);
        s=0;
        m=0;
        s1="0";
        contador = setInterval(startTime, 1000);
    }

    var s = 0;
    var m = 0;
    var s1="0";
    var contador = setInterval(startTime, 1000);
   
    function startTime() {
        document.getElementById("contador").innerHTML = m + ":" +s1 + s;
        s = s+1;
        if(s>=60){
            s = 1;
            m = m +1;
        }
        if(s<10){
            s1 = "0";
        }
        else{
            s1="";
        }  
      }
      

    



