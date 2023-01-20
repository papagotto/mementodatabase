function logVar(a,l){
	
	libreria=libByName("Log");
       
    nuevoLog= new Object();
    
    nuevoLog["Libreria"]= l.title
    nuevoLog["Asunto"]="Return";
    nuevoLog["Descripcion"]= a;
    nuevoLog["Fecha y Hora"] = '"'+moment().format('DD/MM/YYYY hh:mm')+'"';

    libreria.create(nuevoLog);
}
