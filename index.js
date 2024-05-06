document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    if (nome.trim() === '' || email.trim() === '' || telefone.trim() === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var dadosCadastro = {
        Nome: nome,
        Email: email,
        Telefone: telefone
    };

    console.log(dadosCadastro);
    document.getElementById("cadastroForm").style.display = "none";
    var mensagem = document.createElement("p");
    mensagem.textContent = "Obrigado por seu cadastro!";
    document.body.appendChild(mensagem);
});
