// next.config.js
const withImages = require('next-images')
module.exports = {
  ...withImages({
    webpack(config, options) {
      return config
    }
  }),
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/es'
      }
    ]
  }
}
