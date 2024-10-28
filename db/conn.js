const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "augustomachado01", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();

  console.log("conectou ao banco de dados MYSQL");
} catch (error) {
  console.log(`Nao foi possivel conectar ${error}`);
}

module.exports = sequelize;
