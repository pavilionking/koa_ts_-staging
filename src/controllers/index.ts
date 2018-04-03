import "reflect-metadata"
import { tables, sequelize } from './../db'
import { Controller, Get, Ctx, Param } from 'routing-controllers'
import log4js from '../log4js'
import * as koa from 'koa'

const logger = log4js.getLogger('IndexController')

@Controller()
export class IndexController {

  @Get('/:unionid')
  async index (@Ctx() ctx: koa.Context, @Param('unionid') unionid: string) {
    // let updateOptions: any = {nickname: 'hahaha'}
    // await tables.userinfo_uni.update(updateOptions, {
    //   where: {
    //     wx_unionid: unionid
    //   }
    // })
    let userinfo = await tables.userinfo_uni.findById(1877005)
    return userinfo.toJSON()
  }

}
