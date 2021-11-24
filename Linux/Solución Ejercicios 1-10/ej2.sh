#!/bin/bash

#2.	Escribe un guión shell que muestre todos los grupos de usuarios del sistema.

more /etc/group | cut -d: -f1
