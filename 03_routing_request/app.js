const http = require('http')
const fs = require('fs')

//here in this part we routed the request to /message by form POST method
// const server = http.createServer((req, res) => {
//   const url = req.url
//   if (url === '/') {
//     res.write(
//       `<body><form method="POST" action="/message"><input type="text" name="message"><button type="submit">Submit</button></form></body>`
//     )
//     return res.end()
//   }
//   res.write('<h1>Hello! from Node.js side....</h1>')
//   res.end()
// })

//<><><>><><><><><><
//here we will again redirect from /message to / agian
const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    // res.write(
    //   `<body><form method='POST' action='/message'><input type="text" name="message"><button type="submit">Submit</button></form></body>`
    // )
    res.write('<html>')
    res.write('<head><title>NodeJs</title></head>')
    res.write('<body>')
    res.write(
      "<form aciton='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form>"
    )
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }
  //now here redirect back again to /
  if (url === '/message ' && method === 'POST') {
    fs.writeFileSync('message.txt', 'fileCreated')
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }

  res.write('<h1>Hello! from Node.js side....</h1>')
  res.end()
})
server.listen(3000)
