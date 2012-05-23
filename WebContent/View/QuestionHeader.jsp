<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
<script type="text/javascript" src="jquery.js"></script>
<script src="../Js/jquery-1.7.2.js"></script>
<script src="../Js/jquery-ui-1.8.20.custom.js"></script>
<script src="../Js/basic.js"></script>
<link rel="stylesheet" type="text/css" href="../CSS/style.css" />	


<script type="text/javascript">
	$(document).ready(function() {
		$(".plusBtn").click(function() {
			$(".panel").slideToggle("slow");
			changeBtn();
		});
	});
</script>


</head>


<body>

	<table border="1">
		<tr>
			<td>Select Response Type: </td>
			<td><select name="responseType" id="responseType">
				<option value="null" selected>Default</option>
				<option value="Text">Text</option>
				<option value="Text With Unit">Text With Unit</option>
				<option value="Radio Buttons">Radio Buttons</option>
				<option value="Check Boxes">Check Boxes</option>
				<option value="Paragraph Text">Paragraph Text</option>
			</select></td>
		</tr>
	</table>
	<table border="1">


		<tr>
			<th width="1000"><p class="flip">Question #</p></th>
			<th><button type="button" class="plusBtn" id="plusBtn" value="+">+</button></th>
		</tr>

			
		<tr>
			<td>
			<div class="panel">
			
					<p>Response Type</p>
					<span id="insert"></span>
					<span id="insert2"></span>
					
			</div>
			</td>
		</tr>
		

	</table>
	<%

	
	%>


</body>


</html>


<%
%>