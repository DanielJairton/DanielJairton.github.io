//Eventos
document.getElementById('btn-addBebida').addEventListener('click', function(){
    criarItensTabela(0);
});
document.getElementById('btn-addLanche').addEventListener('click', function(){
    criarItensTabela(1);
});

carregarTiposBebida();
carregarTiposLanche();