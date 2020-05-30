const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(__dirname + "/public"))

const PORT = process.env.PORT || 3001

app.get("/", (req, res) => {
  res.sendFile(__dirname, "/public/index.html")
})

app.listen(PORT, () => {
  console.log("Server listening on port,", PORT)
})
