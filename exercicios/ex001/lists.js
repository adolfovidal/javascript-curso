const names = ["Adolfo", "Dentsu", "Figado", 10, false];
const Dentsu = names[1]

names.push("Antenoca");
console.log(names); // Acicionar no final da lista
names.unshift("Adílio"); // Adicionar no inicio da lista
console.log(names);
names.pop(); // Remover elementos da lista
console.log(names)
names.pop() // Após usar o Ctrl+/ para comentar o elemento "Pedro", removido o elemento booleano (false).
console.log(names)

console.log(names.indexOf("Adolfo"))
console.log(names);

names[3] = "Gustavo";

const indexOfAdolfo = names.indexOf("Adolfo");
const sortedNames = names.sort();
const namesIsArray = Array.isArray(names)

console.log(names);
console.log(sortedNames);
console.log(namesIsArray)
