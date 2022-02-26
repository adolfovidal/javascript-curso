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
*/

const allItems = document.getElementsByTagName("li");
console.log(allItems)