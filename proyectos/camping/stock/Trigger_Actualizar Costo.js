function actualizarCosto(e){
try{

  
var precios= e.linksFrom("Precios","Producto")

for(var i in precios){
    
    if(precios[i].field("Actual")== true){ 
            
       var registroActualizado= precios[i] ;
       var precioActualizado= precios[i].field("Monto"); 
    
    }

}
e.set("Costo",precioActualizado);
 

}catch(Err){

   loguear(Err);    
    

}
}
