/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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