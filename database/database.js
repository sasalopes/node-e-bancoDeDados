//database.js = arquivo de conexão com o banco de dados
//vai ler as variáveis de ambiente e tentar conectar ao MYSQL

const { Sequelize } = require ("sequelize");

//criando objeto de conexão
const connection = new Sequelize(
    process.env.DB_NAME, //nome reservado para o database
    process.env.DB_USER, //Usuário reservado para a conexão
    process.env.DB_PASSWORD, // senha para acesso

    {
        host: process.env.DB_HOST, // endereço (banco local)
        dialect: 'mysql', //  o banco utilizado
    }
);

//Estabelecer a conexão usando o objeto
async function authenticate(connection){
    try {
    connection.authenticate(); 
    //Tentar estabelecer conexão 
    await connection.authenticate();
    console.log("Conexão estabelecida com sucesso!");
}   catch (err) {
    // err = objeto que guarda detalhes sobre o erro que aconteceu
    console.log("Um erro inesperado aconteceu", err);
}
}

module.exports = {connection,authenticate};