#!/bin/bash
#10.	Escribe un guión que pida números por teclado hasta que se introduzca un número par.

echo "Escribe un número"
read NUM

while [ `expr $NUM % 2` -ne 0 ]
do
    echo -n "Introduce otro número: "
    read NUM
done 

echo "Has introducido un número par."
echo "Fin de la ejecución."

