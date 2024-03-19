const prompt = require('prompt-sync')();

const idades = [];

for (let i = 0; i < 10; i++) {
    const idade = Number(prompt('Digite a idade '+ [i + 1] +': '))
    idades.push(idade)
}

let maiorIdade = 0
let menorIdade = 0 

for (let x = 0; x < idades.length; x++) {
    if(idades[x] >= 18){
        maiorIdade++
    } else {
        menorIdade++
    }
    
}
console.log('A quantidade de idades digitadas maiores de 18 foi: ' + maiorIdade)
console.log('A quantidade de idades digitadas menores de 18 foi: ' + menorIdade)
