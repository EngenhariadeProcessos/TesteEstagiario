document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if (nome === '' || email === '' || telefone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const dadosFormulario = {
        nome: nome,
        email: email,
        telefone: telefone
    };
    
    console.log(dadosFormulario);

    document.getElementById('formulario').style.display = 'none';
    document.getElementById('mensagem').style.display = 'block';
});
