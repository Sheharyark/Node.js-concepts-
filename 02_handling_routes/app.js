const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
  console.log('this always runsss')
  next()
})
app.use('/add-products', (req, res, next) => {
  res.send('<h1>Hello form add-product side</h1>')
  next()
})

app.use('/', (req, res, next) => {
  res.send('<h1>Hello form express side</h1>')
})

app.listen(5000)
