function agregarCaja(e,l){

    var ubicacion = e.field("Ubicacion");
    
    var entradaNueva = new Object;
    
    entradaNueva["Ubicacion"] = ubicacion; 
    entradaNueva["Calificacion"] = "Caja";
    

    l.create(entradaNueva);

}