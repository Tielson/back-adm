const { Router } = require('express')

const atendimentoRouters = Router()
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const AtendimentoController = require('../controllers/AtendimentoController')
const atendimentoController = new AtendimentoController()



atendimentoRouters.post("/",ensureAuthenticated, atendimentoController.create)
atendimentoRouters.get("/",ensureAuthenticated, atendimentoController.viewAll)


module.exports = atendimentoRouters