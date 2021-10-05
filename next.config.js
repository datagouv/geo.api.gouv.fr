const {join} = require('path')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const nextRuntimeDotenv = require('next-runtime-dotenv')

const withConfig = nextRuntimeDotenv({
  public: [
    'API_GEO_URL'
  ]
})

module.exports = withConfig({
  webpack(config, {dev}) {
    if (!dev) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: join(__dirname, 'reports/bundles.html'),
        defaultSizes: 'gzip'
      }))
    }

    return config
  },

  // Quick and dirty
  // Ensure publicRuntimeConfig is defined
  // More infos: https://github.com/zeit/next.js/issues/7713
  publicRuntimeConfig: {
    init: true
  }
})
