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
        if (inputsRequeridos[index].value == "" || inputsRequeridos[index].value < 0) {
            inputsRequeridos[index].style.border = ".5px solid red"
            contador = contador+1;
        }
        else{
            inputsRequeridos[index].style.border = ".5px solid black"
        }
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

    //Calculo
    
})