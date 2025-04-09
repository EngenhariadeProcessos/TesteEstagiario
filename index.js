document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const mensagem = document.getElementById("mensagem");
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio padrão
  
      // Pega os valores dos campos
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
  
      // Validação simples
      if (!nome || !email || !telefone) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      // Cria o objeto com os dados do formulário
      const dados = {
        nome,
        email,
        telefone
      };
  
      // Exibe o objeto no console
      console.log("Dados do formulário:", dados);
  
      // Oculta o formulário e mostra a mensagem de agradecimento
      formulario.style.display = "none";
      mensagem.style.display = "block";
    });
  });