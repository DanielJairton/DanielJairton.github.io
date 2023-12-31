var numeroLinha = 0;
//Criar itens na tabela
function criarItensTabela(secao){
    if (valorTotalLinha == 0) {
        // console.log("Entrada inválida");
        return;
    }
    // console.log("Criar Itens Tabela");
    const tabelaPedidos = document.getElementById('table-pedido');

    //Inserir itens da seção de bebidas na tabela
    if (secao == 0) {
        //Chamo a função carregarPrecoBebida() para garantiar a validação dos valores
        carregarPrecoBebida();
        var campoProduto = document.getElementById('select-bebidas');
        var campoUnidade = document.getElementById('select-tamanhoBebidas');
        var campoPrecoUn = document.getElementById('input-unBebidas');
        var campoQuantidade = document.getElementById('input-quantBebidas');
        var campoTotalLinha = document.getElementById('input-totalBebidas');
    }
    //Inserir itens da seção de lanches na tabela
    else{
        //Chamo a função carregarPrecoLanche() para garantiar a validação dos valores
        carregarPrecoLanche();
        var campoProduto = document.getElementById('select-tipolanches');
        var campoUnidade = document.getElementById('select-porcaoLanche');
        var campoPrecoUn = document.getElementById('input-unLanches');
        var campoQuantidade = document.getElementById('input-quantLanches');
        var campoTotalLinha = document.getElementById('input-totalLanches');
    }

    const linha = document.createElement('tr');
    linha.className = "";

    const tdProduto = document.createElement('td');
    tdProduto.className = "table-info cellPedido";
    const tdUnidade = document.createElement('td');
    tdUnidade.className = "table-info cellPedido";
    const tdPrecoUn = document.createElement('td');
    tdPrecoUn.className = "table-info cellPedido";
    const tdQuantidade = document.createElement('td');
    tdQuantidade.className = "table-info cellPedido";
    const tdTotal = document.createElement('td');
    tdTotal.className = "table-info cellPedido";

    const btnRemoverLinha = document.createElement('td');

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
    linha.appendChild(criarBtnRemoverLinha(tabelaPedidos, linha, numeroLinha));

    tabelaPedidos.appendChild(linha);

    const campoTotalTabela = document.getElementById('input-total');
    valorTotalTabela = valorTotalTabela+valorTotalLinha;
    campoTotalTabela.value = "R$ " + valorTotalTabela;

    numeroLinha = numeroLinha+1;
}

//Retorna btnRemoverLinha
function criarBtnRemoverLinha(tabela, objLinha, numeroLinha){
    var btnRemoverLinha = document.createElement('td');
        btnRemoverLinha.className = "cellBtn";
        btnRemoverLinha.innerHTML = "<button class='btnRemoverLinha' id='btnRemoverLinha" + numeroLinha + "'>X</button>";
    
    btnRemoverLinha.addEventListener('click', function(){
        if (objLinha && tabela.contains(objLinha)) {
            tabela.removeChild(objLinha);

            var colunas = objLinha.getElementsByTagName('td');
            let valorTotalLinhaTexto = colunas[4].innerText;
            valorTotalTabela = valorTotalTabela - parseFloat(valorTotalLinhaTexto.replace("R$ ", ""));
            document.getElementById('input-total').value = "R$ " + valorTotalTabela;
        }

        objLinha.appendChild(btnRemoverLinha);
    })
    return btnRemoverLinha;
}

//Cria uma tabela com os preços do tipo de produto selecionado
function criarTabelaPrecos(secao){

    //Para a seção de bebidas

    if (secao == 1) {
        var tabelaPrecos = document.getElementById('table-precoBebida');

        //Remove as linhas antigas da tabela de preços
        let linhasAntigas = document.querySelectorAll('.linhaPrecoBebida');
        linhasAntigas.forEach(function (linhaAntiga) {
            tabelaPrecos.removeChild(linhaAntiga)
        })

        //Validção da opção selecionada
        var selectTipo = document.getElementById('select-bebidas');
        if ( selectTipo.options[selectTipo.selectedIndex].value > -1) {
            // console.log("Opção válida " + selectTipo.options[selectTipo.selectedIndex].value);
        }
        else{
            // console.log("Opção inválida" + selectTipo.options[selectTipo.selectedIndex].value);
            return;
        }

        var campoProduto = document.getElementById('select-bebidas');
        var campoUnidade = document.getElementById('select-tamanhoBebidas');
        var classeLinhaPreco = "linhaPrecoBebida";

        let valorTipo = document.getElementById('select-bebidas').value;
        var dadosUnidadesFiltrados = tamanhosBebida.filter((d)=>d.idTipoBebida == valorTipo);
        // console.log(dadosUnidadesFiltrados);
    }
    //Para a seção de lanches
    else{
        var tabelaPrecos = document.getElementById('table-precoLanche');

        //Remove as linhas antigas da tabela de preços

        let linhasAntigas = document.querySelectorAll('.linhaPrecoLanche');
        linhasAntigas.forEach(function (linhaAntiga) {
            tabelaPrecos.removeChild(linhaAntiga)
        })

        //Validção da opção selecionada
        var selectTipo = document.getElementById('select-tipolanches');
        if ( selectTipo.options[selectTipo.selectedIndex].value > -1) {
            // console.log("Opção válida " + selectTipo.options[selectTipo.selectedIndex].value);
        }
        else{
            // console.log("Opção inválida" + selectTipo.options[selectTipo.selectedIndex].value);
            return;
        }

        var campoProduto = document.getElementById('select-tipolanches');
        var campoUnidade = document.getElementById('select-porcaoLanche');
        var classeLinhaPreco = "linhaPrecoLanche";
        
        let valorTipo = document.getElementById('select-tipolanches').value;
        var dadosUnidadesFiltrados = porcaoLanche.filter((d)=>d.idTipoLanche == valorTipo);
        // console.log(dadosUnidadesFiltrados);
    }

    // let linha = document.createElement('tr');

    // let tdProduto = document.createElement('td');
    // tdProduto.className = "table-warning cellPreco";
    // let tdUnidade = document.createElement('td');
    // tdUnidade.className = "table-warning cellPreco";
    // let tdPreco = document.createElement('td');
    // tdPreco.className = "table-warning cellPreco";

    // tdProduto.innerHTML = campoProduto.options[campoProduto.selectedIndex].text;

    let listaOpUnidades = campoUnidade.options;
    // console.log(listaOpUnidades);
    
    for (let index = 1; index < listaOpUnidades.length; index++) {

        let linha = document.createElement('tr');
        linha.className = classeLinhaPreco;

        let tdProduto = document.createElement('td');
        tdProduto.className = "table-warning cellPreco";
        tdProduto.style.marginLeft = "5px";
        let tdUnidade = document.createElement('td');
        tdUnidade.className = "table-warning cellPreco";
        let tdPreco = document.createElement('td');
        tdPreco.className = "table-warning cellPreco";

        // console.log(listaOpUnidades[index].text);
        
        tdProduto.innerHTML = campoProduto.options[campoProduto.selectedIndex].text;
        tdUnidade.innerHTML = listaOpUnidades[index].text;
        tdPreco.innerHTML = "R$ " + dadosUnidadesFiltrados[index-1].precoUn;

        linha.appendChild(tdProduto);
        linha.appendChild(tdUnidade);
        linha.appendChild(tdPreco);

        tabelaPrecos.appendChild(linha);

    }

}

document.getElementById('input-total').value = "R$ " + 0;