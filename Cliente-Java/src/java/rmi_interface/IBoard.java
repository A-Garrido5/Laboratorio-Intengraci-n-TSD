/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rmi_interface;

import java.rmi.Remote;
import java.rmi.RemoteException;
/**
 *
 * @author Daniel Wladdimiro Cottet
 * @title Taller de sistemas distribuidos - Clase 1
 */

 //Esta inteface indicará los métodos que están a dispoción del cliente y servidor
//para que puedan interactuar remotamente.
//Todos estos métodos deben poseer como mínimo la excepción RemoteException
 
public interface IBoard extends Remote{
    
    public String ShowBoard(String name) throws RemoteException;
    
    public boolean setMove(int row, int col, char value) throws RemoteException;
   
    public char getLastTurn() throws RemoteException;
	
    public String toStr() throws RemoteException;
	  
    public char checkBoard() throws RemoteException;
    
    public String getBoard() throws RemoteException;
    
}
