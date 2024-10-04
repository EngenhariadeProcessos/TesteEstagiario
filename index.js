document.getElementById('formTest').addEventListener('submit', function(event) {
    event.preventDefault();

const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const telefone = document.getElementById('telefone')

if (!nome || !email || !telefone ) {
    alert("Por favor, preencha todos os campos!");
    return;
}

const usuario = {
    nome: nome,
    email: email,
    telefone: telefone
};


console.log(usuario);


document.getElementById('formTest').style.display = 'none';
const mensagem = document.getElementById('mensagem');
mensagem.textContent = 'Obrigado pelo seu cadastro!';
mensagem.style.display = 'block'

});