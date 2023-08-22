function validar() {
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var telefone = document.getElementById("telefone");

  if (nome.value == "" ||
      nome.value == null || 
      nome.value.length < 3) {
    alert("Nome não informado");
    nome.focus();
    return false;
  }
  if (
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1 ||
    email.value == "" ||
    email.value == null
  ) {
    alert("Por favor, indique um e-mail válido.");
    email.focus();
    return false;
  }
  if (telefone.value == "" ||
      telefone.value == null ||
      telefone.value.length < 15
  ) {
    alert("Por favor insira um número de telefone válido");
    telefone.focus();
    return false
  }
  else {
    alert(`Seu nome: ${nome}, E-mail: ${email}, Telefone: ${telefone}`);
    return true;
  }
}

function mascara(telefone) { 
  if(telefone.value.length == 0)
      telefone.value = '(' + telefone.value; 
    //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
  if(telefone.value.length == 3)
      telefone.value = telefone.value + ') '; 
    //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

  if(telefone.value.length == 10)
      telefone.value = telefone.value + '-'; 
    //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.
}