import "reflect-metadata"
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import { useKoaServer } from 'routing-controllers'
import config from './config/config'
import log4js from './log4js'

const logger = log4js.getLogger('app')

const app = new Koa()

// app.use(bodyParser())
//    .use(log4js.koaLogger(log4js.getLogger('http'), {level: 'auto'}))

useKoaServer(app, {
  controllers: [__dirname + '/controllers/**/*{.ts,.js}'],
  middlewares: [__dirname + '/middlewares/**/*{.ts,.js}'],
  routePrefix: 'userinfo'
})

app.listen(config.listenPort, () => {
  logger.info('[worker %s] web server is listening on port %s', process.pid, config.listenPort)
})
