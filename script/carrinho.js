//carrinho

let carrinhoIcone = document.querySelector('#icone-carrinho');
let carrinho = document.querySelector('.carrinho');
let fecharCarrinho = document.querySelector('#fechar-carrinho');

carrinhoIcone.onclick = () => {
    carrinho.classList.add("active");
}

//fechar
fecharCarrinho.onclick = () => {
    carrinho.classList.remove("active");
}

//interação

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

//

function ready() {
    //remover itens do carrinho
    var removerCarrinho = document.getElementsByClassName('remover-carrinho');
    console.log(removerCarrinho);
    for (var i = 0; i < removerCarrinho.length; i++) {
        var botao = removerCarrinho[i]
        botao.addEventListener('click', removerItem);
     }
     //mudar quantidades
     var quantidadeInput = document.getElementsByClassName('quantidade-carrinho');
     for (var i = 0; i < quantidadeInput.length; i++) {
        var input = quantidadeInput[i];
        input.addEventListener('change', outraQuantidade);
     }
     var adicionarCarrinho = document.getElementsByClassName('btn__comprar');
     for (var i = 0; i < adicionarCarrinho.length; i++) {
        var botao = adicionarCarrinho[i];
        botao.addEventListener('click', adicionarItemCarrinho);
     }
    }


//remover item
function removerItem(event) {
    var botaoClicado = event.target;
    botaoClicado.parentElement.remove();
    atualizarTotal();
}

//valor do input 
function outraQuantidade(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    atualizarTotal();
}

//adicionar ao carrinho
function adicionarItemCarrinho(event){
    var botao = event.target;
    var comprarProdutos = botao.parentElement;
    var titulo = comprarProdutos.getElementsByClassName('nome')[0].innerText;
    var preco = comprarProdutos.getElementsByClassName('preco-produtos')[0].innerText;
    adicionarProduto(titulo, preco);
    atualizarTotal();
}

function adicionarProduto(titulo, preco) {
    var caixaComprarCarrinho = document.createElement('div');
    //caixaComprarCarrinho.classList.add('caixa-carrinho');
    var itensCarrinho = document.getElementsByClassName('conteudo-carrinho')[0];
    var nomeItens = itensCarrinho.getElementsByClassName('nome');
    for (var i = 0; i < nomeItens.length; i++) {
        alert('Você já adicionou esse item ao carrinho');
    }
}

//atualizar total

function atualizarTotal() {
    var conteudoCarrinho = document.getElementsByClassName('conteudo-carrinho')[0];
    var caixasCarrinho = conteudoCarrinho.getElementsByClassName('caixa-carrinho');
    var total = 0;
    for (var i = 0; i < caixasCarrinho.length; i++) {
        var caixaCarrinho = caixasCarrinho[i];
        var precoElemento = caixaCarrinho.getElementsByClassName('preco-carrinho')[0];
        var quantidadeElemento = caixaCarrinho.getElementsByClassName('quantidade-carrinho')[0];
        var preco = parseFloat(precoElemento.innerText.replace("R$", ""));
        var quantidade = quantidadeElemento.value;

        total = total + preco * quantidade;

        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('preco-total')[0].innerText = "R$" + total;
    }
}
