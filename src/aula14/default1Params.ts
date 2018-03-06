
function meuNomeCompleto(nome: string, sobrenome = "Lemos") {
    return nome + " " + sobrenome
}

let resultado1 = meuNomeCompleto("Glaucia"); //funcionar - OK!!
console.log("Resultado 1.......: ", resultado1);

let resultado2 = meuNomeCompleto("Glaucia", undefined) // funcionar - OK!!!
console.log("Resultado 2.......: ", resultado2);

// let resultado3 = meuNomeCompleto("Jurema " , "Lemos", "Sra.");
// console.log("Resultado 3.......: ", resultado3);

let resultado4 = meuNomeCompleto("Glaucia", "Souza"); // funfar!!! - OK
console.log("Resultado 4.......: ", resultado4);