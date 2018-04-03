import * as SequelizeAuto from 'sequelize-auto'
import config from './config/config'


var auto = new SequelizeAuto(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
  camel: true,
  typescript: true,
  additional: {
    timestamps: false,
    // createdAt: "created_at",
    // updatedAt: 'updated_at'
  },
  tables: ['userinfo_uni']
})

auto.run((err) => {
  if (err) {
    throw err
  }
})
