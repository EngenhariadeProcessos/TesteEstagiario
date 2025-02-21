const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const btn = document.getElementById('btn')
const form = document.getElementById('form')

// Prevenir o envio padrão do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

// Validando os campos ao submeter o formulário
btn.onclick = () => {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value

    if (nome === "") {
        alert('Preencha o nome!')
        return false
    }

    if (!email.includes('@') && !email.includes('.com')) {
        alert('Preencha um email válido!')
        return false
    }

    if (telefone.length < 10 || telefone.length > 15) {
        alert('Preencha um telefone válido!')
        return false
    }

    const dadosUsuario = {
        nome: nome,
        email: email,
        telefone: telefone
    }

    // Exibindo o objeto no console
    console.log(dadosUsuario)

    // Ocultando o formulário e exibindo a mensagem de agradecimento
    form.style.display = 'none'
    const mensagem = document.createElement('p')
    mensagem.textContent = 'Obrigado por seu cadastro!'
    document.body.appendChild(mensagem)

}
