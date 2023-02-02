let mensagem = document.querySelector(".mensagem");
let formulario = document.querySelector(".formulario");

console.log(mensagem.textContent);


function validacaoFormulario(event) {

    let nome = document.forms["formulario"]["nome"].value;
    let email = document.forms["formulario"]["email"].value;
    let telefone = document.forms["formulario"]["telefone"].value;

    if (nome == "" || email == "" || telefone == "") {
      mensagem.textContent = "Todos os campos precisam estar preenchidos!";
      return false;
    } else {
      mensagem.textContent = "Obrigado por seu cadastro!";
      console.log(nome);
      console.log(email);
      console.log(telefone);
      formulario.hidden = true;
      
    }
    event.preventDefault();
}
