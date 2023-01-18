function agregarCaja(e,l){

    var ubicacion = e.field("Ubicacion");
    
    var entradaNueva = new Object;
    
    entradaNueva["Ubicacion"] = ubicacion; 
    entradaNueva["Tipo"] = "Caja";
    entradaNueva["Numero"]=0;

    l.create(entradaNueva);

}