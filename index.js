
function pegarForm(){
    let form = document.getElementById("formTeste");
    let name = form.nome.value;
    let email = form.email.value;
    let tel = form.tel.value;
    if(name == '' || email == '' || tel == ''){
        alert("Todos os campos devem ser preenchidos!")
    }
    else{
        form.classList.toggle('mostrar');
        let obj ={
            Nome: name,
            Email: email,
            Telefone: tel
        }
        console.log(obj);

        let layer = document.getElementById('resetForm');

        layer.style.display = 'flex';
        
    }

}

function reset(){

    let layer = document.getElementById('resetForm');
    layer.style.display = 'none';
    let form = document.getElementById("formTeste");
    form.reset();


}