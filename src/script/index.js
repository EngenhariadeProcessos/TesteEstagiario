/**
*Inicializa a aplicação.
**/
const initializeApp = () => {
  const inputElements = {
    form: document.getElementById("form-user"),
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    createdAt: (document.getElementById("created-at").value = new Date().toLocaleDateString()),
  };

// Campos do formulário que serão manipulados
  const { form, name, phone } = inputElements;
  const formFields = ["name", "email", "phone"];

/**
  Manipula os campos do formulário e retorna um objeto com os valores inseridos.
  @returns {Object} - Objeto contendo os campos do formulário registrados.
*/
  const handleFormFields = () => {
    let formRegisterUser = {};
    formFields.forEach((fieldName) => (formRegisterUser[fieldName] = inputElements[fieldName].value));
    formRegisterUser["createdAt"] = inputElements["createdAt"];

    return formRegisterUser;
  };

/**
  Verifica o comprimento de uma string e define uma mensagem de validação.
  @param {HTMLElement} input - O elemento de entrada a ser validado.
  @param {string} letters - A string contendo os caracteres inseridos.
  @param {number} minLength - O comprimento mínimo permitido.
  @param {number} maxLength - O comprimento máximo permitido.
*/
  const validateLengthInputText = (input, letters, minLength, maxLength) => {
    const { length: characters } = letters;
    if (characters < minLength) {
      input.setCustomValidity(`O nome deve ter no mínimo ${minLength} caracteres.`);
    } else if (characters > maxLength) {
      input.setCustomValidity(`O nome deve ter no máximo ${maxLength} caracteres.`);
    } else {
      input.setCustomValidity("");
    }
  };
  
  /**
    Permite somente letras em um campo de entrada.
    @param {HTMLElement} input - O elemento de entrada a ser validado.
    @param {number} minLength - O comprimento mínimo permitido.
    @param {number} maxLength - O comprimento máximo permitido.
    @returns {string} - A string resultante contendo apenas letras.
  */
  const replaceNumberToString = (input, minLength, maxLength) => {
    const letters = input.value.replace(/[^A-Za-zÀ-ÿ\s ]/g, "");
    validateLengthInputText(input, letters, minLength, maxLength);

    return (input.value = letters);
  };

/**
  Valida e formata a entrada de texto permitindo apenas letras.
  @param {HTMLElement} input - O elemento de entrada a ser validado e formatado.
  @param {number} minLength - O comprimento mínimo permitido.
  @param {number} maxLength - O comprimento máximo permitido.
*/
  const validateInputText = (input, minLength, maxLength) => {
    return input.addEventListener("input", () => replaceNumberToString(input, minLength, maxLength));
  };

  validateInputText(name, 10, 50);

/**
  Formata o número de telefone no formato (99)9 9999-9999.
  @param {string} phoneNumber - O número de telefone a ser formatado.
  @returns {string} - O número de telefone formatado.
*/
const formatPhoneNumber = (phoneNumber) => {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const match = cleanedPhoneNumber.match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);
  if (!match[2]) return match[1];
  return `(${match[1]})${match[2]} ${match[3]}-${match[4]}`;
};


/**
  Manipula a entrada do telefone para formatá-la conforme é digitada.
  @param {Event} e - O evento de entrada associado ao campo de telefone.
*/
  const handlePhoneInput = (e) => {
    const { value: number } = e.target;
    return (e.target.value = formatPhoneNumber(number));
  };

  phone.addEventListener("input", handlePhoneInput);

/**
  Exibe uma mensagem em um alerta.
  @param {string} message - A mensagem a ser exibida.
*/
  const showMessageRequest = (message) => alert(message);

/**
  Exibe os dados do registro no console.
*/
  const showDataRegister = () => {
    const register = handleFormFields();
    console.table(register);
  };
  
  /**
   Manipula o evento de envio do formulário.
   @param {Event} e - O evento de envio do formulário.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    showDataRegister();
    showMessageRequest("Obrigado por seu cadastro!");
  };

  form.addEventListener("submit", handleSubmit);
};

/**
  Manipula o evento de carregamento do DOM e inicializa a aplicação após o carregamento completo do DOM.
*/
const handleDOMContentLoaded = () => {
  try {
    initializeApp();
  } catch (error) {
    console.error("[error]: ", error);
  }
};

window.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
