class Validator{
    constructor(){
        this.validations = [
            'data-required',
            'data-min-length',
            'data-max-length',
            'data-email-validate','data-only-letter',
            'data-telephone-validation',
        ]
    }

    validate(form){

        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length > 0){
            this.cleanValidations(currentValidations);
        }

        let inputs = form.getElementsByTagName('input');

        let inputsArray = [...inputs];

        inputsArray.forEach(function(input){
            
            for(let i = 0;this.validations.length > i;i++){
                if(input.getAttribute(this.validations[i]) != null){
                  
                    let method = this.validations[i].replace('data-','').replace('-','');

                    let value = input.getAttribute(this.validations[i]);

                    this[method](input,value);
                }
            }
            
        },this);
    }

    minlength(input,minValue){
     
        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

        if(inputLength < minValue){
           this.printMessage(input,errorMessage);
        }

    }

    maxlength(input,maxValue){
        
        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;

        if(inputLength > maxValue){
           this.printMessage(input,errorMessage);
        } 
    }

    emailvalidate(input){

        let re = /\S+@\S+\.\S+/;

        let email = input.value;

        let errorMessage = 'Insira um e-mail adequado';

        if(!re.test(email)){
            this.printMessage(input,errorMessage);
        }
    }

    onlyletter(input){

        let re = /^[A-Za-z]+$/;

        let inputValue = input.value;

        let errorMessage = 'Este campo não aceita caracteres especiais';

        if(!re.test(inputValue)){
            this.printMessage(input,errorMessage);
        }
    }

    telephonevalidation(input){
        let re = new RegExp('^\\([0-9]{2}\\)((9[0-9]{4}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');

        let inputValue = input.value;

        let errorMessage = 'Telefone invalido,Ex:(31)98233-4343';

        if(!re.test(inputValue)){
            this.printMessage(input,errorMessage);
        }
    }

    printMessage(input,msg){

        let errorsQty = input.parentNode.querySelector('.error-validation');

        if(errorsQty === null){
            let template = document.querySelector('.error-validation').cloneNode(true);

            template.textContent = msg;

            let inputParent = input.parentNode;

            template.classList.remove('template');

            inputParent.appendChild(template);
        }
    }

    required(input){
        let inputValue = input.value;

        if(inputValue === ''){
            let errorMessage = 'Este campo é obrigatório';

            this.printMessage(input,errorMessage);
        }
    }

    cleanValidations(validations){
       validations.forEach(el => el.remove()); 
    }
}


let form = document.getElementById("registrar");
let submit = document.getElementById("enviar");
let hidden = document.getElementById("principal");

let validator = new Validator();

submit.addEventListener('click',function(e){

    e.preventDefault();
    if(hidden.style.display === 'block'){
        hidden.style.display = 'none';
        document.write("obrigado por seu cadastro");
    } else{
        hidden.style.display = 'block';
    }

    validator.validate(form);
    
    let name = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let telefone = document.querySelector("#telefone").value;
    
    let formValue = {
        nome: name,
        email: email,
        telefone: telefone,
    };
    console.log(formValue);
})