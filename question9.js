const alunos = [
    {
        nome: 'Ana',
        nota: 8
    },
    {
        nome: 'Carlos',
        nota: 5
    },
    {
        nome: 'Wellington',
        nota: 2
    },
    {
        nome: 'Danna',
        nota: 10
    }
];

for(let i = 0; i < alunos.length; i++){
    if(alunos[i].nota >= 7){
        console.log(`aluno: ${alunos[i].nome}, Aprovado`);
    } else {
        console.log(`aluno: ${alunos[i].nome}, Reprovado`);
    }
}