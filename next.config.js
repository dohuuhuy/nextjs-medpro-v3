const path = require('path')
const withPugins = require('next-compose-plugins')
const withImages = require('next-images')

require('dotenv').config()
const webpack = require('webpack')

const fs = require('fs')
const lessToJS = require('less-vars-to-js')
const withLess = require('next-with-less')

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
  images: {
    domains: [
      'medpro.vn',
      'cms.medpro.com.vn',
      'resource.medpro.com.vn',
      'resource-testing.medpro.com.vn',
      'firebasestorage.googleapis.com',
      'medpro-api-v2-testing.medpro.com.vn',
      'bo-api-testing.medpro.com.vn',
      'medpro-inside-testing.medpro.com.vn',
      'inside-static.medpro.com.vn',
      'api.pkh.vn'
    ]
  },

  ...lessConfig,

  exclude: path.join(process.cwd(), 'test', 'components', 'Icon', 'icons'),
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))

    config.module.rules.push({
      test: /\.svg$/,
      include: path.join(process.cwd(), 'test', 'components', 'Icon', 'icons'),
      use: [
        'svg-sprite-loader',
        {
          loader: 'svgo-loader'
        }
      ]
    })

    return config
  }
}

const plugins = [withImages, withLess]

module.exports = withPugins(plugins, nextConfig)
