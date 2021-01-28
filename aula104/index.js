/*Funções Geradora*/

function*  cores(){
    yield 'vermelho';
    yield 'verde';
    yield 'azul';
    yield 'amarelo';
    yield 'roxo';
    yield 'preto';
    yield 'branco';
}

const c = cores();

console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());

/* const c = cores();
cont = 0;
while(!c.next()['done']){
    console.log(cont);
    console.log(c.next()['value']);
    cont++;
} */

// for(let c in cores()){
//     console.log(c);
// }



