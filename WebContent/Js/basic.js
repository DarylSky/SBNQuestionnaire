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

    intquestionPanel=0;
    intattachmentIcon=0;
    intattachmentInput=0;
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
    intsubquestion=0;
    temp="";
    atemp="";
    shorttexttemp="";


    function ModalPopupsPrompt() {
        ModalPopups.Prompt("idPrompt1",
            "Prompt",
            "Please enter your ID number",  {
                width: 300,
                height: 100,
                onOk: "ModalPopupsPromptOk()",
                onCancel: "ModalPopupsPromptCancel()"});
    }



    if ($('#question1').html() =='')

    {

        textField.disabled="true";
        fieldsInTextField.disabled="true";
        answerField.disabled="true";
        guidance.disabled="true";
        attachment.disabled="true";


    }



    $('#question').click(function(){

        intquestionPanel++;
        questionPanel ="questionPanel"+intquestionPanel;
        sortableDiv= "sortable"+intquestionPanel;
        mainDiv= "mainDiv"+intquestionPanel;



        var question = $('#question1');
        var test = $("<div id='"+mainDiv+"'></div>");
        var table2= $("<table class=\"abc\" id='"+questionPanel+ "' border=\"0\" onclick=\"\">" +
				"<tr><th width=\"965\"><p class=\"flip\" contentEditable=\"true\">Question</p></th>" +
				"<th><button type=\"button\" href=\"#\" class=\"plusBtn\" id=\"PlusBtn\" value=\"-\">-</button></tr>" +
				"<tr width=\"965\" id=\"tableslide\"><td></td></tr></th></table>");
		var div = $("<div class=\"demo\" id= '"+sortableDiv+"'> </div>");
        var div = $("<div class=\"demo\" id= '"+sortableDiv+"'> </div>");

        $("#"+questionPanel).live("click", function(e) {

            var x = $(div).attr("id");
            temp = x;
            textField.disabled=false;
            fieldsInTextField.disabled=false;
            answerField.disabled=false;

            $("#" + temp).sortable();

        });




        question.append(test);
        test.append(table2);
        test.append(div);

        $(document).ready(function(){

            $("#" + temp).sortable();

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

    $('#subquestion').click(function() {
        type="text";
        inttext++;
        imagetextnumber ="imagetextnumber"+inttext;
        textnumber="text" + inttext;



        var myArray = [ 'a', 'b', 'c', 'd', 'e', 'f' ];


        var alphabet = myArray[intsubquestion];

        var foo = $("#"+temp );
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">" +
                "<input type=text size="+3+" value=\"("+alphabet+")\" id="+  textnumber+"/>");
        var second = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ imagetextnumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);
        intsubquestion++;
    });


    $('#questionnumber').click(function() {
        type="text";
        intquestion++;
        imagenumber ="imagenumber"+intquestion;
        questionname="questionnumber" + intquestion;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Question #:</b><input type=text size=5 id="+ questionname +"maxlength=5/>");
        var second = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+imagenumber +"/>");
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
        guidanceHeader="guidanceHeadershorttext"+ intshort;
        attachmentHeader="attachemntHeadershorttext"+ intshort;
        p="pshorttext" + intshort;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"' />");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Question: </b><input type=text size=20 value=\"Short Textfield\" onclick=\"if(this.value=='Short Textfield'){this.value=''}\" onblur=\"if(this.value==''){this.value='Short Textfield'}\" id='"+ shortbox+"' />");
        var second = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id='"+shortimagenumber +"'/>");
        second.click(function() {
            $(this).parent().remove();
        });

        var third = $("<img src=../Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");
        third.click(function(){
           prompt("Please enter the guidance below: ");

        });

        var fourth = $("<img src=../Images/MainPage/MenuIcon/AttchmentHeader.gif id='"+attachmentHeader +"'/>");

        fourth.click(function(){

            ModalPopupsPrompt();

         });

        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);

        $("#"+p).live("click", function(e) {

            guidance.disabled=false;
            attachment.disabled=false;

/*            var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(third);

            });

            $('#attachemntAdd').click(function(){


                fieldWrapper.append(fourth);

            });

        });

    });


    $('#longtext').click(function() {
        type="text";
        intlong++;
        longimagenumber ="longimagenumber"+intlong;
        longbox="longtext" + intlong;
        guidanceHeader="guidanceHeaderlongtext"+ intlong;
        attachmentHeader="attachemntHeaderlongtext"+ intlong;
        p="plongtext" + intlong;
        span="spanlongtext" + intlong;


        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"' />");
        var first =$("<span id='"+span+"'/>");
        var question = $("<b>Question: </b>");
        var longtext = $("<input type=text size=100 id="+ longbox+"/>");
        var second = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+longimagenumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });

        var third = $("<img src=../Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");

        var fourth = $("<img src=../Images/MainPage/MenuIcon/AttchmentHeader.gif id='"+attachmentHeader +"'/>");

        $("#"+p).live("click", function(e) {

            guidance.disabled=false;
            attachment.disabled=false;

/*            var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(third);

            });

            $('#attachemntAdd').click(function(){


                fieldWrapper.append(fourth);

            });

        });

        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        first.append(question);
        first.append(longtext);
        fieldWrapper.append(second);

    });
    $('#text').click(function() {
        type="text";
        inttext++;
        imagetextnumber ="imagetextnumber"+inttext;
        textnumber="text" + inttext;
        guidanceHeader="guidanceHeadertext"+ inttext;
        attachmentHeader="attachemntHeadertext"+ inttext;
        p="ptext" + inttext;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><input type=text style=\"background:grey\" disabled=disabled id='"+  textnumber+"'/>");
        var second = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id='"+ imagetextnumber +"'/>");
        second.click(function() {
            $(this).parent().remove();
        });

        var third = $("<img src=../Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");

        var fourth = $("<img src=../Images/MainPage/MenuIcon/AttchmentHeader.gif id='"+attachmentHeader +"'/>");

        $("#"+p).live("click", function(e) {

            guidance.disabled=false;
            attachment.disabled=false;

/*            var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(third);

            });

            $('#attachemntAdd').click(function(){


                fieldWrapper.append(fourth);

            });

        });

        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);

    });

    $('#radio').click(function() {
        type="text";
        type2="radio";
        intradio++;
        imageradionumber ="imageradionumber"+intradio;
        radiotextnumber="radiotextnumber" + intradio;
        radiobuttonnumber = "radiobuttonnumber" +intradio;
        guidanceHeader="guidanceHeaderradio"+ intradio;
        attachmentHeader="attachemntHeaderradio"+ intradio;
        p="pradio" + intradio;


        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        //var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"/>");
        var input = $("<input type=radio disabled=disabled id="+  radiobuttonnumber+"/> <input type=text id="+  radiotextnumber+"/>");
        var second = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ imageradionumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        var third = $("<img src=../Images/MainPage/TextAnswerField/plus_icon.png height=20px width=20px/>");
        third.click(function() {
            intradio++;
            fieldWrapper.append("<br/>");
            fieldWrapper.append("<input type=radio disabled=disabled id="+  radiobuttonnumber+"/> <input type=text id="+  radiotextnumber+"/>");


        });

        var fourth = $("<img src=../Images/MainPage/TextAnswerField/minus_icon.png height=20px width=20px/>");
        fourth.click(function(e) {

            $(second).next('br').remove('br');
            $(second).next('img').remove('img');
            $(second).next('input').remove('input');
            $(second).next('input').remove('input');

        });

        var fifth = $("<img src=../Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");

        var sixth = $("<img src=../Images/MainPage/MenuIcon/AttchmentHeader.gif id='"+attachmentHeader +"'/>");

        $("#"+p).live("click", function(e) {

            guidance.disabled=false;
            attachment.disabled=false;

/*            var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);

            });

            $('#attachemntAdd').click(function(){


                fieldWrapper.append(sixth);

            });

        });

        foo.append(fieldWrapper);
        fieldWrapper.append(input);
        fieldWrapper.append(third);
        fieldWrapper.append(fourth);
        fieldWrapper.append(second);

    });

    $('#paragraph').click(function() {
        type="textarea";
        intparagraph++;
        paragraphnumber = "paragraphnumber" + intparagraph;
        paragraphimagenumber = "paragraphimagenumber" + intparagraph;
        guidanceHeader="guidanceHeaderparagraph"+ intparagraph;
        attachmentHeader="attachemntHeaderparagraph"+ intparagraph;
        p="pparagragh" + intparagraph;


        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><textarea rows=4 columns=20  style=\"background:grey\" disabled=disabled id="+  paragraphnumber+"/>");
        var second = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ paragraphimagenumber +"/>");
        second.click(function() {
            $(this).parent().remove();
        });

        var third = $("<img src=../Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");

        var fourth = $("<img src=../Images/MainPage/MenuIcon/AttchmentHeader.gif id='"+attachmentHeader +"'/>");

        $("#"+p).live("click", function(e) {

            guidance.disabled=false;
            attachment.disabled=false;

/*            var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(third);

            });

            $('#attachemntAdd').click(function(){


                fieldWrapper.append(fourth);

            });

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
        guidanceHeader="guidanceHeadercheckbox"+ intcheck;
        attachmentHeader="attachemntHeadercheckbox"+ intcheck;
        p="pcheck" + intcheck;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><input type=checkbox disabled=disabled id="+  checkbuttonbox+"/> <input type=text id="+  checktextbox+"/>");
        var second = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+ imagecheckbox +"/>");
        second.click(function() {
            $(this).parent().remove();
        });
        var third = $("<img src=../Images/MainPage/TextAnswerField/plus_icon.png height=20px width=20px />");
        third.click(function() {
            intcheck++;
            fieldWrapper.append("<br/>");
            fieldWrapper.append("<input type=checkbox disabled=disabled id="+  checkbuttonbox+"/> <input type=text id="+  checktextbox+"/>");


        });

        var fourth = $("<img src=../Images/MainPage/TextAnswerField/minus_icon.png height=20px width=20px/>");
        fourth.click(function(e) {

            $(second).next('br').remove('br');
            $(second).next('input').remove('input');
            $(second).next('input').remove('input');

        });

        var fifth = $("<img src=../Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");

        var sixth = $("<img src=../Images/MainPage/MenuIcon/AttchmentHeader.gif id='"+attachmentHeader +"'/>");

        $("#"+p).live("click", function(e) {

            guidance.disabled=false;
            attachment.disabled=false;

/*            var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);

            });

            $('#attachemntAdd').click(function(){


                fieldWrapper.append(sixth);

            });

        });


        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(third);
        fieldWrapper.append(fourth);
        fieldWrapper.append(second);

    });

    $('#textunit').click(function() {
        type="width:100px";
        type2="text";
        inttextunit++;
        textwithunitdropdown="textwithunitdropdown" + inttextunit;
        textwithunit= "textwithunit"+inttextunit;
        guidanceHeader="guidanceHeadertextunit"+ inttextunit;
        attachmentHeader="attachemntHeadertextunit"+ inttextunit;
        p="ptextunit" + inttextunit;


        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><input type=text disabled=disabled style=\"background:grey\" id=" + textwithunit+">");
        var second = $("<img src=../Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        var select = $("<select style=width:100px id="+  textwithunitdropdown+"/>");
        var text=$("<input type=text id=autocomplete/>");
        $(text).autocomplete({
            source: ["mm", "cm", "m", "km", "mg", "g", "kg", "Metric Ton",
                     "Degree Celsius", "Square Meter", "Hectare", "Degree", "ml", "Cubic Centimeter", "L", "m/s",
                     "km/h","Newton","Watt","KiloWatt","Ampere"]
        });
        second.click(function() {
            select.append('<option value=' + $(text).val()+'>'+ $(text).val() +'</option>');
            $(text).attr("value", "");
        });
        var third = $("<img src=../Images/MainPage/TextAnswerField/minus_icon.png height=15px width=15px/>");
        third.click(function() {
            var x=$(select).attr("id");
            var y =$(select).attr("value");
            $("#" + x +" option[value='"+y+"']").remove();
        });
        var fourth = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
        fourth.click(function() {
            $(this).parent().remove();
        });

        var fifth = $("<img src=../Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");

        var sixth = $("<img src=../Images/MainPage/MenuIcon/AttchmentHeader.gif id='"+attachmentHeader +"'/>");

        $("#"+p).live("click", function(e) {

            guidance.disabled=false;
            attachment.disabled=false;

/*            var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);

            });

            $('#attachemntAdd').click(function(){


                fieldWrapper.append(sixth);

            });

        });

        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(select);
        fieldWrapper.append(text);
       fieldWrapper.append(second);
        fieldWrapper.append(third);
        fieldWrapper.append(fourth);

    });

    /*    $('#attachment').click(function() {

        attachmentPanel = "attachmentPanel" + intattachmentPanel;
        attachmentIcon = "attachmentIcon" + intattachmentIcon;
        attachmentInput = "attachementInput" + intattachmentInput;

        intattachmentPanel++;
        intattachmentIcon++;
        intattachmentInput++;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p/>");
        var first = $("<p class=\"ui-state-default\"><span id="+attachmentPanel+" class=\"ui-icon ui-icon-arrowthick-2-n-s\"><input type=file id="+attachmentIcon+" style=\"display: none;\"><b>Attachment: </b>");
        var second = $("<input type=text id="+attachmentInput+" style=\"font-style:veranda; font-size:13px; height:20px; width:300px; text-align:center;\" >");
        var third = $("<img src=../Images/MainPage/MenuIcon/AttchmentHeader.gif name=select border=0 onClick="+attachmentIcon+".click(); file"+attachmentInput+" .value="+attachmentIcon+".value; />");
        var four = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/><br/></span></p>");

        four.click(function() {
            $(this).parent().remove();
        });

        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(second);
        fieldWrapper.append(third);
        fieldWrapper.append(four);

    });*/

    $('#datepicker').click(function() {
        var foo = $("#"+temp);
        var fieldWrapper = $("<p/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\"><b>Answer: </b><input type=text id=datepicker/>");
        var second = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px id="+imagenumber +"/>");
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
        guidanceHeader="guidanceHeaderdropdown"+ intdropdown;
        attachmentHeader="attachemntHeaderdropdown"+ intdropdown;
        p="pdropdown" + intdropdown;

        var foo = $("#"+temp);
        var fieldWrapper = $("<p id='"+p+"'/>");
        var first =$("<span class=\"ui-icon ui-icon-arrowthick-2-n-s\">");
        var second = $("<img src=../Images/MainPage/TextAnswerField/plus_icon.png height=15px width=15px/>");
        var select = $("<select style=width:100px id="+  dropdownid+"/>");
        var text=$("<input type=text/>");


        fieldWrapper.append(text);
        second.click(function() {
            select.append('<option value=' + $(text).val()+'>'+ $(text).val() +'</option>');
            $(text).attr("value", "");
        });
        var third = $("<img src=../Images/MainPage/TextAnswerField/minus_icon.png height=15px width=15px/>");
        third.click(function() {
            var x=$(select).attr("id");
            var y =$(select).attr("value");
            $("#" + x +" option[value='"+y+"']").remove();
        });
        var fourth = $("<img src=../Images/MainPage/TextAnswerField/delete_icon.png height=10px width=10px/>");
        fourth.click(function() {
            $(this).parent().remove();
        });

        var fifth = $("<img src=../Images/MainPage/MenuIcon/GuidanceHeader.gif id='"+guidanceHeader +"'/>");

        var sixth = $("<img src=../Images/MainPage/MenuIcon/AttchmentHeader.gif id='"+attachmentHeader +"'/>");

        $("#"+p).live("click", function(e) {

            guidance.disabled=false;
            attachment.disabled=false;

/*            var x = $(fieldWrapper).attr("id");
            shorttexttemp = x;

            alert(atemp);*/

            $('#guidanceAdd').click(function(){


                fieldWrapper.append(fifth);

            });

            $('#attachemntAdd').click(function(){


                fieldWrapper.append(sixth);

            });

        });

        foo.append(fieldWrapper);
        fieldWrapper.append(first);
        fieldWrapper.append(select);
        fieldWrapper.append(text);
        fieldWrapper.append(second);
        fieldWrapper.append(third);
        fieldWrapper.append(fourth);

    });


});

