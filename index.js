document.getElementById('formulario').addEventListener('submit', function(e) {
  
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();

  if (!nome || !email || !telefone) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const dados = {
    nome: nome,
    email: email,
    telefone: telefone
  };

  console.log("Dados recebidos:", dados);

  document.getElementById('formulario').style.display = 'none';

  document.getElementById('mensagem').style.display = 'block';
});
