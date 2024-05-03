
$("#btnEnviar").on('click', function(){

    if($("#nome").val().trim() == "" || $("#email").val().trim() == "" || $("#telefone").val().trim() == "") {
        alert("Preencha o foormulário")
        return
    }

    $("#cadastroFormulario").prop("hidden", true)
    $("h1").prop("hidden", true)
    $("#boasVindas").prop("hidden", false)
    
    let arrayObjetoDadosFormulario = {
        "nome": $("#nome").val(),
        "email": $("#email").val(),
        "telefone": $("#telefone").val()
    }
    
    console.log(arrayObjetoDadosFormulario)

    $("#boasVindas").html(`Obrigado por seu cadastro, <span id="nome-cadastro">${$("#nome").val()}</span>!`);


    const divBoasVindas = document.querySelector("#boasVindas")
    const fogosDeArtificio = new Fireworks.default(divBoasVindas)
    fogosDeArtificio.start()
    
    setTimeout(function(){
        fogosDeArtificio.stop()
    }, 5000)
})