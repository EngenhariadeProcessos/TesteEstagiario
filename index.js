const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

let registros = [];

let $form1 = $("#form");






form.addEventListener('submit', (e) => {
    e.preventDefault();

    let obj = Object.fromEntries(new FormData(e.target));
   
    registros.push(obj);

    checkInputs();
    console.log(registros);


    
})

function checkInputs(){
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const confirmpasswordValue = confirmpassword.value.trim();




    


    if(usernameValue === ''){

        errorValidation(username, 'Preencha esse campo!');
        
        
    }else{
        successValidation(username);
        
    }

    if(emailValue === ''){
        errorValidation(email, 'Preencha esse campo!')
    }else if(!isEmail(emailValue)){
        errorValidation(email, 'Email inválido!')
    }else{
        successValidation(email);
        
    }

    if(passwordValue === ''){
        errorValidation(password, 'Preencha esse campo!');
    }else if(passwordValue.length < 6){
        errorValidation(password, 'Senha deve ter 6 ou mais caracteres!');
    }else{
        successValidation(password);
        
    }

    if(confirmpasswordValue === ''){
        errorValidation(confirmpassword, 'Preencha esse campo!');
    }else if(confirmpasswordValue !== passwordValue){
        errorValidation(confirmpassword, 'As senhas não são iguais!');
    }else{
        successValidation(confirmpassword);
        return changeScreem();
        
        
    }
   
    return mostrarConsole();

    
}

function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';

}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}


function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}



// let armazen = {
//     user: username.value,
//     email: email.value,
//     pass:  password.value,
//     mostrar: function (){
//         console.log("Nome: "+this.user+", Email: "+this.email+", Senha: "+this.pass);
//     }

// }
    // armazen.user = `Nome: ${username.value}`;
    // armazen.email = `sei lá`;
    // armazen.senha = password.value;

    // function mostrarArmazen (){
    //     console.log("Nome: "+username.value+", "+armazen.email+", Senha: "+password.value);
    // }

  

    
    

    // let mostrar = new Object();
    //     mostrar.user = username.value;
    //     mostrar.email = email.value;
    //     mostrar.pass = password.value;

    // function mostrarConsole(){
    //     // console.log("User: "+mostrar["user"]);
    //     console.log("Email: "+mostrar["Email"]);
    //     console.log("Senha: "+mostrar["pass"]);

    //  }




    function changeScreem(){
        document.write(`<html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                div.main{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            </style>
        </head>
        <body>
            <div class="main">
                <div>
                    <section>
                        <img src="../TesteEstagiario/images/aut25082021160111.png" alt="">
                    </section>
                    <section>
                        <h1>Obrigado por se cadastrar!</h1>
                    </section>
                </div>
                
                
            </div>
        </body>
        </html>`);
    }




   
    // $form.on('submit', function (e) {
    //     e.preventDefault();
   
   
    //     let obj = Object.fromEntries(new FormData(e.target));
   
    //     registros.push(obj);
   
   
    //     console.log(registros);
    // })

