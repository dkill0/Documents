<?php
    #for pesky IIS configurations without silly notifications turned off
    error_reporting(E_ALL - E_NOTICE);

	#this is the link to your database -- it is the only requirement for the class: an active db connection
    ####################################################################################
    ##
    require_once("database.php");
    ##
    ####################################################################################

    #custom function sets for your application handling (optional)
    //require_once("includes/functions.php");
    //require_once("includes/header_functions.php");
	//require_once("includes/emailing.php");
    //require_once("uploading.php");

    #custom global variables for your application (optional)
    //$globals = array();
    //$globals['domain_name'] = "ajaxCRUD";
	//$globals['domain_ext'] = ".com";
	//$globals['site_year'] = date("Y");
    //$globals['site_name'] = $globals['domain_name'] . $globals['domain_ext'];
	//$globals['site_root_dir'] = $_SERVER['DOCUMENT_ROOT'] . "/";
    //$globals['webmaster_email'] = 'sean@seandempsey.com';
    //$globals['contact_email'] = 'sean@seandempsey.com';
	//$globals['contact_email_name'] = "AjaxCRUD Web Support";
	//global $globals;
?>