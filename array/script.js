/*const number = [1,2,3,[4,5,6]]

console.log(number[3][0])

const averageTemp = []
averageTemp[0] = 31.9
averageTemp[1] = 30.7
averageTemp[2] = 28.5
averageTemp[3] = 27.8
averageTemp[4] = 25.6

console.log('Conteudo do array: ', averageTemp)
console.log('Média de temperatura de março: ', averageTemp[2])
console.log('Média de temperatura de janeiro: ', averageTemp[0])

let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i])
}*/

/*const fibonacci = []
fibonacci[0] = 1
fibonacci[1] = 1

for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i -1] + fibonacci[i - 2]
    
}

console.log(fibonacci.join(' '))

for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i])
    
}

let numbers = [0,1,2,3,4,5,6,7,8,9]
numbers[numbers.length] = [10]
numbers.push(11)
numbers.push(12,13)

console.log(numbers)

console.log(numbers.join(', '))


function insertFirstPosition(value){
    for (let i = numbers.length; i>=0; i--) {
        numbers[i] = numbers[i - 1]
        
    }
    numbers[0] = value
}

insertFirstPosition(-4)

console.log(numbers.join(', '))*/

/*let numbers = [0,1,2,3,4,5,6,7,8,9]

numbers.unshift(-1)
numbers.unshift(2)
numbers.unshift(-4, 5)

console.log(numbers.join(', '))*/

/*let numbers = [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12]

Array.prototype.reIndex = function(myArray){
    const newArray = []
    for (let i = 0; i < myArray.length; i++) {
       if (myArray[i] !== undefined) {
         newArray.push(myArray[i])
       }
        
    }
    return newArray
}

Array.prototype.removeFirstPosition = function(){
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
        
    }
    return this.reIndex(this)
}
numbers = numbers.removeFirstPosition()
console.log(numbers)*/

/*numbers.shift()
console.log('O tamanho do array agora e: ', numbers.length)
console.log(numbers.join(', '))

numbers.shift()
console.log('O tamanho do array agora e: ', numbers.length)
console.log(numbers.join(', '))

numbers.splice(5, 3)
console.log(numbers.join(', '))


numbers.splice(5, 3)
console.log(numbers.join(', '))

numbers.splice(5, 0, 1, 2, 3)
console.log(numbers.join(', '))*/

/*var averageTempDay1 = [36.5, 28, 30, 25, 18, 40]
var averageTempDay2 = [19, 22.5, 29, 31, 23.5, 32.5]

var averageTemp = [] 
averageTemp[0] = averageTempDay1
averageTemp[1] = averageTempDay2

function printMatrix(mymatrix){
    for (let i = 0; i < mymatrix.length; i++) {
        for (let j = 0; j < mymatrix[i].length; j++) {
            console.log(mymatrix[i][j]);
            
        }
    }
}

//printMatrix(averageTemp)

//console.table(averageTemp)


const matrix3x3x3 = []

for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = []
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = []
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z
        }
    }
}*/

//console.table(matrix3x3x3)

/*const zero = 0 
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]
let numbers = negativeNumbers.concat(zero, positiveNumbers)

console.log(numbers)*/

function isEven(x){
    console.log(x)

    return (x % 2 === 0) ? true : false
}

//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

/*numbers.every(isEven)
console.log('-------')
numbers.some(isEven)
console.log('-------')
numbers.forEach(x => console.log(x % 2 === 0))

console.log('-------')
const myMap = numbers.map(isEven)

console.log(myMap)*/

//const evenNumbers = numbers.filter(isEven)

//console.log(evenNumbers)

//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
/*console.log(numbers.reduce((previous, current) => previous + current))
console.log('--------')
for(const n of numbers){
    console.log(n % 2 === 0 ? n + ' é par ' : n + ' é impar ')
}
console.log('--------')
let iterator = numbers[Symbol.iterator]()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

for (const n of iterator) {
    console.log(n)
}*/


/*let aEntries = numbers.entries()
console.log(aEntries.next().value)
console.log(aEntries.next().value)
console.log(aEntries.next().value)
console.log(aEntries.next().value)
console.log(aEntries.next().value)

const aKeys = numbers.keys()
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())

const aValues = numbers.values()
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())

numbers.reverse()
console.log(numbers)

numbers.sort()
console.log(numbers)

function compare(a, b) {
    if(a < b){
        return -1
    } else if (a > b){
        return 1
    } else {
        return 0
    }
}

numbers.sort(compare)
console.log(numbers)

let nomes = ['Maria', 'Angelica', 'Luiza', 'Kelly', 'Rafaela', 'Marcela', 'Beatriz']

console.log(nomes.sort().join(', '))
*/

