<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Questionnaire System</title>

<style type="text/css">
#div1 {
    width: 350px;
    height: 70px;
    padding: 10px;
    border: 1px solid #aaaaaa;
}

#drag {
    position: relative;
    display: block;
    
}

#headerblock {
    width: 18em;
    background-color: black;
    color: blue;
}
#wrapper {
    width: 18em;
    height: auto;
    background-color: grey;
    color: blue;
}

</style>

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
  
  })
  
  </script>
  
</head>
<body>

Yes

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