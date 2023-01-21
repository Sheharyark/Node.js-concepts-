const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req)
  res.write('<h1>Hello! from Node.js side....</h1>')
  res.end()
})

server.listen(4000, () => {
  console.log('server is listening on port 4000')
})
