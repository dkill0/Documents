
    function creaPet(arg1, arg2, arg3) {
        this.nom=arg1;
        this.raza=arg2;
        this.img=arg3;
    }
    var pet1 = new creaPet("Salem","Michi",3);
    var pet2 = new creaPet("Chachá","Michi",56);
    var pet3 = new creaPet("Zoro","Michi",53);
    var pet4 = new creaPet("Amy","Michi",4);
    var pet5 = new creaPet("Perse","Perra",67);
    var pet6 = new creaPet("Aza","Michi",3);
    var pet7 = new creaPet("Rizos","Michi",56);
    var pet8 = new creaPet("Porro","Pez",53);
    var pet9 = new creaPet("Luna","Perra","../img/tata.jpeg");
    var pet10= new creaPet("Siri Pequeña","Michi",67);
    var pet11= new creaPet("Siri Awela","Michi",3);
    var pet12= new creaPet("Princesa O.","Michi",56);
    var pet13= new creaPet("Mandarina","Michi",53);
    var pet14= new creaPet("Luisito","Michi",4);
    var pet15= new creaPet("Cattana","Michi",67);
    var pet16= new creaPet("Nala","Michi",67);
    var mascotas = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16];
    
    var conta=0;
    
    function Aleatorio() {
        var aleatorio;
        if(mascotas.length>0){
            aleatorio = Math.floor(Math.random() * (mascotas.length-1));
            
            
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
            imagen = imagen+conta;
            console.log(nombreMasc);
            
            console.log[mascotas];
            document.getElementById(nombreMasc).innerHTML = mascotas[numMasc].nom;
            document.getElementById(razaMasc).innerHTML = mascotas[numMasc].raza;
            document.getElementById(imagen).innerHTML = mascotas[numMasc].img;
            mascotas.splice((numMasc),1);
            /*if(nombreMasc="nombre17"){
                const button = document.querySelector('button');
                button.disabled = true;
            }*/
           
           
    }
    /* xd
    */
    function reinicia(){
        var nombreMasc="nombre";
        var razaMasc="raza";
       

        for (let i = 1; i < 17; i++) {
        
        console.log(nombreMasc);
        document.getElementById(nombreMasc+i).innerHTML ="??????";
        document.getElementById(razaMasc).innerHTML = "?????";
            
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
      
    



