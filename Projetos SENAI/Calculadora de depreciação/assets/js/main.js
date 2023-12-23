//Varriáveis para cálculo
var valorTotal = document.getElementById('input-valorTotal');
var valorSucata = document.getElementById('input-valorSucata');
var vidaUtil = document.getElementById('input-vidaUtil');
var tempoUso = document.getElementById('input-tempoUso');

//Variável para resultado
var depreciacao = document.getElementById('input-depreciacao');

//Inputs requeridos
var inputsRequeridos = document.querySelectorAll("[dadoRequerido='true']");

function testeInputs(inputsRequeridos){
    let contador = 0;
    for (let index = 0; index < inputsRequeridos.length; index++) {
        if (inputsRequeridos[index].value == "" || inputsRequeridos[index].value <= 0) {
            // inputsRequeridos[index].style.border = ".5px solid red";
            inputsRequeridos[index].className = "input-invalido";
            contador = contador+1;
        }
        else{
            // inputsRequeridos[index].style.border = ".5px solid black";
            inputsRequeridos[index].className = "";
        }
    }

    if(valorSucata.value == "" || valorSucata.value < 0){
        // valorSucata.style.border = ".5px solid red";
        valorSucata.className = "input-invalido";
        contador = contador+1;
    }
    else{
        valorSucata.className = "";
    }


    if (contador > 0) {
        document.getElementById('label-aviso').style.visibility = 'visible';
        return false;
    }
    else{
        document.getElementById('label-aviso').style.visibility = 'hidden';
        return true;
    }
}

document.getElementById('btn-calcular').addEventListener('click', function(){
    // testeInputs(inputsRequeridos);
    if (testeInputs(inputsRequeridos) == false) {
        return;
    }

    //Taxa de depreciação - Máquinas e equipamentos (10%)

    //Calculo
    document.getElementById('input-depreciacao').value = ((valorTotal.value-valorSucata.value)/vidaUtil.value)*(tempoUso.value/12);
    document.getElementById('input-valorContabil').value = valorTotal.value-(((valorTotal.value-valorSucata.value)/vidaUtil.value)*(tempoUso.value/12));
    document.getElementById('input-depreciacaoAnual').value = (valorTotal.value-valorSucata.value)/vidaUtil.value;
    document.getElementById('input-depreciacaoMensal').value = ((valorTotal.value-valorSucata.value)/vidaUtil.value)/12;
    
})