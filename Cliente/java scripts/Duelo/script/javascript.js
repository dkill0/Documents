
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
    
    var conta=0;
    
    function Aleatorio() {
        var aleatorio;
        if(mascotas.length>0){
            aleatorio = Math.floor(Math.random() * (mascotas.length));
            
            
            console.log(mascotas.length);
        }else{
            aleatorio=0;
        }
        console.log(aleatorio);
        return aleatorio;
    }
    
    function genera() { 
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"
        
      
        var numMasc= Aleatorio();
        conta=conta+1;
        
      
            
        nombreMasc= nombreMasc + (conta);
        razaMasc= razaMasc + (conta);
        imagen=imagen + conta;
        
        console.log(nombreMasc);
        
        console.log[mascotas];
        document.getElementById(nombreMasc).innerHTML = mascotas[numMasc].nom;
        document.getElementById(razaMasc).innerHTML = mascotas[numMasc].raza;
        document.getElementById(imagen).src = mascotas[numMasc].img;
        mascotas.splice((numMasc),1);
        /*if(nombreMasc==="nombre16"){
            const button = document.querySelector('button');
            button.disabled = true;
            
        }*/
           
           
    }
   
    function reiniciar(){
       
       conta=0;
    
        var nombreMasc="nombre";
        var razaMasc="raza";
        var imagen ="imagen"
        mascotas = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16];
        for (let i = 1; i < 17; i++) {
        
        
        document.getElementById(nombreMasc+i).innerHTML ="??????";
        document.getElementById(razaMasc+i).innerHTML = "?????";
        document.getElementById(imagen+i).src = "./img/huella.jpg";
            
        }
        
      
        
    }

    var ts;
    var tm;
    var s=0;
    var m=0;
    function startTime() {
        
        ts = parseInt(setInterval(segundos(), 1000));
        tm = parseInt(setInterval(minutos(),60000));
        document.getElementById("contador").innerHTML = tm + ts;
     
      }
      
      function segundos() {
      s = s+1;
      }
      function minutos() {
        m = m+1;
        }
      
    



