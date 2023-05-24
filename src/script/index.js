const formInputs = {
  form: document.getElementById("form-user"),
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  createdAt: (document.getElementById("created-at").value = new Date().toLocaleDateString()),
};

const NAME_PATHERN = /[^A-Za-zÀ-ÿ\s ]/g;
const PHONE_REGEX = /(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/;
const { form, name, phone } = formInputs;
const formFields = ["name", "email", "phone"];
let formUser = {};

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
  return input.setCustomValidity(message || "");
};

const validateInputLength = (input, minLength, maxLength) => {
  const { value: { length: characters } } = input;
  if (characters < minLength) {
    setCustomValidity(input, `O de registro deve ter no mínimo ${minLength} caracteres.`);
  }
  else if (characters > maxLength) {
    setCustomValidity(input, `O de registro deve ter no máximo ${maxLength} caracteres.`);
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
  formFields.forEach((field) => (formUser[field] = formInputs[field].value));
  formUser["createdAt"] = formInputs["createdAt"];

  return formUser;
};

const clearForm = () => formFields.forEach(element => formInputs[element].value = "");

const handleSubmit = (e) => {
  e.preventDefault();
  showDataRegister();
  showMessageRequest("Obrigado por seu cadastro!");
  clearForm();
};

const initializeApp = () => {

  phone.addEventListener("input", function (e) {
    const { value: number } = e.target;
    validateInputLength(this, attributes.minLength(this), attributes.maxLength(this));

    return (e.target.value = formatPhoneNumber(number));
  });

  name.addEventListener("input", function (e) {
    const letters = e.target.value.replace(NAME_PATHERN, "");
    validateInputLength(this, attributes.minLength(this), attributes.maxLength(this));

    return (e.target.value = letters);
  });
  
  form.addEventListener("submit", (e) => handleSubmit(e));
};

const handleDOMContentLoadedApp = () => {
  try {
    initializeApp();
  } catch (error) {
    console.error("[error]: ", error);
  }
};
window.addEventListener("DOMContentLoaded", handleDOMContentLoadedApp);
