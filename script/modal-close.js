// script que fecha o anuncio no header sobre desconto:
// Pega o Container do elemento, chama pela classe, chama o botão que executara a ação
// adiciona um escutador ao clique executa função anonima de adicionar classe já estipulada no CSS para hidden


var modalContainer = document.querySelector('.desconto__container');
var fecharBtn = document.querySelector('.btn-fechar');
var aproveitar = document.querySelector('.desc__btn');

fecharBtn.addEventListener('click', function(){
    modalContainer.classList.add('modal__close');
})
// neste caso por agora iremos adicionar a função anonima de trocar de classe também ao botão APROVEITAR
aproveitar.addEventListener('click', function(){
    modalContainer.classList.add('modal__close');
})
