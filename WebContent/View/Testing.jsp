<!DOCTYPE html>
<html>
<head>
<style type="text/css">
#ex1
{
border: thin dotted #FF0000;
}
</style>
<script type="text/javascript">
function displayResult()
{
document.getElementById("ex1").innerHTML += "<button id=\"1\">adsadsad</button><br/>";
}

$(document).ready(function(){
$('1').sortable();
});

</script>
</head>
<body>

<div id="ex1"><div>
<br />
<button type="button" onclick="displayResult()">Change border</button>

</body>
</html>
