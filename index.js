<<<<<<< HEAD
const formulario = document.querySelector("#formulario");
const mensagem = document.querySelector("#mensagem");


formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const telefone = document.querySelector("#telefone").value;

  if (!nome || !email || !telefone) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const cadastro = { nome, email, telefone };
  console.log(cadastro);

  formulario.style.display = "none";
  mensagem.style.display = "block";
  
  setTimeout(function() {
    location.reload();
  }, 2000);
});


=======
>>>>>>> 1206017887755c91b9c1e1029e579b6cb14dad08
