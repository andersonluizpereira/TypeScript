// Exemplo sem uso de Arrow Function:
var exemplo1 = function(altura: number, largura: number) {
    return altura * largura;
}

let totalCasa = exemplo1(5, 5);
console.log("O tamanho total da casa é.....: ", totalCasa + " m2");

// Exemplo com uso do Arrow Function:
var exemplo2 = (altura: number, largura: number) => altura * largura;
let totalCasa2 = exemplo2(6, 5);
console.log("O tamanho total da casa é.....: ", totalCasa2 + " m2");