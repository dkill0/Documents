//Variable
var num1 = parseInt(prompt('Introduce un numero'));
var num2= 0;
//Bucle que acumula el valor anterior del numero y opera
while(num1>-1){
	 
	 num1 = parseInt(prompt('numero actual: '+num1+'\nnumero 2: '+num2+'\nMedia: '+((num2+num1)/2)+ '\nSuma: '+ (num2+num1)+'\nIntroduce otro numero'));
	
	num2=num1;
}

