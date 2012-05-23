$(function(){
    $('#responseType').change(function(){
       var selected = $("#responseType option:selected");
       var command = "";
       $("#insert").html("");


       if(selected.text()=="Default"){
           //$("#insert").html("");
       }
       if(selected.text()=="Text"){
          //$("#insert").html("");
           //$("#insert").html(('<br /><input type="text" name="answerText">'));

       }

       if(selected.text()=="Text With Unit"){
           //$("#insert").html("");
           $("#insert").html(('<br/><INPUT NAME="answerText" VALUE="Their answer" DISABLED><input type="text" name="unit" value="<enter unit>" size="10">'));
           //$("#insert").html(('<br /><input type="text" name="unit" value="enter unit">'));
       }
       if(selected.text()=="Radio Buttons"){
          // $("#insert").html("");
           $("#insert").html('<button type="button" id="addRadio">Add Radio</button>');
           $("#addRadio").click(function(){
               var $radio = $('<br /><input type="radio" name="answerRadio"><input type="text" name="radioAns">');
               $("#insert").append($radio);
             //  $("#insert").html(('<br /><input type="radio" name="answerRadio"><input type="text" name="radioAns">'))
           });
       }
       if(selected.text()=="Check Boxes"){
          // $("#insert").html("");
           $("#insert").html('<button type="button" id="addCheckbox">Add Check Box</button>');
           $("#addCheckbox").click(function(){
               var $checkbox = $('<br /><input type="checkbox" name="answerCheckbox"><input type="text" name="checkAns">');
               $("#insert").append($checkbox);
             //  $("#insert").html(('<br /><input type="radio" name="answerRadio"><input type="text" name="radioAns">'))
           });
       }
       if(selected.text()=="Paragraph Text"){
          // $("#insert").html("");
           //$("#insert").html(('<br /><input type="text" name="answerText">'));
           $("#insert").html(('<br/><TEXTAREA NAME="comments" COLS=40 ROWS=6 disabled="disabled">Their answer</TEXTAREA>' ));
       }

       $("#insert2").html("");
       $("insert2").append("#insert");

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



function resizeElementHeight(element) {
	  var height = 0;
	  var body = window.document.body;
	  if (window.innerHeight) {
	      height = window.innerHeight;
	  } else if (body.parentElement.clientHeight) {
	      height = body.parentElement.clientHeight;
	  } else if (body && body.clientHeight) {
	      height = body.clientHeight;
	  }
	  element.style.height = ((height - element.offsetTop) + "px");
	}


$(document).ready(function(){
	
	$("#PlusBtn").click(function(){
	    $("#tableslide").slideToggle("slow");
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
	    $('#shorttext').click(function() {
	          type="text";


	          var element = document.createElement("input");
	          //Assign different attributes to the element.
	          element.setAttribute("type", type);
	          element.setAttribute("name", type);
	          element.setAttribute("size", 20);

	          var foo = document.getElementById("shorttextbox");

	          //Append the element in page (in span).
	          foo.appendChild(element);
	          var enter = document.createElement("<br/>");
	          foo.appendChild(enter);
	          var enter2 = document.createElement("<br/>");
	          foo.appendChild(enter2);
	      });


	    $('#longtext').click(function() {
	          type="text";


	          var element = document.createElement("input");
	          //Assign different attributes to the element.
	          element.setAttribute("type", type);
	          element.setAttribute("name", type);
	          element.setAttribute("size", 100);

	          var foo = document.getElementById("longtextbox");

	          //Append the element in page (in span).
	          foo.appendChild(element);
	          var enter = document.createElement("<br/>");
	          foo.appendChild(enter);
	          var enter2 = document.createElement("<br/>");
	          foo.appendChild(enter2);
	      });
	    $('#text').click(function() {
	          type="text";


	          var element = document.createElement("input");
	          //Assign different attributes to the element.
	          element.setAttribute("type", type);
	          element.setAttribute("name", type);
	          element.setAttribute("disabled","disabled");

	          var foo = document.getElementById("textbox");

	          //Append the element in page (in span).
	          foo.appendChild(element);
	          var enter = document.createElement("<br/>");
	          foo.appendChild(enter);
	          var enter2 = document.createElement("<br/>");
	          foo.appendChild(enter2);
	      });
	    $('#radio').click(function() {
	          type="radio";
	          type2="text";


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
	          foo.appendChild(element);
	          foo.appendChild(element2);
	          var enter = document.createElement("<br/>");
	          foo.appendChild(enter);
	          var enter2 = document.createElement("<br/>");
	          foo.appendChild(enter2);
	      });

	    $('#paragraph').click(function() {
	          type="textarea";


	          var element = document.createElement("textarea");
	          //Assign different attributes to the element.
	          //element.setAttribute("type", type);
	          element.setAttribute("value", "");
	          element.setAttribute("name", type);
	          element.setAttribute("rows",4);
	          element.setAttribute("columns",20);

	          var foo = document.getElementById("paragraphtext");

	          //Append the element in page (in span).
	          foo.appendChild(element);
	          var enter = document.createElement("<br/>");
	          foo.appendChild(enter);
	          var enter2 = document.createElement("<br/>");
	          foo.appendChild(enter2);
	      });

	    $('#checkbox').click(function() {
	          type="checkbox";
	          type2="text";


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


	          var element = document.createElement("select");
	          //Assign different attributes to the element.
	          element.setAttribute("style", type);

	          var foo = document.getElementById("dropdownlist");

	          //Append the element in page (in span).
	          foo.appendChild(element);

	          var enter = document.createElement("<br/>");
	          foo.appendChild(enter);
	          var enter2 = document.createElement("<br/>");
	          foo.appendChild(enter2);

	      });

	    $('#textunit').click(function() {
	          type="width:100px";



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
	          foo.appendChild(element2);

	          foo.appendChild(element);

	          var enter = document.createElement("<br/>");
	          foo.appendChild(enter);
	          var enter2 = document.createElement("<br/>");
	          foo.appendChild(enter2);

	      });
	});
