//Variable 
var num1 = parseInt(prompt('Introduce un numero',0));

//Bucle: si el numero introducido es mayor a 1.000, vuelve a solicitar el numero
while(num1>1000){
	num1 = parseInt(prompt('El numero no es valido. Introduce un numero: ',0));
}

//Condicionales para las alertas
if(num1<10){
	
	alert('El numero es menor que 10');
	
} else if(num1<100){
	alert('El numero es menor que 100');

} else if(num1<1000){
	alert('El numero es menor que 1000');
}