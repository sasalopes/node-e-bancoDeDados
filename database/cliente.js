//Modelo para gerar a tabela de clientes no MySQL
//Mapeamento: cada propriesade vira uma coluna da tabela

//Datatype: serve para definir qual o tipo de coluna

// Modelo para gerar a tabela de clientes no MySQL
// Mapeamento: cada propriedade vira uma coluna da tabela

// DataTypes = serve para definir qual o tipo da coluna
const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Cliente = connection.define("cliente", {
  // Configurar a coluna 'nome'
  nome: {
    // nome VARCHAR NOT NULL
    type: DataTypes.STRING(130),
    allowNull: false, // NOT NULL
  },
  email: {
    // email VARCHAR UNIQUE NOT NULL
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    // telefone VARCHAR NOT NULL
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//Associação 1:1 (one - to - one)
const Endereco = require("./Endereco");

//Cliente tem um endereço
//Endereco ganha uma chave estrangeira (nome do model + Id)
//Chave estrangeira = clienteId
Cliente.hasOne(Endereco); 
Endereco.belongsTo(Cliente); // Endereço pertence a um cliente

module.exports = Cliente;
