const defaultConfig = './config-default'
const overrideConfig = './config-override'
const testConfig = './config-test'

const fs = require('fs')
let config = null

config = require(defaultConfig).default
if (process.env.NODE_ENV === 'production') {
  try {
    if (fs.statSync(__dirname + `${overrideConfig.substring(1)}`).isFile()) {
      console.log(`Load ${overrideConfig}...`)
      config = Object.assign(config, require(overrideConfig).default)
    }
  } catch (err) {
    console.log(`Cannot load ${overrideConfig}.`)
  }
}


export default config
