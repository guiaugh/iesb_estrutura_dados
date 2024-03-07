/*let nome = 'Guilherme'
const idade = 23
const sabeJavaScript = true

console.log(nome, idade, sabeJavaScript)

nome = 'Guilherme Augusto'
console.log(nome)


var num = 1
num = 3
var price = 1.5
var myName = 'Guilherme'
var trueValue = true
var nullVar = null
var und

console.log('num: ' + num)
console.log('Meu nome: ' + myName)
console.log('trueValue: ' + trueValue)
console.log('price: ' + price)
console.log('nullVar: ' + nullVar)
console.log('und: ' + und)

var obj = {name: 'Pedro'}

var person1 = obj
var person2 = obj

console.log(person1 === person2)*/

var num = 1 
if (num === 1) {  
    console.log('numero: ' + num)
} else {
    console.log('numero: ' + num)
}

var numero = 5;

(numero === 1) ? numero-- : numero++;

console.log('numero: ' + numero)

var numeroSwitch = '4'

switch (numeroSwitch) {
    case '1':
        console.log('numeroSwitch dentro do case 1: ' + numeroSwitch)
        break
    case '2':
        console.log('numeroSwitch dentro do case 2: ' + numeroSwitch)
        break
    default:
        console.log('numeroSwitch: ' + numeroSwitch)
        document.write('numeroSwitch: ' + numeroSwitch)
}

for (var i = 0; i < 10; i++) {
    console.log(i)
}

var i = 0
console.log('While')
while (i < 10) {
    console.log(i)
    i++
}

var x = 0
console.log('Do While')

do {
    console.log(x)
    x++
} while (x < 10)

function output(text) {
    console.log(text)
}

output('Boa noite!')

function sum(num1, num2){
   return num1 + num2
}

var result = sum(3, 3)
output(result)