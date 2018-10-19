module.exports = (env) => {
  // Webpack plugins
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')

  // Configuration files
  const paths = require('./paths')

  const getPostCssPlugins = () => {
    let plugins = [
      require('autoprefixer'),
      require('css-mqpacker'),
      require('postcss-discard-duplicates')
    ]
    if (env.prod) {
      plugins.push(require('cssnano'))
    }
    return plugins
  }

  return [
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: paths.dist
          }
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: env.dev
          }
        }, {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: getPostCssPlugins
          }
        }, {
          loader: 'sass-loader',
          options: {
            outputStyle: 'expanded'
          }
        }
      ]
    }
  ]
}
