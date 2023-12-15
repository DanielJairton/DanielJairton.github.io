//Criar constantes

const form = document.getElementById('formulario')
const campos = document.querySelectorAll('.inputs')
const spans = document.querySelectorAll('.span-required')
const spansValid = document.querySelectorAll('.span-valid')
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
//Expressão regular regex

//Validar todos os campos antes de enviar
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validarNome();
    validarEmail();
    validarSenha();
    validarRepetirSenha();
})


//Mostra a mensagem em caso de erro no preenchimento
function verErro(index){
    campos[index].style.border = '2px solid red'//#e6363
    spans[index].style.display = 'block'
    spansValid[index].style.display = 'none'
}

function removerErro(index){
    campos[index].style.border = '2px solid rgb(4, 199, 4)'//#e6363
    spans[index].style.display = 'none'
    spansValid[index].style.display = 'block'
}

//Criar função validar nome
function validarNome() {
    if(campos[0].value.length < 5){
        verErro(0)
    }
    else{
        removerErro(0)
    }
}

//Função validar email
function validarEmail(){
    if(emailregex.test(campos[1].value)){
        removerErro(1)
    }
    else{
        verErro(1)
    }
}

//Função validar campo senha
function validarSenha() {
    if(campos[2].value.length < 6){
        verErro(2)
    }
    else{
        removerErro(2)
        validarRepetirSenha()
    }
}

//Função validar campo repetir senha

function validarRepetirSenha() {
    if(campos[2].value != campos[3].value || campos[3].value.length < 6){
        verErro(3)
    }
    else{
        removerErro(3)
    }
}