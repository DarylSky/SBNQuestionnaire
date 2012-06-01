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

$(function() {
    $( "#datepicker" ).datepicker();
});


$(document).ready(function(){

    intquestionPanel=1;
    intattachmenticon=0;
    intattachmentinput=0;
    intattachmentPanel=0;
    intquestion=0;
    intshort=0;
    intlong=0;
    inttext=0;
    intradio=0;
    intparagraph=0;
    intcheck=0;
    intdropdown=0;
    inttextunit=0;

    if ($('#question1').html() =='')

    {
        // here

        textField.disabled="true";
        fieldsInTextField.disabled="true";
        answerField.disabled="true";
        guidance.disabled="true";
        attachment.disabled="true";

        $('#attachment').click(function(){

        });


    }

    $('#question').click(function(){
        textField.disabled=false;
        fieldsInTextField.disabled=false;
        answerField.disabled=false;
        guidance.disabled=false;
        attachment.disabled=false;
    });

    $('#question').click(function(){

        document.getElementById('question1').innerHTML +="<head><script src=\"../Js/jquery-1.7.2.js\"></script>" +
        "<script src=\"../Js/JqueryUI/jquery.ui.core.js\"></script>" +
        "<script src=\"../Js/JqueryUI/jquery.ui.widget.js\"></script>" +
        "<script src=\"../Js/JqueryUI/jquery.ui.mouse.js\"></script>" +
        "<script src=\"../Js/JqueryUI/jquery.ui.sortable.js\"></script>" +
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"../View/newcss.css\" />" +
        "<script src=\"../Js/JqueryUI/jquery.ui.datepicker.js\"></script>"+

        //"<script src=\"../Js/jquery-ui-1.8.20.custom.js\"></script>" +
        //"<script src=\"../Js/JqueryUI/jquery.ui.datepicker.js\"></script>" +
        //"<link rel=\"stylesheet\" href=\"../../themes/base/jquery.ui.all.css\" />" +
        //"<link rel=\"stylesheet\" href=\"../CSS/jquery-ui-1.8.20.custom.css\">"+
        "</head>" +
        "<div class=\"demo\" id=\"sortable2\">" +
        "<table id=\"questionPanel"+intquestionPanel+"\" class=\"ui-icon ui-icon-arrowthick-2-n-s\" border=\"1\">" +
        "<tr>" +
        "<th width=\"965\"><p class=\"flip\">Question "+(intquestionPanel)+"</p></th>" +
        "<th><button type=\"button\" href=\"#\" class=\"plusBtn\" id=\"PlusBtn\" value=\"-\">-</button></th>" +
        "</tr>" +
        "<tr width=\"965\" id=\"tableslide\">" +
        "<td><div class=\"demo\" id=\"sortable\">" +
        "</div></td></tr></table></div>";

        intquestionPanel++;


        $(document).ready(function(){

            $(function() {

                $( "#sortable" ).sortable();
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

        /*var draggable_image = document.createElement("img");
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

        	var $target = $(event.target);
        	$(e.delegateTarget).prev().remove();
            $(e.delegateTarget).prev().remove('b');
            $(e.delegateTarget).prev().remove();
            if($target.prev().is('br')){
            	$(e.delegateTarget).prev().remove('br');
	            $(e.delegateTarget).prev().remove('br');
            } else{
	            $(e.delegateTarget).next().remove('br');
	            $(e.delegateTarget).next().remove('br');
            }
            $(e.delegateTarget).remove();



        });*/

        //var foo = $('#sortable');
        //foo.append("<p><span id=\"questionnum\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"><img src=../Images/sort_icons.png height=20px width=20px/><b>Question #:</b><input type=text id="+ questionname +"size=5 maxlength=5/> <img src=../Images/Delete.jpg height=10px width=10px id="+imagenumber +"/></p>");
        /*var foo = $('#questionnum');
        foo.append(draggable_image);
        $("#questionnum").append("<b>Question #:</b>");


        foo.append(element);
        //Append the element in page (in span).
        //foo.appendChild(element);
        foo.append(image);
        var enter = document.createElement("br");
        foo.append(enter);
        var enter2 = document.createElement("br");
        foo.append(enter2);*/
        var foo = $('#sortable');
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Question #:</b><input type=text size=5 id="+ questionname +"maxlength=5/>");
        var second = $("<img src=../Images/delete_icon.png height=10px width=10px id="+imagenumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);

    });

    $('#shorttext').click(function() {
        type="text";
        intshort++;
        shortimagenumber ="shortimagenumber"+intshort;
        shortbox="shorttextbox" + intshort;

        /*var draggable_image = document.createElement("img");
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
        	var $target = $(event.target);
        	$(e.delegateTarget).prev().remove();
            $(e.delegateTarget).prev().remove('b');
            $(e.delegateTarget).prev().remove();
            if($target.prev().is('br')){
            	$(e.delegateTarget).prev().remove('br');
	            $(e.delegateTarget).prev().remove('br');
            } else{
	            $(e.delegateTarget).next().remove('br');
	            $(e.delegateTarget).next().remove('br');
            }
            $(e.delegateTarget).remove();


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
        foo.append(enter2);*/

        var foo = $('#sortable');
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Question: </b><input type=text size=20 value=\"Short Textfield\" onclick=\"if(this.value=='Short Textfield'){this.value=''}\" onblur=\"if(this.value==''){this.value='Short Textfield'}\" id="+ shortbox+" />");
        var second = $("<img src=../Images/delete_icon.png height=10px width=10px id="+shortimagenumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);
    });


    $('#longtext').click(function() {
        type="text";
        intlong++;
        longimagenumber ="longimagenumber"+intlong;
        longbox="longtext" + intlong;

        /*var draggable_image = document.createElement("img");
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
        	var $target = $(event.target);
        	$(e.delegateTarget).prev().remove();
            $(e.delegateTarget).prev().remove('b');
            $(e.delegateTarget).prev().remove();
            if($target.prev().is('br')){
            	$(e.delegateTarget).prev().remove('br');
	            $(e.delegateTarget).prev().remove('br');
            } else{
	            $(e.delegateTarget).next().remove('br');
	            $(e.delegateTarget).next().remove('br');
            }
            $(e.delegateTarget).remove();
        });

        var foo = $('#longtextbox');
        foo.append(draggable_image);

        $("#longtextbox").append("<b>Question:</b>");
        foo.append(element);
        foo.append(image);
        var enter = document.createElement("br");
        foo.append(enter);
        var enter2 = document.createElement("br");
        foo.append(enter2);*/
        var foo = $('#sortable');
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Question: </b><input type=text size=100 id="+ longbox+"/>");
        var second = $("<img src=../Images/delete_icon.png height=10px width=10px id="+longimagenumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);

    });
    $('#text').click(function() {
        type="text";
        inttext++;
        imagetextnumber ="imagetextnumber"+inttext;
        textnumber="text" + inttext;

        /*var draggable_image = document.createElement("img");
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
        	var $target = $(event.target);
        	$(e.delegateTarget).prev().remove();
            $(e.delegateTarget).prev().remove('b');
            $(e.delegateTarget).prev().remove();
            if($target.prev().is('br')){
            	$(e.delegateTarget).prev().remove('br');
	            $(e.delegateTarget).prev().remove('br');
            } else{
	            $(e.delegateTarget).next().remove('br');
	            $(e.delegateTarget).next().remove('br');
            }
            $(e.delegateTarget).remove();

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
        foo.append(enter2);*/

        var foo = $('#sortable');
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><input type=text disabled=disabled id="+  textnumber+"/>");
        var second = $("<img src=../Images/delete_icon.png height=10px width=10px id="+ imagetextnumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);
    });

    $('#radio').click(function() {
        type="text";
        type2="radio";
        inttext++;
        imageradionumber ="imageradionumber"+intradio;
        radiotextnumber="radiotextnumber" + intradio;
        radiobuttonnumber = "radiobuttonnumber" +intradio;

        /*var draggable_image = document.createElement("img");
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
        	var $target = $(event.target);
            $(e.target).prev().remove('input');
            $(e.target).prev().remove('input');
            $(e.target).prev().remove('img');
            if($target.prev().is('br')){
            	$(e.delegateTarget).prev().remove('br');
	            $(e.delegateTarget).prev().remove('br');
            } else{
	            $(e.delegateTarget).next().remove('br');
	            $(e.delegateTarget).next().remove('br');
            }
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
        foo.append(enter2);*/
        var foo = $('#sortable');
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><input type=radio disabled=disabled id="+  radiobuttonnumber+"/> <input type=text id="+  radiotextnumber+"/>");
        var second = $("<img src=../Images/delete_icon.png height=10px width=10px id="+ imageradionumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);

    });

    $('#paragraph').click(function() {
        type="textarea";
        intparagraph++;
        paragraphnumber = "paragraphnumber" + intparagraph;
        paragraphimagenumber = "paragraphimagenumber" + intparagraph;

        /*var draggable_image = document.createElement("img");
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
        	var $target = $(event.target);
        	$(e.delegateTarget).prev().remove();
            $(e.delegateTarget).prev().remove('b');
            $(e.delegateTarget).prev().remove();
            if($target.prev().is('br')){
            	$(e.delegateTarget).prev().remove('br');
	            $(e.delegateTarget).prev().remove('br');
            } else{
	            $(e.delegateTarget).next().remove('br');
	            $(e.delegateTarget).next().remove('br');
            }
            $(e.delegateTarget).remove();
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
        foo.append(enter2);*/
        var foo = $('#sortable');
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><textarea rows=4 columns=20 disabled=disabled id="+  paragraphnumber+"/>");
        var second = $("<img src=../Images/delete_icon.png height=10px width=10px id="+ paragraphimagenumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);
    });

    $('#checkbox').click(function() {
        type="text";
        type2="checkbox";
        intcheck++;
        imagecheckbox ="imagechecknumber"+intcheck;
        checktextbox="checktextnumber" + intcheck;
        checkbuttonbox = "checkbuttonnumber" +intcheck;

        /*var draggable_image = document.createElement("img");
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
        	var $target = $(event.target);
            $(e.target).prev().remove('input');
            $(e.target).prev().remove('input');
            $(e.target).prev().remove('img');
            if($target.prev().is('br')){
            	$(e.delegateTarget).prev().remove('br');
	            $(e.delegateTarget).prev().remove('br');
            } else{
	            $(e.delegateTarget).next().remove('br');
	            $(e.delegateTarget).next().remove('br');
            }
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
        foo.append(enter2);*/

        var foo = $('#sortable');
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><input type=checkbox disabled=disabled id="+  checkbuttonbox+"/> <input type=text id="+  checktextbox+"/>");
        var second = $("<img src=../Images/delete_icon.png height=10px width=10px id="+ imagecheckbox +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);
    });

    $('#dropdown').click(function() {
        intdropdown++;
        style="width:100px";
        type2="text";
        dropdownid= "dropdownid" + intdropdown;
        /*var textbox = document.createElement("input");
        textbox.setAttribute("type", "text");*/

        /*var draggable_image = document.createElement("img");
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
            src: "../Images/plus_icon.png",
            height: "15px",
            width: "15px",

        }).click(function (e) {

            $(element).append('<option value=' + $(textbox).val()+'>'+ $(textbox).val() +'</option>');

        });

        var image2 = document.createElement("img");


        $(image2).attr({
            src: "../Images/minus_icon.png",
            height: "15px",
            width: "15px",

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

        	var $target = $(event.target);
            $(e.target).prev().remove();
            $(e.target).prev().remove();
            $(e.target).prev().remove();
            $(e.target).prev().remove();
            $(e.target).prev().remove();
            if($target.prev().is('br')){
            	$(e.delegateTarget).prev().remove('br');
	            $(e.delegateTarget).prev().remove('br');
            } else{
	            $(e.delegateTarget).next().remove('br');
	            $(e.delegateTarget).next().remove('br');
            }
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
        foo.append(enter2);*/
        var foo = $('#sortable');
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b>");
        var second = $("<img src=../Images/plus_icon.png height=15px width=15px/>");
        var select = $("<select style=width:100px id="+  dropdownid+"/>");
        var text = $("<input type=text />");
        second.click(function() {
            select.append('<option value=' + $(text).val()+'>'+ $(text).val() +'</option>');
            $(text).attr("value", "");
        });
        var third = $("<img src=../Images/minus_icon.png height=15px width=15px/>");
        third.click(function() {
            var x=$(select).attr("id");
            var y =$(select).attr("value");
            //foo.append(x);
            $("#" + x +" option[value='"+y+"']").remove();
        });
        var fourth = $("<img src=../Images/delete_icon.png height=10px width=10px/>");
        fourth.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(select);
        fieldWrapper.append(text);
        fieldWrapper.append(second);
        fieldWrapper.append(third);
        fieldWrapper.append(fourth);

    });

    $('#textunit').click(function() {
        type="width:100px";
        type2="text";
        inttextunit++;
        textwithunitdropdown="textwithunitdropdown" + inttextunit;
        textwithunit= "textwithunit"+inttextunit;

        /*var draggable_image = document.createElement("img");
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
            src: "../Images/plus_icon.png",
            height: "15px",
            width: "15px",

        }).click(function (e) {

            $(element).append('<option value=' + $(textbox).val()+'>'+ $(textbox).val() +'</option>');

        });

        //Append the element in page (in span).
        var image2 = document.createElement("img");


        $(image2).attr({
            src: "../Images/minus_icon.png",
            height: "15px",
            width: "15px",

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
        	var $target = $(event.target);
            $(e.target).prev().remove();
            $(e.target).prev().remove();
            $(e.target).prev().remove();
            $(e.target).prev().remove();
            $(e.target).prev().remove();
            $(e.target).prev().remove();
            $(e.target).prev().remove();
            if($target.prev().is('br')){
            	$(e.delegateTarget).prev().remove('br');
	            $(e.delegateTarget).prev().remove('br');
            } else{
	            $(e.delegateTarget).next().remove('br');
	            $(e.delegateTarget).next().remove('br');
            }
            $(e.target).remove();

        });


        foo.append(draggable_image);
        $("#textu").append("<b>Answer:</b>");
        foo.append(element2);
        foo.append(element);

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
	          $("#textu").append("&nbsp;");
	          $("#textu").append("&nbsp;");


        foo.append(textbox);
        foo.append(image);
        foo.append(image2);
        foo.append(image3);
        var enter2 = document.createElement("br");
        foo.append(enter2);

        var enter3 = document.createElement("br");
        foo.append(enter3);*/

        var foo = $('#sortable');
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><input type=text disabled=disabled id=" + textwithunit+">");
        var second = $("<img src=../Images/plus_icon.png height=15px width=15px/>");
        var select = $("<select style=width:100px id="+  textwithunitdropdown+"/>");
        var text = $("<input type=text />");
        second.click(function() {
            select.append('<option value=' + $(text).val()+'>'+ $(text).val() +'</option>');
        });
        var third = $("<img src=../Images/minus_icon.png height=15px width=15px/>");
        third.click(function() {
            var x=$(select).attr("id");
            var y =$(select).attr("value");
            //foo.append(x);
            $("#" + x +" option[value='"+y+"']").remove();
        });
        var fourth = $("<img src=../Images/delete_icon.png height=10px width=10px/>");
        fourth.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(select);
        fieldWrapper.append(text);
        fieldWrapper.append(second);
        fieldWrapper.append(third);
        fieldWrapper.append(fourth);

    });

    $('#attachment').click(function() {
        document.getElementById('sortable').innerHTML +="<p class=\"ui-state-default\"><span id=\"attachment2"+intattachmentPanel+"\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"><input type=file name=\"browse"+intattachmenticon+"\" style=\"display: none;\"><b>Attachment: </b> " +
        "<input type=text name=\"file"+intattachmentinput+"\" style=\"font-style:veranda; font-size:13px; height:20px; width:300px; text-align:center;\" >" +
        "<img name=\"select\" src=\"../Images/AttchmentHeader.gif\" border=\"0\" onClick=\"browse"+intattachmenticon+".click(); \"file"+intattachmentinput+"\".value=\"browse"+intattachmenticon+"\".value;\">" +
        "<img id=\"remove\" src=../Images/delete_icon.png height=10px width=10px/><br/></span></p>";

        $('#remove').click(function() {
            $(this).parent().remove();
        });

        intattachmentPanel++;
        intattachmenticon++;


    });

    $('#datepicker').click(function() {
        var foo = $('#sortable');
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><input type=text id=datepicker/>");
        var second = $("<img src=../Images/delete_icon.png height=10px width=10px id="+imagenumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);


        // <p>Date: <input type="text" id="datepicker"></p>


    });


});


