const input_name = document.getElementById("nome");
const input_email = document.getElementById("email");
const input_telefone = document.getElementById("telefone");
const btn = document.getElementById("submit_button");

function validation() {
    const nome = input_name.value;
    const email = input_email.value;
    const telefone = input_telefone.value;

    if (nome !== '' && email !== '' && telefone !== '') {
        document.getElementById("submit_button").disabled = false;

    } else {
        document.getElementById("submit_button").disabled = true;
    }
}
function formOff() {
    document.getElementById("form").style.display = "none";
    document.getElementById("submit_mensage").style.display = "block";
}

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const cadastrado = new Object;

    cadastrado.name = input_name.value;
    cadastrado.email = input_email.value;
    cadastrado.telefone = input_telefone.value;

    console.log(cadastrado);
})