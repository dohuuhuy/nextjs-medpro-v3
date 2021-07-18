const fs = require('fs')
const path = require('path')
const lessToJS = require('less-vars-to-js')
const withLess = require('next-with-less')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

// cấu hình varible antd
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, 'assets/styles/variable.less'),
    'utf8',
  ),
)

const lessConfig = {
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: themeVariables,
    },
  },
}

const nextConfig = {
  images: {
    // cấu hình domain cho hình ảnh
    domains: ['mdbootstrap.com'],
  },

  ...lessConfig,
}

const plugins = [[withImages], [withLess]]

module.exports = withPlugins(plugins, nextConfig)
