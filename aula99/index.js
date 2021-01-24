const aluno = {nome: "Lucas", sobrenome: "Santos"};
const notas = {n1: 80, n2: 75, n3: 92, n4: 85};
const info  = {...aluno, ...notas};

let nota_aluno = [80, 75, 92, 85]
for(var dado of nota_aluno){
    console.log(dado);
}