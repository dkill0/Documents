<?php
    include_once ('preheader.php');

    header("Cache-Control: no-cache, must-revalidate");
    //A date in the past
    header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");

    $action = $_REQUEST['action'];

    $table      = $_REQUEST['table'];
    $pk         = $_REQUEST['pk'];
    $field      = trim($_REQUEST['field']);
    $id         = $_REQUEST['id'];
    $val        = $_REQUEST['val'];
    $table_num  = $_REQUEST['table_num'];

    if (!is_numeric($id)){
        $sql_id = "\"$id\"";
    }
    else{
        $sql_id = $id;
    }

    //default
    if ($action == '') $action = 'update';

    if ($action == 'add'){
        echo $_SESSION['the_table_div'];
    }

    if ($action == 'filter'){
        echo $_SESSION['filtered_table_div'];
    }

    if ($action == 'sort'){
        echo $_SESSION['sorted_table_div' . $table_num];
    }

    if ($action == 'update'){
        $val = str_replace("<P>","<br /><br />", $val);
        $val = str_replace("<p>","<br /><br />", $val);

        $val = str_replace("</P>","", $val);
        $val = str_replace("</p>","", $val);

        //check to see if  record exists
        $row_current_value = q1("SELECT $pk FROM $table WHERE $pk = $sql_id");
        if ($row_current_value  == ''){
            qr("INSERT INTO $table ($pk) VALUES (\"$id\")");
        }

        $success = qr("UPDATE $table SET $field = \"$val\" WHERE $pk = $sql_id");

        if ($val == '') $val = "&nbsp;&nbsp;";

        $prefield = trim($table . $field . $id);

        if (isset($_REQUEST['dropdown_tbl'])){
            $val = "{selectbox}";
        }

        if ($success){
            echo $prefield . "|" . stripslashes($val);
        }
        else{
            echo "error|" . $prefield . "|" . stripslashes($val);
        }
    }

    if ($action == 'delete'){
        qr("DELETE FROM $table WHERE $pk = $sql_id");
        echo $id;
    }

?>