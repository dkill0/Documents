#!/bin/bash
comm=`more  /etc/group | cut -d: -f1`
echo $comm
