let value1 = 2;
let value2 = 2;

let soma = value1 + value2;

console.log(`O resultado da soma foi ${soma}`);

if(value1 > value2){
    console.log(`O maior valor é ${value1}`);
} else {
    console.log(`O maior valor é ${value2}`);
}

if(soma % 2 == 0){
    console.log(`O número ${soma} é par`);
} else {
    console.log(`O número ${soma} é impar`);
}