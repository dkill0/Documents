<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $cadena1 = 'Este curso es de PHP y MySQL';
    $cadena2 = 'Programacion para la web';
    $cadena3 = 'Juanito*23545*Murcia';
    
    echo substr($cadena1,17,20);
    echo strtoupper($cadena2);
    echo str_replace("MySQL",$cadena2,$cadena1);
    echo explode("*",$cadena3);


    ?>
</body>
</html>