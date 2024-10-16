function fatorial(number){
    let resultado = 0;

    for(let i = number; i > 0; i--){
        if(resultado == 0){
            resultado += i;
        } else if(i != 0){
            resultado *= i;
        }
    }

    return resultado;
}

console.log(fatorial(10));