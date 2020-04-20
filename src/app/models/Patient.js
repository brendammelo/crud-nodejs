const {Model} = require('sequelize');
const Sequelize = require('sequelize');

class Patient extends Model {
    static init(sequelize){
        super.init({
            
            name: Sequelize.STRING,
            email: Sequelize.STRING,
        }, 
        {
            sequelize,
        });
    }
}

module.exports = Patient;