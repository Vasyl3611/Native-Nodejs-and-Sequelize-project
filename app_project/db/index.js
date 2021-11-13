const Sequelize = require('sequelize');

const sequelize = new Sequelize('node1', 'mysql', 'mysql', {
    dialect: 'mysql',
    host: 'localhost'
});

const Image = require('./Image')(sequelize);

module.exports = {
    sequelize : sequelize,
    image: Image
}