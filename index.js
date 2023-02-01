// Elements DOM
const inptName = document.getElementById("name");
const inptEmail = document.getElementById("email");
const inptNumber = document.getElementById("number");
const form = document.getElementById("form");
const button = document.getElementById("button");
button.disabled = true;

let datasOfUser = {};

let stateButton = false;

// input states, if all pass the regex (all are true) it will be logged
stateName = false;
stateEmail = false;
stateNumber = false;

const submitForm = (e) => {
  e.preventDefault();
  console.log(datasOfUser)
}

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

const updateInputName = (e) => {
  const input = e.target.value;
  const errParagh = document.getElementById("err-name");

  if(!checkDatas("name", input)){
    if (errParagh){
      return inptName.style.border = "1px solid red";
    }

    const paragraf = createElement("p","Exist one error text", "err-name");
    inptName.insertAdjacentElement("beforebegin", paragraf);
    return inptName.style.border = "1px solid red";
  }

  if(errParagh){
    form.removeChild(errParagh);
    inptName.style.border = "none"
  }

  stateName = true;
  datasOfUser["name"] = input;
  handlerStateButton()
}

const updateInputEmail = (e) => {
  const input = e.target.value;
  const errParagh = document.getElementById("err-email");

  if(!checkDatas("email",input)){
    if(errParagh){
      return inptEmail.style.border = "1px solid red"
    }
    const errEmailParagraf = createElement("p", "Exist error email", "err-email");
    inptEmail.insertAdjacentElement("beforebegin", errEmailParagraf);
    return inptEmail.style.border = "1px solid red";
  }

  if(errParagh){
    form.removeChild(errParagh);
    inptEmail.style.border = "none";
  }

  stateEmail = true;
  datasOfUser["email"] = input;
  handlerStateButton();
}

const updateInputNumber = (e) => {
  const input = e.target.value;
  const errParagh = document.getElementById("err-number");

  if(!checkDatas("number",input)){
    if(errParagh){
      return inptNumber.style.border = "1px solid red"
    }
    const errNumberParagraf = createElement("p", "exist error number", "err-number");
    inptNumber.insertAdjacentElement("beforebegin", errNumberParagraf);
    return inptNumber.style.border = "1px solid red";
  }

  if(errParagh){
    form.removeChild(errParagh);
    inptNumber.style.border = "none"
  }

  stateNumber = true;
  datasOfUser["number"] = input;
  handlerStateButton();
}

inptName.addEventListener("keyup", updateInputName)
inptNumber.addEventListener("keyup", updateInputNumber)
inptEmail.addEventListener("keyup", updateInputEmail)
form.addEventListener("submit", submitForm);