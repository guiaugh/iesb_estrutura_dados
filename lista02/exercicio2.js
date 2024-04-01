function ordenarNumeros(array) {

    if (array.length !== 3) {
        return "O array deve conter 3 números.";
    }


    let num1 = array[0];
    let num2 = array[1];
    let num3 = array[2];


    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num2 > num3) {
        let temp = num2;
        num2 = num3;
        num3 = temp;
    }
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }


    return [num1, num2, num3];
}

const array = [5, 2, 8];
const numerosOrdenados = ordenarNumeros(array);
console.log(numerosOrdenados); 