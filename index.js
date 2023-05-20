function validadeFormData(event) {
    event.preventDefault()

    const name = document.getElementById('inputName')
    const email = document.getElementById('inputEmail')
    const phone = document.getElementById('inputPhone')

    if (!name.value || !email.value || !phone.value) {
        return notification(false)
    }

    showFormData(name, email, phone)
    showMessage()
    notification(true)
}

function showMessage() {
    const container = document.querySelector('main')
    const box = document.querySelector('.box')

    const message = document.createElement('h2')
    message.innerText = 'Obrigado por seu cadastro!'

    box.remove()
    container.appendChild(message)

}

function showFormData(name, email, phone) {
    console.log({
        name: name.value,
        email: email.value,
        phone: phone.value
    })
}

function notification(status) {
    Toastify({
        text: status ? 'Cadastro realizado com sucesso!' : 'Preencha todos os campos!',
        duration: 1500,
        close: true,
        style: {
            background: status ? 'green' : 'red'
        }
    }).showToast();
}