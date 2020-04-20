
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('patients', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        } ,
        name : {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          alowNull: false,
        }
      });
    
  },

  down: (queryInterface) => {
    
      return queryInterface.dropTable('patients');
    
  }
};
