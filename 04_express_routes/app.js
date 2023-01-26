const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
//simple express routes
// app.use(adminRoutes)
// app.use(shopRoutes)

//express routes with a fileter in it
app.use('/admin', adminRoutes)
app.use(shopRoutes)

//adding page not found error
app.use((req, res, next) => {
  res.status(404).send('<h1>Page Not Found Error!!!</h1>')
})
app.listen(5000)
