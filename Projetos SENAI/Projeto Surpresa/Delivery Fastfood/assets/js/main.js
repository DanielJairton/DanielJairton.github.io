//Criar itens na tabela
//Incompleto
function criarItensTabela(){
    console.log("Criar Itens Tabela");
    const tabelaPedidos = document.getElementById('table-pedido');

    const campoProduto = document.getElementById('select-bebidas');
    const campoQuantidade = document.getElementById('input-quantBebidas');
    const campoPrecoUn = document.getElementById('input-unBebidas');

    const linha = document.createElement('tr');

    const tdProduto = document.createElement('td');
    const tdQuantidade = document.createElement('td');
    const tdPrecoUn = document.createElement('td');
    const tdTotal = document.createElement('td');
}