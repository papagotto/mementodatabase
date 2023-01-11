function actualizarCosto(e){
   
	var precios = e.linksFrom("Precios","Producto");

	for( var i in precios){
    
		if(precios[i].field("Actual")== true){ 
            
		var precioActualizado= precios[i].field("Monto"); 
    
		}

	}
	e.set("Costo",precioActualizado);
	return precioActualizado;
}
