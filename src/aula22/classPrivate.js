var Carro = /** @class */ (function () {
    function Carro(preco) {
        this.preco = preco;
    }
    Carro.prototype.descontoValorCarro = function () {
        return this.preco - (this.preco * 0.5);
    };
    Carro.prototype.informarValorDesconto = function () {
        console.log("Valor do Desconto é......: R$ ", carro.descontoValorCarro());
    };
    return Carro;
}());
var carro = new Carro(10000);
carro.informarValorDesconto();
