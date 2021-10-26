#!/bin/bash
echo -n "Introduce un numero: "
read num

while [ `expr $num % 2` -ne 0 ]
do
echo -n "Introduce otro numero: "
read num
done
echo "Has introducido un numero par"
