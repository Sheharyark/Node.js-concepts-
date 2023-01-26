const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
  res.send('send response from / this route')
  next()
})

app.use('/users', (req, res, next) => {
  res.send('sendig respose from /users route')
  next()
})

app.listen(5000)
