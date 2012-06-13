<HTML>

<HEAD>

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>

<TITLE>SBN Questionnaire</TITLE>

<STYLE>
body,input {
       font-family: Calibri, Arial;
       font-size: 18px;
}

.text-label {
       color: #cdcdcd;
       font-weight: bold;
}

table {
       font-size: 18px;
       border-style: solid;
       border-width: 5px;
       border-color: grey;
       position: relative position:absolute;
       top: 50%;
       margin-top: 10em;


}

#mainDiv {
       
}
</STYLE>

</HEAD>

<BODY>

       <table align="center">

              <tr>
                     <td colspan="2"><img src="../Images/Startup/FirstPageBanner.png"
                           width="387" height="61"><br/><br/></td>

              </tr>
              <tr>

                     <td width="10">Title:</td>

                     <td width="10"><input type="text" value="" name="username"
                           title="Enter Title of Questionnaire" />
                     <td>
              </tr>

              <tr>

                     <td width="10">Category:</td>

                     <td width="10"><select STYLE="width: 228px; height: 100px; font-size: 18;">
                                  <option>Community</option>
                                  <option>Customer Feedback</option>
                                  <option>Demographics</option>
                                  <option>Education</option>
                                  <option>Events</option>
                                  <option>Healthcare</option>
                                  <option>Human Resources</option>
                                  <option>Industry Specific</option>
                                  <option>Just for Fun</option>
                                  <option>Market Research</option>
                                  <option>Non-Profit</option>
                                  <option>Political</option>
                                  <option>Others</option>
                     </select>
                     <td>
              </tr>
<tr>
<td colspan="2" style="text-align:right"><a href="" onclick="javascript:cancelAction();"><input type="image" src="../Images/Startup/FirstPageNextBtn.png" width="150" height="55"></a></td>

</tr>


       </table>



</BODY>

<SCRIPT>
       $('input[type="text"]').each(function() {

              this.value = $(this).attr('title');

              $(this).addClass('text-label');

              $(this).focus(function() {

                     if (this.value == $(this).attr('title')) {

                           this.value = '';

                           $(this).removeClass('text-label');

                     }

              });

              $(this).blur(function() {

                     if (this.value == '') {

                           this.value = $(this).attr('title');

                           $(this).addClass('text-label');

                     }

              });

       });
       
       function cancelAction()
       {      
       document.location.href("MainPage.jsp"); 
       }      
</SCRIPT>

</HTML>
