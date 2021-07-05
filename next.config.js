const path = require('path')
const postcssPresetEnv = require('postcss-preset-env')
const withPugins = require('next-compose-plugins')
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const postcssPresetEnvOptions = {
  features: {
    'custom-media-queries': true,
    'custom-selectors': true,
  },
}

const cssOptions = {
  postcssLoaderOptions: {
    plugins: [postcssPresetEnv(postcssPresetEnvOptions)],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src', 'common', 'scss')],
  },
}

const less = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
}

const nextConfig = {
  inlineImageLimit: 16384,
  images: {
    domains: [''],
  },
  env: {},

  ...cssOptions,
  ...less,
  exclude: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
      use: [
        'svg-sprite-loader',
        {
          loader: 'svgo-loader',
        },
      ],
    })

    return config
  },
}

const plugins = [[withCSS], [withLess], [withImages]]

module.exports = withPugins(plugins, nextConfig)
