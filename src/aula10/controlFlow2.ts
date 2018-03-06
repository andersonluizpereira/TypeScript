//Exemplo: For
function executarNumeroCresc(numero: number) {
    for(numero = 0; numero <= 10; numero++)
        console.log(numero);
}

executarNumeroCresc(10);

//Exemplo: For in (foreach)
function cidadesTuristicas(cidade1: string, cidade2: string, cidade3: string) {
    let listaCidades = {
        cidade1: "Rio de Janeiro", //cidade1, cidade2, cidade3 = key
        cidade2: "Paris",
        cidade3: "Los Angeles"
    }

    for(var key in listaCidades) {
        console.log(key + ' = ' + listaCidades[key]);
    }
}

cidadesTuristicas("Rio de Janeiro", "Paris", "Los Angeles");