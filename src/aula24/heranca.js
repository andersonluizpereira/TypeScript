var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, email, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.idade = idade;
    }
    Pessoa.prototype.apresentarPessoa = function () {
        console.log("Seja Bem-Vindo(a) " + this.nome);
    };
    return Pessoa;
}());
var Estudante = /** @class */ (function (_super) {
    __extends(Estudante, _super);
    function Estudante(nome, sobrenome, email, idade, periodo, tipoGraduacao) {
        var _this = _super.call(this, nome, sobrenome, email, idade) || this;
        _this.periodo = periodo;
        _this.tipoGraduacao = tipoGraduacao;
        return _this;
    }
    Estudante.prototype.apresentarEstudante = function () {
        _super.prototype.apresentarPessoa.call(this);
        console.log("Me chamo " + this.nome + " e estou cursando " + this.tipoGraduacao + ". E estou no " + this.periodo + "º período da Faculdade.");
    };
    return Estudante;
}(Pessoa));
var estudante = new Estudante("Glaucia", "Lemos", "teste@gmail.com", 31, 8, "Análise de Sistemas");
estudante.apresentarEstudante();
