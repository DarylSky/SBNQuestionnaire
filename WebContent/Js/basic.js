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

		intquestion=0;
		intshort=0;
		intlong=0;
		inttext=0;
		intradio=0;
		intparagraph=0;
		intcheck=0;
		intdropdown=0;
		inttextunit=0;

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
              "</head>" +
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

              $('#questionrow').hover(

              );



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

	          var draggable_image = document.createElement("img");
	          draggable_image.setAttribute("src", "../Images/sort_icons.png");
	          draggable_image.setAttribute("height", "20px");
	          draggable_image.setAttribute("width", "20px");

	          var element = document.createElement("input");
	          //Assign different attributes to the element.
	          element.setAttribute("type", type);
	          element.setAttribute("id", questionname);
	          element.setAttribute("name", questionname);
	          element.setAttribute("size", 5);
	          element.setAttribute("maxlength", 5);

	          var image = document.createElement("img");


	          $(image).attr({
	        	  src: "../Images/Delete.jpg",
	        	  height: "10px",
	        	  width: "10px",
	        	  id: imagenumber
	        	}).click(function (e) {
		        	$(e.delegateTarget).prev().remove();
		        	$(e.delegateTarget).prev().remove('b');
		        	$(e.target).prev().remove('br');
		        	$(e.target).prev().remove('br');
		        	$(e.target).remove();



		          });


	          var foo = $('#questionnum');
	          foo.append(draggable_image);
	          $("#questionnum").append("<b>Question #:</b>");


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
	          intshort++;
	          shortimagenumber ="shortimagenumber"+intshort;
	          shortbox="shorttextbox" + intshort;

	           var draggable_image = document.createElement("img");
	              draggable_image.setAttribute("src", "../Images/sort_icons.png");
	              draggable_image.setAttribute("height", "20px");
	              draggable_image.setAttribute("width", "20px");


	          var element = document.createElement("input");
	          //Assign different attributes to the element.
	          element.setAttribute("type", type);
	          element.setAttribute("name",shortbox);
	          element.setAttribute("id", shortbox);
	          element.setAttribute("size", 20);

	         var image = document.createElement("img");
	          $(image).attr({
	        	  src:  "../Images/Delete.jpg",
	        	  height: "10px",
	        	  width: "10px",
	        	  id: shortimagenumber
	        	}).click(function (e) {
	        		$(e.delegateTarget).prev().remove();
		        	$(e.delegateTarget).prev().remove('b');
		        	$(e.target).prev().remove('br');
		        	$(e.target).prev().remove('br');
		        	$(e.target).remove();


		      });

	           var foo = $('#shorttextbox');
	           foo.append(draggable_image);

	          $("#shorttextbox").append("<b>Question:</b>");
	          foo.append(element);
	          //Append the element in page (in span).
	          //foo.appendChild(element);
	          foo.append(image);
	          var enter = document.createElement("br");
	          foo.append(enter);
	          var enter2 = document.createElement("br");
	          foo.append(enter2);
       });


       $('#longtext').click(function() {
    	   type="text";
	         intlong++;
	         longimagenumber ="longimagenumber"+intlong;
	         longbox="longtext" + intlong;

	            var draggable_image = document.createElement("img");
	              draggable_image.setAttribute("src", "../Images/sort_icons.png");
	              draggable_image.setAttribute("height", "20px");
	              draggable_image.setAttribute("width", "20px");


	          var element = document.createElement("input");
	          //Assign different attributes to the element.
	          element.setAttribute("type", type);
	          element.setAttribute("id", longbox);
	          element.setAttribute("size", 100);

	         var image = document.createElement("img");
	          $(image).attr({
	        	  src:  "../Images/Delete.jpg",
	        	  height: "10px",
	        	  width: "10px",
	        	  id: longimagenumber
	        	}).click(function (e) {
	        		$(e.delegateTarget).prev().remove();
		        	$(e.delegateTarget).prev().remove('b');
		        	$(e.target).prev().remove('br');
		        	$(e.target).prev().remove('br');
		        	$(e.target).remove();
		      });

	           var foo = $('#longtextbox');
	          foo.append(draggable_image);

	          $("#longtextbox").append("<b>Question:</b>");
	          foo.append(element);
	          foo.append(image);
	          var enter = document.createElement("br");
	          foo.append(enter);
	          var enter2 = document.createElement("br");
	          foo.append(enter2);
       });
       $('#text').click(function() {
    	   type="text";
	        inttext++;
	        imagetextnumber ="imagetextnumber"+inttext;
	        textnumber="text" + inttext;

            var draggable_image = document.createElement("img");
            draggable_image.setAttribute("src", "../Images/sort_icons.png");
            draggable_image.setAttribute("height", "20px");
            draggable_image.setAttribute("width", "20px");

	          var element = document.createElement("input");
	          //Assign different attributes to the element.
	          element.setAttribute("type", type);
	          element.setAttribute("name", textnumber);
	          element.setAttribute("id",textnumber);
	          element.setAttribute("disabled","disabled");

	         var image = document.createElement("img");
	          $(image).attr({
	        	  src:  "../Images/Delete.jpg",
	        	  height: "10px",
	        	  width: "10px",
	        	  id: imagetextnumber
	        	}).click(function (e) {
	        		$(e.delegateTarget).prev().remove();
		        	$(e.delegateTarget).prev().remove('b');
		        	$(e.target).prev().remove('br');
		        	$(e.target).prev().remove('br');
		        	$(e.target).remove();

		      });

	           var foo = $('#textbox');
	           foo.append(draggable_image);

	          $("#textbox").append("<b>Answer:</b>");
	          foo.append(element);
	          //Append the element in page (in span).
	          //foo.appendChild(element);
	          foo.append(image);
	          var enter = document.createElement("br");
	          foo.append(enter);
	          var enter2 = document.createElement("br");
	          foo.append(enter2);
       });

       $('#radio').click(function() {
    	   type="text";
	    	type2="radio";
	        inttext++;
	        imageradionumber ="imageradionumber"+intradio;
	        radiotextnumber="radiotextnumber" + intradio;
	        radiobuttonnumber = "radiobuttonnumber" +intradio;

            var draggable_image = document.createElement("img");
            draggable_image.setAttribute("src", "../Images/sort_icons.png");
            draggable_image.setAttribute("height", "20px");
            draggable_image.setAttribute("width", "20px");


	          var element = document.createElement("input");
	          //Assign different attributes to the element.
	          element.setAttribute("type", type);
	          element.setAttribute("name", radiotextnumber);
	          element.setAttribute("id",radiotextnumber);


	          var element2= document.createElement("input");
	          element2.setAttribute("type", type2);
	          element2.setAttribute("name", radiobuttonnumber);
	          element2.setAttribute("id",radiobuttonnumber);

	         var image = document.createElement("img");
	          $(image).attr({
	        	  src:  "../Images/Delete.jpg",
	        	  height: "10px",
	        	  width: "10px",
	        	  id: imageradionumber
	        	}).click(function (e) {
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
		        	$(e.target).prev().remove('br');
		        	$(e.target).prev().remove('br');
		        	$(e.target).remove();

		      });



	          var foo = $('#radiobutton');
	            foo.append(draggable_image);
	          foo.append(element2);
	          foo.append(element);
	          //Append the element in page (in span).
	          //foo.appendChild(element);
	          foo.append(image);
	          var enter = document.createElement("br");
	          foo.append(enter);
	          var enter2 = document.createElement("br");
	          foo.append(enter2);
       });

       $('#paragraph').click(function() {
    	   type="textarea";
	          intparagraph++;
	          paragraphnumber = "paragraphnumber" + intparagraph;
	          paragraphimagenumber = "paragraphimagenumber" + intparagraph;

	           var draggable_image = document.createElement("img");
	              draggable_image.setAttribute("src", "../Images/sort_icons.png");
	              draggable_image.setAttribute("height", "20px");
	              draggable_image.setAttribute("width", "20px");

	          var element = document.createElement("textarea");
	          //Assign different attributes to the element.
	          //element.setAttribute("type", type);
	          element.setAttribute("name", type);
	          element.setAttribute("rows",4);
	          element.setAttribute("columns",20);
	          element.setAttribute("disabled","disabled");

	         var image = document.createElement("img");
	          $(image).attr({
	        	  src:  "../Images/Delete.jpg",
	        	  height: "10px",
	        	  width: "10px",
	        	  id: paragraphimagenumber
	        	}).click(function (e) {
	        		$(e.delegateTarget).prev().remove();
		        	$(e.delegateTarget).prev().remove('b');
		        	$(e.target).prev().remove('br');
		        	$(e.target).prev().remove('br');
		        	$(e.target).remove();

		      });

	          var foo = $("#paragraphtext");
	            foo.append(draggable_image);
	          foo.append("<b>Paragraph:</b>");
	          //Append the element in page (in span).
	          foo.append(element);
	          foo.append(image);
	          var enter = document.createElement("br");
	          foo.append(enter);
	          var enter2 = document.createElement("br");
	          foo.append(enter2);
       });

       $('#checkbox').click(function() {
    	   type="text";
	    	type2="checkbox";
	        intcheck++;
	        imagecheckbox ="imagechecknumber"+intcheck;
	        checktextbox="checktextnumber" + intcheck;
	        checkbuttonbox = "checkbuttonnumber" +intcheck;

            var draggable_image = document.createElement("img");
            draggable_image.setAttribute("src", "../Images/sort_icons.png");
            draggable_image.setAttribute("height", "20px");
            draggable_image.setAttribute("width", "20px");

	          var element = document.createElement("input");
	          //Assign different attributes to the element.
	          element.setAttribute("type", type);
	          element.setAttribute("name", checktextbox);
	          element.setAttribute("id",checktextbox);


	          var element2= document.createElement("input");
	          element2.setAttribute("type", type2);
	          element2.setAttribute("name", checkbuttonbox);
	          element2.setAttribute("id",checkbuttonbox);

	         var image = document.createElement("img");
	          $(image).attr({
	        	  src:  "../Images/Delete.jpg",
	        	  height: "10px",
	        	  width: "10px",
	        	  id: imagecheckbox
	        	}).click(function (e) {
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
		        	$(e.target).prev().remove('br');
		        	$(e.target).prev().remove('br');
		        	$(e.target).remove();

		      });



	          var foo = $('#check');
	            foo.append(draggable_image);
	          foo.append(element2);
	          foo.append(element);
	          //Append the element in page (in span).
	          //foo.appendChild(element);
	          foo.append(image);
	          var enter = document.createElement("br");
	          foo.append(enter);
	          var enter2 = document.createElement("br");
	          foo.append(enter2);
       });

       $('#dropdown').click(function() {
    	   intdropdown++;
	          style="width:100px";
	          type2="text";
	          dropdownid= "dropdownid" + intdropdown;
	          var textbox = document.createElement("input");
	          textbox.setAttribute("type", "text");

	           var draggable_image = document.createElement("img");
	              draggable_image.setAttribute("src", "../Images/sort_icons.png");
	              draggable_image.setAttribute("height", "20px");
	              draggable_image.setAttribute("width", "20px");

	          //var a = $(textbox).val();


	          var element = document.createElement("select");
	          //Assign different attributes to the element.
	          element.setAttribute("style", style);
	          element.setAttribute("id", dropdownid);
	          var image = document.createElement("img");


	         var foo = $("#dropdownlist");
	          $(image).attr({
	        	  src: "../Images/Movingcursor.png",
	        	  height: "10px",
	        	  width: "10px",

	        	}).click(function (e) {

	        		$(element).append('<option value=' + $(textbox).val()+'>'+ $(textbox).val() +'</option>');

		      });

	          var image2 = document.createElement("img");


		          $(image2).attr({
		        	  src: "../Images/Movingcursor.png",
		        	  height: "10px",
		        	  width: "10px",

		        	}).click(function (e) {

		        		var x=$(element).attr("id");
		        		var y =$(element).attr("value");
		        		//foo.append(x);
		        		$("#" + x +" option[value='"+y+"']").remove();

			      });

		          var image3 = document.createElement("img");


		          $(image3).attr({
		        	  src:  "../Images/Delete.jpg",
		        	  height: "10px",
		        	  width: "10px",

		        	}).click(function (e) {

		        		$(e.delegateTarget).prev().remove();
		        		$(e.delegateTarget).prev().remove();
		        		$(e.delegateTarget).prev().remove();
		        		$(e.delegateTarget).prev().remove();
	 		        	$(e.target).prev().remove('br');
	 		        	$(e.target).prev().remove('br');
	 		        	$(e.target).remove();

			      });



	          //Append the element in page (in span).
		            foo.append(draggable_image);
		          foo.append(element);

	          foo.append(textbox);
	          foo.append(image);
	          foo.append(image2);
	          foo.append(image3);
	          var enter = document.createElement("br");
	          foo.append(enter);
	          var enter2 = document.createElement("br");
	          foo.append(enter2);

       });

       $('#textunit').click(function() {
    	   type="width:100px";
	          type2="text";
	          inttextunit++;
	          textwithunit= "textwithunit"+inttextunit;

	           var draggable_image = document.createElement("img");
	              draggable_image.setAttribute("src", "../Images/sort_icons.png");
	              draggable_image.setAttribute("height", "20px");
	              draggable_image.setAttribute("width", "20px");


	          var element = document.createElement("select");
	          //Assign different attributes to the element.
	          element.setAttribute("style", type);
	          element.setAttribute("id", textwithunit);



	          var textbox = document.createElement("input");
	          textbox.setAttribute("type", "text");


	          var element2 = document.createElement("input");
	          //Assign different attributes to the element.
	          element2.setAttribute("type", type2);
	          element2.setAttribute("name", type2);
	          element2.setAttribute("disabled","disabled");




	         var foo = $("#textu");
	         var image = document.createElement("img");
	          $(image).attr({
	        	  src: "../Images/Movingcursor.png",
	        	  height: "10px",
	        	  width: "10px",

	        	}).click(function (e) {

	        		$(element).append('<option value=' + $(textbox).val()+'>'+ $(textbox).val() +'</option>');

		      });

	          //Append the element in page (in span).
	          var image2 = document.createElement("img");


	          $(image2).attr({
	        	  src: "../Images/Movingcursor.png",
	        	  height: "10px",
	        	  width: "10px",

	        	}).click(function (e) {

	        		var x=$(element).attr("id");
	        		var y =$(element).attr("value");
	        		//foo.append(x);
	        		$("#" + x +" option[value='"+y+"']").remove();

		      });

	          var image3 = document.createElement("img");


	          $(image3).attr({
	        	  src:  "../Images/Delete.jpg",
	        	  height: "10px",
	        	  width: "10px",

	        	}).click(function (e) {

	        		/*$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();*/
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
	        		$(e.delegateTarget).prev().remove();
		        	$(e.target).prev().remove('br');
		        	$(e.target).prev().remove('br');
		        	$(e.target).remove();

		      });


	          foo.append(draggable_image);
	          $("#textu").append("<b>Answer:</b>");
	          foo.append(element2);
	          foo.append(element);



	          var enter = document.createElement("br");
	          foo.append(enter);
	          /*$("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;"); */


	          foo.append(textbox);
	          foo.append(image);
	          foo.append(image2);
	          foo.append(image3);
	          var enter2 = document.createElement("br");
	          foo.append(enter2);

	          var enter3 = document.createElement("br");
	          foo.append(enter3);

       });

});
