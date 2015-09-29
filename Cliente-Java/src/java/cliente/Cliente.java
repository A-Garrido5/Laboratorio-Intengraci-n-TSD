/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cliente;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.rmi.RemoteException;
import java.util.logging.Level;
import java.util.logging.Logger;
import rmi.ConexionCliente;
import rmi_interface.IBoard;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Daniel Wladdimiro Cottet
 * @title Taller de sistemas distribuidos - Clase 1
 */

public class Cliente {
    private final String USER_AGENT = "Mozilla/5.0";
    
    
    public Cliente() {
            
    }
    
    
    
    public void sendGet() throws Exception {
 
		String url = "http://localhost:8080/obtenersala/1";
 
		URL obj = new URL(url);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
 		//Otional default is GET
		con.setRequestMethod("GET");
 
		//Add request header
		con.setRequestProperty("User-Agent", USER_AGENT);
 
		int responseCode = con.getResponseCode();
		System.out.println("\nSending 'GET' request to URL : " + url);
		System.out.println("Response Code : " + responseCode);
 
		BufferedReader in = new BufferedReader(
		        new InputStreamReader(con.getInputStream()));
		
		String inputLine;
		StringBuffer response = new StringBuffer();
 
		while ((inputLine = in.readLine()) != null) {
                    
			System.out.println(inputLine);
			response.append(inputLine);
                    
		}
		in.close();

		System.out.println(response.toString());
 
	}
    
    
    
    
 
    
    
    
       
    
    
}
