/**
 * Conversion de unidades de metros,pies, pulgadas y yardas.
 * @method cambiarunidades
 * @param (string) id - El id de los inputs de metros, pies, pulgadas o yardas.
 * @param (number) valor - El valor de los inputs de metros ,pies, pulgadas o yardas.
 * @return
 */
function cambiarunidades(id, valor){
if (isNaN(valor)){
    alert("se ingreso un valo invalido");
    document.lasUnidades.unid_metro.value = " ";
    document.lasUnidades.unid_pulgada.value= " ";
    document.lasUnidades.unid_pie.value= " ";
    document.lasUnidades.unid_yarda.value=" ";
}else if (id=="metro"){
    document.lasUnidades.unid_pulgada.value= 39.3701 * valor;
    document.lasUnidades.unid_pie.value= 3.28084 * valor;
    document.lasUnidades.unid_yarda.value= 1.09631 * valor;
}else if (id=="pulgada"){
    document.lasUnidades.unid_metro.value= 0.254 * valor;
    document.lasUnidades.unid_pie.value= 0.833 * valor;
    document.lasUnidades.unid_yarda.value= 0.277 * valor;
}else if (id=="pie"){
    document.lasUnidades.unid_metro.value= 0.3048 * valor;
    document.lasUnidades.unid_pulgada.value= 12 * valor;
    document.lasUnidades.unid_yarda.value= 0.333 * valor;
}else if (id=="yarda"){
    document.lasUnidades.unid_metro.value= 0.914 * valor;
    document.lasUnidades.unid_pulgada.value= 36 * valor;
    document.lasUnidades.unid_pie.value= 3 * valor;
}
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
    num1=document.getElementsByName("sum_num1")[0].value;
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value=Number(num1)+Number(num2);
}

function calcularresta(){
    var num1,num2;
    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value=Number(num1)-Number(num2);
}

function calcularproducto() {
    var num1, num2;
    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value = Number(num1) + Number(num2);
}

function calculardiv() {
    var num1, num2;
    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value = Number(num1) + Number(num2);
}