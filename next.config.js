const fs = require('fs')
const path = require('path')
const lessToJS = require('less-vars-to-js')
const withLess = require('next-with-less')
const withImages = require('next-images')
require('dotenv').config()
const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

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
  inlineImageLimit: 16384,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=99999, must-revalidate'
          }
        ]
      }
    ]
  },
  images: {
    // cấu hình domain cho hình ảnh
    domains: [
      'medpro.vn',
      'cms.medpro.com.vn',
      'resource.medpro.com.vn',
      'resource-testing.medpro.com.vn',
      'firebasestorage.googleapis.com',
      'medpro-api-v2-testing.medpro.com.vn',
      'bo-api-testing.medpro.com.vn',
      'medpro-inside-testing.medpro.com.vn',
      'inside-static.medpro.com.vn'
    ]
  },

  ...lessConfig,
  exclude: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),

  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    return config
  }
}

const plugins = [[withImages], [withLess], [new SpriteLoaderPlugin()]]

module.exports = withPlugins(plugins, nextConfig)
