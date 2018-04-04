$(document).on('ready',function(){
	/*aca van las cosas que queires que arranquen cuando apenas cargue la pagina poreso dice document ready, 
	eso es que cuando ya cargue todo lo que escribiste en el archivo html entocnes deuna cargue solo lo que esta entre estas llaves*/
	console.log('esto es de ready');
	//document.getElementById('grupo1').children.onClick(mover());
});	

//este es una funcion sin parametros simplemente la llamaste y ya el ejecuta tdo lo que tiene dentro
function mensajito(){console.log('esto es un mensajito');} 

//esta es una funcion con parametro donde la llamas y le envias un parametro para que el sepa que va a ejecutar de lo que tiene adentro
function multimensajito(num){
	if(num==1){console.log('esto es un mensajito 1');
	}else if(num==2){console.log('esto es un mensajito 2');} 
}

function nuevo(){
	valor=$('#text').val(); 
	var i=0,c=1;
	while(i<1){
		if(document.getElementById('div'+c)){console.log('si existe');
			c++;
		}else{console.log('no esta');
			$('#grupo1').append('<h4 id="div'+c+'" onclick="copiar(this)">nulo texto fijo</h4>');
			i++;
		};
	}
	//$('#grupo1').append('<div class="text1" onClick="mover()")">'+valor+'</div>'); //si uso innerHtml me va a remplazar siempre lo que hay en el div, entonces uso append para que me inserte la informacion sin cambiarme lo que ya tenga
	$('#text').val(''); //aca mando a limpiar el input luego de que agrego la tarea, y para que es el  appendchild?es lo mismo que el append solo pero es cuando tas trabajando con padres e hijos deobjetos
}

/*function nuevo(){
	valor=$('#text').val();//esto mete en la variable valor lo que contenga el input text
	var para = document.createElement("P");
	var t = document.createTextNode(valor);
	para.appendChild(t);
	document.getElementById("grupo1").appendChild(para);
}*/

//el outerHTML es para agarrar una linea y mostrarla con todo y codigo html
//el innerHTML agarra una linea y solo te muestra lo que se debe mostrar sin codigo html
/*function mover() {console.log('entro');
	valor1 = $(this).val();  mardito ejerciciojajajajjaajja
	console.log(valor1);
	$("#seleccion").html("es el index " + index + "el seleccionado");
	$('#grupo2').append('<div class="text1" onClick="mover1()")">'+valor1+'</div>');
}*/
function mover(){
	console.log('entro');
}