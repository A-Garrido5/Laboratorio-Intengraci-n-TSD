//Función Javascript
var serverIP = 'localhost';
var port = 8080;

var idSala;

function getUrlVars(){

    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}


function consultarTablero() {

		idSala=getUrlVars()["id"];

		console.log(idSala);

		var time=$.ajax({url:'http://localhost:8080/obtenerTablero/'+idSala, type: 'GET', dataType: "json", 
    		success: function(resultData) {


    			//javascript get parameter url

    			//java call RESTfull ->mkjong
    			//JaxRS

    			console.log(JSON.stringify(resultData));
    			
    			document.getElementById("txt-resultado").innerHTML = JSON.stringify(resultData)[3];
		        document.getElementById("txt-resultado2").innerHTML = JSON.stringify(resultData)[7];
		        document.getElementById("txt-resultado3").innerHTML = JSON.stringify(resultData)[11];
		        document.getElementById("txt-resultado4").innerHTML = JSON.stringify(resultData)[17];
		        document.getElementById("txt-resultado5").innerHTML = JSON.stringify(resultData)[21];
		        document.getElementById("txt-resultado6").innerHTML = JSON.stringify(resultData)[25];
		        document.getElementById("txt-resultado7").innerHTML = JSON.stringify(resultData)[31];
		        document.getElementById("txt-resultado8").innerHTML = JSON.stringify(resultData)[35];
		        document.getElementById("txt-resultado9").innerHTML = JSON.stringify(resultData)[39];
    			
    			
    			

    		}
    	});
 }



setInterval(consultarTablero,1000);
	


$(function() {
	$('#txt-resultado').click(function() {

		var row = 1;
		var col = 1;		

		var marca=document.getElementById('juego').value;

    	var total = row + ' ' + col + ' ' + marca;
	    console.log(total);

	    var urlTweet = 'http://localhost:8080/sala/'+idSala+'/'+marca+'/'+row+'/'+col;

		$.ajax({ url: urlTweet, type: 'GET', dataType: "json", 
    		success: function(resultData) {
    			//console.log(JSON.stringify(resultData));
    			

    		}
    	});
		

	});
});


$(function() {
	$('#txt-resultado2').click(function() {

		var row = 1;
		var col = 2;

		var marca=document.getElementById('juego').value;

    	var total = row + ' ' + col + ' ' + marca;
	    console.log(total);

	    var urlTweet = 'http://localhost:8080/sala/'+idSala+'/'+marca+'/'+row+'/'+col;

		$.ajax({ url: urlTweet, type: 'GET', dataType: "json", 
    		success: function(resultData) {
    			//console.log(JSON.stringify(resultData));
    			
    			
    			

    		}
    	});

		

	});
});

$(function() {
	$('#txt-resultado3').click(function() {

		var row = 1;
		var col = 3;

		var marca=document.getElementById('juego').value;

    	var total = row + ' ' + col + ' ' + marca;
	    console.log(total);

	    var urlTweet = 'http://localhost:8080/sala/'+idSala+'/'+marca+'/'+row+'/'+col;

		$.ajax({ url: urlTweet, type: 'GET', dataType: "json", 
    		success: function(resultData) {
    			//console.log(JSON.stringify(resultData));
    			
    			
    			

    		}
    	});

		

	});
});

$(function() {
	$('#txt-resultado4').click(function() {

		var row = 2;
		var col = 1;

		var marca=document.getElementById('juego').value;

    	var total = row + ' ' + col + ' ' + marca;
	    console.log(total);

	    var urlTweet = 'http://localhost:8080/sala/'+idSala+'/'+marca+'/'+row+'/'+col;

		$.ajax({ url: urlTweet, type: 'GET', dataType: "json", 
    		success: function(resultData) {
    			//console.log(JSON.stringify(resultData));
    			
    			
    			

    		}
    	});

		

	});
});


$(function() {
	$('#txt-resultado5').click(function() {

		var row = 2;
		var col = 2;

		var marca=document.getElementById('juego').value;

    	var total = row + ' ' + col + ' ' + marca;
	    console.log(total);

	    var urlTweet = 'http://localhost:8080/sala/'+idSala+'/'+marca+'/'+row+'/'+col;

		$.ajax({ url: urlTweet, type: 'GET', dataType: "json", 
    		success: function(resultData) {
    			//console.log(JSON.stringify(resultData));
    			
    			
    			

    		}
    	});

		

	});
});

$(function() {
	$('#txt-resultado6').click(function() {

		var row = 2;
		var col = 3;

		var marca=document.getElementById('juego').value;

    	var total = row + ' ' + col + ' ' + marca;
	    console.log(total);

	    var urlTweet = 'http://localhost:8080/sala/'+idSala+'/'+marca+'/'+row+'/'+col;

		$.ajax({ url: urlTweet, type: 'GET', dataType: "json", 
    		success: function(resultData) {
    			//console.log(JSON.stringify(resultData));
    			
    			
    			

    		}
    	});

		

	});
});

$(function() {
	$('#txt-resultado7').click(function() {

		var row = 3;
		var col = 1;

		var marca=document.getElementById('juego').value;

    	var total = row + ' ' + col + ' ' + marca;
	    console.log(total);

	    var urlTweet = 'http://localhost:8080/sala/'+idSala+'/'+marca+'/'+row+'/'+col;

		$.ajax({ url: urlTweet, type: 'GET', dataType: "json", 
    		success: function(resultData) {
    			//console.log(JSON.stringify(resultData));
    			
    			
    			

    		}
    	});

		

	});
});

$(function() {
	$('#txt-resultado8').click(function() {

		var row = 3;
		var col = 2;

		var marca=document.getElementById('juego').value;

    	var total = row + ' ' + col + ' ' + marca;
	    console.log(total);

	    var urlTweet = 'http://localhost:8080/sala/'+idSala+'/'+marca+'/'+row+'/'+col;

		$.ajax({ url: urlTweet, type: 'GET', dataType: "json", 
    		success: function(resultData) {
    			//console.log(JSON.stringify(resultData));
    			
    			
    			

    		}
    	});

		

	});
});

$(function() {
	$('#txt-resultado9').click(function() {

		var row = 3;
		var col = 3;

		var marca=document.getElementById('juego').value;

    	var total = row + ' ' + col + ' ' + marca;
	    console.log(total);

	    var urlTweet = 'http://localhost:8080/sala/'+idSala+'/'+marca+'/'+row+'/'+col;

		$.ajax({ url: urlTweet, type: 'GET', dataType: "json", 
    		success: function(resultData) {
    			//console.log(JSON.stringify(resultData));
    			
    			
    			

    		}
    	});

		

	});
});




