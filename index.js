
function enviar(){
    const formulario = document.querySelector('form');
    const nome= document.getElementById('nome');
    const email= document.getElementById('email');
    const telefone= document.getElementById('telefone');

    const bemVindo = document.getElementById('bemVindo');

    // Obtém os valores dos campos de entrada.
  const nomeDois = nome.value;
  const emailDois = email.value;
  const telefoneDois = telefone.value;

  bemVindo.style.display = 'block';
  
  formulario.style.display = 'none';

  event.preventDefault();

}

