#!/bin/bash
comm=`cat /etc/passwd | cut -d: -f1,4 | sort -n`
echo $comm
