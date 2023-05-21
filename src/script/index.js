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
    const formRegisterUser = {};
    formFields.forEach((fieldName) => {
      formRegisterUser[fieldName] = inputElements[fieldName].value;
      formRegisterUser["createdAt"] = inputElements["createdAt"];
    });
    return formRegisterUser;
  };

  const formatPhoneNumber = (phoneNumber) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
    const match = cleanedPhoneNumber.match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);
    if (!match[2]) return match[1];

    return `(${match[1]})${match[2]} ${match[3]}-${match[4]}`;
  };

  const checkLength = (input, letters, minLength, maxLength) => {
    if (letters.length < minLength) {
      input.setCustomValidity(`Digite pelo menos ${minLength} caracteres.`);
    } else if (letters.length > maxLength) {
      input.setCustomValidity(`Digite no máximo ${maxLength} caracteres.`);
    } else {
      input.setCustomValidity("");
    }
  };

  const handlePhoneInput = (e) => {
    const { value: formatted } = e.target;
    e.target.value = formatPhoneNumber(formatted);
  };

  const allowOnlyLetters = (input, minLength, maxLength) => {
    let letters = input.value.replace(/[^A-Za-zÀ-ÿ\s ]/g, "");
    checkLength(input, letters, minLength, maxLength);
    return (input.value = letters);
  };
  
  const handleInputValidation = (input, minLength, maxLength) => {
    return input.addEventListener("input", () => allowOnlyLetters(input, minLength, maxLength));
  };

  phone.addEventListener("input", handlePhoneInput);
  handleInputValidation(name, 10, 50);
  handleInputValidation(job, 5, 35);

  const showMessageRequest = (message) => alert(message);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(handleFormFields());
    showMessageRequest("Dados enviados com sucesso!");
  };

  form.addEventListener("submit", handleSubmit);
};

window.addEventListener("DOMContentLoaded", initializeApp);
