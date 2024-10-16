let palavra = "civic"

const ehPalindromo = (palavra) => {
    let palindromo = true;

    let verificadorTamanho = 1;
    let tamanho = palavra.length;

    let contador = 1;
    
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] == palavra[tamanho - contador]){
            verificadorTamanho += 1;
            contador += 1;
            // verifica se todas as letras são iguais de trás para frente e se todas forem iguais o tamanho do verificador tem q ser igual ao tamanho da palavra
            if(verificadorTamanho == palavra.length){
                palindromo = true;
            }
        }else {
            contador += 1;
            palindromo = false;
        }
    }
    return palindromo;
}

console.log(ehPalindromo(palavra));