$(document).ready(function () {

    function getFormData() {
        const name = $('#name').val();
        const email = $('#email').val();
        const telephone = $('#phone').val();

        return {
            name: name,
            email: email,
            telephone: telephone
        };
    }

    function validateForm() {
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();

        if (!name || !email || !phone) {
            alert("Todos os campos são obrigatórios!");
            return false;
        }
        return true;
    }

    function handleFormSubmission() {

        const registers = getFormData();

        $("#formulario").hide();

        $("#msg-sucess").show();

        console.log(registers);
    }

    $("#formulario").submit(function (e) {
        e.preventDefault(); 

        if (validateForm()) {
            handleFormSubmission();
        }
    });
});
