require("express-async-errors")
require("dotenv").config()
const migrationsRun = require('./database/sqlite/migrations')
const AppError = require("./utils/AppError")
const uploadConfig = require("./configs/upload")

const cors = require("cors")
const express = require("express")
const routes = require('./routes')

migrationsRun()


const app = express()
app.use(cors())
app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode)
      .header("Access-Control-Allow-Origin", "*")
      .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
      .json({
        status: "error",
        message: error.message
      })
  }

  console.log(error)

  return res.status(500)
    .header("Access-Control-Allow-Origin", "*")
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    .json({
      status: "error",
      message: "internal server error"
    })
})

const port = process.env.PORT || '8080'
app.listen(port, () => console.log(`Rodando na porta ${port}`))