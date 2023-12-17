//Criar constantes
const inputsTexto = document.querySelectorAll('.input-texto')
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const spansInvalido = document.querySelectorAll('.span-invalido')


//Mostrar e esconder aviso de erro
function verErroInputTexto(index){
    inputsTexto[index].style.border = '2px solid red'//#e6363
    spansInvalido[index].style.display = 'block'
}
function removerErroInputTexto(index){
    inputsTexto[index].style.border = '1px solid #59429d'
    spansInvalido[index].style.display = 'none'
}


function validarNome() {
    if(inputsTexto[0].value.length < 2){
        verErroInputTexto(0)
    }
    else{
        removerErroInputTexto(0)
    }
}

function validarSobrenome() {
    if(inputsTexto[1].value.length < 2){
        verErroInputTexto(1)
    }
    else{
        removerErroInputTexto(1)
    }
}

function validarEmail(){
    if(emailregex.test(inputsTexto[2].value)){
        removerErroInputTexto(2)
    }
    else{
        verErroInputTexto(2)
    }
}

function validarExperiencia() {
    if(inputsTexto[3].value.length < 2){
        verErroInputTexto(3)
    }
    else{
        removerErroInputTexto(3)
    }
}


function validarRadio(){
    if (document.getElementById('frontend').checked || document.getElementById('backend').checked
        || document.getElementById('fullstack').checked) {
        document.getElementById('label-radio').style.display = 'none'
    }
    else{
        document.getElementById('label-radio').style.display = 'block'
    }
}

function validarSenioridade(){
    if(document.getElementById('senioridade').value == ""){
        //console.log('teste')
        document.getElementById('label-senioridade').style.display = 'block'
    }
    else{
        document.getElementById('label-senioridade').style.display = 'none'
    }
}

//Checa se pelo menos duas checkboxes foram selecionada
function validarCheckbox(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    if (checkboxes.length < 2) {
        document.getElementById('label-checkbox').style.display = 'block'
        document.getElementById('div-checkbox').style.border = '2px solid red'
    }
    else{
        document.getElementById('label-checkbox').style.display = 'none'
        document.getElementById('div-checkbox').style.border = '2px none red'
    }
}


const form = document.getElementById('formulario')
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validarNome();
    validarSobrenome();
    validarEmail();
    validarRadio();
    validarSenioridade();
    validarCheckbox();
    validarExperiencia();
})