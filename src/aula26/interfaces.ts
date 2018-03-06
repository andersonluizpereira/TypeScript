
interface ITelefone {
    modeloTelefone: string;
    versaoTelefone: number;
    preco: number
    toque(): string;
  }
  
  class TelefoneFixo implements ITelefone {
    constructor(
        public modeloTelefone: string, 
        public versaoTelefone: number,
        public preco: number
      ){}
    toque() {
      return "Trim Trim";
    }
  }
  
  class TelefoneCelular implements ITelefone {
      constructor(
          public modeloTelefone: string,
          public versaoTelefone: number,
          public preco: number  
      ){}
      toque() {
          return "Ring Ring!!!";
      }
  }
  
  let telefoneFixo = new TelefoneFixo("IntelBras", 78985, 90.00);
  let telefoneCelular = new TelefoneCelular("Lumia 520", 89623, 750.00);
  
  var telefones: ITelefone[] = [];
  telefones.push(telefoneFixo);
  telefones.push(telefoneCelular);
  
  for(var i of telefones) {
      console.log(i.modeloTelefone);
      console.log(i.versaoTelefone);
      console.log(i.preco);
      console.log(i.toque());
      console.log("==================")
  }