// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   const url = req.url
//   const method = req.method
//   if (url === '/') {
//     res.write('<html>')
//     res.write('<head><title>Enter Message</title><head>')
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
//     )
//     res.write('</html>')
//     return res.end()
//   }
//   //now here redirect back again to /
//   if (url === '/message ' && method === 'POST') {
//     //here we get an array and store the request chunk in the array
//     const body = []
//     req.on('data', (chunk) => {
//       console.log(chunk)
//       body.push(chunk)
//     })
//     return req.on('end', () => {
//       //here we get that array and see the data
//       const parsedBody = Buffer.concat(body).toString()
//       console.log(parsedBody)
//       const message = parsedBody.split('=')[1]
//       fs.writeFileSync('message.txt', message)
//       res.statusCode = 302
//       res.setHeader('Location', '/')
//       return res.end()
//     })
//   }
//   res.setHeader('Content-Type', 'text/html')
//   res.write('<html>')
//   res.write('<head><title>My First Page</title><head>')
//   res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
//   res.write('</html>')
//   res.end()
// })
// server.listen(3000, () => {
//   console.log('app is working on port 3000')
// })

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title><head>')
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    )
    res.write('</html>')
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    const body = []
    //on() allows us to listen to cetrain event.
    //fxn that should be executed for every incoming data piece
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log('parserBody : ' + parsedBody)
      const message = parsedBody.split('=')[1]
      fs.writeFileSync('message.txt', message)
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title><head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end()
})

server.listen(5000)
// incoming data is sent as stream of data
// the request is read in node as chunks
// to organise these chunks we use buffers
// buffers are constructs which holds multiple chunks
