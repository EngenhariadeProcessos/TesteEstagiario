// Função para aplicar a máscara de telefone
function aplicarMascaraTelefone(telefone) {
    telefone = telefone.replace(/\D/g, "");

    // Verifica se o número tem 10 ou 11 dígitos
    if (telefone.length !== 10 && telefone.length !== 11) {
        return telefone;
    }

    // Aplica a máscara se tiver 10 ou 11 dígitos
    telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2");
    telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");
    return telefone;
}

// Valida email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Exibe mensagem de erro
function mostrarMensagemErro(mensagem) {
    const mensagemErro = document.createElement('div');
    mensagemErro.textContent = mensagem;
    mensagemErro.classList.add('error-message');
    document.querySelector('.form-container').appendChild(mensagemErro);
    setTimeout(() => mensagemErro.remove(), 3000); // Coloquei 3s
}

// Aplicar a máscara conforme o usuário digita
document.getElementById('telefone').addEventListener('input', function () {
    this.value = aplicarMascaraTelefone(this.value);
});

// Envio do formulário
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Validação dos campos
    if (!nome || !email || !telefone) {
        mostrarMensagemErro('Por favor, preencha todos os campos.');
        return;
    }

    if (!validarEmail(email)) {
        mostrarMensagemErro('Por favor, insira um email válido.');
        return;
    }

    const telefoneNumeros = telefone.replace(/\D/g, "");
    if (telefoneNumeros.length !== 10 && telefoneNumeros.length !== 11) {
        mostrarMensagemErro('O telefone deve ter 10 ou 11 dígitos.');
        return;
    }

    const formData = { nome, email, telefone };
    console.log(formData);

    // Ocultar o formulário
    document.querySelector('form').style.display = 'none';
    document.querySelector('h2').style.display = 'none';

    const tituloRegistrado = document.createElement('h2');
    tituloRegistrado.textContent = 'Formulário Registrado';
    tituloRegistrado.classList.add('mt-3');

    const mensagem = document.createElement('p');
    mensagem.textContent = 'Obrigado por seu cadastro!';
    mensagem.classList.add('mt-3');

    const botaoOutraResposta = document.createElement('button');
    botaoOutraResposta.textContent = 'Enviar outra resposta';
    botaoOutraResposta.classList.add('btn', 'btn-secondary', 'mt-3');

    botaoOutraResposta.addEventListener('click', function () {
        document.querySelector('form').reset();
        document.querySelector('form').style.display = 'block';
        tituloRegistrado.remove();
        mensagem.remove();
        botaoOutraResposta.remove();
    });

    document.querySelector('.form-container').append(tituloRegistrado, mensagem, botaoOutraResposta);
});
