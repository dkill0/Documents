//Variables
var num1 = parseInt(prompt('Introduce el primer numero',0));
var num2 = parseInt(prompt('Introduce el segundo numero',0));

//Variable para guardar el texto
let text = ' ';

//Bucle que cuenta los numeros impares
for (let i = num1; i <= num2; i++) {
	if(i%2!=0){
		
  text = text + " " + i;
	}
}
alert(text);