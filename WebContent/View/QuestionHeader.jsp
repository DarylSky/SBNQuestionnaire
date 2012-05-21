<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<script type="text/javascript"
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
<script type="text/javascript" src="jquery.js"></script>

<script type="text/javascript">
	$(document).ready(function() {
		$(".plusBtn").click(function() {
			$(".panel").slideToggle("slow");
			changeBtn();
		});

		
		
	});
	
	function changeBtn()
	{
		if (document.getElementById('plusBtn').value == "+")
		 {
			$("#plusBtn").html('-');
			document.getElementById('plusBtn').value = "-";
		 }
	
		else if (document.getElementById('plusBtn').value == "-")
		{
			$("#plusBtn").html('+');
			document.getElementById('plusBtn').value = "+";
		}
	}
	
</script>


<style type="text/css">
	p.flip {
	margin: 0px;
	padding: 5px;
	text-align: center;
	background: #A9A9F5;
	border: solid 1px #c3c3c3;
}

div.panel {
	height: 120px;
	display: none;
	background: white;
}
</style>
</head>


<body>

	<table border="1">

		<tr>
			<th width="1000"><p class="flip" >Question #</p></th>
			<th><button type="button" class="plusBtn" id="plusBtn" value="+">+</button></th>			
		</tr>


		<tr>
			<td><div class="panel">
			<p>Question Information</p>
			</div></td>
		</tr>
		
		
	</table>

</body>


</html>


<%
%>