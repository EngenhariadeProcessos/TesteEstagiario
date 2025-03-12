document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    
    let campos = document.querySelectorAll('#form input');
    let formValido = true;
    let mensagemErro = [];
    let objeto = {};

    campos.forEach(function(campo){
        if(campo.value.trim() === ''){
            formValido = false;
            mensagemErro.push(`O campo ${campo.name} está vazio.`);
        }
        else{
            objeto[campo.name] = campo.value.trim();
        }
    });

    if (!formValido) {
        alert(mensagemErro.join('\n'));
    } else {
        console.log(objeto);
        document.getElementById('form').innerHTML = '<p>Obrigado por seu cadastro!</p>';
    }
})