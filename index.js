const form = document.querySelector('#form')
const body = document.querySelector('body')

const inputName = document.querySelector('#inputName')
const inputEmail = document.querySelector('#inputEmail')
const inputTel = document.querySelector('#inputTel')

const button = document.querySelector('#enviar')

form.addEventListener("submit", (event)=> {

    //Verificar se o nome foi preenchido
    if (inputName.value === ""){
        alert("Por favor, preencha o seu nome.")
        return
    }

    //Verificar se o email inserido foi preenchido
    if (inputEmail.value === ""){
        alert("Por favor, preencha o seu email.")
        return
    }
    //Verificar se o email inserido foi preenchido
    if (inputTel.value === ""){
        alert("Por favor, preencha o seu número de telefone.")
        return
    }

    var dados = {
        Nome: inputName.value,
        Email: inputEmail.value,
        Telefone: inputTel.value
    }
    

    //Se todos os campos foram preenchidos corretamente, enviar o formulário
    form.submit()
    enviado()

    function enviado(){
        body.innerHTML = "<h1>Obrigado pelo seu cadastro!</h1>"
        console.log(dados)
    }
    
    
})
