#!/bin/bash
if test -f "$1"
then

if test -r "$1"
then
	echo "Tiene permisos de lectura"
fi
if test -w "$1"
then
	echo "Tiene permisos de escritura"
fi
if test -x "$1"
then
	echo "Tiene permisos de ejecucion"
fi
fi

