function logVar(a,l){
	
	var libreria=libByName("Log");
    var fechaHora = new Date (moment().format('DD/MM/YYYY hh:mm'));
    message(typeof(fechaHora));
    exit();
     
    var nuevoLog= new Object();
    
    nuevoLog["Libreria"]= l.title
    nuevoLog["Asunto"]="Return";
    nuevoLog["Descripcion"]= a;
    nuevoLog["Fecha y Hora"] =fechaHora;
   

    libreria.create(nuevoLog);
}
