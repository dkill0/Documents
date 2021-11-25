#!/bin/bash

#4.	Escribe un script que te vaya pidiendo números hasta que introduzcas el cero (0). 

NUMERO=1
while [ $NUMERO -ne 0 ]
do
    echo "Introduce un número "
    read NUMERO
done
