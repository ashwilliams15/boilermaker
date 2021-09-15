const Sequelize = require('sequelize');
// const pkg = require('../../public/bundle');

const config = {
  logging: false
}

if(process.env.LOGGING === 'true') {
  delete config.logging
}

if(process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: true
  }
}

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/ingredients', config);

module.exports = db;
