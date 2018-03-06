// Exemplo sem uso do Arrow Function
var multiplicar = function (numero1, numero2) {
    return numero1 * numero2;
};
// Exemplo com uso do Arrow Function
var multiplicarNumeroLambda = function (numero1, numero2) { return numero1 * numero2; };
//Situação diferente entre uso e sem uso de Arrow Function:
this.lerPrimeiroNumero = function (primeiroNumero) {
    console.log(primeiroNumero);
};
console.log("Multiplicando números sem Lambda.....: ", multiplicar(5, 7));
console.log("Multiplicando número com Lambda......: ", multiplicarNumeroLambda(5, 7));
this.lerPrimeiroNumero(35);
