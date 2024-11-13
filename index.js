
//Calculadora IMC-by: davidoberst



console.log("js loaded");

function calcular() {
    let estatura = parseFloat(document.getElementById("estatura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let resultado = (peso / (estatura * estatura));
    let diagnostico = "";

    if (isNaN(estatura) || estatura <= 0 || isNaN(peso) || peso <= 0) {
        document.getElementById("resultado").innerHTML = "No introdujo ningun valor";
    } else {
        document.getElementById("resultado").innerHTML = ("Tu IMC es: " + resultado.toFixed(2));
    }

    if (resultado < 18.5) {
        diagnostico = "Peso bajo";
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        diagnostico = "Peso normal";
    } else if (resultado >= 25.0 && resultado <= 29.9) {
        diagnostico = "Sobrepeso";
    } else if (resultado > 30.0) {
        diagnostico = "Obesidad";
    }

    document.getElementById("diagnostico").innerHTML = "Diagnóstico: " + diagnostico;

   
    document.getElementById("resultado").scrollIntoView({
        behavior: "smooth",  
        block: "start"      
    });
}














