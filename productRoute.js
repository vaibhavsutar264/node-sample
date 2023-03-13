const express = require('express')
const productControler = require('./productControler')
const router = express.Router()

router.route('/getdetails').get(productControler)

module.exports = router