function somarParamsOpcionais(
    //Parâmetros:
    num1: number,
    num2: number,
    num3?: number // esse parâmetro é opcional
): number {
    let total = num1 + num2;
    
    if(num3 != undefined) {
        total += num3;
    }

    return total;
}

let resultado = somarParamsOpcionais(15, 20, 35);
console.log("A Soma dos 3 números.......: " + resultado);

resultado = somarParamsOpcionais(15,20);
console.log(`A Soma de 2 números..........: ${resultado}`);