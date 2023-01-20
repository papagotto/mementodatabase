function logVar(a,l){
	
	libreria=libByName("Log");
    message(libreria.title);    
    nuevoLog= new Object();
    
    nuevoLog["Libreria"]= l.title
    nuevoLog["Asunto"]="Return";
    nuevoLog["Descripcion"]= a;
    nuevoLog["Fecha y Hora"] = new Date().toLocaleString();

    libreria.create(nuevoLog);
}
