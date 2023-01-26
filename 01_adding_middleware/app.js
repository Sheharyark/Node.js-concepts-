const http = require('http')

const express = require('express')

const app = express()

//use  allows us to add a middleware fxn
//fxn will execute for every incoming request
//next is a fxn, it has to be executed to allow the request to pass to next middleware
//next allows the request to continue to next middleware in the line
app.use((req, res, next) => {
  console.log('in the first middleware')
  res.send('<h1>hello from the Express() side</h1>')
  next()
})

app.use((req, res, next) => {
  console.log('in the Second middleware')
})

app.listen(5000)
