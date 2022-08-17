/* 
Definir uma validação para os campos não permitindo enviar com os valores em branco;
Após clicar no botão enviar, os valores dos campos devem ser passados para um objeto do JS, é este deve ser exibido no console do browser;
Após clicar no botão enviar, ocultar o formulário e exibir a mensagem: Obrigado por seu cadastro!
Utilizar somente o arquivo index.js para adicionar todo o código JS; 

*/

const formCard = document.querySelector('form')
const inputNome = document.querySelector('#input-nome')
const inputEmail = document.querySelector('#input-email')
const inputTelefone = document.querySelector('#input-telefone')
const botao = document.querySelector('.btn')

loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  formCard.addEventListener('submit', sendForm);
  
}

function sendForm(e){
    if(inputNome.value === ''){
       alert('Preencha todos os campos do formulário')
    }else if(inputEmail.value === ''){
        alert('Preencha todos os campos do formulário')
    }else if(inputTelefone.value === ''){
        alert('Preencha todos os campos do formulário')
    }else{
        console.log(`Nome:${inputNome.value}, E-mail:${inputEmail.value}, Telefone:${inputTelefone.value} `)

        formCard.innerHTML='<h1 class="final-form">Obrigado por seu cadastro!</h1>'
    }

    
    

    e.preventDefault();
}
    

