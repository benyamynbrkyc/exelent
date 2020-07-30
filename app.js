const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const nodemailer = require('nodemailer')

const translateRoutes = require('./translator')
const { ESRCH } = require('constants')

app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/translate', translateRoutes)

const PORT = process.env.PORT || 3001

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'exelent.website.email@gmail.com',
    pass: 'exelentadmin'
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/isa-erp', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/isa-erp.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/contact.html'))
})

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`)
})
