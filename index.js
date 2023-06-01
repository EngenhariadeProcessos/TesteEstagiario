const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const telefoneInput = document.querySelector("#phone");

    const nome = nomeInput.value;
    const email = emailInput.value;
    const telefone = telefoneInput.value;

    if (nome.length === 0 || email.length === 0 || telefone.length === 0) {
        alert("Preencha os campos corretamente.");
        return;
    }

    const usuario = {
        nome,
        email,
        telefone,
    };

    e.target.reset();

    console.log(usuario);
    alert("Obrigado por seu cadastro!");
});