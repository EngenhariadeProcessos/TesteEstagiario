const form = document.querySelector('#form')
const body = document.querySelector('body')

const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')

const button = document.querySelector('#enviar')

form.addEventListener("submit", () => {

    var dados = {
        Nome: nome.value,
        Email: email.value,
        Telefone: telefone.value
    }
    
    form.submit()
    enviado()

    function enviado(){
        body.innerHTML = "<h3>Obrigado por seu cadastro!</h3>"
        console.log(dados)
    }
    
    
});