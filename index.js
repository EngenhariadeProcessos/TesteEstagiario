const nome = document.querySelector(".input-nome");
const email = document.querySelector(".input-email");
const telefone = document.querySelector(".input-telefone");
const botao = document.querySelector(".formulario__botao");

const mensagemErro = document.querySelector(".errorMensagem");
const mensagemCadastro = document.querySelector(".mensagem__cadastro");
const boxForm = document.querySelector(".container");

botao.addEventListener('click', (e) => {
    e.preventDefault();

    if(nome.value === '' || email.value === '' || telefone.value === ''){
        mensagemErro.classList.toggle('mensagem');
    }else {
            boxForm.classList.toggle('container-desativo');
            mensagemCadastro.classList.toggle('mensagem__cadastro-ativo');
            const dadosDeCadastro = {'nome': nome.value, 'email': email.value, 'telefone': telefone.value};
            console.log(dadosDeCadastro);
        }
    });