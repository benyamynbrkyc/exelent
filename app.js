const express = require('express')
const path = require('path')
const app = express()

const translateRoutes = require('./translator')

app.use(express.static(path.join(__dirname, '/public')))

app.use('/translate', translateRoutes)

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/isa-erp', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/isa-erp.html'))
})

app.listen(PORT, () => {
  console.log('Server listening on port,', PORT)
})
