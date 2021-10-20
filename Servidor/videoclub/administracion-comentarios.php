<?php
include("conf.php");
include("head.php");
?>
<a href="<?php echo $base_home; ?>administracion.php">Administracion</a> > Comentarios
<div id="leftA">

<?php
	require_once('preheader.php');

	#the code for the class
	include ('classes/ajaxCRUD.class.php');

    #this one line of code is how you implement the class
    ########################################################
    ##

    $tblDemo = new ajaxCRUD("Item", "comentarios", "idComentario");

    ##
    ########################################################

    ## all that follows is setup configuration for your fields....

    #define a relationship to another table
    #the first field is the fk in the table, the second is the second table, the third is the pk in the second table, and the forth is the field you want to retrieve as the dropdown value
    //$tblDemo->defineRelationship("fkOtherTableID", "tblOtherTable", "pkOtherTableID", "fldName");

    $tblDemo->omitPrimaryKey();

    $tblDemo->displayAs("comComentario", "Comentario");
    $tblDemo->displayAs("valorComentario", "Valor Comentario");
    $tblDemo->displayAs("fechaComentario", "Fecha Comentario");
    $tblDemo->displayAs("idUsuario", "Identificador Usuario");
    $tblDemo->displayAs("idVideo", "Identificador Video");

    $tblDemo->setTextareaHeight('comComentario', 50);

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

    $allowable_vals   = array("1", "2", "3", "4", "5");

    $tblDemo->defineAllowableValues("valorComentario", $allowable_vals);

    $tblDemo->defineRelationship("idUsuario", "usuarios", "idUsuario","nomUsuario");
    $tblDemo->defineRelationship("idVideo", "videos", "idVideo","nomVideo");

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