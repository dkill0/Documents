//Variables
var num1 = parseInt(prompt('Introduce un numero'));
//Contador
var count=1;

//Bucle que lee si el numero es par o impar y acumula el valor del contador cada vez que un numero es par
while(count!=3){
	
	if(num1%2!=0){
		alert('Es impar');
		num1 = parseInt(prompt('Introduce un numero'));

	} else if(num1%2==0){
		count++;
		alert('Es par');
		num1 = parseInt(prompt('Introduce un numero'));
	}
}
	
/*Al terminar el bucle, el ultimo numero no alerta de si es par o no, asi que se añade una alerta
al salir del bucle, ya que solo sale cuando se introduce un tercer numero par*/
		alert('Es par');
	

