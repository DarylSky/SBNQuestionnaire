<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		 <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		 <title>Questionnaire System</title>

		  <link rel="stylesheet" type="text/css" href="newcss.css" />	
		  <script src="../Js/jquery-1.7.2.js"></script>
		  <script src="../Js/jquery-ui-1.8.20.custom.js"></script>
		  <style type="text/css">
		    #draggable { width: 100px; height: 70px; background: silver; }
		  </style>
		  <script>
			  $(document).ready(function() {
				  $('#append').click(function() {
				      $(this).parent().append('<div id="divId"><br/><input type="checkbox" id="checkboxId" /><input id="inputId" /><br/><br/><input type="button" id="removeButton" value="close" />');
				  });
				  $('#removeButton').click(function() {
				      $(this).parent().remove();
				  });
				  $('#drag').draggable({
				      cancel: 'input'
				  });
				  
				  $(function(){
				      $("div").draggable();
				      $("div2").draggable();
				      $("textarea").draggable();
				      $("TextField").draggable();
				
				  });
				  
				  $('#nav li').hover(
		                    function () {
		                        //show its submenu
		                        $('ul', this).slideDown(100);

		                    },
		                    function () {
		                        //hide its submenu
		                        $('ul', this).slideUp(100);        
		                    }
		                );
			  
			 	 })
  
  			</script>
  
	</head>
	<body>
		<ul id="nav">
            <li id="question"><a href="#">Question</a></li>
            <li><a href="">Text Field</a> 
                <ul>
                    <li><a href="#">Short</a></li>
                    <li><a href="#">Long</a></li>
                </ul>
            </li>
            <li><a href="">Answer Field</a>    
                <ul>
                    <li><a href="#">Text</a></li>
                    <li><a href="#">Text With Unit</a></li>
                    <li><a href="#">Paragraph Text</a></li>
                    <li><a href="#">Check Box</a></li>
                    <li><a href="#">Drop Down List</a></li>
                    <li><a href="#">Radio Button</a></li>
                </ul>
            </li>
            <li id="guidance"><a href="">Guidance</a></li>
            <li id="attachment"><a href="">Attachment</a></li>
        </ul>

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
	
	</body>
</html>