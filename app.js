var express = require('express');
var app = express();

var juego = {};



function revisartablero(board){

    var comprobacion;

    var contador=0;

    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(board[i][j]==='_') contador++;

        }
    }

    if(contador==0)
        comprobacion="Empate";

    else contador=0;

    if((board[0][0]=='X' && board[0][1]=='X' && board[0][2]=='X') || (board[0][0]=='O' && board[0][1]=='O' && board[0][2]=='O')){
        comprobacion = board[0][0];
        board = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']];

    }

    else if((board[1][0]=='X' && board[1][1]=='X' && board[1][2]=='X') || (board[1][0]=='O' && board[1][1]=='O' && board[1][2]=='O')){
        comprobacion = board[1][0];
        board = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']];

    }

    else if((board[2][0]=='X' && board[2][1]=='X' && board[2][2]=='X') || (board[2][0]=='O' && board[2][1]=='O' && board[2][2]=='O')){
        comprobacion = board[2][0];
        board = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']];
    }

    else if((board[0][0]=='X' && board[1][0]=='X' && board[2][0]=='X') || (board[0][0]=='O' && board[1][0]=='O' && board[2][0]=='O')){
        comprobacion = board[0][0];
        board = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']];
    }

    else if((board[0][1]=='X' && board[1][1]=='X' && board[2][1]=='X') || (board[0][1]=='O' && board[1][1]=='O' && board[2][1]=='O')){
        comprobacion = board[0][1];
        board = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']];
    }

    else if((board[0][2]=='X' && board[1][2]=='X' && board[2][2]=='X') || (board[0][2]=='O' && board[1][2]=='O' && board[2][2]=='O')){
        comprobacion = board[0][2];
        board = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']];
    }

    else if((board[0][0]=='X' && board[1][1]=='X' && board[2][2]=='X') || (board[0][0]=='O' && board[1][1]=='O' && board[2][2]=='O')){
        comprobacion = board[0][0];
        board = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']];
    }

    else if((board[0][2]=='X' && board[1][1]=='X' && board[2][0]=='X') || (board[0][2]=='O' && board[1][1]=='O' && board[2][0]=='O')){
        comprobacion = board[0][2];
        board = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']];
    }

    return comprobacion;
    
}


function analizarTablero(row, col, marca, board){

    if(marca === 'X' && board[row-1][col-1]==='_'){

        board[row-1][col-1] = 'X';
        revisartablero(board);
        

        

    }

    else if(marca==='O' && board[row-1][col-1]==='_'){

        board[row-1][col-1] = 'O';
        revisartablero(board);
        

        

    }


        return board;


}

app.get('/obtenerTablero/:id', function(req, res){

    id = req.params.id;

    if(juego[id]===null){

        var jsonResponse =[['_', '_', '_'],['_', '_', '_'],['_', '_', '_']];

        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(jsonResponse, null, 4));

    }

    else{

        var jsonResponse =juego[id].tablero;

        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(jsonResponse, null, 4));
    }

});




app.get('/obtenersala/:id', function(req, res) {

    //respuesta
    response = {};

    //se inicializa la variable
    id = req.params.id;

    //se obtiene la sala con la id requerida
    salaRequerida = juego[id];

    //checkeo si la sala requerida es vacia
    if (salaRequerida == null) {
        response.message = "sala no encontrada";
    }
    //si no es vacia obtengo la sala
    else {
        response.sala = juego[id];
    }

    //adjunto la respuesta en el JSON a generar
    var jsonResponse = response;

    //se envia en forma de JSON
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(jsonResponse, null, 4));

});







app.get('/crearsala/jugador/:jugador', function(req, res) {

    //se rescatan las variables
    jugador = req.params.jugador;

    //se crea una nueva sala y se almacena el nombre del jugadorX
    var nuevaSala = generarNuevaSala();
    nuevaSala.jugadorX = jugador;
    nuevaSala.numeroJugadores = 1;

    //se crea un id de la sala
    id = generarIDSala();

    //se almacena la sala en la variable juego
    juego[id] = nuevaSala;


    console.log(juego[id]);

    
    //se escribe la respuesta en JSON
    var jsonResponse = nuevaSala;

    //se envia en forma de JSON
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(jsonResponse, null, 4));

});

//es solo para debug!!!! ELIMINAR DESPUES
app.get('/versalas', function(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(juego, null, 4));
});



app.get('/unirseasala/:id/jugador/:jugador', function(req, res) {

    //se inicializa la respuesta
    response = {};

    //se rescata la id y el nombre del jugador O (tambien observadores)
    id = req.params.id;
    jugador = req.params.jugador;

    //se obtiene la sala con la id requerida
    salaRequerida = juego[id];



    //checkeo si la sala requerida es vacia
    if (salaRequerida == null) {
        response.message = "sala no encontrada";
    }

    //si no es vacia obtengo la sala y se modifica con los nuevos datos
    else {

        if(juego[id].jugadorO===null)
            juego[id].jugadorO = jugador;
        
        else
            juego[id].observadores.push(jugador);


        juego[id].numeroJugadores++;

        if(juego[id].numeroJugadores>2){
            
        }

        
        response = juego[id];
    }

    console.log(response);

    var jsonResponse = response;

    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(jsonResponse, null, 4));
});


app.get('/eliminarsala/:id', function(req, res) {

    //inicializo la respuesta
    response = {};

    //obtengo la id de la sala
    id = req.params.id;

    //identifico la sala requerida
    salaRequerida = juego[id];

    //checkeo si la sala requerida es vacia
    if (salaRequerida == null) {
        response.message = "sala no encontrada";
    }
    //si no es vacia elimino la sala
    else {
        delete juego[id];
        response.message = "sala eliminada";
    }

    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(response, null, 4));

});


app.get('/sala/:id/:marca/:fila/:columna', function(req, res) {

    id = req.params.id;
    fila = req.params.fila;
    columna = req.params.columna;
    marca = req.params.marca;

    console.log(id+' '+fila+' '+columna+' '+marca+' ');



    if(marca===juego[id].ultimaJugada){
        var jsonResponse = juego[id];        

        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(jsonResponse, null, 4));
    }

    else{



        juego[id].ultimaJugada=marca;
       
        juego[id].tablero=analizarTablero(fila,columna,marca,juego[id].tablero);

        juego[id].ganador=revisartablero(juego[id].tablero);

        var jsonResponse = juego[id];

        console.log(juego[id]);

        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(jsonResponse, null, 4));
    }

});


var idSala = 0;

function generarIDSala() {
    idSala++;
    parseInt(idSala);
    return idSala;
}

//genera una sala nueva
function generarNuevaSala() {

sala = {
    jugadorX: null,
    jugadorO: null,
    tablero: [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ],
    turno: null,
    numeroJugadores: 0,
    observadores :[],
    ganador: null,
    ultimaJugada: null
};

return sala;

}





var puerto = 8081;
var server = app.listen(puerto, function() {
    console.log("Funcionando en el puerto " + puerto);

    app.use("/css", express.static(__dirname + '/css'));

//Path de funciones en Javascript que podrían utilizar
    app.use("/function", express.static(__dirname + '/function'));
    app.use("/js", express.static(__dirname + '/js'));

    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/view/test.html');
    });

    app.get('/tablero', function (req, res) {
      res.sendFile(__dirname + '/view/index.html');
    });

    //Routing
    
});

