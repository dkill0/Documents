var numero1 = parseInt(prompt('Introduce el primer numero',0));
while(isNaN(numero1)==true){
	numero1 = parseInt(prompt('Error. Introduce el primer numero:',0));
}
var numero2 = parseInt(prompt('Introduce el segundo numero',0));
while(isNaN(numero2)==true){
	 numero2 = parseInt(prompt('Error. Introduce el segundo numero:',0));
}


console.log(numero1, numero2);

if(numero1==numero2){
	alert("Los dos numeros son iguales");
}
else if(numero1>numero2){
	alert("El mayor es: "+numero1+" y el menor es: "+ numero2);
}
else if(numero2>numero1){
	alert("El numero mayor es: "+numero2+" y el menor es: " + numero1);
}