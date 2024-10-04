const form = document.querySelector('form');

form.addEventListener('submit', (event) => {

event.preventDefault();

const nome = document.querySelector('#nome').value;
const idade = document.querySelector('#idade').value;
const email = document.querySelector('#email').value;

const dados = { nome, idade, email};

console.log(dados);

form.reset();

form.style.display = 'none';
window.alert('Formulário enviado com sucesso!');oculta o 

});