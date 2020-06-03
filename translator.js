const express = require('express')
const translateRoutes = new express.Router()
const path = require('path')
const fs = require('fs')

translateRoutes.get('/bos', (req, res) => {
  let bosObj = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/lang/bosanski.json'))
  )
  res.send(bosObj)
})

translateRoutes.get('/eng', (req, res) => {
  let engObj = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/lang/english.json'))
  )
  res.send(engObj)
})

module.exports = translateRoutes
