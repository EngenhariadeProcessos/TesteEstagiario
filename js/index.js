function formValidation() {
    let nome = document.forms["formulario"]["nome"].value;
    let email = document.forms["formulario"]["email"].value;
    let telefone = document.forms["formulario"]["telefone"].value;
    if (nome === "" || email === "" || telefone === "") {
        alert("Por favor preencha todos os campos!");
        event.preventDefault();
    } else {
        getFormValues(nome, email, telefone);
        hideForm();
        showSucessMessage();
    }
}

function getFormValues(nome, email, telefone){
    let pessoa = new Pessoa(nome, email, telefone);
    console.log(pessoa);
}

function Pessoa(nome, email, telefone){
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
}

function hideForm(){
    document.getElementById("area-cadastro").style.display = "none";
    document.getElementById("resetar").style.display = "block";
}

function showSucessMessage(){
    document.getElementById("titulo").innerText = "Obrigado por seu cadastro!"
}


