import log4js from '../log4js'
import {Middleware, KoaMiddlewareInterface} from "routing-controllers"
const logger = log4js.getLogger('http')

@Middleware({ type: "before" })
export class AccessMiddle implements KoaMiddlewareInterface {
  use(ctx: any, next: (err?: any) => Promise<any>): Promise<any> {
    ctx.q = Object.assign({}, ctx.request.query, ctx.request['body'])
    logger.info('%s %s %s %s %s', ctx.ip, ctx.request.method, ctx.request.url,
      ctx.status, ctx.header['user-agent'])
    return next()
  }
}
