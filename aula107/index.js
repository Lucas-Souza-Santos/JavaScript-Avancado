// iterator 

let num = [10, 2]
// let num = {
//     nome: "lucas",
//     sobrenome: "santos",
//     idade: 28,
//     altura: 1.65
// }
let it = num[Symbol.iterator]()
// console.log(it.next()['value']);
// console.log(it.next()['value']);
// console.log(it.next()['value']);

for (const valor in it.next()) {
    console.log(valor['value']);
}