import next from 'next'
import express from 'express'

const server = express()
const port = parseInt(process.env.PORT || '3006', 10)
const NODE_ENV = process.env.NODE_ENV
const ENV = process.env.ENV
const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.get('/gioi-thieu', (req: any, res: any) => {
    return app.render(req, res, '/page/gioi-thieu', req.query)
  })

  server.get('/quy-trinh', (req: any, res: any) => {
    return app.render(req, res, '/page/quy-trinh', req.query)
  })

  server.get('/thac-mac', (req: any, res: any) => {
    return app.render(req, res, '/page/thac-mac', req.query)
  })

  server.get('/lien-he', (req: any, res: any) => {
    return app.render(req, res, '/page/lien-he', req.query)
  })

  server.get('/chinh-sach-bao-mat', (req: any, res: any) => {
    return app.render(req, res, '/page/chinh-sach-bao-mat', req.query)
  })

  server.get('/quy-trinh-su-dung', (req: any, res: any) => {
    return app.render(req, res, '/page/quy-trinh-su-dung', req.query)
  })

  server.get('/dieu-khoan-dich-vu', (req: any, res: any) => {
    return app.render(req, res, '/page/dieu-khoan-dich-vu', req.query)
  })

  server.get('/tin-tuc', (req: any, res: any) => {
    return app.render(req, res, '/tin-tuc', req.query)
  })

  server
    .all('*', (req: any, res: any) => {
      handle(req, res)
    })
    .listen(port)

  console.log(
    `> Server listening at http://localhost:${port} as ${NODE_ENV} as ${ENV}`
  )
})
