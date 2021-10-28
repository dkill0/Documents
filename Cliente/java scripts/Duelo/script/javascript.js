
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
    var pet9 = new creaPet("Luna","Perra",4);
    var pet10= new creaPet("Siri Pequeña","Michi",67);
    var pet11= new creaPet("Siri Awela","Michi",3);
    var pet12= new creaPet("Princesa O.","Michi",56);
    var pet13= new creaPet("Mandarina","Michi",53);
    var pet14= new creaPet("Luisito","Michi",4);
    var pet15= new creaPet("Cattana","Michi",67);
    var pet16= new creaPet("Nala","Michi",67);
    var mascotas = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16];
    
    
    
    
    
    function genera() { 
            var numMasc= Math.floor(Math.random() * mascotas.length);
            document.getElementById("nombre1").innerHTML = mascotas[numMasc].nom;
            document.getElementById("raza2").innerHTML = mascotas[numMasc].raza;
            mascotas.splice[numMasc,1];
    }


