const sendButton = document.getElementById('send-button')
const thankArea = document.getElementById('complete-area')
const formContainer = document.getElementById("form-container")
const errorMessage = document.querySelectorAll(".error-message")

sendButton.addEventListener('click', async ()=> {
    let userName = document.getElementById("name").value
    let userMail = document.getElementById("email").value
    let userPhone = document.getElementById("phone").value

    userName === "" ? errorMessage[0].classList.remove('display-none') : errorMessage[0].classList.add('display-none')
    userMail === "" ? errorMessage[1].classList.remove('display-none') : errorMessage[1].classList.add('display-none')
    userPhone === "" ? errorMessage[2].classList.remove('display-none') : errorMessage[2].classList.add('display-none')

    if(userName !== "" && userMail !== "" && userPhone !== ""){
        const data = {
            Nome: userName,
            Email: userMail,
            Telefone: userPhone
        }
    
        console.log(data)
    
        formContainer.classList.add('display-none')
        thankArea.classList.remove('display-none')
    }   

})




