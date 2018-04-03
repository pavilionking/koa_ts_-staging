import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'
import config from './config/config'
import * as log4js from 'log4js'
const logger = log4js.getLogger('db')


export let sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  timezone: '+08:00',
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  }
})

import * as dbTables from './models/db.tables'
export let tables = dbTables.getModels(sequelize)
