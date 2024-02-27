document.getElementById("submitButton").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  console.log("Nome:", name);
  console.log("Email:", email);
  console.log("Telefone:", phone);

  if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  document.getElementById("form").style.display = "none";
  document.getElementById("mensagem").style.display = "block";
});
