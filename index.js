$(document).ready(function() {
    $("#formulario").submit(function(event) {
      event.preventDefault();

      var nome = $("#nome").val();
      var email = $("#email").val();
      var telefone = $("#telefone").val();

      var dados = {
        nome: nome,
        email: email,
        telefone: telefone
      };

      console.log(dados);

      $("#titulo").text("Formulário preenchido com sucesso!");
      $(this).hide();
      $("#mensagem").removeClass("hidden");
    });
  });