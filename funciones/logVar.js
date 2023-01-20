function logVar(a,l){
	
	var libreria=libByName("Log");

    var nuevoLog= new Object();
    
    nuevoLog["Libreria"]= l.title
    nuevoLog["Asunto"]="Return";
    nuevoLog["Descripcion"]= a;
   

    libreria.create(nuevoLog);
}
