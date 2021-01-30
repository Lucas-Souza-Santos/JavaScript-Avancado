let curso = "Curso de JavaScript Moderno";

console.log(curso.split(" "));
// startsWith retorna true se a string começar com o valor passado
console.log(curso.startsWith("Curso") ? "Verdadeiro":"Falso");
console.log(curso.toUpperCase());
// endsWith retorna true se a string terminar com o valor passado
console.log(curso.endsWith("o") ? "Verdadeiro":"Falso");
// includes verifica em qualquer lugar da string se ela tem o valor passado
console.log(curso.includes("de") ? "Verdadeiro": "Falso");
// repeat ela repet a string n vezes
console.log(curso.repeat(2))

