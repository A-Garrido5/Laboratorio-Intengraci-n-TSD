
<!doctype html>
<html>
    
<head>
    
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/cover.css" rel="stylesheet">
    
    <meta charset="utf-8">

</head>

<body>
    
    <br /><br />
    
    
    
    <div class="center" aling="center">
        
               
    <script src="js/jquery-1.3.1.js"></script>
    
    <script>


    $(function() {
      $('#crear').click(function() {


        
        document.getElementById('name').style.visibility = "visible";
        document.getElementById('ingname').style.visibility = "visible";
        document.getElementById('create').style.visibility = "visible";
        

        

      });
      
    });


    $(function(){
       $('#create').click(function() {
           
           
        
           
          
         location.href=("http://localhost:8081/crearsala/jugador/"+document.getElementById('name').value);
               
         location.href=("http://localhost:8080/Cliente-Java");
                
          

          
      });          
    });

    $(function(){
       $('#unirse').click(function() {

          document.getElementById('otroname').style.visibility = "visible";
          document.getElementById('newname').style.visibility = "visible";
          document.getElementById('join').style.visibility = "visible";

          document.getElementById('ide').style.visibility = "visible";
          document.getElementById('ingid').style.visibility = "visible";

      });          
    });

    $(function(){
       $('#join').click(function() {
           
           
                    
          location.href="http://localhost:8081/unirseasala/"+document.getElementById('ide').value+"/jugador/"+document.getElementById('otroname').value;
          location.href=("http://localhost:8080/Cliente-Java");
      });          
    });
    

    $(function(){
       $('#ir').click(function() {

          document.getElementById('go').style.visibility = "visible";
          document.getElementById('ingid2').style.visibility = "visible";
          document.getElementById('otroid').style.visibility = "visible";
      });          
    });
       
    $(function(){
       $('#go').click(function() {
          //window.open('http://localhost:8080/Cliente/?id='+document.getElementById('otroid').value);
          window.open('http://localhost:8080/Cliente-Java/tick%20tack%20toe.jsp'+'?id='+document.getElementById('otroid').value);
         
      });          
    }); 

      // Send text to the server when the Send button is clicked
      
  </script>
    
  <input id="crear" type="button" value="Crear nueva sala" /><br /><br />
  
  <label style="visibility:hidden" id="ingname">Ingresa tu nombre :</label>
  <input style="visibility:hidden" id="name" type="text">&nbsp;<br /><br />
  <input style="visibility:hidden" id="create" type="button" value="Crear" /><br /><br />


  <input id="unirse" type="button" value="Unirse a una sala" />&nbsp;<br /><br />
  <label style="visibility:hidden" id="newname">Ingresa tu nombre :</label>
  <input style="visibility:hidden" id="otroname" type="text">&nbsp;<br /><br />
  <label style="visibility:hidden" id="ingid">Ingresa el ID de la sala :</label>
  <input style="visibility:hidden" id="ide" type="text">&nbsp;<br /><br />
  <input style="visibility:hidden" id="join" type="button" value="Unirse" /><br /><br />

  <input id="ir" type="button" value="Ir a una sala" />&nbsp;<br /><br />
  <label style="visibility:hidden" id="ingid2">Ingresa el ID de la sala :</label>
  <input style="visibility:hidden" id="otroid" type="text">&nbsp;<br /><br />
  <input style="visibility:hidden" id="go" type="button" value="Ir" /><br /><br />
        
    </div>
    
    
    

</body>
</html>
