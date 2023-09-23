let form = document.querySelector("#form");
let button = document.querySelector("#submit_button");
let inuputText = document.querySelector("#inuputText");
let contentDiv = document.querySelector("#content");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  typeText();
});

function typeText(){
  let storeInputValue = inuputText.value;

  createList(storeInputValue);
}

function createList(storeInputValue){

  let list = document.createElement("li");
  list.setAttribute("id","list");
  list.textContent = storeInputValue;
  contentDiv.appendChild(list);

  let icon = document.createElement("h4");
  icon.innerHTML = "\u00d7";
  list.appendChild(icon);

  icon.onclick = function dlt() {
    list.remove();
    storeDate();
  }

  inuputText.value = " ";
  
  storeDate();
}

function storeDate(){
  localStorage.setItem("Items",contentDiv.innerHTML);
}


function getStoredData(){
  contentDiv.innerHTML = localStorage.getItem("Items");
}

getStoredData();