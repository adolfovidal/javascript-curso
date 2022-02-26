// Adicionar um elemento

/*
const addUserText = document.getElementById("add-user");

addUserText.innerText = "Adicionar usuário";

console.log(addUserText); 

const addUserText = document.querySelector("#add-user");

addUserText.textContent = "Adicionar usuário"
console.log(addUserText);

const myForm = document.querySelector(".container #my-form");

console.log(myForm); 

*/

// Selecionar múltiplos elementos

/*
const allItems = document.querySelectorAll(".item");

console.log(allItems); 


const allItems = document.getElementsByClassName('items');

console.log(allItems); // Não é possível usar métodos de listas (não recomendado)


const allItems = document.getElementsByTagName("li");  // tag dos itens (li)
console.log(allItems)

*/

// remover itens

/*
const items = document.querySelector(".items");
items.remove();


items.firstElementChild.remove()
items.firstElementChild,remove()

items.children[0].textContent = 'Item Um';
items.lastElementChild.innerHTML = '<h1>Hello World</1>';

*/

// Mudar item

/*
const button = document.querySelector('.btn');
button.style.background = "red";
button.style.color = "blue";
*/

/*
const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const items = document.querySelector(".items");
const body = document.querySelector("body");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === "" || emailValue === "") {
       return alert('Please fill out all the fields');
    }

    myForm.style.background = 'red';
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;
    body.style.background = "white";

    // console.log(nameValue);
    // console.log("clicked!");
}); 


nameInput.addEventListener('change', function(e){
    console.log(e.target.value)
})

*/

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector ("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");
const items = document.querySelector('.items');

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === '' || emailValue === "") {
        errorMessage.textContent = "Please fill out the fields";
        errorMessage.classList = "error"
        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = "";
        }, 3000);
        return;
    }

    const li = document.createElement('li');
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue} <br/> Email: ${emailValue}`

    items.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
});