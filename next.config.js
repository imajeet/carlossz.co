module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" },
    "/bio": { page: "/bio" },
    "/dev": { page: "/dev" },
    "/design": { page: "/design" },
    "/contact": { page: "/contact" },
    "/portafolio": { page: "/portafolio" }
  }),

  assetPrefix: 'http://carlossz.co',
  // assetPrefix: 'http://localhost:3000',

  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })

    return config
  }
}