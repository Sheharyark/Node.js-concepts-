const http = require('http')
//this function pass req and res to createServer
// function rqListener(req, res){

// }
const server = http.createServer((req, res) => {
  // console.log(req)
  console.log(req.url, req.method, req.headers, req.test)
})

server.listen(3000)
