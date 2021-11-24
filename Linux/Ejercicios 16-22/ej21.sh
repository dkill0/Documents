#!/bin/bash
#21.	Escribe un shell script que reciba como parámetro un fichero regular y visualice su contenido numerando las líneas. Es decir, cada línea debe ir precedida por su número de línea.

if [ $# -eq 1 ]
then
    if [ -f $1 ]
    then 
        echo "El fichero es regular"
        num=`wc -l < $1`
        conta=1
    	while [ $num -gt 0 ]
    	do
       	    echo -n "Linea $conta. " 
	        tail -n $num $1 | head -n 1
       	    num=`expr $num - 1`
	        conta=`expr $conta + 1`
    	done	

    	
    else 
        echo "El fichero NO es regular"
    fi    
    

else
    echo "El número de parámetros es incorrecto"
fi
















    

