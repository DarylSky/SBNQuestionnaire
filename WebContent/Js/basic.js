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
	
	intquestion=0;
	
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

                document.getElementById('question1').innerHTML += "<table border=\"1\"><tr><th width=\"965\"><p class=\"flip\">Question #</p></th><th><button type=\"button\" href=\"#\" class=\"plusBtn\" id=\"PlusBtn\" value=\"+\">+</button></th>" +
                "</tr><tr id=\"tableslide\" href=\"#\"><td><table><tr><div id=\"shorttextbox\" href=\"#\"></div></tr><tr><div id=\"questionnum\"></div></tr><tr><div id=\"longtextbox\"></div></tr>" +
                "<tr><div id=\"textbox\"></div></tr><tr><div id=\"paragraphtext\"></div></tr><tr><div id=\"dropdownlist\"></div></tr><tr><div id=\"check\"></div></tr><tr><div id=\"textu\"></div></tr>" +
                "<tr><div id=\"radiobutton\"></div></tr></table>"+
                "</td></tr></table>";

                $(document).ready(function(){
                    $("#PlusBtn").click(function(){
                        $("#tableslide").slideToggle("slow");
                      });
                    });
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


 	          var element = document.createElement("input");
 	          //Assign different attributes to the element.
 	          element.setAttribute("type", type);
 	          element.setAttribute("name", type);
 	          element.setAttribute("size", 20);

 	          var foo = document.getElementById("shorttextbox");

 	          document.getElementById("shorttextbox").innerHTML+=("Question:");
 	          //Append the element in page (in span).
 	          foo.appendChild(element);
 	          var enter = document.createElement("br");
 	          foo.appendChild(enter);
 	          var enter2 = document.createElement("br");
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
 	    
 	    $("img").on("click",function(){
 	       
 	    	document.getElementById("questionnum").innerHTML+=("<p>" +"adgasdg" + "</p>");
 	    	a = $(image).attr("id");
 	        document.getElementById("questionnum").innerHTML+=("<p>" + a + "</p>");
 	      });
	        
        });