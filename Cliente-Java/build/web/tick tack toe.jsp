<%@page import="java.util.Timer"%>
<%@page import="java.util.TimerTask"%>
<%@page import="java.awt.event.ActionEvent"%>
<%@page import="java.awt.event.ActionListener"%>
<%@page import="cliente.Cliente"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Tick Tack Toe</title>

    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/cover.css" rel="stylesheet"> 
    <!-- Librerias necesarias para el funcionamiento de la página -->
    <script src="js/jquery-1.3.1.js"></script>
    <script type="text/javascript" src="function/index.js"></script>

  </head>

  <body>
      
    

    <div class="site-wrapper">

      <div class="site-wrapper-inner">
      
        <div class="cover-container">

          <div class="masthead clearfix">
            <div class="inner">
              <h3 class="masthead-brand"> </h3>
              <ul class="nav masthead-nav">
                
              </ul>
            </div>
          </div>

          <div class="inner cover">
            <div class="form-group"> <!-- Nota del Autor: Form de estilo, no de etiqueta form -->
              <div class="row">


              </div>
              
            <div class="row">
              <div class="col-md-12">

              <button name= "result" id = "txt-resultado">_</button> 
              <button name= "result2" id = "txt-resultado2">_</button>
              <button name= "result3" id = "txt-resultado3">_</button> <br><br/>
              <button name= "result4" id = "txt-resultado4">_</button>
              <button name= "result5" id = "txt-resultado5">_</button>
              <button name= "result6" id = "txt-resultado6">_</button> <br><br/>
              <button name= "result7" id = "txt-resultado7">_</button>
              <button name= "result8" id = "txt-resultado8">_</button>
              <button name= "result9" id = "txt-resultado9">_</button> <hr>

              
                  
               <label hidden id="turno">Turno:</label> <label id="marca" name="markita"></label>
                  
              <select id="juego">
                <option value="X">X</option>
                <option value="O">O</option>

              </select>
               
               <select id="fila">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>

              </select>
               
               <select id="columna">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>

              </select>
               
              
              

              <label hidden name= "id" id = "identificador"></label> <hr>
              <label hidden>Ultima jugada:  </label>
              <label hidden name="ultimo" id="lastTurn">-</label><hr>
              <label hidden> id ="player">Jugador:  </label>
              <label hidden name="jugador" id="cantidad">-</label>
              
              
            
                      
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
    <script type="text/javascript">  

    document.getElementById("txt-resultado").style.height = "30px";
    document.getElementById("txt-resultado2").style.height = "30px";
    document.getElementById("txt-resultado3").style.height = "30px";
    document.getElementById("txt-resultado4").style.height = "30px";
    document.getElementById("txt-resultado5").style.height = "30px";
    document.getElementById("txt-resultado6").style.height = "30px";
    document.getElementById("txt-resultado7").style.height = "30px";
    document.getElementById("txt-resultado8").style.height = "30px";
    document.getElementById("txt-resultado9").style.height = "30px";

    document.getElementById("txt-resultado").style.width = "30px";
    document.getElementById("txt-resultado2").style.width = "30px";
    document.getElementById("txt-resultado3").style.width = "30px";
    document.getElementById("txt-resultado4").style.width = "30px";
    document.getElementById("txt-resultado5").style.width = "30px";
    document.getElementById("txt-resultado6").style.width = "30px";
    document.getElementById("txt-resultado7").style.width = "30px";
    document.getElementById("txt-resultado8").style.width = "30px";
    document.getElementById("txt-resultado9").style.width = "30px";
  
    
    
    </script>
    
    <% 
        
        
        String dato = request.getParameter("columna");
        String dato2 = request.getParameter("fila");
        String dato4 = request.getParameter("juego");
        
        out.println(dato);
        out.println(dato2);
        out.println(dato4);
        
        
                
        
            
        

    %>



  </body>
</html>
