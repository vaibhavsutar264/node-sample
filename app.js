const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const products = require('./productRoute')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/api', products)

module.exports = app