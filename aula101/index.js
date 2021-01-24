const soma = function(...num){
    let res = 0;
    for(let item of num){
        res += item;
    }
    return res;
}

console.log(soma(1, 2, 3, 4, 5));