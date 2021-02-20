require('dotenv').config("./env");

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const logger = require("logger")
const axios = require("axios")

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('short'))

app.get("/ping", (req, res) => {
    res.status(200).json({msg: "ping from profile"})
})

app.get("/profile", (req, res) => {
    res.status(200).json({
        profile: {
            name: "or", title: "the awesome"
        }
    })
})

app.post("/profile/notify", async (req, res) => {
    await axios.post(`${process.env.NOTIFY_SERVICE}/notify`, {name: "or the awesome", message: req.body.message})
    res.status(202).json({message: `notify ${req.body.message}`})
})

app.listen(port, () => {
    logger(`Example app listening at http://localhost:${port}`)
})
