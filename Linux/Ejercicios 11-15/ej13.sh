#!/bin/bash
#13.	Escribe un shell script que pida valores por teclado hasta introducir un número entre 1 y 10. Comprobar que el valor introducido es de tipo numérico (control de errores).

numerito=12

while [ $numerito -gt 10 -o $numerito -lt 1 ]
do
    echo "Introduce un numero, por favor (1...10)"
    read numerito
    suma=`expr $numerito + 1 2>/dev/null`
    while [ $? -ne 0 ]
    do
        echo "Por favor, el número entre 1 y 10"
        read numerito
        suma=`expr $numerito + 1 2>/dev/null`
    done
done

echo "Has introducido un número entre 1 y 10"
