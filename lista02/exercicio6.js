function calcular(numero) {
    if (numero === 0) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

let numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (numero < 0 || isNaN(numero)) {
    console.log("Por favor, digite um número inteiro positivo válido.");
} else {
    for (let i = 0; i <= numero; i++) {
        console.log(`Fatorial de ${i}: ${i}! = ${calcular(i)}`);
    }
}
