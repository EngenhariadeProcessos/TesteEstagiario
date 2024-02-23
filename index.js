function enviar() {
    const form = document.getElementById('register-form');
    const nomeInput = form.querySelector('input[name="nome-input"]');
    const emailInput = form.querySelector('input[name="email-input"]');
    const telefoneInput = form.querySelector('input[name="telefone-input"]');
    const submitContainer = document.querySelector('.submit-container');
    const errorMessage = document.querySelector('.errorMessage');
    const signInContainer = document.querySelector('.sign-in');
    const formContainer = document.querySelector('.register-form');

    // Validação
    if (!nomeInput.checkValidity()) {
        errorMessage.textContent = "Por favor, insira seu nome.";
        errorMessage.style.color = "red";
        return;
    }

    if (!emailInput.checkValidity()) {
        errorMessage.textContent = "Por favor, insira um e-mail válido. Ex: usuario@gmail.com";
        errorMessage.style.color = "red";
        return;
    }

    if (!telefoneInput.checkValidity()) {
        errorMessage.textContent = "Por favor, insira um número de telefone válido.";
        errorMessage.style.color = "red";
        return;
    }

    // Setando o objeto JavaScript
    const infos = {
        nome: nomeInput.value,
        email: emailInput.value,
        telefone: telefoneInput.value
    };

    // Exibindo mensagem de envio com sucesso 

    signInContainer.remove();
    formContainer.remove();
    submitContainer.innerHTML = "<img src='https://www.grafjb.com.br/_shared/autores/aut25082021160111.png' style='width: 10rem'>"+"<h1>Obrigado por seu cadastro!</h1>";
    submitContainer.style.visibility = "visible";

    // Mostrando o objeto no console
    console.log(infos);
    
}

document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault();
    enviar();
});