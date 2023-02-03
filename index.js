function ocultarForm(){
    var obj= document.getElementById("form").hidden=true;
}
function ocultarMensagem(){
    var mensagem= document.getElementById("cad").hidden=true;
}
function aparecerMensagem(){
    var mensagem= document.getElementById("cad").hidden=false;
}
function enviarDados(){
var nome = document.getElementById("nome").value;
console.log(nome);
var email = document.getElementById("email").value;
var telefone = document.getElementById("telefone").value;

var dadosForms = {                                 
name: nome,
email: email,
telefone: telefone
};
console.log(dadosForms);
ocultarForm();
aparecerMensagem();
}
function verificaCampo(){
if(document.getElementById("nome").value.length == ""){
alert('Por favor, preencha o campo nome');
document.getElementById("nome").focus();
return false}
if(document.getElementById("email").value.length == ""){
alert('Por favor, preencha o campo email');
document.getElementById("email").focus();
return false}
if(document.getElementById("telefone").value.length == ""){
alert('Por favor, preencha o campo telefone');
document.getElementById("telefone").focus();
return false}
}
ocultarMensagem();