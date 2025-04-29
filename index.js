const form = document.getElementById('cadastroForm');
const mensagem = document.getElementById('mensagem');

function handleSubmit(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    
    if (!nome || !email || !telefone) {
        alert('Preencha todos os campos!');
        return;
    }
    
    console.log({ nome, email, telefone });
    
    form.style.display = 'none';
    mensagem.style.display = 'block';
}
form.addEventListener('submit', handleSubmit);