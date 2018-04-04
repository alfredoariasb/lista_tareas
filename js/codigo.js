function nuevo(){
	valor=$('#text').val(); 
	var i=0,c=1;
	while(i<1){
		if(document.getElementById('div'+c)){
			c++;
		}else{
			$('#grupo1').append('<h4 id="div'+c+'" onclick="mover(this)">'+valor+'</h4>');
			i++;
		};
	}
	$('#text').val(''); //aca mando a limpiar el input luego de que agrego la tarea, y para que es el  appendchild?es lo mismo que el append solo pero es cuando tas trabajando con padres e hijos deobjetos
}

function mover(m){ //en m se eta guardando el objeto que viene en this
	m.setAttribute('onclick','mover1(this)'); //aca a m le mando a cambiar el atributo de onclick para que pase de mover(this) a mover1(this)
	$('#grupo2').append(m); //mando a mover del div grupo1 al div grupo2 el objeto m
}
function mover1(m){
	m.setAttribute('onclick','terminada()'); //aca a m le mando a cambiar el atributo de onclick para que pase de mover1(this) a terminada()
	$('#grupo3').append(m);  //mando a mover del div grupo1 al div grupo3 el objeto m
	alert('Tarea terminada'); //alert se usa para sacar una ventanita emergente diciendo un mensaje en este caso muestra TAREA TERMINADA
}
function terminada(){alert('Esta tarea ya esta terminada');} //aqui vuelve a mostrar el mensaje por si le da clic alguien ya estando en el grupo 3