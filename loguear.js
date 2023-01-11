function logErr(a){
    
    libreria=libByName("Log");
        
    nuevoLog= new Object();
    
    nuevoLog["Libreria"]= l.title
    nuevoLog["Asunto"]=a["name"];
    nuevoLog["Descripcion"]=a["message"];
    nuevoLog["Fecha y Hora"] = new Date();

    libreria.create(nuevoLog);
}
