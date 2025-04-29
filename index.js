const form = document.querySelector('form');
const message = document.getElementById('message');

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const name = document.getElementById('nameInput');
    const email = document.getElementById('emailInput');
    const password = document.getElementById('passwordInput');

    console.log(password)

    let formError = false;

    if(name.value.length  < 3){

        formError = true;
        alert("Nome de usuário precisa ter mais de 3 caracteres!");
    }

    if(!email.value.includes('@') || !email.value.includes('.')) {

        formError = true;
    }

    if(password.value.length < 6){

        formError = true;
        alert("A senha precisa de no mínimo 6 digitos!");
    }

    if(!formError){
       
        const user = {
            name: name.value,
            email: email.value,
            password: password.value
        }

        console.log(user);

        form.style.display = 'none';
        message.style.display = 'block';
    }
});