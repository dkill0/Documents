var numero1 = parseInt(prompt('Introduce el primer numero',0));
var numero2 = parseInt(prompt('Introduce el segundo numero',0));

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