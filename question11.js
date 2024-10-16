const arrayNumbers = [1,2,10,11,12];

const quadradoNumbers = (array) => {
    let novoArray = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] > 10){
            novoArray.push(array[i]*array[i])
        } else {
            novoArray.push(array[i])
        }
    }

    return novoArray
}

let response = quadradoNumbers(arrayNumbers);
console.log(response);