// const sqliteConnection = require('../database/sqlite')
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")


class AtendimentoController {

  async create(req, res) {
    const { assunto, cliente, demanda, tempo_abertura, resumo, status, canal } = req.body
    const database = await sqliteConnection()

    await database.run(`
    INSERT INTO atendimento (assunto,cliente,demanda, tempo_abertura, resumo, status, canal) VALUES (?, ?, ?, ?, ?, ?, ?)` ,
      [assunto, cliente, demanda, tempo_abertura, resumo, status, canal])


    return res.json()
  }

  async viewAll(req, res) {
    const database = await sqliteConnection()

   const atendimento = await database.all(`
    select * from atendimento` )


    return res.json(atendimento)
  }
}
module.exports = AtendimentoController


