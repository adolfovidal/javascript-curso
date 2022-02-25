// JSON para enviar e receber objetos para servidor

const todos = [
    {
        id:1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id:2,
        description: "Jogar",
        isCompleted: true,
    },
    {
        id:3,
        description: "Treinar",
        isCompleted: true,
    },
];

const todosJSON = JSON.stringify(todos); // Não é lista
// console.log(todosJSON); String formato JSON
const todosList = JSON.parse(todosJSON);
console.log(todosList)