function calcular(){
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var media = (parseFloat(n1) + parseFloat(n2)) / 2

    if (media >= 5){
        if (media == 10){
            alert('Aprovado com Louvor!')
        } else {
            alert('Parabens, aprovado! Sua media foi ' + media)
        }
    } else {
        alert('Reprovado!')
    }
}