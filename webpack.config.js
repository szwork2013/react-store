const fs = require('fs');
const path = require('path');
const pxtorem = require('postcss-pxtorem');

module.exports = function (webpackConfig, env) {
  webpackConfig.babel.babelrc = false;
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css'  // if true, use less
  }]);
  // Enable hmr for development.
  if (env === 'development') {
    webpackConfig.babel.plugins.push(['dva-hmr', {
      entries: [
        './src/index.js',
      ]
    }]);
  }
  webpackConfig.devtool = 'source-map';
  // Parse all less files as css module.

    webpackConfig.postcss.push(pxtorem({
        rootValue: 100,
        propWhiteList: [],
        selectorBlackList: [/^html$/, /^\.ant-/, /^\.github-/, /^\.gh-/],
    }));
  webpackConfig.module.loaders.forEach(function (loader, index) {

      if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.test = /\.dont\.exist\.file/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.test = /\.less$/;
    }
  });

    return webpackConfig;
};
