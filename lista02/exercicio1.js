function ordenarNumeros(array) {
    if (array.length !== 2) {
        return "O array deve conter 2 números.";
    }


    let num1 = array[0];
    let num2 = array[1];


    if (num1 > num2) {

        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    return [num1, num2];
}

const array = [5, 2];
const numerosOrdenados = ordenarNumeros(array);
console.log(numerosOrdenados);
