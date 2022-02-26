// Função e Arrow

function sum(a, b = 10){
    // console.log(a+b)
    return a + b;
}

const sumArrow = (a, b = 10) => a + b;
// sum(2, 2)

const sumValue = sum (2);

console.log(sumValue);
