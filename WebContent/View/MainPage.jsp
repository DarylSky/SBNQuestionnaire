<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		 <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		 <title>Questionnaire System</title>

		  <link rel="stylesheet" type="text/css" href="newcss.css" />	
		  <script src="../Js/jquery-1.7.2.js"></script>
		  <script src="../Js/jquery-ui-1.8.20.custom.js"></script>
          <script src="../Js/basic.js"></script>
		  <style type="text/css">
		    #draggable { width: 100px; height: 70px; background: silver; }
		  </style>
<script>
$(document).ready(function() {
   

   });


</script>

  
	</head>
	<body>
		<ul id="nav">
            <li id="question"><a href="#">Question</a></li>
            <li><a href="">Text Field</a> 
                <ul>
                	 <li id="questionnumber"><a href="#">Question Number</a></li>
                    <li id="shorttext"><a href="#">Short</a></li>
                    <li id="longtext"><a href="#">Long</a></li>
                </ul>
            </li>
            <li><a href="">Answer Field</a>    
                <ul>
                    <li id="text"><a href="#">Text</a></li>
                    <li id="textunit"><a href="#">Text With Unit</a></li>
                    <li id="paragraph"><a href="#">Paragraph Text</a></li>
                    <li id="checkbox"><a href="#">Check Box</a></li>
                    <li id="dropdown"><a href="#">Drop Down List</a></li>
                    <li id="radio"><a href="#">Radio Button</a></li>
                     <li id="timetable"><a href="#">Time Table</a></li>
                </ul>
            </li>
            <li id="guidance"><a href="">Guidance</a></li>
            <li id="attachment"><a href="">Attachment</a></li>
        </ul>

		<br/>
        <div class="clear"></div>
		<br/>
		<div id="div">
		<textArea id ="textarea" disabled="disabled"></textArea>
		<img src="../Images/Movingcursor.png" height="10px" width="10px" />
		</div>
		
		<div id="div2">
		<input id="TextField" type="text" disabled="disabled" />
		<img src="../Images/Movingcursor.png" height="10px" width="10px" />
		</div>
		
		<span id="questionnum"></span>
		<span id="shorttextbox"></span>
		<span id="longtextbox"></span>
		<span id="textbox"></span>
		<span id="paragraphtext"></span>
		<span id="dropdownlist"></span>
		<span id="check"></span>
		<span id="textu"></span>
		<span id="radiobutton"></span>
	
	</body>
</html>
