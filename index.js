// Vai disponibilizar o uso de variáveis de ambiente
require("dotenv").config();


console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);