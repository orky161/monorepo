const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const logger = require("logger")

const app = express()
const port = process.env.PORT || 8081

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('short'))

app.get("/ping", (req, res) => {
    res.status(200).json({msg: "ping from notify"})
})

app.post("/notify", (req, res) => {
    const {name, message} = req.body
    logger(`Send email to ${name}, the message is ${message}`)
    res.status(202).json({msg: "accepted"})
})

app.listen(port, () => {
    logger(`Example app listening at http://localhost:${port}`)
})

