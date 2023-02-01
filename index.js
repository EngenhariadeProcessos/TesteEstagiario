// Variáveis dos inputs
const user = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const btnSubmit = document.getElementById('btn')

// Variáveis dos erros
const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')


function validateForm() {
    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault
            // Validação de erro do USER
        if (user.value < 1) {
            error1.style.display = 'flex'
            user.style.border = '1px solid red'
                // Implementado o sistema de sumir o erro após 5 segundos
            setTimeout(() => {
                error1.style.display = 'none'
                user.style.border = '1px solid gray'
            }, 5000);
        }

        // Validação de erro do EMAIL
        if (email.value < 1) {
            error2.style.display = 'flex'
            email.style.border = '1px solid red'
                // Implementado o sistema de sumir o erro após 5 segundos
            setTimeout(() => {
                error2.style.display = 'none'
                email.style.border = '1px solid gray'
            }, 5000);
        }

        // Validação de erro do TELEFONE
        if (number.value < 1) {
            error3.style.display = 'flex'
            number.style.border = '1px solid red'
                // Implementado o sistema de sumir o erro após 5 segundos
            setTimeout(() => {
                error3.style.display = 'none'
                number.style.border = '1px solid gray'
            }, 5000);
        }

        // Passando os valores do input para o console do browser
        var object = [
            user.value,
            email.value,
            number.value,
        ]

        if (object == '') {
            return
        } else {
            console.log(object)
        }

        // Verificação para saber se as informações do usuário foram enviadas
        if (object[0].length > 1 && object[1].length > 1 && object[2].length > 1) {
            position.style.display = 'none'
            Form.style.display = 'flex'
        }
    })
}

// Variáveis botões
const Form = document.querySelector('.sendForm')
const position = document.querySelector('.position')
const btnReset = document.getElementById('btnReset')
const btnBack = document.getElementById('btnBack')

function sendForm() {
    // Botão voltar para o formulário
    btnReset.addEventListener('click', () => {
        position.style.display = 'flex'
        Form.style.display = 'none'
            // Atualiza a página quando volta ao formulário
        window.location.reload(true);
    })

}

function resetForm() {
    btnBack.addEventListener('click', () => {
        position.style.display = 'flex'
        Form.style.display = 'none'

        user.value = ''
        email.value = ''
        number.value = ''
    })
}

resetForm()
sendForm()
validateForm()