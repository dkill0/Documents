<?php
include("conf.php");
include("head.php");
?>
<a href="<?php echo $base_home; ?>administracion.php">Administracion</a> > Pagos
<div id="leftA">

<?php
	require_once('preheader.php');

	#the code for the class
	include ('classes/ajaxCRUD.class.php');

    #this one line of code is how you implement the class
    ########################################################
    ##

    $tblDemo = new ajaxCRUD("Item", "pagos", "idPago");

    ##
    ########################################################

    ## all that follows is setup configuration for your fields....

    #define a relationship to another table
    #the first field is the fk in the table, the second is the second table, the third is the pk in the second table, and the forth is the field you want to retrieve as the dropdown value
    //$tblDemo->defineRelationship("fkOtherTableID", "tblOtherTable", "pkOtherTableID", "fldName");

    $tblDemo->omitPrimaryKey();

    $tblDemo->displayAs("nomPelicula", "Nombre Pelicula");
    $tblDemo->displayAs("fichaPelicula", "Ficha Pelicula");
    $tblDemo->displayAs("sinopsisPelicula", "Sinopsis Pelicula");
    $tblDemo->displayAs("idVideo", "Identificador Video");

    //$tblDemo->omitField("fldLastModified");

    //$tblDemo->omitAddField("fldLastModified");

    //$tblDemo->setFileUpload("fldFilename", "suggested_learning/");

    //$tblDemo->disallowEdit('fldFilename');

    //$tblDemo->disallowEdit('fldCreationDate');
    //$tblDemo->addValueOnInsert("fldCreationDate", "NOW()");
    //$tblDemo->addValueOnInsert("fldLastModified", "NOW()");

    //$tblDemo->addWhereClause("WHERE (isCMSAdmin IS NULL OR isCMSAdmin != 1) $extra_where_clause");
    //$tblDemo->addOrderBy("ORDER BY fkPageName ASC, fldSort");

    //$tblDemo->disallowDelete();
    //$tblDemo->disallowAdd();

    //$tblDemo->addButtonToRow("Add", "add_item.php", "all");

    $tblDemo->setLimit(50);
    //$tblDemo->turnOffAjaxEditing();

    $tblDemo->defineRelationship("idPedido", "pedidos", "idPedido","idPedido");
    $tblDemo->defineRelationship("idUsuario", "usuarios", "idUsuario","nomUsuario");

	$tblDemo->addAjaxFilterBox('nomPelicula');
    //$tblDemo->addAjaxFilterBoxAllFields();
    //$tblDemo->setAjaxFilterBoxSize('fldField1', 3);


    //$tblDemo->addTableBorder();
    //$tblDemo->addButton("Add Page", "page_management.php");

	#actually show to the table
    $tblDemo->showTable();
?>

</div>

<?php
include("foot.php");
?>