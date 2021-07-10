import next from 'next'
const express = require('express')
const server = express()
const port = parseInt(process.env.PORT || '3006', 10)
const NODE_ENV = process.env.NODE_ENV
const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server
    .all('*', (req: any, res: any) => {
      handle(req, res)
    })
    .listen(port)

  server.get('/gioi-thieu', (req: any, res: any) => {
    return app.render(req, res, '/gioi-thieu', req.query)
  })

  server.get('/quy-trinh', (req: any, res: any) => {
    return app.render(req, res, '/quy-trinh', req.query)
  })

  server.get('/thac-mac', (req: any, res: any) => {
    return app.render(req, res, '/thac-mac', req.query)
  })

  server.get('/lien-he', (req: any, res: any) => {
    return app.render(req, res, '/lien-he', req.query)
  })

  console.log(`> Server listening at http://localhost:${port} as ${NODE_ENV}`)
})
