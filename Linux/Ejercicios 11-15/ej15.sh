#!/bin/bash

#15.	Escribe un guión shell que cree un fichero cuyo nombre sea tu nombre de usuario seguido de la fecha actual en formato dd-mm-aa (por ejemplo: guiones-10-01-12) y cuyo contenido sea el listado detallado del directorio actual.

login=`who|cut -d" " -f1`
dia=`date +%d`
mes=`date +%m`
anho=`date +%y`

nombrefich="$login-$dia-$mes-$anho"

ls -l > $nombrefich

