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

  const { form, name, job, phone } = inputElements;
  const formFields = ["name", "age", "job", "email", "phone"];

  const handleFormFields = () => {
    let formRegisterUser = {};
    formFields.forEach((fieldName) => (formRegisterUser[fieldName] = inputElements[fieldName].value));
    formRegisterUser["createdAt"] = inputElements["createdAt"];

    return formRegisterUser;
  };

  const formatPhoneNumber = (phoneNumber) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
    const match = cleanedPhoneNumber.match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);
    if (!match[2]) return match[1];
    return `(${match[1]})${match[2]} ${match[3]}-${match[4]}`;
  };

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

  const allowOnlyLetters = (input, minLength, maxLength) => {
    const letters = input.value.replace(/[^A-Za-zÀ-ÿ\s ]/g, "");
    checkLengthLettersInput(input, letters, minLength, maxLength);

    return (input.value = letters);
  };

  const inputValidationTypeText = (input, minLength, maxLength) => {
    return input.addEventListener("input", () => allowOnlyLetters(input, minLength, maxLength));
  };

  inputValidationTypeText(name, 10, 50);
  inputValidationTypeText(job, 5, 35);

  const handlePhoneInput = (e) => {
    const { value: number } = e.target;
    return (e.target.value = formatPhoneNumber(number));
  };

  phone.addEventListener("input", handlePhoneInput);

  const showMessageRequest = (message) => alert(message);

  const showDataRegister = () => {
    const register = handleFormFields();
    console.table(register);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showDataRegister();
    showMessageRequest("Dados enviados com sucesso!");
  };

  form.addEventListener("submit", handleSubmit);
};

const handleDOMContentLoaded = () => {
  try {
    initializeApp();
  } catch (error) {
    console.error("[error]: ", error);
  }
};

window.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
