//打包关于react包
//npx webpack --config webpack.react.js
let path = require('path');
let webpack = require('webpack');
module.exports = {
  mode: 'development',

  entry: {
    react: ['react', 'react-dom']
  },

  output:{
    filename:'_dll_[name].js',
    path: path.join(__dirname, './dist'),
    library: '_dll_[name]'
  },

  plugins:[
    new webpack.DllPlugin({//
      name: '_dll_[name]',
      path: path.resolve(__dirname, 'dist', 'manifest.json') //依赖关系的收集  react
    })//生成动态链接库
  ]

};