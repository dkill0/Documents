#!/bin/bash

#20.	Escribe un guión shell isUser que nos indique si un determinado usuario existe o no en nuestro sistema. El guión recibirá como parámetro el login del usuario que queremos comprobar. En caso de que exista, nos deberá informar además si se encuentra conectado en ese mismo momento. 	

if [ $# -eq 1 ]
then
    more /etc/passwd | cut -d: -f1 | grep -w $1 > /dev/null   
    if [ $? -eq 0 ]
    then 
        echo "El usuario existe en el sistema"
        users=`whoami`
        if [ $users == $1 ]
        then
            echo "El usuario esta CONECTADO"
        else
            echo "El usuario no esta conectado"
        fi
    else 
        echo "El usuario NO existe en el sistema"
    fi 

else
    echo "El número de parámetros introducidos NO es correcto"
fi







