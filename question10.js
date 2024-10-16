const numeroPrimo = (number) => {
    if(number > 0 && number % 2 != 0 || number == 2){
        console.log(`O número ${number} é primo`);
    } else {
        console.log(`O número ${number} não é primo`);
    }
}

numeroPrimo(120);