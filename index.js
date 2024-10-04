document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    if (nome && email && telefone) {
        let cadastro = {
            nome: nome,
            email: email,
            telefone: telefone};

        console.log(cadastro);

        document.getElementById("cadastroForm").style.display = "none";
        document.body.innerHTML += "<h2>Obrigado por seu cadastro!</h2>";
    } else {
        alert("Preencha todos os campos!");
}
});
