//Pido los numeros y los operadores
var num1 = prompt('Introduce un numero: ');
var operador = prompt('Introduce un operador: ');
var num2 = prompt('Introduce otro numero: ');

//Se guardan en la consola
console.log(num1,operador,num2);

//Se ejecuta el resultado
var resultado=eval(num1+operador+num2);


//Se imprime por pantalla
alert(resultado);