/*
jQuery Proyecto Final de Curso
Maxiste Ledezma
06/06/2019
*/

$(document).ready(function(){
    
//Creacion de Elementos Dinamicamente con jQ
    $("header").append("<h1>Proyecto Final con jQuery</h1>");
    var div0=$("div");
    $(div0).append("<h2>-Registro de Estudiantes-</h2>");
    $(div0).append("<hr>");
//formulario
    $(div0).append("<form>");
    $("form").attr("id","formularioEstudiantes");
//Elementos del Formularios
    $("form").append("<label>Codigo</label><br>");
    $("form").append("<input id='codigo' type='text' disabled></input><br>");
    $("form").append("<label>Nombre Completo</label><br>");
    $("form").append("<input id='nombre' type='text' name='n_nombre' required minlength='10'></input><br>");
    $("form").append("<label>Nota</label><br>");
    $("form").append("<input id='nota' type='number' name='n_nota' required></input>");
 //Seccion de botones
    $("body").append("<div id='botones' align='center'></div>");
    $("#botones").append("<input id='rE' type='submit' disabled value='Registrar Estudiantes'></input>");
    $("#botones").append("<input id='cN' type='button' value='Promedio de Notas'></input>");
    $("#botones").append("<input id='nM' type='button' value='Mayor Nota'></input>");
    $("#botones").append("<input id='mR' type='button' value='Menor Nota'></input>");
    disabled("#rE");
//Footer
    $("#botones").after("<footer id='footM'></footer>");
    $("footer").append("<h4>--Maxiste Ledezma--</h4>");

//Funcion Dinamica de Validacion de Campos Completos para Habilitar Boton Registrar
    $('#formularioEstudiantes').on('change keyup', function() {
        if($(this).validate().checkForm()) {
            var miidBtnE=$("#rE");
            enabled(miidBtnE);
        } else {
            miidBtn=$('#rE');
            disabled(miidBtn);
    } });
//Implemnetacion de Generacion de Consecutrivos de Codigo de los Estudiantes
    conse();

//Funcion de Focus
    $("form input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("form input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
//Registrar Estudiantes
    $("#rE").click(function(){
        var codigo=$("#codigo").val();
            nombre=$("#nombre").val();
            nota=$("#nota").val();
        //Definicion de Objeto
        students={
            codigo:codigo,
            nombre:nombre,
            nota:nota
        };
        localStorage.setItem(codigo,JSON.stringify(students));
        
        consecutivo=localStorage.length+1;
        consAlfa="ML00";
        consAlfa+=consecutivo;

        mostrarEstudiantes();
        reseteoCampos();
        $("#rE").attr("value","Registrar Estudiante"); 
        disabled("#rE");
        
    });
    
    //Muestra la Tabla cuando recarga la pagina
    mostrarEstudiantes(); 

//Funcion Calcular el promedio de Notas de la Clase de una muestra de 10 Alumnos
    $("#cN").click(function(){
        var acumNotaP = 0;
            nPromedio=0;
        for (var i = 0; i < localStorage.length; i++) {
            var miclave=localStorage.key(i);
            lStudiant=$.parseJSON(localStorage.getItem(miclave));
            acumNotaP += parseInt(lStudiant.nota);
        }
            nPromedio = parseFloat(acumNotaP  / localStorage.length);
            totReg=localStorage.length;
            $.notify("Nota Promedio de los Estudiantes es: --> " + nPromedio.toFixed(2),"info");
    });

//Funcion Calcular Nota Mayor del Salon de Clase
    $("#nM").click(function(){
    var nMaxima=0;
        nNombre="";
    for (var i = 0; i < localStorage.length; i++) {
        var miclave=localStorage.key(i);
            lStudiant=$.parseJSON(localStorage.getItem(miclave));
            if(nMaxima < parseInt(lStudiant.nota)){
                nMaxima=parseInt(lStudiant.nota);
                nNombre=lStudiant.nombre;
            };
        };
        $.notify("Estudiante: " + nNombre +" posee : --> " + nMaxima+" ptos. como Nota Mayor", "info");
    });                                         
//Funcion para Calculo Nota Menor del Salon de Clases
    $("#mR").click(function(){
        var nMinima=10000000;///Asignacion Valor
            nNombre="";
        for (var i = 0; i < localStorage.length; i++){
            var miclave=localStorage.key(i);
                lStudiant=$.parseJSON(localStorage.getItem(miclave));
                if(nMinima > parseInt(lStudiant.nota)){
                    nMinima=parseInt(lStudiant.nota);
                    nNombre=lStudiant.nombre;  
                };
            };
            $.notify("Estudiante: "+ nNombre + " posee : --> " + nMinima+" ptos. como Nota Menor", "info");
            
    });

// Validacion de Formularios
    $.validator.setDefaults({
        submitHandler: function(){
            $("#nombre").val("");
            $("#nota").val("");
        }
    });
//Validacion de Condiciones de Validacion de Campos
    $("#formularioEstudiantes").validate({
        rules:{
            n_nombre:{
                required:true
            },
            n_nota:{
                required:true 
            }
        },
        messages: {
            n_nombre: {
                required: "Por Favor debe Introducir algun Valor ",
                minlength: "No menos de 10 digitos para el Nombre"
            },
            n_nota:{
                required: "Introduce un Valor Numerico ",
                number: "Introduzca un valor Numerico Valido"
            }
        }
        
    });

}); 

//Funciones Complementarias
//Funcion de Edicion
    function editarEstudiante(codigo){
        $("#rE").attr("value","Actualizar Registro");
        $("#rE").attr('disabled', false);
        for(var i=0; i<localStorage.length;i++){
            var miclave=localStorage.key(i);

            if(miclave==codigo){
                lStudiant=$.parseJSON(localStorage.getItem(miclave));
                $("#codigo").val(lStudiant.codigo);
                $("#nombre").val(lStudiant.nombre);
                $("#nota").val(lStudiant.nota);
            };
        };
        
        enabled("#rE");
        $("#nombre").focus();
    };
//Funcion Eliminacion
    function eliminarEstudiante(codigo){
        localStorage.removeItem(codigo);
        mostrarEstudiantes();
    };

//Funcion Listado de Estudiantes
    function mostrarEstudiantes(){
    
//Seccion de Cabecera tabla
    var tabla="";
            $("body").append("<div id='resulta'></div>");
            tabla+="<table id='mitabla'>";
            tabla+='<tr>';
            tabla+='<th>Codigo</th>';
            tabla+='<th>Nombre</th>';
            tabla+='<th>Nota</th>';
            tabla+='<th>Editar</th>';
            tabla+='<th>Eliminar</th>';
            tabla+='<tr>';
    //Seccion Creacion de Dinamica de la Tabla
        for(var i=0; i<localStorage.length; i++){
            var claves=localStorage.key(i);
                studient=$.parseJSON(localStorage.getItem(claves));

                tabla+="<tr>";
                tabla+="<td>"+studient.codigo+"</td>";
                tabla+="<td>"+studient.nombre+"</td>";
                tabla+="<td>"+studient.nota+"</td>";
                tabla+='<td><button onclick="editarEstudiante(\''+studient.codigo+'\');">Editar</button></td>';//el 2do comilla simpel del \ simpni como un an de salto comando
                tabla+='<td><button onclick="eliminarEstudiante(\''+studient.codigo+'\');">Eliminar</button></td>';
                tabla+="</tr>";
        };
        tabla+="</table>";
        $("footer").before($("#resulta").html(tabla));
        $("#mitabla").before("<h2>--Listado de Estudiantes--</h2><hr>");
        $("body div:last-child").remove();
        $("#nombre").focus();
        
    };  

//Funcionaes Complementarias
function reseteoCampos(){
    $("#codigo").val(consAlfa);
    $("#nombre").val("");
    $("#nota").val("");
}
//Desactiva y Activacion de Botones, adicionando Css Dinamicamente luego de Ejecutados
function disabled(id){
    var miidBtn=$(id);
        miidBtn.attr("disabled", true);
        miidBtn.css({"background":"#d0e0e9", "cursor":"default","color":"rgb(206, 171, 171)"});
};

//Fucnion Activar Botones
function enabled(id){
    var miidBtnE=$(id);
    miidBtnE.attr("disabled", false);
    miidBtnE.css({"background":"#1b3746", "cursor":"pointer","color":"#f1f1f1"});
    $( miidBtnE )
  .mouseover(function() {
    $(this).css({"background-color": "#f1f1f1", "color": "#14113f", "cursor": "pointer"});
    
  })
  .mouseout(function() {
    $(this).css({"background":"#1b3746", "cursor":"pointer","color":"#f1f1f1"});
  });
    
};
//Generacion de Consecutivos 
    function conse(){
            var consecutivo;
            consAlfa="ML00";
        if(localStorage.length>0){
            consecutivo=localStorage.length+1;
            consAlfa+=consecutivo;
        }else{
            consecutivo=1;
            consAlfa+=consecutivo;
        }
        $("#codigo").val(consAlfa);
    }

