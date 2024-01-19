//Funções para inicializar
carregarTiposBebida();
carregarTiposLanche();

//Zerar total no inicio
document.getElementById('input-total').value = "R$ 0,00";

//Eventos

//Ao pressionar enter com o input em foco ativa a função
document.getElementById('input-quantBebidas').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      criarItensTabela(0);
    }
});
//Ao pressionar enter com o input em foco ativa a função
document.getElementById('input-quantLanches').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      criarItensTabela(1);
    }
});

//Não deixa o campo total ter um valor negativo
/*document.getElementById('input-total').addEventListener("change", function(){
    let totalTabelaTexto = document.getElementById('input-total').value.replace(",", ".");
    totalTabelaTexto = totalTabelaTexto.replace("R$ ", "");

    if (parseFloat(totalTabelaTexto) < 0) {
        document.getElementById('input-total').value = "R$ 0";
    }
})*/

//Recarrega a página quando confirmado
document.getElementById('btn-confirmar').addEventListener('click', function(){
    if (document.getElementById('input-total').value == "R$ 0.00" || document.getElementById('input-total').value == "R$ 0,00") {
        document.getElementById('span-avisoTotal').style.visibility = "visible";
        return;
    }
    else{
        document.getElementById('span-avisoTotal').style.visibility = "hidden";
        if (confirm('Tem certeza que quer confirmar o pedido ?')) {
            location.reload();
        }
    }
});