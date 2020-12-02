module.exports = {
  images: {
    domains: ['images.unsplash.com']
  },
    async rewrites() {
      return [
        {
          source: '/:any*',
          destination: '/',
        },
      ];
    },
  };