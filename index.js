const form = document.getElementById('form');
const fields = document.querySelectorAll('.form-control');

function validarNome() {
    if (!fields[0].value.length > 3) {
        console.log('Nome deve conter 3 caracteres');
    }
}

function validarTelefone() {

}