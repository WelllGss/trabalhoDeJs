let filaDeUsuarios = ["primeiro", "segundo", "terceiro"];

const adicionarDaFila = (usuario) => {
    let novaFila = [];
    novaFila.push(usuario)
    for(let i = 0; i < filaDeUsuarios.length; i++){
        novaFila.push(filaDeUsuarios[i]);
    }
    console.log("Usuario adicionado a fila com sucesso!");
    filaDeUsuarios = novaFila;
}

const removerDaFila = () => {
    if (filaDeUsuarios.length === 0){
        console.log("A fila está vazia");
        return;
    }

    filaDeUsuarios.pop();
    console.log("Usuario removido da fila com sucesso");
}

console.log("Fila: ", filaDeUsuarios);

removerDaFila();

console.log("Fila: ", filaDeUsuarios);
adicionarDaFila("quarto")
console.log("Fila: ", filaDeUsuarios);
removerDaFila();
console.log("Fila: ", filaDeUsuarios);
adicionarDaFila("quinto")
console.log("Fila: ", filaDeUsuarios);