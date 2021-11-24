#!/bin/bash

#19.	Escribe un guión que se llame mi_ls y que realice un "ls" particular, mostrando un listado con los nombres de los ficheros del directorio actual que se pueden leer, otro listado con los ficheros sobre los que se pueda escribir, y otro listado con los archivos que son ejecutables.

#Bucle para el listado de ficheros con permisos de lectura
echo "********* LISTADO DE FICHEROS CON PERMISOS DE LECTURA *********"
for dir in *
do
    if [ -f $dir -a -r $dir ]
    then 
        echo $dir
    fi
done
echo ""

#Bucle para el listado de ficheros con permisos de escritura
echo "********* LISTADO DE FICHEROS CON PERMISOS DE ESCRITURA *********"
for dir in *
do
    if [ -f $dir -a -w $dir ]
    then 
        echo $dir
    fi

done
echo ""

#Bucle para el listado de ficheros con permisos de ejecución
echo "********* LISTADO DE FICHEROS CON PERMISOS DE EJECUCIÓN*********"
for dir in *
do
    if [ -f $dir -a -x $dir ]
    then 
        echo $dir
    fi

done














    

