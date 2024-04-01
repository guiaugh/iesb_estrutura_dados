function fibonacci(limite) {
    let fibonacciArray = [];
    let num1 = 0, num2 = 1;
    while (num1 <= limite) {
        fibonacciArray.push(num1);
        let temp = num2;
        num2 = num1 + num2;
        num1 = temp;
    }
    return fibonacciArray;
}

let numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (numero < 0 || isNaN(numero)) {
    console.log("Por favor, digite um número inteiro positivo válido.");
} else {
    let fibonacci = fibonacci(numero);

    console.log("Números de Fibonacci até", numero + ":");
    console.log(fibonacci.join(", "));
}
