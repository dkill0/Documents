#!/bin/bash

#9.	Crea un guión que reciba como parámetro un número. El guión debe comprobar que recibe un único parámetro y que además se trata de un valor numérico (control de errores).

if test $# -eq 1
then
    VALOR=`expr $1 \* 1 2>/dev/null`
    if test $? -eq 0
    then
        echo "$1 es un número"
    else 
        echo "$1 NO es un número"
    fi
else
    echo "Debes de introducir un parámetro"
fi
