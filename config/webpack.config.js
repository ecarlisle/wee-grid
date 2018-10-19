// Configuration files
const entries = require('./entries')
const output = require('./output')
const plugins = require('./plugins')
const rules = require('./rules')
const paths = require('./paths')

// Configuration
module.exports = (env) => {
  console.log(env)
  return {
    module: { rules: rules(env) },
    context: paths.base,
    entry: entries,
    mode: 'none',
    watch: env.dev,
    output: output,
    plugins: plugins
  }
}
