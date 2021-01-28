let  soma =  new Function("n1 = 0, n2 = 0", "return n1 + n2");

let s = soma;

console.log(s(1, 2));
console.log(s(1));
console.log(s);
