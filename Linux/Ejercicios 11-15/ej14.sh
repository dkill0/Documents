#!/bin/bash

#14.	Crea un shell script llamado doble que pida un número por teclado y calcule su doble. Debe comprobar el número introducido y antes de terminar preguntará si deseamos calcular otro doble, en cuyo caso no terminará. 

#Función que calcula el doble del número pedido
doble () {
     #Pido y leo el número
     echo "Introduzca un número para calcular el doble: "
     read num

     #Calculo el doble
     doble=`expr $num \* 2 2> /dev/null`
     #Si al realizar la operación se produce un error, 
     #es porque el valor introducido no es de tipo numérico.
     if [ $? -ne 0 ]
     then
    	 echo "No has introducido un número!!"
     else
         echo "El doble de $num es $doble"
     fi
}

doble
echo "Desea calcular otro doble (pulsa 's' o 'S' para continuar)?"
read resp
while [ $resp == "s" -o $resp == "S" ]
do
     doble
      #Pregunto si se desea calcular otro doble
     echo "Desea calcular otro doble (pulsa 's' o 'S' para continuar)?"
     read resp
     
done

