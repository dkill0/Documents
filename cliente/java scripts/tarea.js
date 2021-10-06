var resultado=confirm("Quieres hacer una operacion?");
if(resultado==true){
	
	var numero1 = parseInt(prompt('Introduce el primer numero',0));
	var signo = prompt('Introduce el operador');
	var numero2 = parseInt(prompt('Introduce el segundo numero',0));
	alert(eval(numero1+signo+numero2));
}