import * as log4js from 'log4js'

log4js.configure({
  appenders: {
    app: {type: 'stdout', layout: {type: 'basic'}}
  },
  categories: {
    default​​: {
      appenders: ['app'],
      level: 'info'
    }
  },
  pm2: true
})

export default log4js
