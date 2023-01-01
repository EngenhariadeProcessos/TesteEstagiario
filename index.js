const corpo = document.querySelector(".corpo")
const form = document.querySelector(".formulario")
const inputs = document.querySelector("#nome")

function novoElemento (tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className

    return elem
}

//Criando a frase de agradecimento
function criaMensagem () {
    this.elemento = novoElemento("div", "mensagem")
    corpo.appendChild(this.elemento)
    this.Mensagem = novoElemento("p", "texto")
    this.Mensagem.innerHTML = "Obrigado por seu cadastro!"
    this.elemento.appendChild(this.Mensagem)
}

const Mensagem = new criaMensagem()

function enviar() {

this.nome = document.getElementById("nome").value
this.email = document.getElementById("email").value
this.telefone = document.getElementById("telefone").value



this.valorForm = {
    Nome: this.nome,
    Email: this.email,
    Telefone: this.telefone
}
//Validação dos campos e adição dos dados em um objeto

    if(this.valorForm.Nome == "", this.valorForm.Email == "", this.valorForm.Telefone == "") {
        alert("Campos em brancos não são permitidos")
        return
    } else {
        this.valorForm.Nome = nome
        this.valorForm.Email = email
        this.valorForm.Telefone = telefone
    }

    if(inputs.value = true) inputs.classList.add("fundoInput")

//Escondendo o formulario e exibindo mensagem de agradecimento

    form.classList.add("invisivel")
    this.exibirMensagem = document.querySelector('.mensagem')
    this.exibirMensagem.classList.add("exibir")
    console.log(this.valorForm)
}







