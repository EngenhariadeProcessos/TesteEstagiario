/**
 * created by: Antonio Fernando
 * date: 02/02/2023
 */

const divForm = document.querySelector('.box')
const msgSuccess = document.getElementById('messageSuccess')

const inputs = document.getElementsByTagName('input')
const msgError = document.getElementById('lMessageErrorInForm')

const btnBackForm = document.getElementById('backForm')
const btnAddUser = document.getElementById('enviar')

//criação do objeto, que conterá todos os dados do usuário
const dadosUsuario = {}

//arrow function que faz a verificação dos campos, e consequentemente a validação
const validaCamposEenviaDados = () => {
    //variável que funciona como uma flag, para sinalizar quantos campos ainda estão vazios
    var contCamposVazios = 0
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].value === "") {
            msgError.style.color = "#7d0c0c"
            msgError.style.fontWeight = "bold"
            inputs[i].style.borderColor = "#7d0c0c"
            msgError.innerText = 'Os campos não podem ser enviados vazios!'
            contCamposVazios++
        } else {
            //apenas se não estiver vazio que os dados são salvos no objeto
            dadosUsuario[inputs[i].id] = inputs[i].value
            msgError.innerText = ''
            msgError.style.color = "green"
            inputs[i].style.borderColor = "green"
        }
    }

    //finalmente se o contador for 0, é porquê não existe nenhum campo vazio exibe no console os dados
    if(contCamposVazios == 0) {
        Object.keys(dadosUsuario)
        console.log(dadosUsuario)
        divForm.style.display = "none"
        msgSuccess.style.display = "flex"
    } else
        console.log();

}

//arrow function responsável pela ação de voltar para o form, após o cadastro
const backForm = () => {
    msgSuccess.style.display = "none"
    divForm.style.display = "flex"
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
        inputs[0].focus()
        inputs[i].style.borderColor = ''
    }
}

//eventos adicionados aos botões com as suas respectivas arrow functions
btnAddUser.addEventListener('click', validaCamposEenviaDados)
btnBackForm.addEventListener('click', backForm)