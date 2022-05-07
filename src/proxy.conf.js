const PROXY_CONFIG = [
  {
    context: ["/api/books", "/api/flats"],
    target: import('./environments/environment').URI_API,
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: { "^/api": "" },
  },
];

module.exports = PROXY_CONFIG;
