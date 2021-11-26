#!/bin/bash
compruebaNumero () {
	parametro=$1
	VALOR=`expr $parametro * 1 2>/dev/null`
		while test ! $? -eq 0
		do 
			echo "Formato incorrecto, prueba de nuevo:"
			read parametro
			VALOR=`expr $parametro \* 1 2>/dev/null`
		done
}
compruebaVacio (){
vacio=""
parametro= $1
while [ "$parametro" = "$vacio" ]
do echo "Campo vacio, prueba de nuevo:"
	read parametro
done
}

compruebaRango (){
numero=$1
tipo=$2
rangoMen=1
rangoMay=12

if [ "$tipo" = "mes" ]
then
	rangoMay=31
fi

while [ $numero -ge 0 -a $number -le 7 ]
do
	echo "Rango incorrecto, vuelve a intentarlo"
	read numero
done
}



clear
case $# in

     0) archivo="movimientos.dat"
        ;;
     1) if test -f $1
		then 
			archivo="$1"   
		else
			echo "No existe el fichero, se creará uno nuevo llamado 				 movimientos.dat"
			archivo="movimientos.dat"
		fi
		;;
      
	 *) echo "Número de parámetros incorrecto."
		exit
		;;

esac

	



	
	echo "************************************************"
    echo "*             Vega Media Bank                  *"
    echo "*----------------------------------------------*"
    echo "                 $archivo                       "
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
		    1) awk 'BEGIN {
				print("Movimientos realizados: ")
				print("id \t Descripcion \t Cantidad \t Fecha")
				print("")			
				FS=":"
				}
				{ print $1 "\t" $2 "\t" $3 "\t" $4 "/" $5 "/" $6
				}
				END{
				print ("Fin del archivo")
				}
				' $archivo
		       echo "[VegamediaBank] >>"
		       read  opcion
		    ;;
		    2) echo "Introduce los datos:"
				
				echo "Descripcion:"
				read descrip
					compruebaVacio $descrip

				echo "Cantidad de dinero."
				read cant
					compruebaNumero $cant

				echo "Día: "
				read dia
					compruebaNumero $dia
					compruebaRango $dia "dia"
	
				echo "Mes: "
				read mes
					compruebaNumero $mes
				echo "Año: "
				read anho
					compruebaNumero $anho
					
				
				num=`wc -l < $archivo`
        		
				if [ $num -gt 0 ]
				then 
					
					id=$num
				else
					id=0
				fi

				echo "${id}:${descrip}:${cant}:${dia}:${mes}:${anho}" >> $archivo 
				
		       echo "[VegamediaBank] >>"
		       read opcion
		    ;;
		    3)  opcion1 $opcion
				
		       echo "Opcion 3"
		       echo "[VegamediaBank] >>"
		       read opcion
		    ;;
		    4) echo "Introduce el id"
				read identificador
				
				
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




