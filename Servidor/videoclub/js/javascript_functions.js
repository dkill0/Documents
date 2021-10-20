//the table can filter by one (or many) fields. these vars will hold them all to be passed via ajax (denilited by '|')
//singleton pattern
var filterFields_array = new Array();
var filterBy_array = new Array();

var filterReq = "";
var sortReq = "";
var sort_table_num = 1;

function filterTable(obj, field, ajax_file){

    //arrays to be converted to a string
    var ajaxFilterFields = "";
    var ajaxFilterByVals = "";

    var indexOfArray = filterFields_array.findIndex(field);

    //first time textbox values are entered push fields/values on parrallel arrays
    if(obj.value != '' && indexOfArray === ''){
    	filterFields_array.push(field);
    	filterBy_array.push(obj.value);
    }

    if (indexOfArray !== '' && obj.value != ''){
    	filterFields_array[indexOfArray] = field;
    	filterBy_array[indexOfArray] = obj.value;
    }

    if (obj.value == '' && indexOfArray !== ''){
    	filterFields_array.splice(indexOfArray, 1);
    	filterBy_array.splice(indexOfArray, 1);
    }

    if (filterFields_array.length > 0){
    	ajaxFilterFields = filterFields_array.join("|");
    	ajaxFilterByVals = filterBy_array.join("|");

    	//alert("fields: " + ajaxFilterFields + " vals: " + ajaxFilterByVals);
    	var req = ajax_file + "?action=filterAjaxTable&ajaxCrudFilterFields=" + ajaxFilterFields + "&ajaxCrudFilterByVals=" + ajaxFilterByVals;
    	filterReq = "&ajaxCrudFilterFields=" + ajaxFilterFields + "&ajaxCrudFilterByVals=" + ajaxFilterByVals;
    }
    else{
    	var req = ajax_file + "?action=unfilter";
    	filterReq = "&action=unfilter";
    }

	// function to send the filter
	var func = function() { sndFilterReq(req);};

	// Check to see if there is already a timeout and if so...
	// ...cancel it and create a new one
	if ( obj.zid ) {
		clearTimeout(obj.zid);
	}
	//set a timeout of half a second (reduces number of calls to the db)

	obj.zid = setTimeout(func,500);
}

function confirmDelete(ajax_file, id, table, pk){
	if(confirm('Are you sure you want to delete this item from the database? This cannot be undone.')) {
		ajax_deleteRow(ajax_file, id, table, pk);
	}
}
function deleteFile(field, id){
	if(confirm('Are you sure you want to delete this file? This cannot be undone.')) {
		location.href="?action=delete_file&field_name=" + field + "&id=" + id;
	}
}

function ajax_deleteRow(ajax_file, id, table, pk){
	var req = ajax_file + '?action=delete&id=' + id + '&table=' + table + '&pk=' + pk;
	sndDeleteReq(req);

}

//for handling all ajax editing
//TODO: make function name less generic
function handleResponse() {
    if(http.readyState == 4){

        var return_string = http.responseText;

        //if there's an error in the update
        if (return_string.substring(0,5) == 'error'){
            var broken_string = return_string.split("|");
            var id = broken_string[1];
            var old_value = broken_string[2];

            window.alert('Error updating content.');

            //display the display section, fill it with prior content
            $(id+'_show').innerHTML = old_value;
            $(id+'_show').style.display = '';
            //hide editing and saving sections
            $(id+'_edit').style.display = 'none';
            $(id+'_save').style.display = 'none';
        }

        else{
            var broken_string = return_string.split("|");
            var id = broken_string[0];
            var replaceText = myStripSlashes(broken_string[1]);

			//display the display section, fill it with new content
			if (replaceText != "{selectbox}"){
				if (replaceText != null){
					$(id+'_show').innerHTML = replaceText;
				}
				else{
					$(id+'_show').innerHTML = "";
				}
			}
			else{
				var the_selectbox = $(id);
				$(id+'_show').innerHTML = the_selectbox.options[the_selectbox.selectedIndex].text;
			}
            $(id+'_show').style.display = '';
            //hide editing and saving sections
            $(id+'_edit').style.display = 'none';
            $(id+'_save').style.display = 'none';
        }
    }
}

function handleDelete() {
	if(http.readyState == 4){
		var return_string = http.responseText;

		//if there's an error in the delete
		if (return_string.substring(0,5) == 'error'){
			var broken_string = return_string.split("|");
			var id = broken_string[1];
		}
		else{
			var id = return_string;
			Effect.Fade('row_' + id);
		}
	}
}

function handleAdd() {
	if(add_http.readyState == 4){
		var table_html = add_http.responseText;

		$('the_table_div' + sort_table_num).innerHTML = table_html;
	}
}

function handleFilter() {
	if(filter_http.readyState == 4){
		var table_html = filter_http.responseText;

		$('the_table_div' + sort_table_num).innerHTML = table_html;
	}
}

function handleSort() {
	if(sort_http.readyState == 4){
		var table_html = sort_http.responseText;
		$('the_table_div' + sort_table_num).innerHTML = table_html;
	}
}

function changeSort(field_name, sort_direction, this_file, table_num){
	//this will also maintain the filtering when sorting
	sort_table_num = table_num;
	sortReq = "&sort_field=" + field_name + "&sort_direction=" + sort_direction;
	var req = this_file + "?table_num=" + table_num + sortReq + filterReq;

	sndSortReq(req, table_num);
	return false;
}

function pageTable(this_file, params, table_num){
	var req = this_file + "?table_num=" + table_num + params + sortReq + filterReq;

	sndSortReq(req, table_num);
	return false;
}

function getFormValues(fobj,valFunc) {

	var str = "";
	var valueArr = null;
	var val = "";
	var cmd = "";
	var element_type;
	for(var i = 0;i < fobj.elements.length;i++) {
		element_type = fobj.elements[i].type;

		if (element_type == 'text' || element_type == 'textarea'){
			if(valFunc) {
				//use single quotes for argument so that the value of
				//fobj.elements[i].value is treated as a string not a literal
				cmd = valFunc + "(" + 'fobj.elements[i].value' + ")";
				val = eval(cmd)
			}

			str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&";
		}
		else if(element_type == 'select-one'){
			str += fobj.elements[i].name + "=" + fobj.elements[i].options[fobj.elements[i].selectedIndex].value + "&";
		}
	}

	str = str.substr(0,(str.length - 1));
	return str;
}

function clearForm(formIdent){
	var form, elements, i, elm;
	form = document.getElementById ? document.getElementById(formIdent) : document.forms[formIdent];

	if (document.getElementsByTagName){
		elements = form.getElementsByTagName('input');
		for( i=0, elm; elm=elements.item(i++); ){
			if (elm.getAttribute('type') == "text"){
				elm.value = '';
			}
		}
		elements = form.getElementsByTagName('select');
		for( i=0, elm; elm=elements.item(i++); ){
			elm.options.selectedIndex=0;
		}
		elements = form.getElementsByTagName('textarea');
		for( i=0, elm; elm=elements.item(i++); ){
			elm.value = '';
		}
	}
	else{
		elements = form.elements;
		for( i=0, elm; elm=elements[i++]; ){
			if (elm.type == "text"){
				elm.value ='';
			}
		}
	}
}

//this function is to not allow non-numeric values for fields with an INT datatype
function fn_validateNumeric(thi,dec){
	var value = thi.value;
	if (event.keyCode == 13) return;

	if (((event.keyCode < 48) || (event.keyCode > 57)) && (event.keyCode != 46))
		event.returnValue = false;
	if(dec=="n" && event.keyCode == 46){
		event.returnValue = false;
	}
	else{
		if(event.keyCode == 46 && value.indexOf(".")>=0)
			event.returnValue = false;
	}
}

function myAddSlashes(str) {
    str=str.replace(/\"/g,'\\"');
    return str;
}

function myStripSlashes(str) {
    str=str.replace(/\\'/g,'\'');
    str=str.replace(/\\"/g,'"');
    return str;
}

var prior_class = '';
function hover(obj){
    obj.className='class_hover';
}

function unHover(obj){
    obj.className = '';
}

//I don't know why javascript doesn't have this function built into the language!
Array.prototype.findIndex = function(value){
	var ctr = "";
	for (var i=0; i < this.length; i++) {
		// use === to check for Matches. ie., identical (===), ;
		if (this[i] == value) {
			return i;
		}
	}
	return ctr;
};

if('function' != typeof Array.prototype.splice) {
	Array.prototype.splice = function(s, dC) {
		s = +s || 0;
		var a = [],
		n = this.length,
		nI = Math.min(arguments.length - 2, 0), i, j;
		s = (0 > s) ? Math.max(s + n, 0) : Math.min(s, n);
		dC = Math.min(Math.max(+dC || 0, 0), n - s);
		for(i = 0; i < dC; ++i) {a[i] = this[s + i];}
		if(nI < dC) {
			for(i = s, j = n - dC; i < j; ++i) {
				this[i + nI] = this[i + dC];
			}
		} else if(nI > dC) {
			for(i = n - 1, j = s + dC; i >= j; --i) {
				this[i + nI - dC] = this[i];
			}
		}
		for(i = s, j = 2; j < nI; ++i, ++j) {this[i] = arguments[j];}
		this.length = n - dC + nI;
		return a;
	};
}
