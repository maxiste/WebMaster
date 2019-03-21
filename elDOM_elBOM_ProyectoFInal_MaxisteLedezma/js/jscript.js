/*
JavaScript Proyecto Final de Curso
13/03/2019
*/
//Definicion del Json vacio del Proyecto
    var estudiante=[];
   
//Ejemplo de json de prueba con carga de prueba
var student =[{
    "codigo":"e0001",
    "nombre":"Maxiste Ledezma",
    "nota":70
},{
    "codigo":"e0002",
    "nombre":"Jair Ledezma",
    "nota":100
},{
    "codigo":"e0003",
    "nombre":"Nardelys Zacarias",
    "nota":80
},{
    "codigo":"e0004",
    "nombre":"Zenada de Zacarias",
    "nota":50

},{
    "codigo":"e0010",
    "nombre":"Tommy Lee Ledezma",
    "nota":90
}];

//var mostrarTabla=0;
//Definicion de Funciones 
window.onload=cargarEventos;
var foot;
function cargarEventos(){
    //Creacion de Elementos del  header delDOM
        var vh1_0=document.createElement("h1");
        var vh1txt=document.createTextNode("Proyecto Final elDOM_elBOM JavaScript");
        var vheader=document.getElementsByTagName("header");
            vh1_0.appendChild(vh1txt);
            vheader[0].appendChild(vh1_0);
    
    //Creacion de Elementos del div0 "Registro de Alumnos"
    //var vdiv_0=document.createElement("div");
        var vdiv0=document.getElementsByTagName("div")[0];
        var vh2_0=document.createElement("h2");
        var vh2txt=document.createTextNode("-Registro de Estudiantes-");
        var vhr0=document.createElement("hr");
            vh2_0.appendChild(vh2txt);
        //vdiv0.appendChild(vh2_0);
        //vdiv0.appendChild(vhr0);
            vdiv0.setAttribute("id", "registro");

    //Creacion de Elementos del Formulario
        var newForm =document.createElement("form");
            newForm.setAttribute("id","formularioEstudiantes");
            vdiv0.appendChild(newForm);

        var vbr=document.createElement("br");
        var vbrL=document.createElement("br");
        var vbrN=document.createElement("br");
        var vbrLO=document.createElement("br");
        var vbrO=document.createElement("br");
    //Codigo
        var vlabC=document.createElement("label");
        var vlabCtxt=document.createTextNode("Codigo");
            vlabC.appendChild(vlabCtxt);
        
        var vinputC=document.createElement("input");
            vinputC.setAttribute("id","codigo");
            vinputC.setAttribute("type","text");
    //Nombre
    var vlabN=document.createElement("label");
        var vlabNtxt=document.createTextNode("Nombre");
            vlabN.appendChild(vlabNtxt);
        
        var vinputN=document.createElement("input");
            vinputN.setAttribute("id","nombre");
            vinputN.setAttribute("type","text");

    //Nota
    var vlabO=document.createElement("label");
        var vlabOtxt=document.createTextNode("Nota");
            vlabO.appendChild(vlabOtxt);
        
        var vinputO=document.createElement("input");
            vinputO.setAttribute("id","nota");
            vinputO.setAttribute("type","text")


    //Insertando elementos Formulario
       
        var refForm=document.getElementById("formularioEstudiantes");
            refDiv=refForm.parentNode;
            refDiv.insertBefore(newForm,refForm.nextSibling);
            refDiv.insertBefore(vh2_0,refForm);
            refDiv.insertBefore(vhr0,refForm);
    
    //Insertando elementos del Formualrio
            newForm.appendChild(vlabC);
            newForm.appendChild(vbr);
            newForm.appendChild(vinputC);

            newForm.appendChild(vbrL);
            newForm.appendChild(vlabN);
            newForm.appendChild(vbrN);
            newForm.appendChild(vinputN);
            
            newForm.appendChild(vbrLO);
            newForm.appendChild(vlabO);
            newForm.appendChild(vbrO);
            newForm.appendChild(vinputO);
        


//Creacion de Elementos del div1 "Botones"
    //var vdiv_0=document.createElement("div");
    var vdiv1=document.createElement("div");
    vdiv1.setAttribute("id", "botones"); 
    vdiv1.setAttribute("align","center")
    document.body.appendChild(vdiv1);

//Creacion de Botones
    var vinputBO=document.createElement("input");
        vinputBO.setAttribute("id","rE");
        vinputBO.setAttribute("type","button");
        vinputBO.setAttribute("value","Registrar Estudiantes");

    var vinputB1=document.createElement("input");
        vinputB1.setAttribute("id","cN");
        vinputB1.setAttribute("type","button");
        vinputB1.setAttribute("value","Promedio de Notas");

    var vinputB2=document.createElement("input");
        vinputB2.setAttribute("id","mM");
        vinputB2.setAttribute("type","button");
        vinputB2.setAttribute("value","Mayor Nota");

    var vinputB3=document.createElement("input");
        vinputB3.setAttribute("id","mR");
        vinputB3.setAttribute("type","button");
        vinputB3.setAttribute("value","Menor Nota");

    //Insertando los botoes al DivNUwevo de botones
        refDiv1=document.getElementById("botones");
        refDiv1.appendChild(vinputBO);
        refDiv1.appendChild(vinputB1);
        refDiv1.appendChild(vinputB2);
        refDiv1.appendChild(vinputB3);

//Creacion footer
foot=document.createElement("footer");
var vh4=document.createElement("h4");
var vh4txt=document.createTextNode("--Maxiste Ledezma--");
    foot.setAttribute("id","footM");
    vh4.appendChild(vh4txt);
    foot.appendChild(vh4);
    document.body.append(foot);
        
    disabled("cN");
    disabled("mM");
    disabled("mR");

    //document.getElementById("resulta").addEventListener("click", mostrarEstudiantes,false);
    document.getElementById("rE").addEventListener("click",registrarEstudiantes,false);
    document.getElementById("cN").addEventListener("click",calcularNotas,false);
    document.getElementById("mM").addEventListener("click",mostrarEst_MayorNota,false);
    document.getElementById("mR").addEventListener("click",mostrarEst_MenorNota,false);
    
}

function registrarEstudiantes(event){
    var codigoIntro=document.getElementById("codigo").value;
    var nombreIntro=document.getElementById("nombre").value;
    var notaIntro=document.getElementById("nota").value;

    if (codigoIntro!="" && nombreIntro!="" && validar(notaIntro)>0){
        event.preventDefault(); //modificacion comportamiento de submit del formulario
        var item_student={'codigo':codigoIntro,'nombre':nombreIntro,'nota':notaIntro};
            estudiante.push(item_student);
            mostrarEstudiantes();
    }else{
        alert("Debe Introducir un valor válido para Registrar un Estudiantes!!!")
        limpiarinput();
    }

}

function mostrarEstudiantes(){
        enabled("cN");
        enabled("mM");
        enabled("mR");
        cargar_Json_enTabla(estudiante);
        limpiarinput();
}

//Funcion Calcular el promedio de Notas de la Clase de una muestra de 10 Alumnos
function calcularNotas(json){
 
    var i;
    notaP=0;
    nPromedio=0;
    for(i=0;i<estudiante.length;i++){
        notaP+=parseInt(estudiante[i].nota);
       
    }
    nPromedio = parseFloat(notaP / estudiante.length);
    alert("Esta es la Nota Promedio de los Estudiantes Registrados: --> " + nPromedio);
}

//Funcion Calcular Nota Mayor del Salon de Clase
function mostrarEst_MayorNota(json){
    
        var i;
        nMaxima=0;

        for (i = 0;i<estudiante.length; i++) {
            if (nMaxima < parseInt(estudiante[i].nota)) {
                nMaxima = parseInt(estudiante[i].nota);
                nNombre=estudiante[i].nombre;
            }
        }
        alert("Estudiante: " + nNombre +" posee : --> " + nMaxima+" ptos. como Nota Mayor");
/*        
    var newtxtH2 = document.createTextNode("Alumno: " + nNombre +" posee : --> " + nMaxima+" ptos. como Mayor Nota");
        newH2.appendChild(newtxtH2); //añade texto al h2 creado.
        newH2.setAttribute("id", "muestraV");
        tdiv.appendChild(newH2);
    //disabled("mM");
*/
}

//Funcion Calcular Nota Menor del Salon de Clase
function mostrarEst_MenorNota(){
   
        var i;
        nMinima=10000000;///Tomando en consideracion notas Reales

        for (i = 0; i < estudiante.length; i++) {
        
            if (nMinima > parseInt(estudiante[i].nota)) {
                nMinima = parseInt(estudiante[i].nota);
                nNombre = estudiante[i].nombre;
            }
        }
        alert("Estudiante: " + nNombre + " posee : --> " + nMinima + " ptos. como Nota Menor");
  /*      
    var newtxtH2 = document.createTextNode("Alumno: " + nNombre + " posee : --> " + nMinima + " ptos. como Menor Nota");
        newH2.appendChild(newtxtH2); //añade texto al h2 creado.
    
        tdiv.appendChild(newH2);
        newH2.setAttribute("id", "muestraV");
    //disabled("mR");
  */  
}

//Funcion de Apoyo Funcion Dinamica Generacion de Elemento Tabla y Carga de Json en ella
function cargar_Json_enTabla(json){
    
    var tblEx=document.getElementById("mitabla");
    if (document.body.contains(tblEx)) {
       tblEx.remove();
        
    }   
var divEx=document.getElementById("resulta");
    if (document.body.contains(divEx)){
        divEx.remove();
    }
   
//Declaracion de elementos dinamicos

//Creacion de Elementos del div3 "Listado de Alumnos"
    var vdiv2_3=document.createElement("div");
    document.body.append(vdiv2_3);

    var vh2_1=document.createElement("h2");
    var vh2_1txt=document.createTextNode("--Listado de Estudiantes--");
    var vhr1=document.createElement("hr");
        vh2_1.appendChild(vh2_1txt);
        vdiv2_3.appendChild(vh2_1);
        vdiv2_3.appendChild(vhr1);
        vdiv2_3.setAttribute("id", "resulta");

// Obtener la referencia del elemento div
       
       var rfdivTbl=document.getElementById("resulta");
       //var tdiv = document.getElementsByTagName("div")[2]; //id=resulta cambio 19/03/2019

// Crea un elemento <table> y un elemento <tbody>
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        //Crea la fila de la tabla
        var tblTr = document.createElement("tr"); //filas
        var cabecera=["Codigo","Nombre","Nota"];

//Crea el elemento th "cabecera de la tabla"
        var i;
        for(i=0;i<cabecera.length;i++){
            var tblTh = document.createElement("th"); //columnas
            var txtTh = document.createTextNode(cabecera[i]);
            tblTh.appendChild(txtTh);
            tblTr.appendChild(tblTh);
        }
    tblBody.appendChild(tblTr);

//---Cuerpo de la Tabla
    var k;
    for (k = 0; k < estudiante.length; k++) {
        var tblTrd = document.createElement("tr"); //filas
        
        //nuevo prueba agregar a un arreglo
       var e;
        var lineaD=[estudiante[k].codigo,estudiante[k].nombre,estudiante[k].nota]; 
            for(e=0;e<lineaD.length;e++){
                var tblTd = document.createElement("td"); //columnas
                var txtTd = document.createTextNode(lineaD[e]);
                tblTd.appendChild(txtTd);
                tblTrd.appendChild(tblTd);
                
            }
       
        tblBody.appendChild(tblTrd);
    }    
        //---
    // posiciona el <tbody> debajo del elemento <table>
    tbl.appendChild(tblBody);
    // appends <table> into <div>

    rfdivTbl.appendChild(tbl);
    tbl.setAttribute("id", "mitabla");


var refDivF=document.getElementsByTagName("div");
 //refDivF.setAttribute("id","resulta1");
    //refDivF.remove();

 //Footer Nuevo
    foot.remove();
        foot=document.createElement("footer");
        foot.setAttribute("id","foo");
    var vh4=document.createElement("h4");
    var vh4txt=document.createTextNode("--Maxiste Ledezma--");
        vh4.appendChild(vh4txt);
        foot.appendChild(vh4);
        document.body.append(foot);

    //adicionar Atributo
    //var tdiv1 = document.getElementsByTagName("div")[2]; //id=botones
        //tdiv1.setAttribute("id","resulta"); //"convierte el div de botones al de resulta"
        //disabled("rE");
        
}


//Funciones y Eventos Adicionales

//Desactiva Botones y Adicionar propiedades CSS luego de Ejecutados
function disabled(id){
    document.getElementById(id).disabled=true;
    var btdsabled=document.getElementById(id);
    btdsabled.style.background= '#d0e0e9';
    btdsabled.style.cursor='default';
    btdsabled.style.color='rgb(206, 171, 171)';
      
}
//Funcion Activa los Botones cuando sean Acordes para la Accion
function enabled(id){
    document.getElementById(id).disabled=false;
    var btnEn=document.getElementById(id);
    btnEn.style.background='#1b3746';
    btnEn.style.color='#f1f1f1';
}
function limpiarinput(){
    document.getElementById("codigo").value="";
    document.getElementById("nombre").value="";
    document.getElementById("nota").value="";
    document.getElementById("codigo").focus();
}

//Funciones de validacion para campo numerico Numerico
function validar(num1){
    if (isNaN(num1)){
        return false;
    }else{
        return true;
    }
}

    //Evento del Mouse mouseOver Borrado de linea
    /*
        function mOver_eraser(obj) {
            obj.innerHTML = " " //borrado
        }
    */