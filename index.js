const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

function validateForm(event) {
  event.preventDefault(); 

  const nome = document.getElementById('Nome').value;
  const numero = document.getElementById('Numero').value;
  const email = document.getElementById('Email').value;

  if (nome === '' || numero === '' || email === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const formData = {
    nome: nome,
    numero: numero,
    email: email
  };

  console.log(formData);

  form.style.display = 'none';
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Obrigado por seu cadastro!';
  form.parentNode.appendChild(successMessage);
}

submitButton.addEventListener('click', validateForm);