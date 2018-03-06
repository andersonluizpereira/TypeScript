function meuNome(primeiroNome) {
    var sobreNomeCompleto = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sobreNomeCompleto[_i - 1] = arguments[_i];
    }
    return primeiroNome + " " + sobreNomeCompleto.join(" ");
}
var nomeFuncionario = meuNome("Glaucia", "de Souza", "Lemos", "Silva", "Ferreira", "Moreira"); //ilimitada
console.log("Nome Completo.......: ", nomeFuncionario);
