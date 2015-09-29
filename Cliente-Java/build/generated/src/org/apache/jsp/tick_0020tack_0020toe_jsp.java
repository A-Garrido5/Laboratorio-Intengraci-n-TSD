package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import cliente.Cliente;

public final class tick_0020tack_0020toe_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html lang=\"es\">\n");
      out.write("  <head>\n");
      out.write("    <meta charset=\"utf-8\">\n");
      out.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n");
      out.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n");
      out.write("\n");
      out.write("    <title>Tick Tack Toe</title>\n");
      out.write("\n");
      out.write("    <link href=\"css/bootstrap.css\" rel=\"stylesheet\">\n");
      out.write("    <link href=\"css/cover.css\" rel=\"stylesheet\"> \n");
      out.write("    <!-- Librerias necesarias para el funcionamiento de la página -->\n");
      out.write("    <script type=\"text/javascript\" src=\"js/jquery.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"function/index.js\"></script>\n");
      out.write("\n");
      out.write("  </head>\n");
      out.write("\n");
      out.write("  <body>\n");
      out.write("\n");
      out.write("    <div class=\"site-wrapper\">\n");
      out.write("\n");
      out.write("      <div class=\"site-wrapper-inner\">\n");
      out.write("      \n");
      out.write("        <div class=\"cover-container\">\n");
      out.write("\n");
      out.write("          <div class=\"masthead clearfix\">\n");
      out.write("            <div class=\"inner\">\n");
      out.write("              <h3 class=\"masthead-brand\"> </h3>\n");
      out.write("              <ul class=\"nav masthead-nav\">\n");
      out.write("                \n");
      out.write("              </ul>\n");
      out.write("            </div>\n");
      out.write("          </div>\n");
      out.write("\n");
      out.write("          <div class=\"inner cover\">\n");
      out.write("            <div class=\"form-group\"> <!-- Nota del Autor: Form de estilo, no de etiqueta form -->\n");
      out.write("              <div class=\"row\">\n");
      out.write("\n");
      out.write("\n");
      out.write("              </div>\n");
      out.write("              \n");
      out.write("            <div class=\"row\">\n");
      out.write("              <div class=\"col-md-12\">\n");
      out.write("\n");
      out.write("              <button name= \"result\" id = \"txt-resultado\">_</button> \n");
      out.write("              <button name= \"result2\" id = \"txt-resultado2\">_</button>\n");
      out.write("              <button name= \"result3\" id = \"txt-resultado3\">_</button> <br><br/>\n");
      out.write("              <button name= \"result4\" id = \"txt-resultado4\">_</button>\n");
      out.write("              <button name= \"result5\" id = \"txt-resultado5\">_</button>\n");
      out.write("              <button name= \"result6\" id = \"txt-resultado6\">_</button> <br><br/>\n");
      out.write("              <button name= \"result7\" id = \"txt-resultado7\">_</button>\n");
      out.write("              <button name= \"result8\" id = \"txt-resultado8\">_</button>\n");
      out.write("              <button name= \"result9\" id = \"txt-resultado9\">_</button> <hr>\n");
      out.write("\n");
      out.write("              \n");
      out.write("                  \n");
      out.write("               <label hidden id=\"turno\">Turno:</label> <label id=\"marca\" name=\"markita\"></label>\n");
      out.write("                  \n");
      out.write("              <select id=\"juego\">\n");
      out.write("                <option value=\"X\">X</option>\n");
      out.write("                <option value=\"O\">O</option>\n");
      out.write("\n");
      out.write("              </select>\n");
      out.write("\n");
      out.write("\n");
      out.write("              <label hidden name= \"id\" id = \"identificador\"></label> <hr>\n");
      out.write("              <label hidden>Ultima jugada:  </label>\n");
      out.write("              <label hidden name=\"ultimo\" id=\"lastTurn\">-</label><hr>\n");
      out.write("              <label hidden> id =\"player\">Jugador:  </label>\n");
      out.write("              <label hidden name=\"jugador\" id=\"cantidad\">-</label>\n");
      out.write("              \n");
      out.write("              \n");
      out.write("            \n");
      out.write("                      \n");
      out.write("              </div>\n");
      out.write("            </div>\n");
      out.write("\n");
      out.write("          </div>\n");
      out.write("\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("      </div>\n");
      out.write("\n");
      out.write("    </div>\n");
      out.write("    <script type=\"text/javascript\">  \n");
      out.write("\n");
      out.write("    document.getElementById(\"txt-resultado\").style.height = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado2\").style.height = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado3\").style.height = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado4\").style.height = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado5\").style.height = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado6\").style.height = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado7\").style.height = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado8\").style.height = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado9\").style.height = \"30px\";\n");
      out.write("\n");
      out.write("    document.getElementById(\"txt-resultado\").style.width = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado2\").style.width = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado3\").style.width = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado4\").style.width = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado5\").style.width = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado6\").style.width = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado7\").style.width = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado8\").style.width = \"30px\";\n");
      out.write("    document.getElementById(\"txt-resultado9\").style.width = \"30px\";\n");
      out.write("  \n");
      out.write("    \n");
      out.write("    \n");
      out.write("    </script>\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("  </body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
