const formularioEle = document.querySelector("form");
// Elementos do formulário
const nomeInput = document.getElementById("nome");
const mailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");
const enviarBtn = document.querySelector("button");

// Validação dos campos
nomeInput.setAttribute("minlength", "3");
nomeInput.setAttribute("maxlength", "20");
nomeInput.required = true;

// regex aceita domínios sem extensão
const formatoEmail = "^[A-Za-z0-9-.]+@([a-z]+.)+[a-z]{2,4}$";
mailInput.setAttribute("pattern", formatoEmail);
mailInput.required = true;

telefoneInput.setAttribute("minlength", "8");
telefoneInput.setAttribute("maxlength", "11");
telefoneInput.required = true;

// Objeto que armazena os dados
const formulario = () => {
  nome = nomeInput.value;
  email = mailInput.value;
  telefone = telefoneInput.value;

  mostrarDados = () => {
    console.log(`Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`);
  };
  return { mostrarDados };
};

// funções
let inputs = document.querySelectorAll("input");
const checarValido = () => {
  for (let input of inputs) {
    if (!input.validity.valid) {
      input.reportValidity();
      return false;
    }
  }
  return true;
};

const ocultarFormulario = () => {
  formularioEle.style.visibility = "hidden";
};

const mostrarAgradecimento = () => {
  const mensagemDiv = document.createElement("div");
  mensagemDiv.classList.add("agradecimento");
  mensagemDiv.textContent = "Obrigado por seu cadastro!";
  formularioEle.parentNode.appendChild(mensagemDiv);
};

// Eventos
inputs.forEach((input) =>
  input.addEventListener("input", () => {
    if (!input.validity.valid) input.reportValidity();
  })
);

enviarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checarValido()) {
    const dados = formulario();
    dados.mostrarDados();
    ocultarFormulario();
    mostrarAgradecimento();
  }
});
