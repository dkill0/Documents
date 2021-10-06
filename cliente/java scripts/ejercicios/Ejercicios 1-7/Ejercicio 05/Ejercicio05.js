
//Pido la letra
var letra = prompt('Introduce la primera letra de un dia de la semana: ');
//Variable para guardar el texto
var day = ' ';

//switch para diferenciar los casos 
switch (letra) {
  case 'L':
    day = "laboral";
    break;
  case 'l':
    day = "laboral";
    break;
  case 'M':
     day = "laboral";
    break;
  case 'm':
    day = "laboral";
    break;
  case 'x':
    day = "laboral";
    break;
  case 'X':
    day = "laboral";
    break;
  case 'J':
    day = "laboral";
	break;
	 case 'j':
    day = "laboral";
    break;
  case 'v':
    day = "laboral";
    break;
  case 'V':
    day = "laboral";
    break;
	  case 'S':
    day = "Fin de semana";
	break;
	 case 's':
    day = "Fin de semana";
    break;
  case 'd':
    day = "Fin de semana";
    break;
  case 'D':
    day = "Fin de semana";
    break;
}
//Alerta que imprime el tipo de día
alert(day);	