// const server = http.createServer( async (req, res) => {
//   if(req.method === 'GET'){
//     const content = await fs.readFile(path.join(basePath, 'index.html'))
//     res.setHeader('Content-type', 'text/html')
//     res.end(content)
//   }else if(req.method === 'POST'){
//     const body = []

//     req.on('data', data => {
//       body.push(Buffer.from(data))
//     })

//     req.on('end', () => {
//       const title = body.toString().split('=')[1].replaceAll('+', ' ')
//       addNote(title)
//     })

//     res.end('Post success')
//   }
//   res.end()
// })
