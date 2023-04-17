//EXERCICIO1

//Crie o model de Endereço(Endereco) com as seguintes colunas:
//Obs: criar sem cedilha!!
//- uf(NOT NULL, 2 caracteres)
//- cidade (NOT NULL)
//- cep(NOT NULL)
//- rua(NOT NULL)
//- numero(NOT NULL)

const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Endereco = connection.define("endereco", {

    uf: {
        type: DataTypes.STRING(2),
        allowNull: false,
    },

     cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },

     cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },

     rua: {
        type: DataTypes.STRING,
        allowNull: false,
    },

     numero: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Endereco;