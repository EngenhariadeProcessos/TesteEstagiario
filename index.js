document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    
    const nomeInput = form.querySelector('input[name="nome"]');
    const emailInput = form.querySelector('input[name="email"]');
    const numeroInput = form.querySelector('input[name="numero"]');

    numeroInput.addEventListener('input', () => {
        let numero = numeroInput.value.replace(/\D/g, '');
        if (numero.length > 11) numero = numero.slice(0, 11);

        if (numero.length > 6) {
            numero = `(${numero.slice(0, 2)})${numero.slice(2, 7)}-${numero.slice(7)}`;
        } else if (numero.length > 2) {
            numero = `(${numero.slice(0, 2)})${numero.slice(2)}`;
        }

        numeroInput.value = numero;
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const numero = numeroInput.value.trim();

        if(!nome || !email || !numero){
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const formData = {
            nome,
            email,
            numero
        };

        console.log('Dados do formulário: ', formData);

        form.style.display = 'none';

        const mensagem = document.createElement('p');
        mensagem.textContent = 'Obrigado por seu cadastro!';
        mensagem.className = 'text-center text-lg font-bold text-gray-900 mt-6';

        form.parentNode.appendChild(mensagem);
    });
});