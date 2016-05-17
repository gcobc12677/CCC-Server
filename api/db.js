const debug = require('debug')('CCCServer');
const fs = require('fs');
const _ = require('lodash');

const DB_STR = process.env.CCCSERVER_DB || 'mariadb://cccserver:cccserver@localhost/cccserver';
const RESET_DB = process.env.RESET_DB || false;

const Sequelize = require('sequelize');

debug('Try to Connect DB: %s', DB_STR);
const sequelize = new Sequelize(DB_STR, {
  sync: {
    force: RESET_DB,
  },
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
  timezone: '+08:00'
});

/*initial tables*/
const models = fs.readdirSync(__dirname+'/models');
models.forEach((model) => {
  debug('Loaded Model: %s', model);
  require(__dirname+'/models'+'/'+model)(sequelize);
});
sequelize.sync();

/*create associations*/
_.forEach(sequelize.models, (model) => {
  model.associate();
});

module.exports = sequelize;
