
$(document).ready(function(){
	
	intquestion=0;

	$('#append').click(function() {
		$(this).parent().append('<div id="divId"><br/><input type="checkbox" id="checkboxId" /><input id="inputId" /><br/><br/><input type="button" id="removeButton" value="close" />');
	});
	$('#removeButton').click(function() {
		$(this).parent().remove();
	});
	$('#drag').draggable({
		cancel: 'input'
	});

	$('#append').click(function() {
		$(this).parent().append('<div id="divId"><br/><input type="checkbox" id="checkboxId" /><input id="inputId" /><br/><br/><input type="button" id="removeButton" value="close" />');
	});
	$('#removeButton').click(function() {
		$(this).parent().remove();
	});
	$('#drag').draggable({
		cancel: 'input'
	});

	$('#append').click(function() {
		$(this).parent().append('<div id="divId"><br/><input type="checkbox" id="checkboxId" /><input id="inputId" /><br/><br/><input type="button" id="removeButton" value="close" />');
	});
	$('#removeButton').click(function() {
		$(this).parent().remove();
	});
	$('#drag').draggable({
		cancel: 'input'
	});

	$('#append').click(function() {
		$(this).parent().append('<div id="divId"><br/><input type="checkbox" id="checkboxId" /><input id="inputId" /><br/><br/><input type="button" id="removeButton" value="close" />');
	});
	$('#removeButton').click(function() {
		$(this).parent().remove();
	});
	$('#drag').draggable({
		cancel: 'input'
	});


	$('#question').click(function(){

		document.getElementById('question1').innerHTML +="<head><script src=\"../Js/jquery-1.7.2.js\"></script>" +
		"<script src=\"../Js/JqueryUI/jquery.ui.core.js\"></script>" +
		"<script src=\"../Js/JqueryUI/jquery.ui.widget.js\"></script>" +
		"<script src=\"../Js/JqueryUI/jquery.ui.mouse.js\"></script>" +
		"<script src=\"../Js/JqueryUI/jquery.ui.sortable.js\"></script>" +
		"<link rel=\"stylesheet\" type=\"text/css\" href=\"../CSS/style.css\" /></head>" +
		"<table border=\"1\">" +
		"<tr>" +
		"<th width=\"965\"><p class=\"flip\">Question #</p></th>" +
		"<th><button type=\"button\" href=\"#\" class=\"plusBtn\" id=\"PlusBtn\" value=\"-\">-</button></th>" +
		"</tr>" +
		"<tr width=\"965\" id=\"tableslide\">" +
		"<td><div class=\"demo\" id=\"sortable\">" +
		"<p id=\"questionrow\" class=\"ui-state-default\"><span href=\"#\" id=\"shorttextbox\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span></p>" +
		"<p id=\"questionrow\" class=\"ui-state-default\"><span id=\"questionnum\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span></p>" +
		"<p id=\"questionrow\" class=\"ui-state-default\"><span id=\"longtextbox\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span></p>" +
		"<p id=\"questionrow\" class=\"ui-state-default\"><span id=\"textbox\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span></p>" +
		"<p id=\"questionrow\" class=\"ui-state-default\"><span id=\"paragraphtext\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span></p>" +
		"<p id=\"questionrow\" class=\"ui-state-default\"><span id=\"dropdownlist\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span></p>" +
		"<p id=\"questionrow\" class=\"ui-state-default\"><span id=\"check\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span></p>" +
		"<p id=\"questionrow\" class=\"ui-state-default\"><span id=\"textu\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span></p>" +
		"<p id=\"questionrow\" class=\"ui-state-default\"><span id=\"radiobutton\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span></p>" +
		"</ul></div></td></tr></table>";

		$(document).ready(function(){

			$(function() {

				$( "#sortable" ).sortable();
			});

			$('#sortable').live('mouseover', function(){
				$('#sortable > a').addClass('highlight');
			});

			$('#sortable').live('mouseout', function(){
				$('#sortable > a').removeClass('highlight');
			});
			

			$("#PlusBtn").click(function(){
				$("#tableslide").slideToggle("slow");
				changeBtn();
			});
			
			
		});

		function changeBtn()
		{
			if (document.getElementById('PlusBtn').value == "-")
			{
				$("#PlusBtn").html('+');
				document.getElementById('PlusBtn').value = "+";
			}

			else if (document.getElementById('PlusBtn').value == "+")
			{
				$("#PlusBtn").html('-');
				document.getElementById('PlusBtn').value = "-";
			}
		}
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
	$('#questionnumber').click(function() {
		type="text";
		intquestion++;
		imagenumber ="imagenumber"+intquestion;
		questionname="questionnumber" + intquestion;



		var element = document.createElement("input");
		//Assign different attributes to the element.
		element.setAttribute("type", type);
		element.setAttribute("id", questionname);
		element.setAttribute("name", questionname);
		element.setAttribute("size", 5);
		element.setAttribute("maxlength", 5);
		//<img src="../Images/Movingcursor.png" height="10px" width="10px" />
		var image = document.createElement("img");
		/*image.setAttribute("src","../Images/Movingcursor.png");
 	          image.setAttribute("height","10px");
 	          image.setAttribute("width","10px");

 	          image.setAttribute("id",questionname);*/

		$(image).attr({
			src: "../Images/Movingcursor.png",
			height: "10px",
			width: "10px",
			id: imagenumber
		}).click(function (e) {
			$(e.delegateTarget).prev().remove();
			$(e.delegateTarget).remove();



		});



		//a = $(image).attr("id");
		//document.getElementById("questionnum").innerHTML+=("<p>" + a + "</p>");
		//var foo=document.getElementById("questionnum");
		var foo = $('#questionnum');
		foo.append(element);
		//Append the element in page (in span).
		//foo.appendChild(element);
		foo.append(image);
		var enter = document.createElement("br");
		foo.append(enter);
		var enter2 = document.createElement("br");
		foo.append(enter2);

	});

	$('#shorttext').click(function() {
		type="text";

		var image = document.createElement("img");
		image.setAttribute("src","../Images/sort_icons.png");
		image.setAttribute("height","20px");
		image.setAttribute("width","13px");

		var element = document.createElement("input");
		//Assign different attributes to the element.
		element.setAttribute("type", type);
		element.setAttribute("name", type);
		element.setAttribute("size", 20);

		var foo = document.getElementById("shorttextbox");

		//Append the element in page (in span).
		foo.appendChild(image);
		foo.appendChild(element);
		var enter = document.createElement("br");
		foo.appendChild(enter);
		var enter2 = document.createElement("br");
		foo.appendChild(enter2);
	});


	$('#longtext').click(function() {
		type="text";

		var image = document.createElement("img");
		image.setAttribute("src","../Images/sort_icons.png");
		image.setAttribute("height","20px");
		image.setAttribute("width","13px");

		var element = document.createElement("input");
		//Assign different attributes to the element.
		element.setAttribute("type", type);
		element.setAttribute("name", type);
		element.setAttribute("size", 100);

		var foo = document.getElementById("longtextbox");

		//Append the element in page (in span).
		foo.appendChild(image);
		foo.appendChild(element);
		var enter = document.createElement("<br/>");
		foo.appendChild(enter);
		var enter2 = document.createElement("<br/>");
		foo.appendChild(enter2);
	});
	$('#text').click(function() {
		type="text";

		var image = document.createElement("img");
		image.setAttribute("src","../Images/sort_icons.png");
		image.setAttribute("height","20px");
		image.setAttribute("width","13px");

		var element = document.createElement("input");
		//Assign different attributes to the element.
		element.setAttribute("type", type);
		element.setAttribute("name", type);
		element.setAttribute("disabled","disabled");

		var foo = document.getElementById("textbox");

		//Append the element in page (in span).
		foo.appendChild(image);
		foo.appendChild(element);
		var enter = document.createElement("<br/>");
		foo.appendChild(enter);
		var enter2 = document.createElement("<br/>");
		foo.appendChild(enter2);
	});
	$('#radio').click(function() {
		type="radio";
		type2="text";

		var image = document.createElement("img");
		image.setAttribute("src","../Images/sort_icons.png");
		image.setAttribute("height","20px");
		image.setAttribute("width","13px");

		var element = document.createElement("input");
		//Assign different attributes to the element.
		element.setAttribute("type", type);
		element.setAttribute("value", "");
		element.setAttribute("name", type);
		var element2 = document.createElement("input");
		element2.setAttribute("type", type2);
		element2.setAttribute("value", "");
		element2.setAttribute("name", type2);
		var foo = document.getElementById("radiobutton");

		//Append the element in page (in span).
		foo.appendChild(image);
		foo.appendChild(element);
		foo.appendChild(element2);
		var enter = document.createElement("<br/>");
		foo.appendChild(enter);
		var enter2 = document.createElement("<br/>");
		foo.appendChild(enter2);
	});

	$('#paragraph').click(function() {
		type="textarea";

		var image = document.createElement("img");
		image.setAttribute("src","../Images/sort_icons.png");
		image.setAttribute("height","20px");
		image.setAttribute("width","13px");

		var element = document.createElement("textarea");
		//Assign different attributes to the element.
		//element.setAttribute("type", type);
		element.setAttribute("value", "");
		element.setAttribute("name", type);
		element.setAttribute("rows",4);
		element.setAttribute("columns",20);

		var foo = document.getElementById("paragraphtext");

		//Append the element in page (in span).
		foo.appendChild(image);
		foo.appendChild(element);
		var enter = document.createElement("<br/>");
		foo.appendChild(enter);
		var enter2 = document.createElement("<br/>");
		foo.appendChild(enter2);
	});

	$('#checkbox').click(function() {
		type="checkbox";
		type2="text";

		var image = document.createElement("img");
		image.setAttribute("src","../Images/sort_icons.png");
		image.setAttribute("height","20px");
		image.setAttribute("width","13px");

		var element = document.createElement("input");
		//Assign different attributes to the element.
		element.setAttribute("type", type);
		element.setAttribute("value", "");
		element.setAttribute("name", type);
		var element2 = document.createElement("input");
		element2.setAttribute("type", type2);
		element2.setAttribute("value", "");
		element2.setAttribute("name", type2);
		var foo = document.getElementById("check");

		//Append the element in page (in span).
		foo.appendChild(image);
		foo.appendChild(element);
		foo.appendChild(element2);
		var enter = document.createElement("<br/>");
		foo.appendChild(enter);
		var enter2 = document.createElement("<br/>");
		foo.appendChild(enter2);
	});

	$('#dropdown').click(function() {
		type="width:100px";
		type2="text";

		var image = document.createElement("img");
		image.setAttribute("src","../Images/sort_icons.png");
		image.setAttribute("height","20px");
		image.setAttribute("width","13px");

		var element = document.createElement("select");
		//Assign different attributes to the element.
		element.setAttribute("style", type);

		var foo = document.getElementById("dropdownlist");

		//Append the element in page (in span).
		foo.appendChild(image);
		foo.appendChild(element);

		var enter = document.createElement("<br/>");
		foo.appendChild(enter);
		var enter2 = document.createElement("<br/>");
		foo.appendChild(enter2);

	});

	$('#textunit').click(function() {
		type="width:100px";

		var image = document.createElement("img");
		image.setAttribute("src","../Images/sort_icons.png");
		image.setAttribute("height","20px");
		image.setAttribute("width","13px");

		var element = document.createElement("select");
		//Assign different attributes to the element.
		element.setAttribute("style", type);

		type2="text";


		var element2 = document.createElement("input");
		//Assign different attributes to the element.
		element2.setAttribute("type", type2);
		element2.setAttribute("name", type2);


		var foo = document.getElementById("textu");

		//Append the element in page (in span).
		foo.appendChild(image);
		foo.appendChild(element2);

		foo.appendChild(element);

		var enter = document.createElement("<br/>");
		foo.appendChild(enter);
		var enter2 = document.createElement("<br/>");
		foo.appendChild(enter2);

	});

	$("img").on("click",function(){

		document.getElementById("questionnum").innerHTML+=("<p>" +"adgasdg" + "</p>");
		a = $(image).attr("id");
		document.getElementById("questionnum").innerHTML+=("<p>" + a + "</p>");
	});

});