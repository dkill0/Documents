#!/bin/bash
echo -n "El primer identificador es: "
cat /etc/passwd|cut -d: -f3|sort -n |head -n1
echo -n "El segundo identificador es: "
cat /etc/passwd|cut -d: -f3|sort -n |tail -n1
