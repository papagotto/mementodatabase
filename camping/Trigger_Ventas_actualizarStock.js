/*   
Evento: Al Guardar una entrada
Fase: Despues de Grabar entrada. 

*/

function actualizarStock(e,l){

    var items = e.field("Productos");
    var cantidad = 0;
    var libStock = libByName("Stock");
    var cantidadStock

    for( var i in items){
        
        nombreItem = items[i].field("Nombre a Mostrar"); 
        cantidad = items[i].attr("Cantidad"); 
        cantidadStock = items[i].field("Cantidad");
        items[i].set("Cantidad",cantidadStock-cantidad);
    }

}