function logVar(a){
    
    log(Object.values(a));
	
	libreria=libByName("Log");
        
    nuevoLog= new Object();
    
    nuevoLog["Libreria"]= l.title
    nuevoLog["Asunto"]="Return";
    nuevoLog["Descripcion"]= a;
    nuevoLog["Fecha y Hora"] = new Date();

    libreria.create(nuevoLog);
}
