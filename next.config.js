const {join} = require('path')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const nextRuntimeDotenv = require('next-runtime-dotenv')

const withConfig = nextRuntimeDotenv({
  public: [
    'API_GEO_URL',
    'API_ADRESSE'
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

  exportPathMap() {
    return {
      '/': {page: '/'},
      '/cgu': {page: '/cgu'}
    }
  }
})
