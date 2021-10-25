#!bin/bash
echo "Quien esta conectado: "
quien=`whoami`
#who|cut -d" " -f1
echo $quien
echo "Directorio actual: "
direct=`pwd`
echo $direct
echo "Fecha actual: "
fecha=`date`
echo $fecha

