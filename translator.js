const express = require('express')
const translateRoutes = new express.Router()
const path = require('path')
const fs = require('fs')

translateRoutes.get('/bos/index', (req, res) => {
  let bosObj = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/lang/index/bosanski.json'))
  )
  res.send(bosObj)
})

translateRoutes.get('/eng/index', (req, res) => {
  let engObj = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/lang/index/english.json'))
  )
  res.send(engObj)
})

translateRoutes.get('/bos/contact', (req, res) => {
  let bosObj = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/lang/contact/bosanski.json'))
  )
  res.send(bosObj)
})

translateRoutes.get('/eng/contact', (req, res) => {
  let engObj = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/lang/contact/english.json'))
  )
  res.send(engObj)
})

translateRoutes.get('/bos/isa-erp', (req, res) => {
  let bosObj = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/lang/isa-erp/bosanski.json'))
  )
  res.send(bosObj)
})

translateRoutes.get('/eng/isa-erp', (req, res) => {
  let engObj = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/lang/isa-erp/english.json'))
  )
  res.send(engObj)
})

module.exports = translateRoutes
