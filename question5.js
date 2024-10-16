const arrayNumbers = [1,2,3,4,5,6];

const numerosPares = arrayNumbers.filter(numero => numero % 2 == 0);
const numerosDobrados = numerosPares.map(numero => numero * 2);

console.log(numerosPares);
console.log(numerosDobrados);