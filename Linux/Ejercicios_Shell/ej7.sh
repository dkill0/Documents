#!/bin/bash
for var in $*
do 
resul=`expr $var % 2`

	if [ "$resul" -ne "0" ]
	then
		echo "$var"
	fi
done
