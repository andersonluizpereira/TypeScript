function calcularValorDesconto(preco, taxa) {
    if (taxa === void 0) { taxa = 0.50; }
    var desconto = preco * taxa;
    console.log("O Valor de Desconto da taxa aplicada é.....: ", desconto);
}
calcularValorDesconto(1000); //0.50 (segundo parâmetro)
calcularValorDesconto(1000, 0.30);
