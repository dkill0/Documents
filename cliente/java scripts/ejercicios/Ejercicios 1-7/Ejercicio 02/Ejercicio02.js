//Las dos variables pedidas por pantalla

var num1 = parseInt(prompt('Introduce el primer numero',0));
var num2 = parseInt(prompt('Introduce el segundo numero',0));

//variable para guardar el texto
let text = ' ';

//bucle que cuenta desde el primer numero introducido hasta el segundo, siempre que el segundo sea mayor
for (let i = num1; i <= num2; i++) {
  text = text + " " + i;
}
alert(text);