function messJSON (e, args, g){

    var mensaje ='';
    
   
    
    if(e.length!== undefined){
         
        mensaje+= '{';
        mensaje+= '"'+ g +'": [';
   
        for (var i in e){
           
            mensaje+='{'
                
            for(var x in args ){
              
               mensaje+='"' + args[x] +'":"' + e[i].field( args[x] ) + '"';
               
               if(x < args.length-1){
               
                  mensaje+=',';
               }    
          
           }
           if(i < e.length-1){
               mensaje+=',';
           }
            mensaje+='}';
    
        }
       
        mensaje+= ']}';
       
    }else{

        mensaje+='{';
        
        for(var x in args ){
              
            mensaje+='"' + args[x] +'":"' + e.field( args[x] ) + '"';
            
            if(x < args.length-1){
            
               mensaje+=',';
            }    

        }
    
         mensaje+='}';    
    
    }
   
    return mensaje; 

}

function connWebHook(mensaje, webhook, cabeceras){
	
	
    var http = http();
	http.headers(cabeceras);
	var resultado = http.post(webhook,mensaje);

	if (resultado.code == 200){
    
   		e.set("Webhook Enviado",true);
    
	}  

	return resultado;

}