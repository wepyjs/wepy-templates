const path = require('path');

var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.vue',
  eslint: true,
  cliLogs: true,
  static: [
    './src/images'
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  compilers: {
    less: {
      compress: true
    },
    {{#if ts}}
    typescript: {}
    {{else}}
    babel: {
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator'
      ]
    }
    {{/if}}
  },
  plugins: [
  ],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {

  module.exports.cliLogs = false;

  // 压缩less
  module.exports.compilers['less'] = {
    compress: true
  }

}
