const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0)
});

//responsivo

let menu = document.querySelector('#icone-menu');
let barraMenu = document.querySelector('.barra-menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    barraMenu.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    barraMenu.classList.remove('open');
}

//contato

function validar(){
    let nome = document.getElementById('nome').value;
    let email = contact_form.email.value;
    let message = contact_form.message.value;

    if (nome == ""){
        alert('Preencha o campo nome.');
        contact_form.name.focus();
        return false;
    }

    if (email == "" || email.indexOf('@') == -1 ){
        alert('Preencha o campo email.');
        contact_form.email.focus();
        return false;
    }

    if (message == ""){
        alert('Preencha o campo mensagem.');
        contact_form.message.focus();
        return false;
    }
    
    if (action == ""){
        alert('Preencha o campo email.');
        contact_form.action.focus();
        return false;
    } 
}