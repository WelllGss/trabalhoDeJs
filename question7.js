const arrayFrutas = ["Banana", "Abacaxi", "Melão", "Maçã", "Morango", "Beterraba", "Cajarana"];

const organizador = (array) => {
    return array.sort((a,b) => {

        // Fiz dessa forma para que o UpperCase não atrapalhe a verificação feita no valor da iniciais por meio do (code-units) ou UTF-16
        let valorA = a.toLowerCase();
        let valorB = b.toLowerCase();

        if(valorA[0] < valorB[0]){
            return -1;
        } else {
            return 1;
        }

    });
}

const arrayOrganizado = organizador(arrayFrutas);
console.log(arrayOrganizado);