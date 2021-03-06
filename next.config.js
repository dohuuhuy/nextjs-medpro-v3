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
    path.resolve(__dirname, './src/common/assets/styles/variable.less'),
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
  swcMinify: false,
  // inlineImageLimit: 16384,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
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
      'api-v2.medpro.com.vn'
    ],
    formats: ['image/avif', 'image/webp'],
    disableStaticImages: true
  },

  ...lessConfig,

  exclude: path.join(process.cwd(), 'test', 'components', 'Icon', 'icons'),

  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))

    config.module.rules.push({
      test: /\.(svg|png|jpg)$/,
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
