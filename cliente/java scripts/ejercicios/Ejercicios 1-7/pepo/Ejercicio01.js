var num=0;
var media;
var suma=0;
var cont=0;
while(num>=0){
    var num = parseInt(prompt("Introduce un número no negativo (A PODER SER)",0));
    if(num>0) {
        suma += num;
        cont++;
    }
}
media = suma/cont;
alert("La suma de todos los números es: " + suma);
alert("La media es " + media);