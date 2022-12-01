const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

//Validações~



function nomeValidate() {
    if (campos[0].value.length > 3) {
        console.log('VALIDADO');
    }
    else {
        console.log('NÃO VALIDADO')
    }
}

function emailValidate() {
    if (emailRegex.test(campos[1].value)) {
        console.log('VALIDADO');
    }
    else {
        console.log('NÃO VALIDADO')
    }
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)

}

function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;

}
function id( el ){
    return document.getElementById( el );
}
window.onload = function(){
    id('telefone').onkeypress = function(){
        mascara( this, mtel );
    }
}
// Fim das Validações

// Após clicar no botão enviar, os valores dos campos devem ser passados para um objeto do JS, é este deve ser exibido no console do browser;

function enviar(){
    //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
    var nomeValue = document.querySelector(".js-input-name").value;
    var emailValue = document.querySelector(".js-input-email").value;
    var telValue = document.querySelector(".js-input-tel").value;

    var formValue = {                                 
        name: nomeValue,
        email: emailValue,
        Telefone: telValue                                   
    
    };
    console.log(formValue);
}

// Término do botão enviar

// Aparecer enviar apos preencher campos

function checkInputs(inputs) {
  var filled = true;
  
  inputs.forEach(function(input) {
      
    if(input.value === "") {
        filled = false;
    }
  
  });
  
  return filled;
  
}
var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");
inputs.forEach(function(input) {
    
  input.addEventListener("keyup", function() {
    if(checkInputs(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});


function Alerta(){
    alert('Obrigado por seu cadastro!');
    }
