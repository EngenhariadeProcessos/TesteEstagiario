
// Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function() {
    'use strict'
    window.addEventListener('load', function() {
      // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
      var forms = document.getElementsByClassName('needs-validation')
      // Faz um loop neles e evita o envio
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
            form.classList.add('was-validated')
          }

          else{
            form.classList.add('was-validated')
            document.getElementById("body").style.display = "none";
            
            // Mensagem de sucesso após realizar o cadastro
            window.alert("Obrigado por seu cadastro.")
          }
          
        }, false)
        
      })

    }, false)
  })()

  var cadastro = new Object();
  cadastro.nome = cadastro_Nome;
  cadastro.email = cadastro_Email;
  cadastro.telefone = cadastro_Telefone;

  document.querySelector("form")
  .addEventListener("submit", event => {
      console.log(cadastro)

      event.preventDefault()
  })