const { createServer } = require("https");
const http = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsPort = process.env.HTTPS_PORT || 443;
const httpPort = process.env.HTTP_PORT || 80;

app.prepare().then(() => {
  createServer(
    {
      cert: process.env.ORIGIN_SERVER_CERT?.replace(/\n/g, "\n"),
      key: process.env.ORIGIN_SERVER_KEY?.replace(/\n/g, "\n"),
      ca: process.env.ORIGIN_SERVER_CA?.replace(/\n/g, "\n"),
      requestCert: true,
      rejectUnauthorized: true,
    },
    async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Error occurred handling", req.url, err);
        res.statusCode = 500;
        res.end("internal server error");
      }
    }
  ).listen(httpsPort, (err) => {
    if (err) throw err;
    console.log(`> Server started on port ${httpsPort}`);
  });
});

http
  .createServer((req, res) => {
    res.writeHead(301, {
      Location: `https://${req.headers["host"]}${req.url}`,
    });
    res.end();
  })
  .listen(httpPort, () =>
    console.log(`> HTTP->HTTPS Redirect is ready on port ${httpPort}`)
  );
