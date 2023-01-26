const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/add-products', (req, res, next) => {
  res.send(
    '<form action="/products" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  )
})

app.post('/products', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  res.send('<h1>Hello form express side</h1>')
})

app.listen(5000)
