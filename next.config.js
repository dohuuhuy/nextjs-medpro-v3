const withLess = require("next-with-less");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  images: {
    domains: ["mdbootstrap.com"],
  },
};

module.exports = withPlugins(
  [
    [withImages],
    [
      withLess,
      {
        lessLoaderOptions: {
          additionalData: (content) => `${content}\n@border-radius-base: 10px;`,

          lessOptions: {
            modifyVars: {
              "primary-color": "#9900FF",
            },
          },
        },
      },
    ],
  ],
  nextConfig
);
