let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));
let numero3 = parseInt(prompt("Digite o terceiro número:"));

let numeros = [numero1, numero2, numero3];

console.log("Array normal:", numeros);

numeros = [numero3, numero2, numero1];

console.log("Array invertido", numeros);