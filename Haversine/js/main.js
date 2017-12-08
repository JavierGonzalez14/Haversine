$( document ).ready(function() {    //Se usa jQuery
    console.log( "document loaded" );
    var latitud_1;
    var longitud_1;
    var latitud_2;
    var longitud_1;
    var distancia;
    var origen;
    var destino;
    var alerta;
    var resultado;
    
    //Calculo matematico de la funcion
    function haversine() 
    {
                                                            //Se convierte a radianes
        var radians = Array.prototype.map.call(arguments, function(deg) { return deg/180.0 * Math.PI; });
        var lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
        var R = 6372.8; // km
        var dLat = lat2 - lat1;
        var dLon = lon2 - lon1;
        var a = Math.sin(dLat / 2) * Math.sin(dLat /2) + Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.asin(Math.sqrt(a));
        return R * c;
    }

    $("#envia-forma").click( //Valida evento del click
        function()
        {
            latitud_1  = $("#latitud-1").val(); //Capturar el valor en la variable
            longitud_1 = $("#longitud-1").val();
            latitud_2  = $("#latitud-2").val();
            longitud_2 = $("#longitud-2").val();
            
            origen  = $("#nombre-origen").val();
            destino = $("#nombre-destino").val();

            latitud_1  = $.trim(latitud_1);
            longitud_1 = $.trim(longitud_1);
            latitud_2  = $.trim(latitud_2);
            longitud_2 = $.trim(longitud_2);

            origen  = $.trim(origen);
            destino = $.trim(destino);

            
            //Aviso copiado de bootstrap
            alerta = '<br><br><div class="alert alert-danger alert-dismissible fade show" role="alert">'+
                        '<strong>Ha habido un error!</strong> Todos los campos de la forma son obligatorios.'+
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                            '<span aria-hidden="true">&times;</span>'+
                        '</button>' + 
                     '</div>';

            //Validacion de que se hayan llenado todos los datos
            if((latitud_1 !== "")&&(longitud_1 !== "") && (latitud_2 !== "") && (longitud_2 !== "") && (origen !== "") && (destino !== ""))
            {
                //Lo que se muestra en el navegador
                console.log(origen+": "+latitud_1+","+longitud_1+" \n "+destino+": " +latitud_2+","+longitud_2);

                //Para mostrar
                var currentdate = new Date(); 
                //Para la hora del sistema
                var datetime = currentdate.getDate() + "/"
                            + (currentdate.getMonth()+1)  + "/" 
                            + currentdate.getFullYear() +" "   
                            + currentdate.getHours() + ":"  
                            + currentdate.getMinutes() + ":" 
                            + currentdate.getSeconds();
                
                resultado = '<div class="container" id="resultado">'+
                                datetime+' La distancia de '+ origen +' a '+ destino +' es '+
                                haversine(latitud_1, longitud_1, latitud_2, longitud_2) +' km.' +
                            '</div>';
                //Observar los datos en la consola del navegador
                console.log(haversine(latitud_1, longitud_1, latitud_2, longitud_2));
                $("#resultados").prepend(resultado);
            }
            else
            {
                //Inyectar html en el div
                $(".mi-alerta").prepend(alerta);
                $(".alert").alert()
            }  
        }
    );
    
    //Para comprender la fucionaliad basica de conexion JavaScript-html
    //Para enviar saludo cuando se da click
    $("#envia-saludo").click( //Valida evento del click
        function()
        {
            //Guardamos el dato ingresado por el usuario
            saludo  = $("#saludo").val();
            console.log(saludo);
            //Con el backslah ponemos comillas dobles antes de la variable
            console.log("Hola usuario su mensaje \""+saludo+"\" se ha registrado"); 

            result = '<div class="container" id="savesaludo">Hola usuario su mensaje "' +saludo+'" fue recivido</div>';
            //Pones en el prepend que se muestre en el id del html
            $("#saludoResultante").prepend(result);
        }
    );
    //--------------------------------------------------------------------------//
});