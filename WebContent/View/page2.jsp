<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<script LANGUAGE="JavaScript">

function getParams(){
var idx = document.URL.indexOf('?');
var params = new Array();
if (idx != -1) {
var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
for (var i=0; i<pairs.length; i++){
nameVal = pairs[i].split('=');
params[nameVal[0]] = nameVal[1];
}
}
return params;
}


params = getParams();
firstname = unescape(params["firstname"]);
lastname = unescape(params["lastname"]);
age = unescape(params["age"]);
document.write("firstname = " + firstname + "<br>");
document.write("lastname = " + lastname + "<br>");
document.write("age = " + age + "<br>");
</script>
</html>