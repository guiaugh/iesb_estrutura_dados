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

let numbers = [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12]

/*Array.prototype.reIndex = function(myArray){
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
console.log(numbers.join(', '))*/


numbers.splice(5, 3)
console.log(numbers.join(', '))

numbers.splice(5, 0, 1, 2, 3)
console.log(numbers.join(', '))


