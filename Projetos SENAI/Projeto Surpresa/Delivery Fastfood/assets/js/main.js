//Eventos
document.getElementById('btn-addBebida').addEventListener('click', function(){
    criarItensTabela(0);
});
document.getElementById('btn-addLanche').addEventListener('click', function(){
    criarItensTabela(1);
});

//Criar itens na tabela
//Incompleto
function criarItensTabela(secao){
    if (valorTotalLinha == 0) {
        console.log("Entrada inválida");
        return;
    }
    // console.log("Criar Itens Tabela");
    const tabelaPedidos = document.getElementById('table-pedido');

    //Inserir itens da seção de bebidas na tabela
    if (secao == 0) {
        carregarPrecoBebida();
        var campoProduto = document.getElementById('select-bebidas');
        var campoUnidade = document.getElementById('select-tamanhoBebidas');
        var campoPrecoUn = document.getElementById('input-unBebidas');
        var campoQuantidade = document.getElementById('input-quantBebidas');
        var campoTotalLinha = document.getElementById('input-totalBebidas');
    }
    //Inserir itens da seção de lanches na tabela
    else{
        carregarPrecoLanche();
        var campoProduto = document.getElementById('select-tipolanches');
        var campoUnidade = document.getElementById('select-porcaoLanche');
        var campoPrecoUn = document.getElementById('input-unLanches');
        var campoQuantidade = document.getElementById('input-quantLanches');
        var campoTotalLinha = document.getElementById('input-totalLanches');
    }

    const linha = document.createElement('tr');
    linha.className = "table table-info";

    const tdProduto = document.createElement('td');
    tdProduto.className = "table-info";
    const tdUnidade = document.createElement('td');
    tdUnidade.className = "table-info";
    const tdPrecoUn = document.createElement('td');
    tdPrecoUn.className = "table-info";
    const tdQuantidade = document.createElement('td');
    tdQuantidade.className = "table-info";
    const tdTotal = document.createElement('td');
    tdTotal.className = "table-info";

    tdProduto.innerHTML = campoProduto.options[campoProduto.selectedIndex].text;
    tdUnidade.innerHTML = campoUnidade.options[campoUnidade.selectedIndex].text;
    tdQuantidade.innerHTML = campoQuantidade.value;
    tdPrecoUn.innerHTML = campoPrecoUn.value;
    tdTotal.innerHTML = campoTotalLinha.value;

    linha.appendChild(tdProduto);
    linha.appendChild(tdUnidade);
    linha.appendChild(tdPrecoUn);
    linha.appendChild(tdQuantidade);
    linha.appendChild(tdTotal);
    tabelaPedidos.appendChild(linha);

    const campoTotalTabela = document.getElementById('input-total');
    valorTotalTabela = valorTotalTabela+valorTotalLinha;
    campoTotalTabela.value = "R$ " + valorTotalTabela;
}

// console.log(document.getElementById('select-bebidas').options[document.getElementById('select-bebidas').selectedIndex].text);