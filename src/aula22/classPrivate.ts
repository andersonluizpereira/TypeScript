class Carro {
    private preco: number;

    constructor(preco: number) {
        this.preco = preco;
    }

    public descontoValorCarro() {
        return this.preco - (this.preco * 0.5);        
    }

    public informarValorDesconto() {
        console.log("Valor do Desconto é......: R$ ", carro.descontoValorCarro());
    }
}

let carro = new Carro(10000);
carro.informarValorDesconto();