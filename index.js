document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const mensagem = document.getElementById('mensagem');
    const telefoneInput = document.getElementById('telefone');

    // Máscara para o campo de telefone (aceita apenas números e formata automaticamente)
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function () {
            let digits = this.value.replace(/\D/g, ''); // Remove tudo que não for número

            // Limita a 11 dígitos (DDD + 9 números)
            if (digits.length > 11) {
                digits = digits.substring(0, 11);
            }

            // Formata o telefone no padrão (XX) XXXXX-XXXX
            let formatted = '';
            if (digits.length > 0) {
                formatted += '(' + digits.substring(0, 2);
            }
            if (digits.length >= 2) {
                formatted += ') ';
            }
            if (digits.length > 2) {
                if (digits.length <= 7) {
                    formatted += digits.substring(2);
                } else {
                    formatted += digits.substring(2, 7) + '-' + digits.substring(7);
                }
            }
            this.value = formatted;
        });
    }

    // Validação do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = telefoneInput.value.trim();

        // Validação para campos vazios
        if (nome === "" || email === "" || telefone === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Validação para telefone: deve conter exatamente 11 dígitos numéricos
        const phoneDigits = telefone.replace(/\D/g, '');
        if (phoneDigits.length !== 11) {
            alert("Por favor, insira um telefone válido com 11 dígitos!");
            return;
        }

        // Cria um objeto com os dados e exibe no console
        const userData = {
            nome: nome,
            email: email,
            telefone: telefone
        };
        console.log(userData);

        // Oculta o formulário e exibe a mensagem de agradecimento
        form.style.display = 'none';
        mensagem.style.display = 'block';
    });
});
