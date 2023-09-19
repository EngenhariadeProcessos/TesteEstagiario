function Enviar() {
  // Captura os elementos do formulário e da mensagem por meio de seus IDs.
  const formulario = document.querySelector('form');
  const mensagem = document.getElementById('mensagem');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const telefoneInput = document.getElementById('telefone');

  // Obtém os valores dos campos de entrada.
  const nome = nomeInput.value;
  const email = emailInput.value;
  const telefone = telefoneInput.value;

  // Exibe a mensagem de boas-vindas.
  mensagem.style.display = 'block';

  // Atualiza os elementos da mensagem com os dados do usuário.
  mensagem.querySelector('p:nth-child(3)').textContent = 'Nome: ' + nome;
  mensagem.querySelector('p:nth-child(4)').textContent = 'Email: ' + email;
  mensagem.querySelector('p:nth-child(5)').textContent = 'Telefone: ' + telefone;

  // Oculta o formulário.
  formulario.style.display = 'none';

  // Impede que o formulário seja enviado.
  event.preventDefault();
}
