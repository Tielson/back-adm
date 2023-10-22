const {Router} = require("express")

const usersRouters = require("./users.routes")
const atendimentoRouters = require("./atendimento.router")
const sessionsRouters = require("./sessions.routes")


const routes = Router()

routes.use("/users", usersRouters)
routes.use("/atendimento", atendimentoRouters)
routes.use("/sessions", sessionsRouters)


module.exports = routes