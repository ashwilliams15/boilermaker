// const chalk = require('chalk');
const Sequelize = require('sequelize');
// const pkg = require('../../public/bundle');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/ingredients', {
  logging: false
});

module.exports = db;
