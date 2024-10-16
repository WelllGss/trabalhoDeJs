const arrayDeArrays = [[1,2,3,4],[1,2,3,4,5],[1,2,3]];

const somarTodos = (array) => {
    let result = 0;

    for(let i = 0; i < array.length; i++){
        for(let index = 0; index < array[i].length; index++){
            result += array[i][index];
        }
    }

    return result;
}

console.log(somarTodos(arrayDeArrays))