<?php
class paging{

	var $pRecordCount;
	var $pStartFile;
	var $pRowsPerPage;
	var $pRecord;
	var $pCounter;
	var $pPageID;
	var $pShowLinkNotice;

	function processPaging($rowsPerPage,$pageID){
       $record = $this->pRecordCount;
       if($record >=$rowsPerPage)
            $record=ceil($record/$rowsPerPage);
       else
            $record=1;
        if(empty($pageID) or $pageID==1){
            $pageID=1;
            $startFile=0;
        }
        if($pageID>1)
            $startFile=($pageID-1)*$rowsPerPage;

        $this->pStartFile   = $startFile;
        $this->pRowsPerPage = $rowsPerPage;
        $this->pRecord      = $record;
        $this->pPageID      = $pageID;

        return $record;
	}
	function myRecordCount($query){
		$rs      			= mysql_query($query) or die(mysql_error()."<br>".$query);
		$rsCount 			= mysql_num_rows($rs);
		$this->pRecordCount = $rsCount;
		unset($rs);
		return $rsCount;
	}

	function startPaging($query){
		$query    = $query." LIMIT ".$this->pStartFile.",".$this->pRowsPerPage;
		$rs = q($query);
		//$rs       = mysql_query($query) or die(mysql_error()."<br>".$query);
		//mysql_free_result($rs);
		return $rs;
	}

	function pageLinks($url){
        global $choose_category,$sort, $num_ajaxCRUD_tables_instantiated;
        $cssclass = "paging_links";
		$this->pShowLinkNotice = "&nbsp;";
		if($this->pRecordCount>$this->pRowsPerPage){
			$this->pShowLinkNotice = "Page ".$this->pPageID. " of ".$this->pRecord;
			//Previous link
			if($this->pPageID!==1){
                $prevPage = $this->pPageID - 1;
                $link = "<a href=\"javascript:;\" onClick=\"" . $this->getOnClick("&pid=1&mid=$ltype&cid=$catid") . "\" class=\"$cssclass\">|<<</a>\n ";
                $link .= "<a href=\"javascript:;\" onClick=\"" . $this->getOnClick("&pid=$prevPage&mid=$ltype&cid=$catid") ."\" class=\"$cssclass\"><<</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n";
			}
			//Number links 1.2.3.4.5.
			for($ctr=1;$ctr<=$this->pRecord;$ctr++){
				if($this->pPageID==$ctr)
                $link .=  "<a href=\"javascript:;\" onClick=\"" . $this->getOnClick("&pid=$ctr") . "\" class=\"$cssclass\"><b>$ctr</b></a>\n";
				else
                $link .= "  <a href=\"javascript:;\" onClick=\"" . $this->getOnClick("&pid=$ctr") . "\" class=\"$cssclass\">$ctr</a>\n";
			}
			//Previous Next link
			if($this->pPageID<($ctr-1)){
                $nextPage = $this->pPageID + 1;
                $link .= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"javascript:;\" onClick=\"" . $this->getOnClick("&pid=$nextPage&mid=$ltype&cid=$catid") . "\" class=\"$cssclass\">>></a>\n";
                $link .="<a href=\"javascript:;\" onClick=\"" . $this->getOnClick("&pid=".$this->pRecord."&mid=$ltype&cid=$catid") . "\" class=\"$cssclass\">>>|</a>\n";
			}
			return $link;
		}
	}

	function getOnClick($paging_query_string){
		global $num_ajaxCRUD_tables_instantiated;
		if ($_SERVER['QUERY_STRING'] != ""){
			return "pageTable('" . $_SERVER['PHP_SELF'] . "', '&" . $_SERVER['QUERY_STRING'] . "$paging_query_string', $num_ajaxCRUD_tables_instantiated);";
		}
		else{
			return "pageTable('" . $_SERVER['PHP_SELF'] . "', '$paging_query_string', $num_ajaxCRUD_tables_instantiated);";
		}
	}
}

if (!function_exists('echo_msg_box')){
    function echo_msg_box(){

        global $error_msg;
        global $report_msg;

        if (is_string($error_msg)){
            $error_msg = array();
        }
        if (is_string($report_msg)){
            $report_msg = array();
        }

        //for passing errors/reports over get variables
        if ($_REQUEST['err_msg'] != ''){
            $error_msg[] = $_REQUEST['err_msg'];
        }
        if ($_REQUEST['rep_msg'] != ''){
            $report_msg[] = $_REQUEST['rep_msg'];
        }

        if(is_array($report_msg)){
            $first = true;
                foreach ($report_msg as $e){
                    if($first){
                        $reports.= "&nbsp;&nbsp; $e";
                        $first = false;
                    }
                    else
                        $reports.= "<br /> $e";
                }
        }
        if($reports != ''){
            echo "<div class='report'>$reports</div>";
        }

        if(is_array($error_msg)){
            $first = true;
                foreach ($error_msg as $e){
                    if($first){
                        $errors.= "&nbsp;&nbsp; $e";
                        $first = false;
                    }
                    else
                        $errors.= "<br />$e";
                }
        }
        if($errors != ''){
            echo "<div class='error'>$errors</div>";
        }
    }
}

if (!function_exists('make_filename_safe')){

    function make_filename_safe($filename){
        $filename = trim(str_replace(" ","_",$filename));
        $filename = str_replace("'", "", $filename);
        $filename = str_replace('"', '', $filename);
        $filename = str_replace('#', '_', $filename);
        $filename = str_replace('%20', '_', $filename);

        return stripslashes($filename);
    }
}
?>