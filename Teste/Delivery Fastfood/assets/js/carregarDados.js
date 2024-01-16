//Variáveis da tabela
var precoUnLinha = 0;
var valorTotalLinha = 0;
var valorTotalTabela = 0;

//Carrega os dados no select select-bebidas
function carregarTiposBebida(){
    const selectTipoBebidas = document.getElementById('select-bebidas');
    selectTipoBebidas.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "Selecione";
    selectTipoBebidas.add(optFirst);

    tiposBebida.forEach(function(tipoBebida){
        var opt = document.createElement('option');
        opt.value = tipoBebida.idTipoBebida;
        opt.text = tipoBebida.tipoBebida;
        selectTipoBebidas.add(opt);
    })
    carregarTamanhoBebidas();
}

//Carregar os dados no select select-tamanhoBebidas
function carregarTamanhoBebidas(){
    const selectTamanhoBebidas = document.getElementById('select-tamanhoBebidas');
    selectTamanhoBebidas.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "Selecione";
    selectTamanhoBebidas.add(optFirst);

    const valorTipoBebidas = document.getElementById('select-bebidas').value;
    const tamanhoBebidasFiltrado = tamanhosBebida.filter((t)=>t.idTipoBebida==valorTipoBebidas);

    tamanhoBebidasFiltrado.forEach(function(tamanhoBebida){
        var opt = document.createElement('option');
        opt.value = tamanhoBebida.idTamanhoBebida;
        opt.text = tamanhoBebida.tamanho;
        selectTamanhoBebidas.add(opt);
    })

    carregarPrecoBebida();
    criarTabelaPrecos(0);
}

//Carrega o preço unitário e total de bebidadas
function carregarPrecoBebida(){
    let valorSelectTamanho = document.getElementById('select-tamanhoBebidas').value;
    let quantidadeBebida = document.getElementById('input-quantBebidas').value;

    //Testa a validade da opção selecionada e o valor da quatidade
    if (valorSelectTamanho >= 1 && quantidadeBebida > 0 && Number.isInteger(parseFloat(quantidadeBebida))) {
        precoUnLinha = tamanhosBebida[valorSelectTamanho-1].precoUn;
        valorTotalLinha = precoUnLinha*quantidadeBebida;
    }
    else{
        precoUnLinha = 0;
        valorTotalLinha = 0;
    }
    document.getElementById('input-unBebidas').value = "R$ " + precoUnLinha;
    document.getElementById('input-totalBebidas').value = "R$ " + valorTotalLinha;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Carregar os dados no select select-tipolanches
function carregarTiposLanche(){
    const selectTipoLanches = document.getElementById('select-tipolanches');
    selectTipoLanches.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "Selecione";
    selectTipoLanches.add(optFirst);

    tiposLanche.forEach(function(tipoLanche){
        var opt = document.createElement('option');
        opt.value = tipoLanche.idTipoLanche;
        opt.text = tipoLanche.tipoLanche;
        selectTipoLanches.add(opt);
    })
    carregarPorcaoLanche();
}

//Carregar os dados no select select-porcaoLanche
function carregarPorcaoLanche(){
    const selectPorcaoLanche = document.getElementById('select-porcaoLanche');
    selectPorcaoLanche.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "Selecione";
    selectPorcaoLanche.add(optFirst);

    const valorTipoLanche = document.getElementById('select-tipolanches').value;
    const porcaoLanchesFiltrado = porcaoLanche.filter((p)=>p.idTipoLanche==valorTipoLanche);

    porcaoLanchesFiltrado.forEach(function(porcaoLanche){
        var opt = document.createElement('option');
        opt.value = porcaoLanche.idPorcaoLanche;
        opt.text = porcaoLanche.porcao;
        selectPorcaoLanche.add(opt);
    })

    carregarPrecoLanche();
    criarTabelaPrecos(1);
}

//Carregar o preço unitário e total do lanche
function carregarPrecoLanche(){
    let valorSelectPorcao = document.getElementById('select-porcaoLanche').value;
    let quantidadeLanche = document.getElementById('input-quantLanches').value;

    //Testa a validade da opção selecionada e o valor da quatidade
    if (valorSelectPorcao >= 1 && quantidadeLanche > 0 && Number.isInteger(parseFloat(quantidadeLanche))) {
        precoUnLinha = porcaoLanche[valorSelectPorcao-1].precoUn;
        valorTotalLinha = precoUnLinha*quantidadeLanche;
    }
    else{
        precoUnLinha = 0;
        valorTotalLinha = 0;
    }
    document.getElementById('input-unLanches').value = "R$ " + precoUnLinha;
    document.getElementById('input-totalLanches').value = "R$ " + valorTotalLinha;
}