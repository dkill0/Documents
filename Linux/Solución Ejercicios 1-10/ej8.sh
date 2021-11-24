#!/bin/bash

#8.	Escribe un script que muestre el listado de ficheros del directorio actual indicando para cada caso si se trata de un fichero regular o de un directorio.

for var in * 
do
    echo -n $var
    if test -f "$var"
    then
        echo " -->Es un fichero regular"
    elif test -d "$var"
    then
        echo " -->Es un directorio"
    else
        echo " --> Ni fichero ni directorio"
    fi
done
