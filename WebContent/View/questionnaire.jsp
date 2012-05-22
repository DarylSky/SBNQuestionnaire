<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<html>
  <script type="text/javascript"
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
  <script src="../Js/basic.js"></script>
    <head>
       <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
       <title>JSP Page</title>
    </head>
    <body>
       <h1>Questionnaire Creation</h1>
       <form action="test.jsp" method="post">
           <table cellspacing ="5" border ="0">
               <tr>
                   <td> Title of Questionnaire:</td>
                   <td><input type="text" name ="Title" value ="<enter the title>" size="20"></td>
               </tr>
               <tr>
                   <td>Category:</td>
                   <td>
                       <select name="Category">
                       <option value = "null" selected>Default</option>
                       <option value ="Community">Community</option>
                       <option value ="Customer Feedback">Customer Feedback</option>
                       <option value ="Demographics">Demographics</option>
                       <option value ="Education">Education</option>
                       </select>
                   </td>
               </tr>
           </table>

               <br/>
               <br/>
               <table>
                   <tr>
                       <td>Question #</td>
                       
                   </tr>
                   <tr>
                       <td>Question Name:</td>
                       <td><input type="text" name ="Question" value ="<enter the question>" size="20"></td>
                       
                   </tr>
                   
                   <tr>
                       <td>Response Type:</td>
                       <td>
                           <select name="responseType" id="responseType">
                               <option value = "null" selected>Default</option>
                               <option value ="Text">Text</option>
                               <option value ="Text With Unit">Text With Unit</option>
                               <option value ="Radio Buttons">Radio Buttons</option>
                               <option value ="Check Boxes">Check Boxes</option>
                               <option value ="Paragraph Text">Paragraph Text</option>
                              
                           </select>
                            
                       </td>
                   </tr>
               </table>
              <span id="insert"></span>
              
               

               <br/><br/>
               <input type="reset" />
               <input type="submit" value="send"/>
           
       </form>

    </body>
</html>
