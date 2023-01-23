function logVar(a){
	
	var libreria=libByName("Log");

    var nuevoLog= new Object();
    
    nuevoLog["Libreria"]= l.title
    nuevoLog["Asunto"]="Return";
    nuevoLog["Descripcion"]= a;
   

    libreria.create(nuevoLog);
}

function logErr(a){
    
    libreria=libByName("Log");
        
    nuevoLog= new Object();
    
    nuevoLog["Libreria"]= l.title
    nuevoLog["Asunto"]=a["name"];
    nuevoLog["Descripcion"]=a["message"];
    nuevoLog["Fecha y Hora"] = new Date();

    libreria.create(nuevoLog);
}