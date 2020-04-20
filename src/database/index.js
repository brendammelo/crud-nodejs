const Sequelize = require('sequelize');

const Patient = require('../app/models/Patient');
const databaseConfig = require('../config/database');

const models = [Patient];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection))
      
  }
}

module.exports = new Database();
