const prompt = require('prompt-sync')();

function Aluno(nome, idade, peso){
    this.nome = nome
    this.idade = idade
    this.peso = peso
}

var aluno = new Aluno('Guilherme', 23, 80.0)

console.log(aluno)

aluno.nome = prompt('Digite o seu nome: ')
aluno.idade = Number(prompt('Digite sua idade: '))
aluno.peso = parseFloat(prompt('Digite seu peso: '))

console.log(aluno)