//Variables
var num=0;
var media;
var suma=0;
var cont=0;
//Bucle que repite la introduccion de un numero mientras no sea negativo, suma y acumula los numeros
while(num>=0){
    var num = parseInt(prompt("Introduce un numero:",0));
    if(num>0) {
        suma += num;
        cont++;
    }
}
media = suma/cont;
alert("La suma es: " + suma);
alert("La media es " + media);