document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const modal = document.getElementById("default-modal");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        
        // Verifica se o número de telefone tem 11 dígitos (incluindo DDD)
        if (!isValidPhoneNumber(telefone)) {
            showError("Por favor, insira um número de telefone válido (DDD + 9 dígitos).");
            return;
        }
        
        // Se a validação passar, envie o formulário
        const info = {nome, email, telefone};
        for (const prop in info) {
            console.log(`${prop}: ${info[prop]}`);
        }
        modal.classList.remove("hidden");

        setTimeout(function() {
            modal.classList.add("hidden");
        }, 2000);
    });
    
    // Função para exibir mensagens de erro
    function showError(message) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "text-red-600 text-sm mt-1";
        errorDiv.textContent = message;
        
        const formContainer = document.querySelector(".max-w-sm");
        formContainer.appendChild(errorDiv);
        
        // Remove a mensagem de erro após 5 segundos
        setTimeout(function() {
            errorDiv.remove();
        }, 5000);
    }
    
    // Função para verificar se o número de telefone é válido
    function isValidPhoneNumber(phoneNumber) {
        const regex = /^\(?(\d{2})\)?[- ]?(\d{5})[- ]?(\d{4})$/;
        return regex.test(phoneNumber);
    }
});
