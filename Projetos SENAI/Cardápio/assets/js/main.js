
function carregarMenus(dadosMenu, divSecao) {
    // let dados = dadosMenu;

    for (let index = 0; index < dadosMenu.length; index++) {
        let cardBox = document.createElement('div');

        cardBox.innerHTML = "<div class='cardBox'>" +
        "<img src='" + dadosMenu[index].imgUrl + "' alt='item' class='cardImg'>" +
        "<h4 class='cardTitulo'>" + dadosMenu[index].titulo +"</h4>" +
        "<span class='cardPreco'>" + dadosMenu[index].preco.toFixed(2).replace(".",",") + "</span>" +
        "</div>";

        divSecao.appendChild(cardBox);
    }

}

carregarMenus(dadosAlmoco, document.getElementById('box-almoco'));
carregarMenus(dadosJantar, document.getElementById('box-jantar'));
carregarMenus(dadosBebidas, document.getElementById('box-bebidas'));
carregarMenus(dadosSobremesa, document.getElementById('box-sobremesa'));
