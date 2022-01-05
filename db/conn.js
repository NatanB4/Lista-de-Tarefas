const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate();
    console.log('Conectado com sucesso.')

} catch (err) {
    if (err) {
        console.log("Não foi possivel conenectar " + err)
    }
}

module.exports = sequelize;