#!/bin/bash

#6.	Escribe un guión que reciba como parámetros dos cadenas de caracteres, e indique si son o no iguales.

if [ $1 == $2 ]
then
    echo "Las cadenas son iguales"
else
    echo "Las cadenas no son iguales"
fi
