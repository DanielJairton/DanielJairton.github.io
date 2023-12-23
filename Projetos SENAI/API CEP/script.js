
function pesquisar(){
    let cep = document.getElementById('input-cep').value;
    cep = cep.replace(/-/g, "");
    dados(cep)
}

async function dados(cep){
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    inserirDados(dados)
}

function inserirDados(dados){
    document.getElementById('input-endereco').value = dados.logradouro;
    document.getElementById('input-bairro').value = dados.bairro;
    document.getElementById('input-cidade').value = dados.localidade;
    document.getElementById('input-estado').value = dados.uf;
}

