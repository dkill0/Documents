#!/bin/bash
#3.	Escribe un guión que indique cuál es el primer y el último identificador de usuario del sistema.
echo -n "Primer id de sistema  "
more /etc/passwd | cut -d: -f3 | sort -n | head -n 1
echo -n "Último id de sistema  "
more /etc/passwd | cut -d: -f3 | sort -n | tail -n 1
