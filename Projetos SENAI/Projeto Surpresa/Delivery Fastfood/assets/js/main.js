//Eventos

//Adiciona o pedido a Tabela de Pedidos
document.getElementById('btn-addBebida').addEventListener('click', function(){
    criarItensTabela(0);
});
document.getElementById('btn-addLanche').addEventListener('click', function(){
    criarItensTabela(1);
});

//Recarrega a página quando confirmado
document.getElementById('btn-gravar').addEventListener('click', function(){
    if (confirm('Tem certeza que quer confirmar o pedido ?')) {
        // console.log('Confirmação');
        location.reload();
    }
    else{
        // console.log('Cancelou');
    }
});


carregarTiposBebida();
carregarTiposLanche();