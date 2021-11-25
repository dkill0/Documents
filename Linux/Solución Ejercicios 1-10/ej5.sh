#!/bin/bash

#5.	Escribe un guión que reciba como parámetro el nombre de un fichero regular e indique si tiene permisos de lectura, escritura o ejecución.

if test -f "$1"
then
    #Compruebo el permiso de lectura
    if test -r "$1"
    then
        echo "Tiene permisos de lectura"
    fi

    #Compruebo el permiso de escritura
    if test -w "$1"
    then
        echo "Tiene permisos de escritura"
    fi

    #Compruebo el permiso de ejecución
    if test -x "$1"
    then
        echo "Tiene permisos de ejecución"
    fi
else
    echo "No has introducido un fichero regular"
fi
