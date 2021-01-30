let produtos = new Map()

produtos.set("01", "Mouse");
produtos.set("02", "Teclado");
produtos.set("03", "Monitor");
produtos.set("04", "Gabinete");

console.log(produtos);

const obj = {
    nome: "lucas",
    sobrenome: "santos"
}
console.log(obj);
// console.log(produtos.size)
// console.log(produtos.get("01"))
// console.log(produtos.get("02"))
// console.log(produtos.get("03"))
// console.log(produtos.get("04"))
// console.log(produtos.get("05"))

var objetos = [];
objetos.push(produtos.get("01"));
objetos.push(produtos.get("02"));
objetos.push(produtos.get("03"));
objetos.push(produtos.get("04"));

console.log(objetos);
