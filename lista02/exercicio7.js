function criarMatriz(linhas, colunas) {
    let matriz = [];
    let contador = 1;
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = contador++;
        }
    }
    return matriz;
}

let linhas = parseInt(prompt("Digite a quantidade de linhas:"));
let colunas = parseInt(prompt("Digite a quantidade de colunas:"));

if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
    console.log("Por favor, insira um número inteiro positivo para linhas e colunas.");
} else {
    let matriz = criarMatriz(linhas, colunas);

    console.log("Matriz criada:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}
