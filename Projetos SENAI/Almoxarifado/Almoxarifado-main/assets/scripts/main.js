
// document.getElementById('departamento').addEventListener('focus', function(){
//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor= "lightgreen"

// });

// document.getElementById('departamento').addEventListener('blur', function(){
//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor= "white"

// });

function adicionarCorAoFocarInput(){
    // const listInput = document.querySelectorAll("input[type=text]");
    //const listInput = document.querySelectorAll("input");
    const listInput = document.querySelectorAll("[mudarCor='true']");

    // 
    

    //listInput[2].style.backgroundColor =  'lightgreen';

    // for (let i = 0; i < listInput.length; i++){
        
    //     listInput[i].style.backgroundColor='lightgreen'; 
    //     console.log("texto");
    // }
    // listInput.forEach(function(item){
    //     item.style.backgroundColor = "lightgreen"
    // })
    listInput.forEach(function(item){
        item.addEventListener('focus', function(){
            item.style.backgroundColor = "lightgreen";
        });
        item.addEventListener('blur', function(){
            item.style.backgroundColor = "white";
        });
    })
}

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

document.getElementById('CodigoProduto').addEventListener('keyup', function(){
    const codigoPesquisado = document.getElementById('CodigoProduto').value;
    let produtosFiltrados = produtos.filter((p)=>p.idProduto == codigoPesquisado);

    if (produtosFiltrados.length>0) {
        document.getElementById('DescricaoProduto').value = produtosFiltrados[0].Descricao;
        document.getElementById('Estoque').value = produtosFiltrados[0].Estoque;
    }
    else{
        document.getElementById('DescricaoProduto').value = ""
    }
})

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
        //console.log("Teste")
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

//Código da aula que faltei
function addCamposNumeros(){
    const somenteNumeros = document.querySelectorAll
}

document.getElementById('btnInserirItens').addEventListener('click', function(){
    const tabelaItens = document.getElementById('tabelaItens')

    const campoProduto = document.getElementById('CodigoProduto')
    const campoDescricaoProduto = document.getElementById('DescricaoProduto')
    const campoQuantidade = document.getElementById('Estoque')
    const totalRequisicao = document.getElementById('total')
    
    const linha = document.createElement('tr')

    const tdCodigo = document.createElement('td')
    const tdDescricao = document.createElement('td')
    const tdQuantidade = document.createElement('td')
    const tdUnidade = document.createElement('td')
    const tdPreco = document.createElement('td')
    const tdTotalLinha = document.createElement('td')
    //const tdBtnRemover = document.createElement('tr')

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

//console.log(categorias)
//console.log(motivos)