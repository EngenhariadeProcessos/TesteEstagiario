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

// Status button.
let statusButton = {
  name: false,
  email: false,
  number: false
}

//helper functions
const handlerStateButton = () => {
  if(statusButton.name === true && statusButton.email === true && statusButton.number === true){
    button.disabled = false;
  }
  else{
    button.disabled = true;
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
  const finalButton = document.getElementById("final-button");

  form.style.display = "inherit";
  h1.textContent = "Form";
  inptEmail.value = "";
  inptName.value = "";
  inptNumber.value = "";

  statusButton = {
    name: false,
    email: false,
    number: false
  }

  button.disabled = true;

  main.removeChild(finalButton);
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

  main.appendChild(button);
  console.log(datasOfUser);
}

const manipulateInputName = (e) => {
  const value = e.target.value;
  const errParagh = document.getElementById("err-name");
  updateErrorDOM("name", inptName, value, errParagh)

  const response = checkDatas("name", value);
  if(response){
    statusButton.name = true;
    datasOfUser["name"] = value;
    handlerStateButton();
  }
  else{
    statusButton.name = false;
    handlerStateButton();
  }
}

const manipulateInputEmail = (e) => {
  const value = e.target.value;
  const errParagh = document.getElementById("err-email");

  updateErrorDOM("email", inptEmail, value, errParagh);

  const response = checkDatas("email", value);
  if(response){
    statusButton.email = true;
    datasOfUser["email"] = value;
    handlerStateButton();
  }
  else{
    statusButton.email = false;
    handlerStateButton();
  }
}

const manipulateInputNumber = (e) => {
  const value = e.target.value;
  const errParagh = document.getElementById("err-number");

  updateErrorDOM("number", inptNumber, value, errParagh);

  const response = checkDatas("number", value);
  if(response){
    statusButton.number = true;
    datasOfUser["number"] = value;
    handlerStateButton();
  }
  else{
    statusButton.number = false;
    handlerStateButton();
  }
}

inptName.addEventListener("keyup", manipulateInputName)
inptEmail.addEventListener("keyup", manipulateInputEmail)
inptNumber.addEventListener("keyup", manipulateInputNumber)
form.addEventListener("submit", submitForm);


// Light and Dark mode
const icon = document.getElementById("icon");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const label = document.querySelector("aside");

let mode = "light"

icon.addEventListener("click", () => {
  h1.classList.toggle("dark-text");
  inputs.forEach((element) => {
    element.classList.toggle("dark-input");
    
  });
  labels.forEach((element) => {
    element.classList.toggle("dark-text")
  });

  main.classList.toggle("dark-main");
  button.classList.toggle("dark-button")
  label.classList.toggle("dark-aside");

  if(mode === "light"){
    icon.setAttribute("src","./sun.svg");
    mode = "dark";
  }
  else{
    icon.setAttribute("src","./moon.svg");
    mode = "light";
  }
})