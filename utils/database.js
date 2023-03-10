const Sequelize = require('sequelize');

const sequelize = new Sequelize('e-commerce','root','',{dialect:'mysql',host:'localhost'});

module.exports = sequelize;