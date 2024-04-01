function encontrarIndices(vetor, numero) {
    let indices = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            indices.push(i);
        }
    }
    return indices;
}

const vetor = [1, 3, 5, 3, 7, 3, 9];
const numero = 3;
const indices = encontrarIndices(vetor, numero);
console.log(`O número ${numero} aparece nos índices: ${indices.join(', ')}`);
