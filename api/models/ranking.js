const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Ranking = sequelize.define('Ranking', {
    name: Sequelize.STRING,
    point: Sequelize.INTEGER
  }, {
    classMethods: {
        associate: () => {

        }
      }
  });
};
