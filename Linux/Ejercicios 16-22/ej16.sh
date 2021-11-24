#!/bin/bash

#16.	Escribe un shell script que reciba como parámetro el nombre de un usuario e indique si el usuario se encuentra conectado (es decir, tiene abierta una sesión) en ese mismo momento al sistema.

usuario=`whoami`
if [ $# -eq 1 ]
then
    if [ $1 == $usuario ]
    then
        echo "$1 tiene abierta la sesion"
    else 
        echo "$1 no tiene abierta la sesión"
    fi
else
    echo "El número de argumentos es incorrecto"
fi













    

