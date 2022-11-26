const formularioEle = document.querySelector("form");
// Elementos do formulário
const nomeInput = document.getElementById("nome");
const mailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");
const enviarBtn = document.querySelector("button");
const inputs = [nomeInput, mailInput, telefoneInput];

// Objeto que armazena os dados
const dadosFormulario = () => {
  nome = nomeInput.value;
  email = mailInput.value;
  telefone = telefoneInput.value;

  mostrarDados = () => {
    console.log(`Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`);
  };
  return { mostrarDados };
};

// funções
const ocultarFormulario = () => {
  formularioEle.style.visibility = "hidden";
};

const mostrarAgradecimento = () => {
  const mensagemDiv = document.createElement("div");
  mensagemDiv.classList.add("agradecimento");
  mensagemDiv.textContent = "Obrigado por seu cadastro!";
  formularioEle.parentNode.appendChild(mensagemDiv);
};

const checarVazios = () => {
  for (var input of inputs) {
    if (input.value === "")
      return { index: inputs.indexOf(input), validade: false };
  }
  return { validade: true };
};

const mensagemErro = document.createElement("p");
const erroConteiner = document.createElement("div");
mensagemErro.classList.add('erro-msg')
enviarBtn.previousElementSibling.appendChild(erroConteiner);
erroConteiner.appendChild(mensagemErro);
const mandarErro = () => {
  const vazio = inputs[checarVazios().index];
  const texto = vazio.id.charAt(0).toUpperCase() + vazio.id.slice(1);
  mensagemErro.textContent = `${texto} está vazio.`;
};

// Eventos
const formu = document.forms["formulario"];
formu.addEventListener("submit", (evt) => {
  evt.preventDefault();
  checarVazios();
  let status = checarVazios().validade;
  if (!status) {
    mandarErro();
  } else {
    const dados = dadosFormulario();
    ocultarFormulario();
    mostrarAgradecimento();
    dados.mostrarDados();
  }
});
