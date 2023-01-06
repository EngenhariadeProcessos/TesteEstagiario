
const nome = document.querySelector(".input-nome");
const email = document.querySelector(".input-email");
const telefone = document.querySelector(".input-telefone");
const botao = document.querySelector(".input-botao");





const mensagemErro = document.querySelector(".mensagem_erro");
const mensagemCadastro = document.querySelector(".mensagem-cad");
const boxForm = document.querySelector(".esboço");







botao.addEventListener('click', (e) => {
    e.preventDefault();

    if(nome.value == '' || email.value == '' || telefone.value == ''){
        mensagemErro.classList.toggle('mensagem');
    }else {
            boxForm.classList.toggle('esboço-des');
            mensagemCadastro.classList.toggle('mensagem-cad-ativo');
            const dadosDeCadastro = {'nome':nome.value, 'email':email.value, 'telefone':telefone.value};
            console.log(dadosDeCadastro);
        }
    });