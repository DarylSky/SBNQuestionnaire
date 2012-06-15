<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Questionnaire System</title>

<link rel="stylesheet" type="text/css" href="../CSS/MainPage.css" />
<script src="../Js/jquery-1.7.2.js"></script>
<script src="../Js/jquery-ui-1.8.20.custom.js"></script>
<script src="../Js/basic.js"></script>

<link
	href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css"
	rel="stylesheet" type="text/css">
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
<script
	src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>




<style type="text/css">
#draggable {
	width: 100px;
	height: 70px;
	background: silver;
}
</style>


<script>
$(document).ready(function() {
   
  
    $(function() {

        $( "#question1" ).sortable();
    });   

    
   });
   
$(function() {
	$( "#datepicker" ).datepicker();
});

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
	title = unescape(params["title"]);

	
	
</script>

</head>
<body style="border: 2px double #003366; width: 1010px;">
	<div id="mainPanel" width="1000">

		<div id="hello">
			<img src="../Images/MainPage/MainPageBanner.png" width="1010"
				height="60" style="position: fixed" /><br /> <br /> <br /> <br />
		</div>

		<ul id="nav" style="vertical-align: middle;">
			<li id="question"><a href="#">Question</a></li>
			<li id="textField"><a href="#">Text Field</a>
				<ul id="fieldsInTextField" style="list-style: none;">
					<li id="shorttext"><a href="#">Short Field</a></li>
					<li id="longtext"><a href="#">Long Field</a></li>
				</ul></li>
			<li id="answerField"><a href="#">Answer Field</a>
				<ul style="list-style: none;">
					<li id="text"><a href="#">Text</a></li>
					<li id="textunit"><a href="#">Text With Unit</a></li>
					<li id="paragraph"><a href="#">Paragraph Text</a></li>
					<li id="checkbox"><a href="#">Check Box</a></li>
					<li id="dropdown"><a href="#">Drop Down List</a></li>
					<li id="radio"><a href="#">Radio Button</a></li>
					<li id="datepicker"><a href="#">Date Time</a></li>
				</ul></li>
			<li id="guidance"><a href="#">Guidance</a></li>
			<li id="attachment"><a href="#">Attachment</a></li>
		</ul>

		<br /> <br />
		<div class="clear"></div>
		<br />
		<div id="questionnairediv">
			<label id="questionnaireTitle">
				<%String title=request.getParameter("title");out.println(title);%>
			</label>
		</div>

		<br />
		<div id="question1"></div>

	</div>

	<center>
		<div id="version">
			<img src="../Images/MainPage/MainPageFooter.png" width="1010"
				height="23" /><br />
		</div>

	</center>
</body>
</html>
