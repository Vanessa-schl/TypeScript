//Crie uma aplicação de gerenciamento de viagens, com classes "Passageiro", "Voo" e "Aeroporto".
//Funcionalidades:

//• A aplicação deve apresentar um menu no console com as opções, cada opção tem um número
//• O menu de opções deve ter as seguintes opções:

//- Listar voos, apresentando as informações: código do voo, nome do aeroporto de origem, nome do aeroporto de
//destino e o nome de todos os passageiros no voo
//• Quando o usuário digitar o número de uma das opções, a aplicação deve solicitar as informações através do
//console, sendo que todas as informações são de preenchimento obrigatório
//Atenção: Você deve usar classes, arrays e maps para armazenar as informações obtidas do usuário.

//- Adicionar passageiro em um voo, com as informações de Código do voo, Nome do passageiro

//- Listar voos, apresentando as informações: código do voo, nome do aeroporto de origem, nome do aeroporto de
//destino e o nome de todos os passageiros no voo

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require("fs");



class Passageiro {
  constructor(nome) {
    this.nome = nome;
  }

  getElementos() {
    return `${nome}`;
  }
}
exports.Passageiro = Passageiro;



class Voo {
  constructor(codigoVoo, aeroportoOrigem, aeroportoDestino) {
    this.codigoVoo = codigoVoo;
    this.aeroportoOrigem = aeroportoOrigem;
    this.aeroportoDestino = aeroportoDestino;
    this.passageiros = [];
  }
  getDados() {
    return `${this.codigoVoo} ${this.aeroportoOrigem} ${this.aeroportoDestino}`;
  }
}
exports.Voo = Voo;



//- Adicionar aeroporto, com as informações de Nome, Código e Endereço
class Aeroporto {
  constructor(nome, codigo, endereco) {
    this.nome = nome;
    this.codigo = codigo;
    this.endereco = endereco;
  }

  getConteudo() {
    return `${this.nome} ${this.codigo} ${this.endereco}`;
  }
}
exports.Aeroporto = Aeroporto;



const aeroportos = [];
const voos = [];
const pessoa = [];

const adicionarAeroporto = () => {
  readLine.question("Informe o nome do aeoroporto: ", (nome) => {
    readLine.question("Informe o código do aeroporto: ", (codigo) => {
      readLine.question("Informe o endereço do aeroporto: ", (endereco) => {
        const aeroporto1 = new Aeroporto(nome, codigo, endereco);
        aeroportos.push(aeroporto1);
        fs.writeFile(nome, aeroporto1.getConteudo(), (erro) => {
          console.log("erro", `${erro}`);
        });

        console.log("Aeroporto adicionado com sucesso!\n");
        exibirMenu();
      });
    });
  });
};

const adicionarVoo = () => {
  //codigoVoo, aeroportoOrigem, aeroportoDestino
  readLine.question("informe o codigo do voo: ", (codigoVoo) => {
    readLine.question("informe o aeroporto de origem: ", (aeroportoOrigem) => {
      readLine.question("informe o aeroporto destino: ", (aeroportoDestino) => {
        const aeoroporto2 = new Voo( // aqui estamos fazendo o promise
          codigoVoo,
          aeroportoOrigem,
          aeroportoDestino
        );
        voos.push(aeoroporto2);
        fs.writeFile(codigoVoo, aeoroporto2.getDados(), (erro) => {
          console.log("erro", `${erro}`);
        }); // aqui acaba 
        console.log("Voo adicionado com sucesso");
        exibirMenu();
      });
    });
  });
};

const adicionarPassageiro = () => {
  readLine.question("informe o nome do passageiro: ", (nome) => {
    const aeoroporto3 = new pessoa(nome);
    pessoa.push(aeoroporto3);
    fs.writeFile(nome, aeoroporto3.getElementos(), (erro) => {
      console.log("erro", `${erro}`);
    });
    console.log("Passageiro adicionado com sucesso");
    exibirMenu();
  });
};

const listarVoos = () => {
  console.log(voos);
  console.log(aeroportos);
  console.log(pessoa);
  exibirMenu();
};

function exibirMenu() {
  readLine.question(
    "Escolha uma das opções abaixo:\n1. Adicionar aeroporto\n2. Adicionar voo\n3. Adicionar passageiro a um voo\n4.listar voos\n0. Sair\n",
    (option) => {
      let opcaoEscolhida = option;
      if (opcaoEscolhida == 1) {
        adicionarAeroporto();
      } else if (opcaoEscolhida == 2) {
        adicionarVoo();
      } else if (opcaoEscolhida == 3) {
        adicionarPassageiro();
      } else if (opcaoEscolhida == 4) {
        listarVoos();
      } else if (opcaoEscolhida == 0) {
        readLine.close();
      } else {
        console.log("Opção inválida");
        exibirMenu();
      }
    }
  );
}
exibirMenu();

//     //- Listar voos, apresentando as informações: código do voo, nome do aeroporto de origem, nome do aeroporto de
// //destino e o nome de todos os passageiros no voo
//     const voo = new Voo(codigoVoo, aeroportoOrigem, aeroportoDestino, empresaAerea, Passageiro);
// }
