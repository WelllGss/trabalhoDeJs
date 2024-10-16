const arrayNumber = [1,2,3,4,5,6,9,12,15];

let contador = 0;

const multiple = (array) => {

    for(let i = 0; i < array.length; i++){
        if (array[i] % 3 === 0){
            contador += 1
        }
    }

    return array.filter(numero => numero % 3 ===0);
}

const multipleThree = multiple(arrayNumber);
console.log(multipleThree, contador);