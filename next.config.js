const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  webpack5: true,

  // Fixes fs issue
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },

  //! This added clean urls and eliminates the .html extension aswell as linking
  //! CSS and JS with the trailingSlash
  assetPrefix: isProd ? "https://fantastic-starburst-b0f940.netlify.app/" : "",
  trailingSlash: true,
};