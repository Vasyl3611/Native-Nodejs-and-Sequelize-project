const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('image', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        image_name : {
            type: Sequelize.STRING,
            allowNull: false
        },
        file_name : {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_name : {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps : false,
        tableName: 'image'

    })
}