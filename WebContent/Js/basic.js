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
