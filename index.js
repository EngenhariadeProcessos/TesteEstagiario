function validar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
    }
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return;
      }
    if (telefone.value == "") {
        alert("Telefone não informado");
        telefone.focus();
        return;
      }
      alert("Obrigado pelo seu cadastro!");

        }