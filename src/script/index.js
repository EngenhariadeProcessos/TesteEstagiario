const initializeApp = () => {
  const inputElements = {
    form: document.getElementById("form-user"),
    name: document.getElementById("name"),
    age: document.getElementById("age"),
    job: document.getElementById("job"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    createdAt: (document.getElementById("created-at").value = new Date().toLocaleDateString()),
  };
<<<<<<< Updated upstream

  // Campos do formulário que serão manipulados
  const { form, name, job, phone } = inputElements;
  const formFields = ["name", "age", "job", "email", "phone"];

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
  Verifica o comprimento de uma string e define uma mensagem de validação.
  @param {HTMLElement} input - O elemento de entrada a ser validado.
  @param {string} letters - A string contendo os caracteres inseridos.
  @param {number} minLength - O comprimento mínimo permitido.
  @param {number} maxLength - O comprimento máximo permitido.
*/
  const checkLengthLettersInput = (input, letters, minLength, maxLength) => {
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
  const allowOnlyLetters = (input, minLength, maxLength) => {
    const letters = input.value.replace(/[^A-Za-zÀ-ÿ\s ]/g, "");
    checkLengthLettersInput(input, letters, minLength, maxLength);

    return (input.value = letters);
  };

/**
  Valida e formata a entrada de texto permitindo apenas letras.
  @param {HTMLElement} input - O elemento de entrada a ser validado e formatado.
  @param {number} minLength - O comprimento mínimo permitido.
  @param {number} maxLength - O comprimento máximo permitido.
*/
  const inputValidationTypeText = (input, minLength, maxLength) => {
    return input.addEventListener("input", () => allowOnlyLetters(input, minLength, maxLength));
  };

  inputValidationTypeText(name, 10, 50);
  inputValidationTypeText(job, 5, 35);

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
=======
  const NAME_PATHERN = /[^A-Za-zÀ-ÿ\s ]/g;
  const PHONE_REGEX = /(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/;
  const { form, name, phone } = inputElements;
  const formFields = ["name", "email", "phone"];
  let formRegisterUser = {};

  const showMessageRequest = (message) => alert(message);

  const attributes = {
    minLength: (input) => input.getAttribute("minlength"),
    maxLength: (input) => input.getAttribute("maxlength"),
  };

  const showDataRegister = () => {
    const register = handleValuesFormField();
    console.table(register);
  };

  const setCustomValidity = (input, message) => {
    return message
      ? input.setCustomValidity(message)
      : input.setCustomValidity("");
  };

  const validateLengthInput = (input, characters, minLength, maxLength) => {
    if (characters < minLength) {
      setCustomValidity(input,`O de registro deve ter no mínimo ${minLength} caracteres.`);
    } 
    else if (characters > maxLength) {
      setCustomValidity(input,`O de registro deve ter no máximo ${maxLength} caracteres.`);
    } 
    else {
      setCustomValidity(input);
    }
  };

  const formatPhoneNumber = (number) => {
    const cleanedPhoneNumber = number.replace(/\D/g, "");
    const match = cleanedPhoneNumber.match(PHONE_REGEX);
    if (!match[2]) return match[1];

    return `(${match[1]})${match[2]} ${match[3]}-${match[4]}`;
  };

  const handleValuesFormField = () => {
    formFields.forEach((field) => (formRegisterUser[field] = inputElements[field].value));
    formRegisterUser["createdAt"] = inputElements["createdAt"];

    return formRegisterUser;
  };

  const clearFormAfterSubmit = () => {
    return formFields.forEach((element) => (inputElements[element].value = ""));
  };

  phone.addEventListener("input", function (e) {
    const { value: number } = e.target;
    const { length } = number;
    validateLengthInput(
      this,
      length,
      attributes.minLength(phone),
      attributes.maxLength(phone)
    );
    return (e.target.value = formatPhoneNumber(number));
  });
 
   name.addEventListener("input", function (e) {
    const letters = e.target.value.replace(NAME_PATHERN, "");
    const { length } = letters;
    validateLengthInput(
      this,
      length,
      attributes.minLength(name),
      attributes.maxLength(name)
      );
    return (e.target.value = letters);
  });

>>>>>>> Stashed changes
  const handleSubmit = (e) => {
    e.preventDefault();
    showDataRegister();
    showMessageRequest("Dados enviados com sucesso!");
  };

  form.addEventListener("submit", (e) => handleSubmit(e));
};

window.addEventListener("DOMContentLoaded", () => {
  try {
    initializeApp();
  } catch (error) {
    console.error("[error]: ", error);
  }
});
