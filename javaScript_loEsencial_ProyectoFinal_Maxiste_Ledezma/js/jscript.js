/*
JavaScript Proyecto Final de Curso
*/
//Definicion del Json del Proyecto
var estudiante =[{
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
    "codigo":"e0005",
    "nombre":"Alfonzo Zacarias",
    "nota":70
},{
    "codigo":"e0006",
    "nombre":"Maura Bracamonte",
    "nota":60
},{
    "codigo":"e0007",
    "nombre":"Maximo Ledezma",
    "nota":65
},{
    "codigo":"e0008",
    "nombre":"Miurys Cardozo",
    "nota":45
},{
    "codigo":"e0009",
    "nombre":"Leopoldo Betancourt",
    "nota":85
},{
    "codigo":"e0010",
    "nombre":"Tommy Lee Ledezma",
    "nota":90
}];
//Definicion de Funciones 

function mostrarEstudiantes(){
   cargar_Json_enTabla(estudiante);
   //genera_tabla();

}

//Funcion Calcular el promedio de Notas de la Clase de una muestra de 10 Alumnos
function calcularNotas(json){
    
    var newH2 = document.createElement("H2");
    //adicionar Atributo
    var tdiv = document.getElementsByTagName("div")[2]; //botones
  

    var i;
    notaP=0;
    nPromedio=0;
    for(i=0;i<estudiante.length;i++){
        notaP+=estudiante[i].nota;
       
    }
    nPromedio = notaP / estudiante.length;
    var newtxtH2 = document.createTextNode("Esta es la Nota Promedio del Salon: --> " + nPromedio);
    newH2.appendChild(newtxtH2); //añade texto al h2 creado.
    newH2.setAttribute("id", "muestraV");
    tdiv.appendChild(newH2);
    disabled("cN");
    
}

//Funcion Calcular Nota Mayor del Salon de Clase
function mostrarEst_MayorNota(json){
   
        var newH2 = document.createElement("H2");
        //adicionar Atributo
        var tdiv = document.getElementsByTagName("div")[2]; //Resultados

        var i;
        nMaxima=0;

        for (var i = 0;i<estudiante.length; i++) {
            if (nMaxima < estudiante[i].nota) {
                nMaxima = estudiante[i].nota;
                nNombre=estudiante[i].nombre;
            }
        }

    var newtxtH2 = document.createTextNode("Alumno: " + nNombre +" posee : --> " + nMaxima+"ptos. como Mayor Nota");
        newH2.appendChild(newtxtH2); //añade texto al h2 creado.
        newH2.setAttribute("id", "muestraV");
        tdiv.appendChild(newH2);
    disabled("mM");
   

}

//Funcion Calcular Nota Menor del Salon de Clase
function mostrarEst_MenorNota(){
   
        var newH2 = document.createElement("H2");
        //adicionar Atributo
        var tdiv = document.getElementsByTagName("div")[2]; //botones
        var i;
        nMinima=100;

        for (var i = 0; i < estudiante.length; i++) {
        
            if (nMinima > estudiante[i].nota) {
                nMinima = estudiante[i].nota;
                nNombre = estudiante[i].nombre;
            }
        }
    var newtxtH2 = document.createTextNode("Alumno: " + nNombre + " posee : --> " + nMinima + "ptos. como Menor Nota");
        newH2.appendChild(newtxtH2); //añade texto al h2 creado.
    
        tdiv.appendChild(newH2);
        newH2.setAttribute("id", "muestraV");
    disabled("mR");
}

//Funcion de Apoyo Funcion Dinamica Generacion de Elemento Tabla y Carga de Json en ella
function cargar_Json_enTabla(json){
    //Declaracion de elementos dinamicos
    // Obtener la referencia del elemento div
       var tdiv = document.getElementsByTagName("div")[0];
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
    tdiv.appendChild(tbl);
    tbl.setAttribute("id", "mitabla");

    //adicionar Atributo
    var tdiv1 = document.getElementsByTagName("div")[1];
        tdiv1.setAttribute("id","resulta");
        disabled("mE");
        
 
}
//Funciones y Eventos Adicionales
//Evento del Mouse mouseOver Borrado
function mOver_eraser(obj) {
    obj.innerHTML = " " //borrado
}

//Desactiva Botones luego de Ejecutados
function disabled(id){
    document.getElementById(id).disabled=true;
}



