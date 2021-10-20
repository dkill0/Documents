function createRequestObject() {
     var http_request = false;
      if (window.XMLHttpRequest) { // Mozilla, Safari,...
         http_request = new XMLHttpRequest();
         if (http_request.overrideMimeType) {
         	// set type accordingly to anticipated content type
            //http_request.overrideMimeType('text/xml');
            http_request.overrideMimeType('text/html');
         }
      } else if (window.ActiveXObject) { // IE
         try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
         } catch (e) {
            try {
               http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
         }
      }
      if (!http_request) {
         alert('Cannot create XMLHTTP instance');
         return false;
      }
      
      return http_request;
}

var http = createRequestObject();
var add_http = createRequestObject();
var filter_http = createRequestObject();
var sort_http = createRequestObject();

function sndReq(action) {
    http.open('get', action);
    http.onreadystatechange = handleResponse;
    http.send(null);
}

function sndPostReq(url, parameters) {
    //alert(url);
    //alert(parameters);
    http.open('POST', url);
	http.onreadystatechange = handleResponse;
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-length", parameters.length);
	http.setRequestHeader("Connection", "close");
    http.send(parameters);
}

function sndDeleteReq(action) {
    http.open('get', action);
    http.onreadystatechange = handleDelete;
    http.send(null);
}

function sndAddReq(action) {
    http.open('get', action);
    http.onreadystatechange = doNothing;
    http.send(null);

    add_http.open('get', "ajax_ajaxCRUD.php?action=add");
    add_http.onreadystatechange = handleAdd;
    add_http.send(null);
}

function sndFilterReq(action) {
    http.open('get', action);
    http.onreadystatechange = doNothing;
    http.send(null);

    filter_http.open('get', "ajax_ajaxCRUD.php?action=filter");
    filter_http.onreadystatechange = handleFilter;
    filter_http.send(null);
}

function sndSortReq(action, table_num) {
    http.open('get', action);
    http.onreadystatechange = doNothing;
    http.send(null);

    sort_http.open('get', "ajax_ajaxCRUD.php?action=sort&table_num=" + table_num);
    sort_http.onreadystatechange = handleSort;
    sort_http.send(null);
}

function sndReqNoResponse(action) {
    http.open('get', action);
    http.onreadystatechange = doNothing;
    http.send(null);
}


function doNothing(){
	return 0;
}