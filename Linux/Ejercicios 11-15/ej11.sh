#!/bin/bash

#11.	Diseña un shell script que pida introducir por teclado dos valores, de forma que el segundo sea mayor que el primero (pedir el valor mientras no lo sea), y que visualice la cuenta desde el primer valor hasta el segundo. 

# Primera parte del ejercicio
echo -n "introduce un número -> "
read num1
echo -n "introduce un número mayor -> "
read num2
test $num2 -gt $num1

while [ $? -ne 0 ]
do
    echo "El segundo número debe de ser mayor que $num1 "
    echo -n "Introduce un número mayor que $num1 -> "
    read num2
    test $num2 -gt $num1
done

#Segunda parte del ejercicio
echo -n "Números entre $num1 y $num2: "
echo -n "$num1 "
while [ $num1 -ne $num2 ]
do 
    num1=`expr $num1 + 1`
    echo -n "$num1 "
done
echo ""
echo "Gracias por usar nuestro software."
















    

