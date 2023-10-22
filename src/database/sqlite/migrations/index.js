const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUser')
const createAtendimento = require('./atendimento')

async function migrationsRun() {
  const schemas = [
    createUsers,
    createAtendimento
  ].join(';');

  sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationsRun