const nomeRef = document.getElementById("inputName");
const emailRef = document.getElementById("inputEmail");
const phoneRef = document.getElementById("inputPhone");
const buttonRef = document.getElementById("submitButton");
const containerRef = document.getElementById("formContainer");
const bodyRef = document.getElementById("body");

// nomeRef.addEventListener("keydown", () => {
//   console.log("mudou");
// });

function handleError(reference) {
  alert("Não é possível submeter o formulário com campos vazios");
  reference.classList.replace("border-gray-500", "border-orange-700");
}

function handleSubmit() {
  const json = {
    nome: nomeRef.value,
    email: emailRef.value,
    fone: phoneRef.value,
  };
  containerRef.classList.add("hidden");
  bodyRef.innerHTML = "<h1 class='text-2xl'>Obrigado por seu cadastro!</h1>";
  console.log(json);
}

buttonRef.addEventListener("click", () => {
  nomeRef.value == ""
    ? handleError(nomeRef)
    : emailRef.value == ""
    ? handleError(emailRef)
    : phoneRef.value == ""
    ? handleError(phoneRef)
    : handleSubmit();
});
