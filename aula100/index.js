function soma(...num)
{
    let res = 0;
    for(let item of num){
        res += item;
    }
    return res;
}

console.log(soma(3, 4, 6, 7, 8, 1, 4, 2));
