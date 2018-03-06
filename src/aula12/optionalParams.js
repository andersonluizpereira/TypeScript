function somarParamsOpcionais(
    //Parâmetros:
    num1, num2, num3 // esse parâmetro é opcional
) {
    var total = num1 + num2;
    if (num3 != undefined) {
        total += num3;
    }
    return total;
}
var resultado = somarParamsOpcionais(15, 20, 35);
console.log("A Soma dos 3 números.......: " + resultado);
resultado = somarParamsOpcionais(15, 20);
console.log("A Soma de 2 n\u00FAmeros..........: " + resultado);
