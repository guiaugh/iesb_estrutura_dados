function verifica(){
    var idade = document.getElementById('idade').value
if (idade % 2 == 0) {
    alert('Sua idade é par')
} else {
    alert('Sua idade é impar')
}
}

function mostrarAno(){
    var ano = document.getElementById('ano').value
    for (let anoAtual = 2024; ano <= anoAtual; anoAtual--) {
        console.log(anoAtual)      
    }
}

function adicionarIdade(){
}

