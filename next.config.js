module.exports = {
  pageExtensions: ["js", "jsx", "mdx"],
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
