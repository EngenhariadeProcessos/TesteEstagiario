function validar() {   
  var nome = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value; 

 if(nome == '') {
  alert('Preencher campo: Nome!')
 } else if (email == ''){
  alert('Preencher campo: Email!')
 } else if(phone == '') {
  alert('Preencher campo: Telefone!')
 } else {
  alert('Parabéns, dados enviados com sucesso!')
 }
}
