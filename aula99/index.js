const aluno = {nome: "Lucas", sobrenome: "Santos"};
const notas = {n1: 80, n2: 75, n3: 92, n4: 85};
const info  = {...aluno, ...notas};

for(var dado in aluno){
    console.log(dado);
}