function meuNome(primeiroNome: string, ...sobreNomeCompleto: string[]) {
    return primeiroNome + " " + sobreNomeCompleto.join(" ");
}

let nomeFuncionario = meuNome("Glaucia", "de Souza", "Lemos", "Silva", "Ferreira", "Moreira"); //ilimitada
console.log("Nome Completo.......: ", nomeFuncionario);