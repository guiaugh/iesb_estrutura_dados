class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        //adiciona um novo item a pilha
       this.items.push(element)
    }

    pop(){
        //remover o item do topo da pilha
        return this.items.pop()
    }

    peek(){
        //devolve o elemento que esta no topo da pilha
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        //informar se a pilha esta vazia ou nao
        return this.items.length === 0
    }

    clear(){
        //limpa a pilha
        this.items = []
    }

    size(){
        //informar o tamanho da pilha 
        return this.items.length
    }

    print(){
        //imprime a pilha no console
        console.log(this.items.toString())
    }
}

const stack = new Stack()

console.log(stack.isEmpty())

stack.push(5)
stack.push(8)
stack.push(10)
stack.push(27)

console.log(stack.peek())

stack.push(15)

console.log(stack.size())

console.log(stack.isEmpty())

stack.push(80)

stack.print()

stack.pop()
stack.pop()

stack.print()

console.log('    ')
console.log('Decimal para binario')
console.log('    ')

function decimalToBinary(decNumber){
    var restStack = new Stack(),
    rest,
    binaryString = '';
    
   while(decNumber > 0){
    rest = Math.floor(decNumber % 2)
    restStack.push(rest)

    decNumber = Math.floor(decNumber / 2)
   }

   while(!restStack.isEmpty()){
    binaryString += restStack.pop().toString()
   }

   return binaryString

}

console.log('55:', decimalToBinary(55))
console.log('22:', decimalToBinary(22))
console.log('13:', decimalToBinary(13))
console.log('17:', decimalToBinary(17))
console.log('10:', decimalToBinary(10))