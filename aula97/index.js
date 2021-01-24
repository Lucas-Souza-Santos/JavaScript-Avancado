const notas = [1, 2, 4, 5, 6, 7]

function soma(...num){
    soma = 0;
    for(let i = 0; i < num.length; i++){
        soma += num[i]
    }
    return soma; 
}

console.log(soma(...notas));
