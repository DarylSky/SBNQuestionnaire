<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<!DOCTYPE HTML>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script type="text/javascript" src="../Js/animatedcollapse.js">

/***********************************************
* Animated Collapsible DIV v2.4- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for this script and 100s more
***********************************************/

</script>


<script type="text/javascript">

animatedcollapse.addDiv('jason', 'fade=1,height=80px')
animatedcollapse.addDiv('kelly', 'fade=1,height=100px')
animatedcollapse.addDiv('michael', 'fade=1,height=120px')

animatedcollapse.addDiv('cat', 'fade=0,speed=400,group=pets')
animatedcollapse.addDiv('dog', 'fade=0,speed=400,group=pets,persist=1,hide=1')
animatedcollapse.addDiv('rabbit', 'fade=0,speed=400,group=pets,hide=1')

animatedcollapse.ontoggle=function($, divobj, state){ //fires each time a DIV is expanded/contracted
	//$: Access to jQuery
	//divobj: DOM reference to DIV being expanded/ collapsed. Use "divobj.id" to get its ID
	//state: "block" or "none", depending on state
}

animatedcollapse.init()

</script>
<title>Insert title here</title>
</head>
<body>

<b><a href="javascript:animatedcollapse.show(['jason', 'kelly', 'michael'])">Show Examples 1, 2, 3</a> | <a href="javascript:animatedcollapse.hide(['jason', 'kelly', 'michael'])">Hide Examples 1, 2, 3</a></b>

<p><b>Example 1 (individual):</b></p>

<a href="javascript:animatedcollapse.toggle('jason')"><img src="toggle.jpg" border="0" /></a> <a href="javascript:animatedcollapse.show('jason')">Slide Down</a> || <a href="javascript:animatedcollapse.hide('jason')">Slide Up</a>

<div id="jason" style="width: 300px; background: #FFFFCC; display:none">
<b>Content inside DIV!</b><br />
<b>Note: Fade effect enabled. Height programmically defined. DIV hidden using inline CSS.</b><br />
</div>


<p><b>Example 2 (individual):</b></p>

<a href="javascript:animatedcollapse.toggle('kelly')"><img src="toggle.jpg" border="0" /></a> <a href="javascript:animatedcollapse.show('kelly')">Slide Down</a> || <a href="javascript:animatedcollapse.hide('kelly')">Slide Up</a>

<div id="kelly" style="width: 300px; background: #D2FBFF; display:none">
<b>Content inside DIV!</b><br />
<b>Note: Fade effect enabled. Height programmically defined. DIV hidden using inline CSS.</b><br />
</div>



<p><b>Example 3 (individual):</b></p>

<a href="javascript:animatedcollapse.toggle('michael')"><img src="toggle.jpg" border="0" /></a> <a href="javascript:animatedcollapse.show('michael')">Slide Down</a> || <a href="javascript:animatedcollapse.hide('michael')">Slide Up</a>

<div id="michael" style="width: 300px; background: #E7FFCC; display:none">
<b>Content inside DIV!</b><br />
<b>Note: Fade effect enabled. Height programmically defined. DIV hidden using inline CSS.</b><br />
</div>


</body>
</html>