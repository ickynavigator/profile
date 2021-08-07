import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app: { use: (arg0: any) => void }) {
  app.use(
    createProxyMiddleware("/.netlify/functions", {
      target: "http://localhost:9000",
      pathRewrite: { "^/\\.netlify/functions": "" },
    })
  );
};
