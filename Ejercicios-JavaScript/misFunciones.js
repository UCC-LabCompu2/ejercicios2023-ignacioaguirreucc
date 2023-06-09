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