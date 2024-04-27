const form = document.querySelector("#form");
const sucessMessage = document.querySelector("#sucess-message")
const userName = document.querySelector("#inputName");
const userEmail = document.querySelector("#inputEmail");
const userTelephone = document.querySelector("#inputTelephone");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userName.value === "") {
    alert("Nome não pode estar em branco!");
    return;
  }

  if (userEmail.value === "" || !isEmailValid(userEmail.value)) {
    alert('Email em branco ou inválido!');
    return;
  }

  if (userTelephone.value === "") {
    alert("Telefone não pode estar em branco!");
    return;
  }

  const userNameValue = document.querySelector("#inputName").value;
  const userEmailValue = document.querySelector("#inputEmail").value;
  const userTelephoneValue = document.querySelector("#inputTelephone").value;

  const formData = {
    name: userNameValue,
    email: userEmailValue,
    telephone: userTelephoneValue
  }

  console.log(formData);
  form.style.display = "none";
  sucessMessage.style.display = "block";
});

function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  )

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}

userTelephone.addEventListener("input", () => {
  const cleanValue = userTelephone.value.replace(/\D/g, "").substring(0, 11);

  const arrayPhoneValue = cleanValue.split("");

  let formattedNumbers = "";

  if (arrayPhoneValue.length > 0) {
    formattedNumbers += `(${arrayPhoneValue.slice(0, 2).join("")})`;
  }

  if (arrayPhoneValue.length > 2) {
    formattedNumbers += ` ${arrayPhoneValue.slice(2, 7).join("")}`;
  }

  if (arrayPhoneValue.length > 7) {
    formattedNumbers += `-${arrayPhoneValue.slice(7, 11).join("")}`;
  }

  userTelephone.value = formattedNumbers;
});
