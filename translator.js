const express = require('express');
const translateRoutes = new express.Router();
const path = require('path');
const fs = require('fs');

translateRoutes.get('/bosanski', (req, res) => {
  let bosanskiObj = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/lang/bosanski.json'))
  );

  res.send(bosanskiObj);
});

module.exports = translateRoutes;
