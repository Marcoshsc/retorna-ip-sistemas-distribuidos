const express = require('express')
const ip = require('ip')

const app = express()

app.get('/', (req, res) => {
  res.send({
    value: ip.address()
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000.')
})