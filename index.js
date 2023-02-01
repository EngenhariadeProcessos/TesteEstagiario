// Elements DOM
const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const inptName = document.getElementById("name");
const inptEmail = document.getElementById("email");
const inptNumber = document.getElementById("number");
const form = document.getElementById("form");
const button = document.getElementById("button");
button.disabled = true;

let datasOfUser = {};

// helper variabes.
stateButton = false;
stateName = false;
stateEmail = false;
stateNumber = false;

//helper functions
const handlerStateButton = () => {
  if(stateName == true && stateEmail == true && stateNumber == true){
    button.disabled = false;
  }
}

const createElement = (type, content, id) => {
  const element = document.createElement(type);
  element.textContent = content;
  element.id = id;
  element.style.color = "red";
  return element;
}

const checkDatas = (typo, data) => {
  if(typo === "name"){
    const nameRegex = /(\D+) (\D+)/i;
    return nameRegex.test(data);
  }

  if(typo === "email"){
    const emailRegex = /\D+@\D+\.\D{3,5}/
    return emailRegex.test(data)
  }

  if(typo === "number"){
    const numberRegex = /(\d{0,3})(\d{4,5})(\d{4})/;
    return numberRegex.test(data);
  }
}

const updateErrorDOM = (typeInpt,input, value, errParagh) => {
  if(!checkDatas(typeInpt, value)){
    if (errParagh){
      return input.style.border = "1px solid red";
    }

    const paragraf = createElement("p","Exist one error text", `err-${typeInpt}`);
    input.insertAdjacentElement("beforebegin", paragraf);
    return input.style.border = "1px solid red";
  }

  if(errParagh){
    form.removeChild(errParagh);
    input.style.border = "none"
  }
}

const returnInitialState = () => {
  const button = document.getElementById("final-button");
  form.style.display = "inherit";
  h1.textContent = "Form";
  inptEmail.value = "";
  inptName.value = "";
  inptNumber.value = "";
  main.removeChild(button);
}

//Main functions
const submitForm = (e) => {
  e.preventDefault();
  form.style.display = "none"
  h1.textContent = "Obrigado por seu cadastro!"

  const button = document.createElement("button");
  button.id = "final-button"
  button.textContent = "Clique para voltar!";
  button.addEventListener("click", returnInitialState);

  main.appendChild(button)
  console.log(datasOfUser)
}

const updateInputName = (e) => {
  const value = e.target.value;
  const errParagh = document.getElementById("err-name");
  updateErrorDOM("name", inptName, value, errParagh)
  datasOfUser["name"] = value;
  handlerStateButton()
}

const updateInputEmail = (e) => {
  const value = e.target.value;
  const errParagh = document.getElementById("err-email");

  updateErrorDOM("email", inptEmail, value, errParagh);

  stateEmail = true;
  datasOfUser["email"] = value;
  handlerStateButton();
}

const updateInputNumber = (e) => {
  const value = e.target.value;
  const errParagh = document.getElementById("err-number");

  updateErrorDOM("number", inptNumber, value, errParagh);

  stateNumber = true;
  datasOfUser["number"] = value;
  handlerStateButton();
}

inptName.addEventListener("keyup", updateInputName)
inptNumber.addEventListener("keyup", updateInputNumber)
inptEmail.addEventListener("keyup", updateInputEmail)
form.addEventListener("submit", submitForm);