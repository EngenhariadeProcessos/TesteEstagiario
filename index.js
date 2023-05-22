$(document).ready(function () {
  $("#registration").submit(function (event) {
    event.preventDefault();

    let nome = $("#nomeFormulario").val();
    let email = $("#emailFormulario").val();
    let telefone = $("#telefoneFormulario").val();

    if (nome == "" || email == "" || telefone == "") {
      alert("Não é possível submeter campos vazios");
      return; // o return impede que o formulário com campos vazios seja gravado no objeto abaixo.
    }
    let obj = {
      nome: nome,
      email: email,
      telefone: telefone,
    };

    console.log(obj);
    $(registration).hide(0);
    $(sucesso).show(0);
  });
});
