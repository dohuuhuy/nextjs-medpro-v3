const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {
    // it's possible to use additionalData or modifyVars for antd theming
    // read more @ https://ant.design/docs/react/customize-theme
    additionalData: (content) => `${content}\n@border-radius-base: 10px;`,

    lessOptions: {
      modifyVars: {
        "primary-color": "#9900FF",
      },
    },
  },
});