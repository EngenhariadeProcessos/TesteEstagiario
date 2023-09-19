function Enviar() {
    // Captura o formulário e a mensagem de boas-vindas por meio de seus IDs.
    const formulario = document.querySelector('form');
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Bem-vindo!';
  
    // Oculta o formulário.
    formulario.style.display = 'none';
  
    // Adiciona a mensagem de boas-vindas à página.
    document.body.appendChild(mensagem);
  
    // Impede que o formulário seja enviado.
    event.preventDefault();
  }
  