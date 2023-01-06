const form = document.getElementById('form');
const inputNome = document.getElementById('inputNome');
const inputEmail = document.getElementById('inputEmail');
const inputTelefone = document.getElementById('inputTelefone');
    
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {

    const inputNomeValue = inputNome.value.trim()
    const inputEmailValue = inputEmail.value.trim()
    const inputTelefoneValue = inputTelefone.value.trim()

    if(inputNomeValue === '') {
        // mostrar erro
        // add classe
        ValidError(inputNome, 'Preencha esse campo.')
    } else if (inputNomeValue.length < 3){

        ValidError(inputNome, 'Nome com menos de 3 caracteres.')
    } else  {
        // adicionar a classe de sucesso
        ValidSuccess(inputNome)
    }

    if(inputEmailValue === '') {
        // mostrar erro
        // add classe
        ValidError(inputEmail, 'Preencha esse campo.')
    } else {
        // adicionar a classe de sucesso
        ValidSuccess(inputEmail)
    }
   
    if(inputTelefoneValue === '') {
        // mostrar erro
        // add classe
        ValidError(inputTelefone, 'Preencha esse campo.')
    } else if (inputTelefoneValue.length < 10){
        
        ValidError(inputTelefone, 'Número inválido. Exemplo: (XX XXXX-XXXX)')
    } else {
        // adicionar a classe de sucesso
        ValidSuccess(inputTelefone)
    }

const formControls = form.querySelectorAll('.formjs');
const formIsValid = [ ... formControls].every((formjs) => {
    return (formjs.className === "formjs success");
});

if (formIsValid) {
    let el = document.getElementById('container');
    let le = document.getElementById('obrigado');
    container.style.display="none";
    console.log('Nome:',inputNomeValue,'/ Email:', inputEmailValue,'/ Telefone:', inputTelefoneValue);
    obrigado.style.display="block";
}
}

function ValidError(input, message) {
    const formjs = input.parentElement;
    const small = formjs.querySelector('small')

    small.innerText = message

    formjs.className = 'formjs error'
}

function ValidSuccess(input) {

    const formjs = input.parentElement;

    formjs.className = 'formjs success'

}

