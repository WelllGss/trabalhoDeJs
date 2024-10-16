let value1 = 9;

let soma = 0;

let stringSoma = "";

for(let i = 0; i < value1; i++){
    soma += i+1;
    stringSoma += i+1;
    if(i == value1-1){
        break;
    }
    stringSoma += " + ";
}

console.log(`A soma dos números foi ${soma} (${stringSoma})`)