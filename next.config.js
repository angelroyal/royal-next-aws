module.exports = {
  images: {
    domains: [
      "apicrm.staywuw.com",
      "sandboxmexico.com",
      "api.sandboxmexico.com",
      "staywuw.com",
      "live.staticflickr.com",
      "cdn2.civitatis.com",
      "staywuw.com",
      "f.civitatis.com",
      "cdn.worldota.net",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.devtool = 'source-map';
    }
    return config;
  },
};
