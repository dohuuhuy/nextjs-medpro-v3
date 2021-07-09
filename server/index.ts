import next from 'next'
const express = require('express')
const server = express()
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server
    .all('*', (req: any, res: any) => {
      handle(req, res)
    })
    .listen(port)

  server.get('/huy/bi', (req: any, res: any) => {
    return app.render(req, res, '/a', req.query)
  })

  // tslint:disable-next-line:no-console
  console.log(`process.env.NODE_ENV`, process.env.NODE_ENV)
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`,
  )
})
