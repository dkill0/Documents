#!/bin/bash

#18.	Escribe un guión shell que reciba como parámetros dos nombres de fichero (deben existir y ser de tipo regular) y que intercambie sus contenidos, de forma que el contenido del primero sea el del segundo y viceversa.

if [ $# -eq 2 ]
then
    if [ -f $1 -a -f $2 ]
    then
        cp $1 "auxiliar"
        mv $2 $1
        mv "auxiliar" $2
    else 
        echo "Alguno de los ficheros, no cumple con los requisitos."
    fi       

else 
    echo "El número de parámetros es incorrecto."
fi














    

