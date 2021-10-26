#!/bin/bash
if test $# -eq 1
then
     #CON EL 2> SE REDIRECCIONA A LA "PAPELERA" SOLO SI ES UN ERROR
     VALOR=`expr $1 \* 1` 2>/dev/null
    #SI DA FALLO ALGO EN EL CODIGO (LA OPERACION EN ESTE CASO) NO ES NUMERICO
    if test $? -eq 0
    then
        echo "$1 es un numero"
    else
        echo "$1 No es un numero"
    fi
else
	echo "Debes introducir un parametro"
fi
