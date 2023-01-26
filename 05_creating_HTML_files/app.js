const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
//serving files statically i:e for using css or general javasctipt files
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
//simple express routes
// app.use(adminRoutes)
// app.use(shopRoutes)

//express routes with a fileter in it
app.use('/admin', adminRoutes)
app.use(shopRoutes)

//adding page not found error
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'pageNotFound.html'))
})
app.listen(5000)
