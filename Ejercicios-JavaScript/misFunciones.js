/**
 * Conversion de unidades de metros,pies, pulgadas y yardas.
 * @method cambiarunidades
 * @param (string) id - El id de los inputs de metros, pies, pulgadas o yardas.
 * @param (number) valor - El valor de los inputs de metros ,pies, pulgadas o yardas.
 * @return
 */
function cambiarunidades(id, valor){
    var metro, pie, yarda, pulgada;
if (isNaN(valor)){
    alert("se ingreso un valo invalido");
    metro = " ";
    pulgada= " ";
    pie= " ";
    yarda=" ";
}else if (id=="metro"){
    metro = valor;
    pulgada= 39.3701 * valor;
    pie= 3.28084 * valor;
    yarda= 1.09631 * valor;
}else if (id=="pulgada"){
    pulgada = valor;
    metro= 0.254 * valor;
    pie= 0.833 * valor;
   yarda= 0.277 * valor;
}else if (id=="pie"){
    pie = valor;
    metro= 0.3048 * valor;
    pulgada= 12 * valor;
    yarda= 0.333 * valor;
}else if (id=="yarda"){
    yarda = valor;
    metro= 0.914 * valor;
    pulgada= 36 * valor;
    pie= 3 * valor;
}
    document.lasUnidades.unid_metro.value= Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value= Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value= Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value= Math.round(yarda*100)/100;
}

function GraRad (id){
    var grad, rad;

    if (id=="grados"){
    grad=document.getElementById("grados").value;
    rad= (grad*Math.PI)/180;
    }

    else if (id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad= (rad*180)/Math.PI
    }
        document.getElementById("grados").value = grad;
        document.getElementById("radianes").value = rad;
}

function MostrarOcultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }
    else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}

function calcularsuma(){
    var num1,num2;
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML=num1+num2;
}

function calcularresta(){
    var num1,num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML=num1-num2;
}

function calcularproducto() {
    var num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1*num2;
}

function calculardiv() {
    var num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1/num2;
}

function cargarweb(){
    var cant,unidad,urlcomp;
    cant=document.getElementById("distancia").value;
    unidad=document.getElementsByName("unidades")[0].value;
    urlcomp="segundaWeb.html#" + cant + "#" + unidad ;
    window.open(urlcomp);
}
function cargaresultado(){
    var urlcomp,can,un;
   urlcomp=window.location.href.split("/")[5];
    can=urlcomp.split("#")[1];
    un=urlcomp.split("#")[2];
    document.getElementById("dist").value=can + " " + un;
}

function dibujarcircuad(){
    var canvas=document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");
    var margen=5;
    var ymax=canvas.height;
    var xmax=canvas.width;

    ctx.fillStyle="#333899";
    ctx.fillRect(0+margen,ymax-40-margen,40,40);

    ctx.arc(xmax/2,ymax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle="#33995f";
    ctx.fill();

}

function dibujarcuadriculado(){
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");

    var alturamax=canvas.height;
    var anchomax=canvas.width;

    ctx.beginPath();
    for(var i=0;i<alturamax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(1000, i);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();


    ctx.beginPath();
    for(var i=0;i<anchomax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturamax);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();


    ctx.beginPath();
    ctx.moveTo(0,alturamax/2);
    ctx.lineTo(anchomax, alturamax/2);
    ctx.strokeStyle = "#ff010d";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(anchomax/2,0);
    ctx.lineTo(anchomax/2, alturamax);
    ctx.strokeStyle = "#ff010d";
    ctx.stroke();
    ctx.closePath();

}