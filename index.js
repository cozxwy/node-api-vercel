const express = require('express')
const app = express()
const PORT = 4000
const admin = require("firebase-admin");


app.listen(PORT , () => {
  console.log(` API listenning at ${PORT}`)
})

app.get('/', (req,res) => {
  res.send('this my api run')
})


app.get('/about', (req,res) => {
  res.send('this my about')
})


module.exports = app