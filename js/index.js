const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const telefoneInput = document.querySelector("#telefone")
const mensagemInput = document.querySelector("#mensagem")

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email")
        return;
    }


    if(telefoneInput.value === ""){
        alert("Por favor, preencha o seu telefone");
        return
    }

    alert("Obrigado por seu cadastro!");

    form.reset();
    
});

function isEmailValid(email){

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true
    }

    return false;
}