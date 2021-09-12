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
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate'
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

  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}

const plugins = [[withImages], [withLess]]

module.exports = withPlugins(plugins, nextConfig)
