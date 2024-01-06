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
}

//Carrega o preço unitário e total de bebidadas
function carregarPrecoBebida(){
    let valorSelectTamanho = document.getElementById('select-tamanhoBebidas').value;
    let quantidadeBebida = document.getElementById('input-quantBebidas').value;

    if (valorSelectTamanho >= 1 && quantidadeBebida > 0) {
        let precoUn = tamanhosBebida[valorSelectTamanho-1].precoUn;
        document.getElementById('input-unBebidas').value = "R$ " + precoUn;
        document.getElementById('input-totalBebidas').value = "R$ " + precoUn*quantidadeBebida;
    }
    else{
        document.getElementById('input-unBebidas').value = "R$ " + 0;
        document.getElementById('input-totalBebidas').value = "R$ " + 0;
    }
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
}

//Carregar o preço unitário e total do lanche
function carregarPrecoLanche(){
    let valorSelectPorcao = document.getElementById('select-porcaoLanche').value;
    let quantidadeLanche = document.getElementById('input-quantLanches').value;

    if (valorSelectPorcao >= 1 && quantidadeLanche > 0) {
        let precoUn = porcaoLanche[valorSelectPorcao-1].precoUn;
        document.getElementById('input-unLanches').value = "R$ " + precoUn;
        document.getElementById('input-totalLanches').value = "R$ " + precoUn*quantidadeLanche;
    }
    else{
        document.getElementById('input-unLanches').value = "R$ " + 0;
        document.getElementById('input-totalLanches').value = "R$ " + 0;
    }
}

carregarTiposBebida();
carregarTiposLanche();