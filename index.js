function show() {
  let nome = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  console.log(
    "o nome digitado é : " +
      nome +
      " \n o email digitado é : " +
      email +
      "\n o telefone digitado é : " +
      number
  );

  if (nome == "" || email == "" || number == "") {
    alert("atenção, todos os campos precisam ser preenchidos!");
  } else {
    alert("obrigado por seu cadastro!");
    location.href = "home.html";
  }
}
