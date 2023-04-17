// Importações principais e variáveis de ambiente
require("dotenv").config();
const express = require("express");

//Configuração do App
const app = express();
app.use (express.json()); // Possibilitar transitar dados usando JSON

//Configuração do Banco de Dados
const {connection, authenticate} = require("./database/database");
authenticate(connection); // efetivar a conexão
//Configurar o model da aplicação
const Cliente = require("./database/cliente");
const Endereco = require("./database/Endereco");

// Definição de rotas
app.get("/clientes", async (req,res) => {
    //SELECT * FROM clientes;
    const listaClientes = await Cliente.findAll()
    res.json(listaClientes);
});

app.post("/clientes", async (req, res) => {
    // Coletar os dados do req.body
    const { nome, email, telefone, endereco } = req.body;
  
    try {
      // Dentro de 'novo' estará o o objeto criado
      const novo = await Cliente.create(
        { nome, email, telefone, endereco }, //Permite inserir cliente e endereço num comando
        { include: [Endereco]}
        );
      res.status(201).json(novo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Um erro aconteceu." });
    }
  });

//Escuta de eventos(listen)
app.listen(5000, () => {
    //gerar as tabelas a partir do model
    //Force = apaga tudo e recria as tabelas
    connection.sync({force:true});
console.log("Servidor rodando em http://localhost:3000");
})
