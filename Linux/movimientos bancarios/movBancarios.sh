#!/bin/bash

clear
case $# in

     0)
        
        
            echo "************************************************"
		    echo "*             Vega Media Bank                  *"
		    echo "*----------------------------------------------*"
            echo "*             movimientos.dat                  *"
            echo "*----------------------------------------------*"
		    echo "*    [ 1 ] Visualizar todos los movimientos    *"
		    echo "*    [ 2 ] Añadir nuevo movimiento             *"
		    echo "*    [ 3 ] Buscar un movimiento                *"
		    echo "*    [ 4 ] Eliminar un movimiento              *"
            echo "*    [ 5 ] Salir                               *"         
		    echo "*                                              *"
		    echo "*    Elige una opcion:                         *"
            echo "************************************************"
            echo "[VegamediaBank] >>"
		    read opcion
            while [ $opcion -ne 5 ]
            do
            case $opcion in
                1)  num=`wc -l < $1`
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
                   echo "[VegamediaBank] >>"
	               read opcion 
                ;;
                2) echo "Opcion 2"
                   echo "[VegamediaBank] >>"
	               read opcion
                ;;
                3) 
                   echo "Opcion 3"
                   echo "[VegamediaBank] >>"
	               read opcion
                ;;
                4) 
                   echo "Opcion 4"
                   echo "[VegamediaBank] >>"
	               read opcion
                ;;
                5) clear
                   
                ;;
                *) 
                   echo "Introduce un numero del 1 al 5"
                   echo "[VegamediaBank] >>"
	               read opcion 
		        ;;
		   esac
        done
        echo "Adios"
;;
esac

