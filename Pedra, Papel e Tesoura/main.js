function jogar(escolhaDojogador) {
    document.getElementById('jogador').innerHTML = escolhaDojogador
    const escolhaIA = jogadaIA()
    document.getElementById('IA').innerHTML = escolhaIA
    const resultado = determinaVencedor(escolhaDojogador, escolhaIA)
    console.log(resultado)
    document.getElementById('resultado').innerHTML = resultado 
}

function jogadaIA() {
    //array
    const escolhas = ["pedra", "papel", "tesoura"];
    //console.log(escolhas)
    const escolhaAleatoria = Math.floor(Math.random() * escolhas.length)
    //console.log(escolhas[escolhaAleatoria])
    return escolhas[escolhaAleatoria]
}

function determinaVencedor(escolhaDojogador, escolhaIA) {
    if (escolhaDojogador === escolhaIA) {
        document.getElementById('resultado').style.color = 'orange'
        return "Empate!"
    }
    else if ((escolhaDojogador === 'papel' && escolhaIA === 'pedra') ||
            (escolhaDojogador === 'tesoura' && escolhaIA === 'papel') ||
            (escolhaDojogador === 'pedra' && escolhaIA === 'tesoura')) {
                document.getElementById('resultado').style.color = 'green'
                return "Você venceu!"
            }

            else {
                document.getElementById('resultado').style.color = 'red'
                return "PC ganhou"
            }


}
