#!/bin/bash /bin/bash
for var in *
do
	echo $var
if test -f "$var"
then
	echo "Es un fichero regular"
elif test -d "$var"
then
	echo "Es un directorio"
else
	echo "no es ni fichero ni directorio"
fi
done
