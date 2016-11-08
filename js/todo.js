(function(){
	//variables
	var todolist = document.getElementById("todolist"),//lista
		 newtask = document.getElementById("newTarea"),//input
		 btnAgregar = document.getElementById("btnNuevaTarea");//boton
//funciones
var agregarTarea = function(){
	var tarea = newTarea.value;
		nuevatarea = document.createElement("li"),
		contenido = document.createTextNode(tarea);

	if(tarea === ""){
		newTarea.setAttribute("placeholder", "Agregue un texto aqui");
		return false;
	}
	nuevatarea.appendChild(contenido);
	todolist.appendChild(nuevatarea);

	newTarea.value = "";

	for (var i = 0;  i <= todolist.children.length -1; i++) {
		todolist.children[i].addEventListener("click", function(){
			this.parentNode.removeChild(this);
		});
	}
};
var comprobarInput = function (){
	newTarea.className = "";
	newTarea.setAttribute("placeholder", "Agrega tu tarea");
};

var eliminarTarea = function(){
	this.parentNode.removeChild(this)
};


//eventos
//agregar tarea
btnAgregar.addEventListener("click", agregarTarea);


//borrar error del input
newtask.addEventListener("click", comprobarInput);
//borrar elementos

for (var i = 0;  i <= todolist.children.length -1; i++) {
	todolist.children[i].addEventListener("click", eliminarTarea);
}

}());

