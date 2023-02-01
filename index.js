function validateForm() {
    const phone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("nome").value;
  
    if (phone === "" || email === "" || name === "") {
      alert("Por favor, preencha os dados do telefone, email e nome.");
      return false;
    }
    return true;
  }

  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const formData = {
      phone: document.getElementById("telefone").value,
      email: document.getElementById("email").value,
      name: document.getElementById("nome").value
    };
  
    console.log(formData);
  });

  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    document.getElementById("form").style.display = "none";
    document.getElementById("message").innerHTML = "Obrigado por seu cadastro!";
    document.getElementById("message").style.display = "block";
  });
  
  
  