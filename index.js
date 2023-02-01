const inputs = document.querySelectorAll(".required");
const btnEnviar = document.getElementById("btn-enviar");
const nameUser = document.getElementById("name");
const emailUser = document.getElementById("email");
const telefoneUser = document.getElementById("telefone");
const form = document.querySelector(".form");

const usuario = {
    nome: null,
    email: null,
    telefone: null
}

btnEnviar.addEventListener("click", () => {
    if(!validaNome() || !validaEmail() || !validaTelefone()){
        alert("É necessário preencher o(s) campo(s) da maneira correta")
    }
    else {
        criaUsuario();
        console.log(`Nome:${usuario.nome}  E-mail:${usuario.email}  Telefone:${usuario.telefone}`)
        exibirMensagem();
    }

})

function criaUsuario () {
    usuario.nome = nameUser.value;
    usuario.email = emailUser.value;
    usuario.telefone = telefoneUser.value;
}

function exibirMensagem () {
    form.innerHTML = `<h1 class="message">Obrigado por seu cadastro!</h1>`
}

function validaNome () {
    if(inputs[0].value.trim().length < 1 || inputs[0].value.trim().length < 3){
        inputs[0].style.border = "2px solid red";
        return false
    }
    return true
}

function validaEmail () {
    if(inputs[1].value.trim() == ""){
        inputs[1].style.border = "2px solid red";
        return false
    }
    return true
}

function validaTelefone () {
    if(inputs[2].value.trim().length < 14 || inputs[2].value.trim().length > 14){
        inputs[2].style.border = "2px solid red";
        return false
    }
    return true
}

