#!/bin/bash
#12.	Escribe un script que se llame calcular que muestre por pantalla el siguiente menú:
    #[ 1 ]	Sumar
    #[ 2 ]	Restar
    #[ 3 ]	Multiplicar
    #[ 4 ]	Dividir
    #  Elige una opción: __

clear
case $# in
     0)	echo "No has indicado los operandos. Ejemplo: ./ej12.sh 4 5"
		;;
     1)	echo "Te falta un operando. Ejemplo: /ej12.sh 4 5"
		;;
     2) echo
		echo "     Operandos: $1  $2"
		echo 
		echo "     [ 1 ] Sumar"
		echo "     [ 2 ] Restar"
		echo "     [ 3 ] Multiplicar"
		echo "     [ 4 ] Dividir"
		echo
		echo "     Elige una opcion:_ "
		read opcion
		case $opcion in
		   1) res=` expr $1 + $2 `
	   	   	echo "     El resultado de Sumar $1 y $2 es: $res"
	   	   	;;
		   2) res=` expr $1 - $2 `
	   	   	echo "     El resultado de Restar $1 y $2 es: $res"
	   	      ;;
		   3) res=` expr $1 \* $2 `
	   	    	echo "     El resultado de Multiplicar $1 y $2 es: $res"
	   	   	;;
		   4) res=` expr $1 / $2 `
	   	   	echo "El resultado de Dividir $1 y $2 es: $res"
	   	   	;;
		   *) echo "No has introducido una opcion valida"
		esac
		;;
     *) echo "Demasiados argumentos. Ejemplo: calcula 4 5"
		;;
esac












