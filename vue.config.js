const pages = require('./utils/vue_multipage.js')
const px2vw = require('postcss-px-to-viewport')

module.exports = {
  publicPath: process.env.baseUrl,
  pages,
  outputDir: process.env.outputDir,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.30:8088',
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        plugins: () => [px2vw({
          viewportWidth: 750,
          viewporHeight: 1334,
          unitPrecision: 3,
          viewportUnit: 'vw',
          selectorBlackList: ['.ignore', '.hairlines'],
          minPixelValue: 1,
          mediaQuery: false
        })]
      }
    }
  }
}
