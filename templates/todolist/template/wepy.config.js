{{#if ts}}
const TypeScriptCompiler = require('@wepy/compiler-typescript');
{{/if}}
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
    /*sass: {
      outputStyle: 'compressed'
    },*/
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'babel-plugin-transform-class-properties',
        'transform-export-extensions',
        'syntax-export-extensions'
      ]
    }
  },
  plugins: [
    {{#ts}}
    TypeScriptCompiler()
    {{/ts}}
  ],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {

  module.exports.cliLogs = false;

  delete module.exports.compilers.babel.sourcesMap;
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩less
  module.exports.compilers['less'] = {
    compress: true
  }

}
