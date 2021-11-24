#!/bin/bash

#22.	Escribe un guión shell que visualice y desarrolle el siguiente menú y todas sus opciones:

#Función para la opción 1
opcion1 () {
	for var in *
	do
	    echo $var
	done
}





#Función para la opción 2
opcion2 () {
	echo -n "Nombre del fichero: " 
        read filename
	if [ -f $filename ]
        then
	    more $filename
	else
	    echo "Nombre de archivo no valido"
	fi
}


#Función para la opción 3
opcion3 () {
	echo -n "Nombre actual del fichero: "
	read nombref
	if [ -f $nombref ]
	then
        	echo -n "Nuevo nombre del fichero: "
		read filename
		if [ -f $filename ]
        	then
			echo "El fichero $filename ya existe. Sobreescribir? (s/n)?"
			read sn
			if [ $sn = "s" -o $sn = "S" ]
			then
				mv -f $nombref $filename
			else
				echo "No se ha cambiado el nombre al fichero"
			fi
		else
			mv $nombref $filename
		fi		
	else
		echo "El fichero $nombref no es valido"
	fi
}


#Función para la opción 4
opcion4 () {
	echo -n "Nombre del fichero: "
	read nombref
	if [ -f $nombref ]
	then
		joe $nombref
	else
		echo "El fichero $nombref no es valido o no existe"
	fi
}


#Programa

fin=0
while [ $fin -ne 1 ]
do
   clear
   echo "***************************************************"	
   echo "*   Menu:                                         *"
   echo "*   [1] Listado de ficheros del directorio actual *"
   echo "*   [2] Visualizar el contenido de un fichero     *"
   echo "*   [3] Cambiar el nombre de un fichero           *"
   echo "*   [4] Editar un fichero con el editor Joe       *"
   echo "*   [5] Salir                                     *"
   echo "***************************************************"
   echo -n "Elige una opcion: "
   read respuesta
   case $respuesta in 
     1) echo "1. Listado de ficheros del directorio actual"
		opcion1	
		;;

     2) echo "2. Visualizar el contenido de un fichero"
		opcion2
		;;

     3) echo "3. Cambiar el nombre de un fichero"
        opcion3
		;;

     4) echo "4. Editar un fichero con el editor Joe" 
		opcion4
		;;
	
     5) echo "Fin"
		fin=1
		;;

     *) echo "La opcion introducida no es valida"
   esac

   echo "Pulse una ENTER para continuar ..."
   read enter
done
