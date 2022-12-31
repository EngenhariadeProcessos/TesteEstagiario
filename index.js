var form = document.getElementById("form");

if (form.addEventListener) {
    form.addEventListener("submit", validaCadastro);
} else if (form.attachEvent) {
    form.attachEvent("onsubmit", validaCadastro);
}

function validaCadastro(cadastro){
	var nome = document.getElementById('nome');
	var email = document.getElementById('email');
	var telefone = document.getElementById('telefone');
	var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var contErro = 0;


	box_nome = document.querySelector('.msg-nome');
	if(nome.value == ""){
		box_nome.innerHTML = "Erro: Nome não pode ser em branco.";
		box_nome.style.display = 'block';
		contErro += 1;
	}else{
		box_nome.style.display = 'none';
	}

	box_email = document.querySelector('.msg-email');
	if(email.value == ""){
		box_email.innerHTML = "Erro: E-mail não pode ser em branco.";
		box_email.style.display = 'block';
		contErro += 1;
	}else if(filtro.test(email.value)){
		box_email.style.display = 'none';
	}else{
		box_email.innerHTML = "Formato do E-mail inválido";
		box_email.style.display = 'block';
		contErro += 1;
	}

	box_telefone = document.querySelector('.msg-telefone');
	if(telefone.value == ""){
		box_telefone.innerHTML = "Erro: Nome não pode ser em branco.";
		box_telefone.style.display = 'block';
		contErro += 1;
	}else{
		box_telefone.style.display = 'none';
	}

	if(contErro > 0){
		cadastro.preventDefault();
	} else
    var  name1 = document.querySelector("#nome");
    var  email1 = document.querySelector("#email");
    var  telefone1 = document.querySelector("#telefone");

    var valueName = name1.value;
    var valueEmail = email1.value;
    var valueTelefone = telefone1.value;

    console.log(valueName);
    console.log(valueEmail);
    console.log(valueTelefone);
    alert('Obrigado por seu cadastro!');
  }
