function agregarCaja(e,arg){

    var ubicacion = e.field("Ubicacion");
    var libreria = libByName("Relevo Cajas");
    var entradaNueva = new Object;
    
    
    entradaNueva["Ubicacion"] = ubicacion; 
    entradaNueva["Id Poste"] = e.field("Numero");
    entradaNueva["Tipo Caja"]= arg;

    libreria.create(entradaNueva);


}