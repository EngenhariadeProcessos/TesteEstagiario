function EnviarDados() {
    
    const formulario = document.querySelector('form')
    const nomeInput = document.getElementById('nome')
    const emailInput = document.getElementById('email')
    const telefoneInput = document.getElementById('telefone')
  
    // Valores dos campos de entrada.
    const nome = nomeInput.value
    const email = emailInput.value
    const telefone = telefoneInput.value

    // Oculta o formulário.
    formulario.style.display = 'none'

    // Exibe a mensagem de dados do usuário
    const mensagem = document.getElementById('message')

    // Exibe a mensagem de boas-vindas.
    mensagem.style.display = 'block'

    // Impede que o formulário seja enviado.
    event.preventDefault()

    // Cria um objeto com os dados do usuário.
    const dadosUsuario = {
        Nome: nome,
        Email: email,
        Telefone: telefone
    }

    // Exibe os dados no console.
    console.log(dadosUsuario)

    // Atualiza os elementos da mensagem com os dados do usuário.
    mensagem.querySelector('p:nth-child(2)').textContent = "Nome: " + nome
    mensagem.querySelector('p:nth-child(3)').textContent = "Email: " + email
    mensagem.querySelector('p:nth-child(4)').textContent = "Telefone: " + telefone
  
}
