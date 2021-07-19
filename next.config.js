const fs = require('fs')
const path = require('path')
const lessToJS = require('less-vars-to-js')
const withLess = require('next-with-less')
const withImages = require('next-images')

require('dotenv').config()

const webpack = require('webpack')

const withPlugins = require('next-compose-plugins')

// cấu hình varible antd
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, 'assets/styles/variable.less'),
    'utf8'
  )
)

const lessConfig = {
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: themeVariables
    }
  }
}

const nextConfig = {
  images: {
    // cấu hình domain cho hình ảnh
    domains: ['mdbootstrap.com', 'medpro.vn']
  },

  ...lessConfig,

  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    return config
  }
}

const plugins = [[withImages], [withLess]]

module.exports = withPlugins(plugins, nextConfig)
