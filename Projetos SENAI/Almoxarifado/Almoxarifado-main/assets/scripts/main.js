
//Muda a cor de fundo dos input com mudarCor="true"
function adicionarCorAoFocarInput(){
    const listInput = document.querySelectorAll("[mudarCor='true']");
    listInput.forEach(function(item){
        item.addEventListener('focus', function(){
            item.style.backgroundColor = "lightgreen";
        });
        item.addEventListener('blur', function(){
            item.style.backgroundColor = "white";
        });
    })
}

//Carrega as categorias
function carregarCategorias(){
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectCategoria.add(optFirst);

    categorias.forEach(function(categoria){
        var opt = document.createElement('option');
        opt.value = categoria.idCategoria;
        opt.text = categoria.descricao;
        selectCategoria.add(opt);
    })

}

//Carrega os motivos
function carregarMotivos(){
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectMotivo.add(optFirst);

    const valorCategoria = document.getElementById('categoriaMotivo').value;
    console.log ("Categoria Selecionada: " + valorCategoria);
    const motivosFiltrados = motivos.filter((m)=>m.idCategoria==valorCategoria);

    motivosFiltrados.forEach(function(motivo){
        const opt = document.createElement('option');
        opt.value = motivo.idMotivo;
        opt.text = motivo.descricao;
        selectMotivo.add(opt);
    })
}
document.getElementById('categoriaMotivo').addEventListener('change', function(){
    carregarMotivos();
})

//Checa o id e se existir um id igual carregar os dados do produto
document.getElementById('CodigoProduto').addEventListener('keyup', function(){
    const codigoPesquisado = document.getElementById('CodigoProduto').value;
    let produtosFiltrados = produtos.filter((p)=>p.idProduto == codigoPesquisado);

    if (produtosFiltrados.length>0) {
        document.getElementById('DescricaoProduto').value = produtosFiltrados[0].Descricao;
        document.getElementById('Estoque').value = produtosFiltrados[0].Estoque;

        //Mostra o status do estoque com cores
        if (document.getElementById('Estoque').value > produtosFiltrados[0].EstoqueMinimo*1.1) {
            document.getElementById('verde').style.display = 'inline';
            document.getElementById('amarelo').style.display = 'none';
            document.getElementById('vermelho').style.display = 'none';
            console.log("verde");
        }
        else if(document.getElementById('Estoque').value >= produtosFiltrados[0].EstoqueMinimo*0.9){
            document.getElementById('verde').style.display = 'none';
            document.getElementById('amarelo').style.display = 'inline';
            document.getElementById('vermelho').style.display = 'none';
            console.log("amarelo");
        }
        else{
            document.getElementById('verde').style.display = 'none';
            document.getElementById('amarelo').style.display = 'none';
            document.getElementById('vermelho').style.display = 'inline';
            console.log("vermelho");
        }
    }
    else{
        document.getElementById('verde').style.display = 'none';
        document.getElementById('amarelo').style.display = 'none';
        document.getElementById('vermelho').style.display = 'none';
        document.getElementById('DescricaoProduto').value = ""
        document.getElementById('Estoque').value = ""
    }
})

//Checa o id e se existir um id igual carregar os dados
document.getElementById('idDepartamento').addEventListener('keyup', function(){
    const codigoPesquisado = document.getElementById('idDepartamento').value;
    let departamentosFiltrados = departamentos.filter((p)=>p.idDep == codigoPesquisado);

    if (departamentosFiltrados.length>0) {
        document.getElementById('departamento').value = departamentosFiltrados[0].descricao;
    }
    else{
        document.getElementById('departamento').value = ""
    }
})

//Checa o id e se existir um id igual carregar os dados
document.getElementById('idFuncionario').addEventListener('keyup', function(){
    const codigoPesquisado = document.getElementById('idFuncionario').value;
    let funcionariosFiltrados = funcionarios.filter((p)=>p.idFuncionario == codigoPesquisado);

    if (funcionariosFiltrados.length>0) {
        document.getElementById('NomeFuncionario').value = funcionariosFiltrados[0].nome;
        document.getElementById('cargo').value = funcionariosFiltrados[0].cargo;
    }
    else{
        document.getElementById('NomeFuncionario').value = ""
        document.getElementById('cargo').value = ""
    }
})

//Checa se os campos estão preenchidos de forma válida
document.getElementById('btnGravar').addEventListener('click', function(){
    const elementosObrigatorios = document.querySelectorAll('[data-obrigatorio="true"]');
    console.log(elementosObrigatorios);

    elementosObrigatorios.forEach(function(item){
        if(item.value=="" || item.value==-1){
            item.style.backgroundColor='red';
        }
    })

    const chkUrgenteValue = document.getElementById('urgente').checked;
    const chkMedioValue = document.getElementById('medio').checked;
    const chkBaixoValue = document.getElementById('baixo').checked;
    if (chkUrgenteValue==false && chkMedioValue==false && chkBaixoValue==false){
        const divPrioridade = document.getElementById("radioPrioridade");        
        divPrioridade.classList.remove('radioPrioridade');
        divPrioridade.classList.add('radioPrioridadeDesabilitado');        
        document.getElementById('urgente').classList.remove('chkPrioridade');
        document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.remove('chkPrioridade');
        document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.remove('chkPrioridade');
        document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
    }
    else{
        const divPrioridade = document.getElementById("radioPrioridade");
        divPrioridade.classList.remove('radioPrioridadeDesabilitado');
        divPrioridade.classList.add('radioPrioridade');
    }
});

//Mudar a cor de volta para o normal quando preenchido
document.getElementById('urgente').addEventListener('click', function(){
    const divPrioridade2 = document.getElementById("radioPrioridade");
    divPrioridade2.classList.remove('radioPrioridadeDesabilitado');
    divPrioridade2.classList.add('radioPrioridade');
})
document.getElementById('medio').addEventListener('click', function(){
    const divPrioridade2 = document.getElementById("radioPrioridade");
    divPrioridade2.classList.remove('radioPrioridadeDesabilitado');
    divPrioridade2.classList.add('radioPrioridade');
})
document.getElementById('baixo').addEventListener('click', function(){
    const divPrioridade2 = document.getElementById("radioPrioridade");
    divPrioridade2.classList.remove('radioPrioridadeDesabilitado');
    divPrioridade2.classList.add('radioPrioridade');
})

//Constante do valor total de requisição, zerado para evitar erro
const totalRequisicao = document.getElementById('total')
totalRequisicao.value = 0


function criarBtnRemover(tabela, objLinha, numeroLinha){
    const btnRemoverItem = document.createElement('div');
        btnRemoverItem.className = "BtnRemover";
        btnRemoverItem.id = 'btnRemover' + numeroLinha;
        btnRemoverItem.innerHTML = '<span>Remover</span>';
    
    btnRemoverItem.addEventListener('click', function(){
        if (objLinha && tabelaItens.contains(objLinha)){
            tabelaItens.removeChild(objLinha);
        }

        const colunas = objLinha.getElementsByTagName('td');
        let valorLinha = colunas[5].innerText;

        totalRequisicao.value = parseFloat(totalRequisicao.value - parseFloat(valorLinha));



    });

    return btnRemoverItem;
}


var qtdLinhasAtualNaTabela = 0;
document.getElementById('btnInserirItens').addEventListener('click', function(){
    const tabelaItens = document.getElementById('tabelaItens')

    const campoProduto = document.getElementById('CodigoProduto')
    const campoDescricaoProduto = document.getElementById('DescricaoProduto')
    const campoQuantidade = document.getElementById('Quantidade')
    
    const linha = document.createElement('tr')

    const tdCodigo = document.createElement('td')
    const tdDescricao = document.createElement('td')
    const tdQuantidade = document.createElement('td')
    const tdUnidade = document.createElement('td')
    const tdPreco = document.createElement('td')
    const tdTotalLinha = document.createElement('td')
    const tdBtnRemover = document.createElement('tr')

    const produtoPesquisado = produtos.filter((p)=>p.idProduto==campoProduto.value)

    tdCodigo.innerHTML = campoProduto.value
    tdDescricao.innerHTML = campoDescricaoProduto.value
    tdQuantidade.innerHTML = campoQuantidade.value
    tdUnidade.innerHTML = produtoPesquisado[0].Unidade
    tdPreco.innerHTML = produtoPesquisado[0].Preco
    tdTotalLinha.innerHTML = campoQuantidade.value*produtoPesquisado[0].Preco;

    linha.appendChild(tdCodigo)
    linha.appendChild(tdDescricao)
    linha.appendChild(tdQuantidade)
    linha.appendChild(tdUnidade)
    linha.appendChild(tdPreco)
    linha.appendChild(tdTotalLinha)
    tabelaItens.appendChild(linha)

    //Código Novo
    totalRequisicao.value = parseFloat(totalRequisicao.value) + parseFloat(campoQuantidade.value*produtoPesquisado[0].Preco);

    //BtnRemover
    tdBtnRemover.appendChild(criarBtnRemover(tabelaItens, linha, qtdLinhasAtualNaTabela));
        linha.appendChild(tdBtnRemover);
        tabelaItens.appendChild(linha);
        qtdLinhasAtualNaTabela = qtdLinhasAtualNaTabela + 1;
})


function eventoClickPrioridadeHabilitarCor(){
    const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade');    
    console.log(checkboxesPrioridade);
    checkboxesPrioridade.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {    
            const divPrioridade = document.getElementById("radioPrioridade");
            divPrioridade.classList.add('radioPrioridade');
            divPrioridade.classList.remove('radioPrioridadeDesabilitado');
            document.getElementById('urgente').classList.add('chkPrioridade');
            document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('medio').classList.add('chkPrioridade');
            document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('baixo').classList.add('chkPrioridade');
            document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado');
        });
    });
}

adicionarCorAoFocarInput();
carregarCategorias();