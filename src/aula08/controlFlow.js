// Exemplo: If-Else:
function dirigirCarro(idade) {
    if (idade >= 18) {
        console.log("Parabéns! Você tem permissão para dirigir!!!");
    }
    else {
        console.log("Não tem permissão para dirigir!!!");
    }
}
dirigirCarro(27);
// Exemplo: ? : (ternário)
function velocidadeMaxima(velocidade) {
    var velocidadePermitida = (velocidade > 80)
        ? console.log("Ultrapassou a velocidade permitida!")
        : console.log("Está abaixo da velocidade permitida!!!");
}
velocidadeMaxima(55);
//Exemplo: Switch
function comboFood(tipoComida) {
    switch (tipoComida) {
        case 1:
            console.log("Hamburguer - R$ 7,90");
            break;
        case 2:
            console.log("Cachorro-quente - R$ 4,50");
            break;
        case 3:
            console.log("Pizza Gigante - R$ 49,90");
            break;
        default:
            console.log("Desculpe. Combo inexistente. Escolha outra opção!");
    }
}
comboFood(5);
