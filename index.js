
      function submitForm() {
        var form = document.getElementById("formulario");
        var mensagem = document.getElementById("mensagem");
        
        form.style.display = "none";
        mensagem.style.display = "block";
        
        return false;
      }