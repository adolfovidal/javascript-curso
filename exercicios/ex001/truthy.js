const x = '';
//FALSE
console.log(!!x)

if(x) {
    console.log(x);
}

const y = 0;
console.log(!!y);
//FALSE

const a = null;
console.log(a);
console.log(!!a)
//FALSE
const b = undefined;
console.log(!!b);
//FALSE


const list = [];
console.log(!![]);
//TRUE
console.log(!false)

// !!, inverter booleano 

const object ={};
console.log(!!object);
//TRUE

if (list.length > 0) { // Verificar se a lista está vazia
    console.log(list);
}
