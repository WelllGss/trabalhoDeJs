const arrayNumbers = [1,2,3,4,10,12]

const somarTodos = arrayNumbers.reduce((valorInicial, valor) =>{
    return valorInicial + valor;
}, 0);

console.log(somarTodos);